import React from 'react';
import { Camera, Film, MapPin, Cpu, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-8 bg-brand-paper relative overflow-hidden text-brand-dark">
      {/* Subtle line background layout */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#5c6b4b_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-pixel text-sm text-brand-olive tracking-[0.3em] uppercase block mb-2 font-bold">
            ARCHIVE // CORE_REELS_V1.1
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-dark font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-brand-olive/40 mx-auto mt-4 mb-4"></div>
          <p className="text-brand-dark/75 text-xs font-sans leading-relaxed">
            Deliberate visual records showing where high-fidelity wedding and corporate media drop in. Move cursor over project frames to trigger the live HUD feed glitch check.
          </p>
        </div>

        {/* Exactly 2 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="featured-projects-grid">
          
          {/* Card 1: Hajipur Wedding */}
          <div 
            className="group rounded-lg overflow-hidden bg-brand-card border border-brand-border/80 flex flex-col h-full shadow-[0_4px_24px_rgba(33,31,29,0.04)] hover:border-brand-accent/60 transition-all duration-300 glitch-hover-effect"
            id="portfolio-card-wedding"
          >
            {/* Pixelated Altar / Mandap Wedding Altar SVG Placeholder */}
            <div className="aspect-[4/3] w-full relative bg-brand-dark text-brand-paper flex flex-col items-center justify-center p-6 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none crt-lines opacity-20"></div>
              
              {/* Retro Film Sprocket border simulation on card edges */}
              <div className="absolute top-2 left-0 right-0 h-2 flex justify-between px-2 opacity-30 select-none pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-2.5 h-1 bg-brand-paper rounded-sm"></div>
                ))}
              </div>

              {/* Pixel Art Traditional Altar Mandap fire SVG */}
              <svg className="w-40 h-40 text-brand-accent group-hover:scale-102 transition-transform duration-300" viewBox="0 0 16 16" fill="currentColor">
                {/* Pillars on sides */}
                <rect x="2" y="3" width="2" height="11" className="text-brand-olive/60" />
                <rect x="12" y="3" width="2" height="11" className="text-brand-olive/60" />
                {/* Roof dome arch */}
                <rect x="3" y="2" width="10" height="2" className="text-brand-olive/80" />
                <rect x="5" y="1" width="6" height="1" className="text-brand-olive" />
                {/* Flower garlands hanging */}
                <rect x="4" y="4" width="1" height="4" className="text-brand-accent" />
                <rect x="11" y="4" width="1" height="4" className="text-brand-accent" />
                <rect x="6" y="4" width="1" height="2" className="text-brand-accent/80" />
                <rect x="9" y="4" width="1" height="2" className="text-brand-accent/80" />
                {/* Fire Pit Center */}
                <rect x="6" y="11" width="4" height="2" className="text-brand-dark" />
                {/* Burning Holy Flame pixels */}
                <rect x="7" y="9" width="2" height="2" className="text-brand-accent" />
                <rect x="8" y="8" width="1" height="1" className="text-brand-accent" />
                <rect x="7" y="10" width="1" height="1" className="text-brand-accent/80" />
                {/* Base floor bricks */}
                <rect x="1" y="14" width="14" height="1" className="text-brand-olive/40" />
              </svg>

              {/* Exposure tags overlays as small vintage-camera design accents */}
              <div className="absolute top-6 left-4 font-mono text-[8px] text-brand-olive/75 uppercase tracking-widest">
                CAM_A // SHUTTER 1/250s
              </div>
              <div className="absolute bottom-4 left-4 font-pixel text-[11px] text-brand-accent tracking-wider">
                F/1.8 ISO 160
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-brand-olive/85 bg-brand-dark/90 px-1.5 py-0.5 rounded border border-brand-border/40">
                LOCKED_FEED
              </div>

              {/* Pixelated Scanline overlay on top */}
              <div className="absolute top-2 right-4 font-pixel text-[10px] text-brand-accent animate-pulse">REC ●</div>
            </div>

            {/* Card Content with Cream base details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-brand-olive/10 border border-brand-olive/30 rounded text-brand-olive text-[9px] font-mono tracking-wider uppercase font-bold">
                    WEDDING REEL
                  </span>
                  <span className="text-brand-dark/50 text-[10px] font-mono uppercase font-bold tracking-wider">
                    4K ULTRA HD
                  </span>
                </div>

                <h3 className="font-serif text-xl text-brand-dark font-black tracking-tight mb-2">
                  Wedding Ceremony &mdash; Hajipur
                </h3>

                <p className="text-brand-dark/80 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  Candid traditional documentation at a family ancestral residence, captured entirely using fast prime mirrorless systems to lock the soft glow of mandap lanterns.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-brand-border text-brand-dark/60 font-sans text-[10px] font-bold tracking-widest uppercase">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  Hajipur, Bihar
                </span>
                <span className="font-pixel text-[11px] text-brand-accent tracking-widest group-hover:translate-x-1 transition-transform duration-250 flex items-center gap-1">
                  CHECK FEED <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Patna Corporate Event */}
          <div 
            className="group rounded-lg overflow-hidden bg-brand-card border border-brand-border/80 flex flex-col h-full shadow-[0_4px_24px_rgba(33,31,29,0.04)] hover:border-brand-accent/60 transition-all duration-300 glitch-hover-effect"
            id="portfolio-card-corporate"
          >
            {/* Pixelated Stage Corporate Event SVG Placeholder */}
            <div className="aspect-[4/3] w-full relative bg-brand-dark text-brand-paper flex flex-col items-center justify-center p-6 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none crt-lines opacity-20"></div>

              {/* Retro Film Sprocket border simulation on card edges */}
              <div className="absolute top-2 left-0 right-0 h-2 flex justify-between px-2 opacity-30 select-none pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-2.5 h-1 bg-brand-paper rounded-sm"></div>
                ))}
              </div>

              {/* Pixel Art Stage/Speaker podium */}
              <svg className="w-40 h-40 text-brand-olive group-hover:scale-102 transition-transform duration-300" viewBox="0 0 16 16" fill="currentColor">
                {/* Large Background Projector Screen */}
                <rect x="3" y="3" width="10" height="6" className="text-brand-olive/40" />
                {/* Screen Outline */}
                <rect x="2" y="2" width="12" height="1" className="text-brand-olive/80" />
                <rect x="2" y="3" width="1" height="6" className="text-brand-olive/80" />
                <rect x="13" y="3" width="1" height="6" className="text-brand-olive/80" />
                <rect x="2" y="9" width="12" height="1" className="text-brand-olive/80" />
                
                {/* Graphic bar on screen */}
                <rect x="4" y="5" width="4" height="2" className="text-brand-accent/60" />
                <rect x="9" y="6" width="3" height="1" className="text-brand-accent" />
                
                {/* Speaker Podium on stage */}
                <rect x="10" y="10" width="2" height="4" className="text-brand-olive/80" />
                <rect x="9" y="10" width="4" height="1" className="text-brand-dark" />
                {/* Microphone pin pixel */}
                <rect x="10" y="9" width="1" height="1" className="text-brand-accent" />
                
                {/* Stage floor line */}
                <rect x="1" y="14" width="14" height="1" className="text-brand-olive/40" />
              </svg>

              {/* Exposure tags overlays as small vintage-camera design accents */}
              <div className="absolute top-6 left-4 font-mono text-[8px] text-brand-olive/75 uppercase tracking-widest">
                CAM_B // LENS 85MM PRIME
              </div>
              <div className="absolute bottom-4 left-4 font-pixel text-[11px] text-brand-accent tracking-wider">
                F/2.8 ISO 320
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-brand-olive/85 bg-brand-dark/90 px-1.5 py-0.5 rounded border border-brand-border/40">
                ACTIVE_SYNC
              </div>

              {/* Pixelated Scanline overlay on top */}
              <div className="absolute top-2 right-4 font-pixel text-[10px] text-brand-olive/90 animate-pulse">LOCK ●</div>
            </div>

            {/* Card Content with Cream base details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-brand-olive/10 border border-brand-olive/30 rounded text-brand-olive text-[9px] font-mono tracking-wider uppercase font-bold">
                    EVENT ARCHIVE
                  </span>
                  <span className="text-brand-dark/50 text-[10px] font-mono uppercase font-bold tracking-wider">
                    STABILIZED ACTIVE TRACK
                  </span>
                </div>

                <h3 className="font-serif text-xl text-brand-dark font-black tracking-tight mb-2">
                  Corporate Event &mdash; Patna
                </h3>

                <p className="text-brand-dark/80 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  Stable tracking footage and clean ambient lighting coverage for regional forums, ensuring flawless audio delivery and clear speaker presentations.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-brand-border text-brand-dark/60 font-sans text-[10px] font-bold tracking-widest uppercase">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  Patna, Bihar
                </span>
                <span className="font-pixel text-[11px] text-brand-accent tracking-widest group-hover:translate-x-1 transition-transform duration-250 flex items-center gap-1">
                  CHECK FEED <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Technical standards overview footer strip */}
        <div className="mt-16 bg-brand-card rounded-lg p-6 sm:p-8 border border-brand-border/85 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] geometric-border opacity-20"></div>
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-brand-accent text-[11px] font-pixel tracking-[0.25em] uppercase block font-bold">
              SYS_CHECK // HARDWARE_STABLE
            </span>
            <h3 className="font-serif text-xl text-brand-dark font-black tracking-tight">
              Pristine Calibration Standards
            </h3>
            <p className="text-brand-dark/75 font-sans text-xs sm:text-sm leading-relaxed">
              We operate exclusively with our private inventory of professional digital video capture systems, and active noise-isolated field microphone sets. Your moments are recorded securely without compressed latency.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 bg-brand-dark/5 border border-brand-border/60 rounded">
            <Shield className="w-5 h-5 text-brand-accent" />
            <span className="font-pixel text-xs text-brand-olive uppercase tracking-[0.2em] font-bold">CALIBRATION // STABLE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
