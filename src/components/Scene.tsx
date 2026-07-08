import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Film, Compass, Info, Cpu, Eye, ToggleLeft, ToggleRight, Radio, RefreshCw } from 'lucide-react';

export default function Scene() {
  // Telemetry state
  const [isRecording, setIsRecording] = useState(true);
  const [aperture, setAperture] = useState('f/2.8');
  const [showGrid, setShowGrid] = useState(true);
  const [flightMode, setFlightMode] = useState<'HOVER' | 'SCANNING' | 'RTL' | 'LANDED'>('HOVER');
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [iso, setIso] = useState(100);
  const [shutter, setShutter] = useState('1/250s');

  // Mouse tracking inside HUD container
  const hudRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 150, y: 150, pctX: 50, pctY: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hudRef.current) return;
      const rect = hudRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
      const pctX = Math.round((x / rect.width) * 100);
      const pctY = Math.round((y / rect.height) * 100);
      setMousePos({ x, y, pctX, pctY });
    };

    const container = hudRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Telemetry Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // Change telemetry details based on flight mode
  const getFlightStatusMessage = () => {
    switch (flightMode) {
      case 'SCANNING': return 'HUD: SCANNING AREA [MAHNAR BAZAR]';
      case 'RTL': return 'ALTITUDE LOCK - RETURNING TO BASE';
      case 'LANDED': return 'SYSTEMS ARMED - STANDBY';
      default: return 'LOCK: STABLE ALTITUDE HOVER';
    }
  };

  const getRotorAnimationDuration = () => {
    switch (flightMode) {
      case 'SCANNING': return 0.2;
      case 'RTL': return 0.3;
      case 'LANDED': return 0;
      default: return 0.4; // HOVER
    }
  };

  return (
    <div 
      ref={hudRef}
      className="w-full h-full relative bg-brand-dark overflow-hidden select-none flex flex-col font-mono text-brand-olive rounded-xl border border-brand-border"
      id="retro-hud-container"
    >
      {/* 1. Subtle grid backdrop */}
      <div className="absolute inset-0 opacity-15 pointer-events-none film-grain"></div>
      {/* Light orange light leak background to tie back to old-film style */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* 2. Top Bar: Monospace Status HUD */}
      <div className="p-3 border-b border-brand-border/60 bg-brand-dark/95 z-20 flex justify-between items-center text-[10px] select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="font-pixel text-sm text-brand-accent tracking-widest">AV FILMS FLIGHT_LOG_V1.1</span>
          </div>
          <span className="text-brand-border font-light">|</span>
          <span className="text-[10px] tracking-wider text-brand-olive/85">CAM: ACTIVE</span>
        </div>
        
        {/* Exposure Indicators */}
        <div className="flex items-center gap-4 text-[9px] text-brand-olive/90">
          <span className="font-pixel text-xs">ISO {iso}</span>
          <span className="font-pixel text-xs">{shutter}</span>
          <span className="font-pixel text-xs">{aperture}</span>
          <span className="bg-brand-olive/10 px-1.5 py-0.5 rounded text-brand-accent border border-brand-olive/20 font-bold font-pixel text-[11px]">
            GPS: 25.65°N 85.45°E
          </span>
        </div>
      </div>

      {/* 3. Main Center Area: Camera Viewfinder with 2D Drone Line-Art */}
      <div className="flex-1 w-full relative overflow-hidden flex items-center justify-center p-4">
        
        {/* Viewfinder corner lines */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-olive/40"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-olive/40"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-olive/40"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-olive/40"></div>

        {/* Dynamic Center Crosshair element that follows client mouse */}
        <div 
          className="absolute w-12 h-12 border border-dashed border-brand-accent/50 rounded-full flex items-center justify-center pointer-events-none z-10 transition-all duration-300 ease-out"
          style={{ 
            left: `${mousePos.x - 24}px`, 
            top: `${mousePos.y - 24}px`
          }}
        >
          <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
          <span className="absolute -top-4 font-pixel text-[10px] text-brand-accent tracking-wider">
            LOCK [{mousePos.pctX}%, {mousePos.pctY}%]
          </span>
        </div>

        {/* Interactive HUD Overlay Grid lines (if toggled) */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Horizontal Grid lines */}
            <div className="absolute top-1/3 left-0 w-full h-[1px] border-t border-dashed border-brand-olive/15"></div>
            <div className="absolute top-2/3 left-0 w-full h-[1px] border-t border-dashed border-brand-olive/15"></div>
            {/* Vertical Grid lines */}
            <div className="absolute left-1/3 top-0 h-full w-[1px] border-l border-dashed border-brand-olive/15"></div>
            <div className="absolute left-2/3 top-0 h-full w-[1px] border-l border-dashed border-brand-olive/15"></div>
          </div>
        )}

        {/* Retro scanline CRT lines over camera viewfinder */}
        <div className="absolute inset-0 pointer-events-none crt-lines opacity-40 z-10"></div>

        {/* Centered Graphic Area: 2D Tech Drone vector model */}
        <div className="relative w-72 h-64 flex flex-col items-center justify-center z-10">
          
          {/* Drone Arms Line-art SVG */}
          <svg className="w-64 h-32 text-brand-olive/60" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Flight Path Lines from central hub */}
            <line x1="100" y1="50" x2="30" y2="30" strokeDasharray="3,3" />
            <line x1="100" y1="50" x2="170" y2="30" strokeDasharray="3,3" />
            <line x1="100" y1="50" x2="45" y2="75" strokeDasharray="2,2" />
            <line x1="100" y1="50" x2="155" y2="75" strokeDasharray="2,2" />

            {/* Left and Right Main arms */}
            <path d="M 100,50 L 40,30 L 40,24" />
            <path d="M 100,50 L 160,30 L 160,24" />
            
            {/* Rear Propeller Arms */}
            <path d="M 100,50 L 55,75 M 55,75 L 55,70" />
            <path d="M 100,50 L 145,75 M 145,75 L 145,70" />

            {/* Drone Core fuselage circle */}
            <circle cx="100" cy="50" r="18" fill="#EDE6D6" stroke="currentColor" strokeWidth="2" />
            {/* Cybernetic lens eye core */}
            <circle cx="100" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="50" r="4" fill="#C97A3D" className="animate-pulse" />
            
            {/* Drone flight computer grid text */}
            <path d="M 85,32 L 115,32" strokeWidth="1" />
            <path d="M 100,32 L 100,28" strokeWidth="1" />
          </svg>

          {/* Interactive animated rotors placed over drone arm coordinates */}
          {/* Rotor 1 (Left Front) */}
          <div className="absolute top-[52px] left-[32px] flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: getRotorAnimationDuration(), 
                ease: "linear" 
              }}
              style={{ display: flightMode === 'LANDED' ? 'none' : 'block' }}
              className="w-12 h-1 bg-brand-olive/80 rounded-full"
            />
            <div className="w-2 h-2 bg-brand-dark border border-brand-olive rounded-full -mt-0.5" />
          </div>

          {/* Rotor 2 (Right Front) */}
          <div className="absolute top-[52px] right-[32px] flex flex-col items-center">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ 
                repeat: Infinity, 
                duration: getRotorAnimationDuration(), 
                ease: "linear" 
              }}
              style={{ display: flightMode === 'LANDED' ? 'none' : 'block' }}
              className="w-12 h-1 bg-brand-olive/80 rounded-full"
            />
            <div className="w-2 h-2 bg-brand-dark border border-brand-olive rounded-full -mt-0.5" />
          </div>

          {/* Rotor 3 (Left Rear) */}
          <div className="absolute top-[132px] left-[52px] flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: getRotorAnimationDuration() * 1.2, 
                ease: "linear" 
              }}
              style={{ display: flightMode === 'LANDED' ? 'none' : 'block' }}
              className="w-10 h-1 bg-brand-olive/60 rounded-full"
            />
            <div className="w-1.5 h-1.5 bg-brand-dark border border-brand-olive rounded-full -mt-0.5" />
          </div>

          {/* Rotor 4 (Right Rear) */}
          <div className="absolute top-[132px] right-[52px] flex flex-col items-center">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ 
                repeat: Infinity, 
                duration: getRotorAnimationDuration() * 1.2, 
                ease: "linear" 
              }}
              style={{ display: flightMode === 'LANDED' ? 'none' : 'block' }}
              className="w-10 h-1 bg-brand-olive/60 rounded-full"
            />
            <div className="w-1.5 h-1.5 bg-brand-dark border border-brand-olive rounded-full -mt-0.5" />
          </div>

          {/* Core Telemetry status text banner displayed directly under drone */}
          <div className="mt-2 text-center">
            <span className="text-[10px] font-mono tracking-widest text-brand-dark bg-brand-olive px-2 py-0.5 rounded font-bold uppercase block shadow-sm">
              {flightMode} ACTIVE
            </span>
            <span className="text-[9px] block text-brand-olive/85 mt-1 tracking-widest">
              BATTERY 94% &bull; PROP RPM 8,200
            </span>
          </div>

          {/* Altitude flight HUD tape slider */}
          <div className="absolute right-0 top-1/4 h-24 w-12 border-l border-brand-border/60 flex flex-col justify-between p-1 text-[8px]">
            <div className="text-right">
              <span className="text-brand-accent font-pixel text-[10px]">120m</span>
              <div className="w-3 h-[1px] bg-brand-olive/60 ml-auto mt-0.5"></div>
            </div>
            <div className="text-right flex items-center justify-end gap-1">
              <span className="text-brand-olive/70 font-mono">100m</span>
              <div className="w-4 h-[1px] bg-brand-accent ml-auto"></div>
            </div>
            <div className="text-right">
              <span className="text-brand-olive/40 font-mono">80m</span>
              <div className="w-3 h-[1px] bg-brand-olive/60 ml-auto mt-0.5"></div>
            </div>
          </div>

          {/* Heading angle HUD tape slider */}
          <div className="absolute left-0 top-1/4 h-24 w-12 border-r border-brand-border/60 flex flex-col justify-between p-1 text-[8px] text-left">
            <div>
              <span className="text-brand-accent font-pixel text-[10px]">HDG 145°</span>
              <div className="w-3 h-[1px] bg-brand-olive/60 mt-0.5"></div>
            </div>
            <div>
              <span className="text-brand-olive/70 font-mono">WND 4m/s</span>
              <div className="w-4 h-[1px] bg-brand-olive"></div>
            </div>
            <div>
              <span className="text-brand-olive/40 font-mono">SPD 0km/h</span>
              <div className="w-3 h-[1px] bg-brand-olive/60 mt-0.5"></div>
            </div>
          </div>

        </div>

        {/* Viewfinder live rec signal & flight status ticker */}
        <div className="absolute top-6 left-6 flex flex-col gap-1 z-20">
          <div className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full bg-brand-accent ${isRecording ? 'animate-pulse' : 'opacity-40'}`}></span>
            <span className="font-pixel text-[13px] text-brand-dark bg-brand-accent/25 px-1 rounded uppercase tracking-widest">
              {isRecording ? 'REC' : 'STBY'}
            </span>
          </div>
          <span className="font-mono text-[9px] text-brand-olive/80">
            {formatTimer(secondsElapsed)}
          </span>
        </div>

        <div className="absolute bottom-6 left-6 z-20 text-left text-[9px]">
          <span className="text-brand-olive/75 uppercase tracking-wider block">
            {getFlightStatusMessage()}
          </span>
          <span className="text-[9px] font-pixel text-brand-accent tracking-widest block mt-0.5">
            SIGNAL STRENGTH: 99.8% (MAHNAR COMM LINK)
          </span>
        </div>

      </div>

      {/* 4. Bottom Controls panel: Interactive buttons to configure vintage and tech assets */}
      <div className="p-3.5 bg-brand-card border-t border-brand-border z-20 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
        
        {/* Toggle Grid line asset */}
        <button 
          onClick={() => setShowGrid(!showGrid)}
          className={`px-2 py-2 rounded border flex items-center justify-center gap-1.5 font-bold transition-all duration-250 cursor-pointer ${
            showGrid 
              ? 'bg-brand-olive text-brand-paper border-brand-olive shadow-sm' 
              : 'bg-brand-dark/40 border-brand-border text-brand-olive hover:border-brand-accent/40'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider font-pixel text-[11px]">{showGrid ? 'Grid: ON' : 'Grid: OFF'}</span>
        </button>

        {/* Toggle Recording Signal */}
        <button 
          onClick={() => setIsRecording(!isRecording)}
          className={`px-2 py-2 rounded border flex items-center justify-center gap-1.5 font-bold transition-all duration-250 cursor-pointer ${
            isRecording 
              ? 'bg-brand-accent text-brand-paper border-brand-accent shadow-sm' 
              : 'bg-brand-dark/40 border-brand-border text-brand-olive hover:border-brand-accent/40'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider font-pixel text-[11px]">{isRecording ? 'REC LOCK' : 'STOPPED'}</span>
        </button>

        {/* Adjust Aperture simulation */}
        <button 
          onClick={() => {
            const list = ['f/1.8', 'f/2.8', 'f/4.0', 'f/8.0'];
            const idx = (list.indexOf(aperture) + 1) % list.length;
            setAperture(list[idx]);
            if (list[idx] === 'f/1.8') {
              setIso(800);
              setShutter('1/1000s');
            } else if (list[idx] === 'f/2.8') {
              setIso(100);
              setShutter('1/250s');
            } else if (list[idx] === 'f/4.0') {
              setIso(200);
              setShutter('1/125s');
            } else {
              setIso(400);
              setShutter('1/60s');
            }
          }}
          className="px-2 py-2 rounded border border-brand-border bg-brand-dark/40 text-brand-olive hover:border-brand-accent/40 transition-all duration-250 flex items-center justify-center gap-1.5 font-bold cursor-pointer"
        >
          <Camera className="w-3.5 h-3.5 text-brand-accent" />
          <span className="uppercase tracking-wider font-pixel text-[11px]">APT: {aperture}</span>
        </button>

        {/* Toggle Flight state machine simulation */}
        <button 
          onClick={() => {
            const list: Array<'HOVER' | 'SCANNING' | 'RTL' | 'LANDED'> = ['HOVER', 'SCANNING', 'RTL', 'LANDED'];
            const idx = (list.indexOf(flightMode) + 1) % list.length;
            setFlightMode(list[idx]);
          }}
          className="px-2 py-2 rounded border border-brand-border bg-brand-dark/40 text-brand-olive hover:border-brand-accent/40 transition-all duration-250 flex items-center justify-center gap-1.5 font-bold cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 text-brand-accent animate-spin-slow" />
          <span className="uppercase tracking-wider font-pixel text-[11px]">MODE: {flightMode}</span>
        </button>

      </div>
    </div>
  );
}
