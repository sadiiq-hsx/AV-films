import React, { useState, useEffect, useRef } from 'react';
import { Camera, Film, ArrowRight, Star, Clock, Compass, MapPin, Cpu, RotateCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import Toast from './components/Toast';
import Scene from './components/Scene';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Cursor follow reticle state for the Hero section
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroMouse, setHeroMouse] = useState({ x: -100, y: -100, opacity: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Check if mouse is within hero bounds
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setHeroMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          opacity: 1
        });
      } else {
        setHeroMouse(prev => ({ ...prev, opacity: 0 }));
      }
    };

    const handleMouseLeave = () => {
      setHeroMouse(prev => ({ ...prev, opacity: 0 }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleOpenQuote = () => {
    setIsQuoteOpen(true);
  };

  // 4 Services with pixel-icon / olive-accent styling
  const servicesList = [
    {
      title: "Aerial Coverage",
      description: "Quiet, stable quadcopter flight systems capturing sweeping high-altitude perspectives of traditional wedding processions and local Bihar venues.",
      metaCode: "DRONE_SYS // ACTIVE",
      pixelSymbol: (
        <svg className="w-8 h-8 text-brand-olive" viewBox="0 0 16 16" fill="currentColor">
          <rect x="7" y="7" width="2" height="2" />
          <rect x="4" y="4" width="2" height="1" />
          <rect x="10" y="4" width="2" height="1" />
          <rect x="4" y="11" width="2" height="1" />
          <rect x="10" y="11" width="2" height="1" />
          <rect x="1" y="5" width="4" height="1" className="text-brand-accent" />
          <rect x="11" y="5" width="4" height="1" className="text-brand-accent" />
          <rect x="6" y="2" width="4" height="1" />
          <rect x="6" y="13" width="4" height="1" />
        </svg>
      )
    },
    {
      title: "Cinematic Edits",
      description: "Deliberate color washes, natural exposure grading, and seamless pacing to capture the authentic, raw atmosphere of traditional wedding ceremonies.",
      metaCode: "KODAK_100D // SHUTTER",
      pixelSymbol: (
        <svg className="w-8 h-8 text-brand-olive" viewBox="0 0 16 16" fill="currentColor">
          <rect x="3" y="2" width="10" height="12" />
          <rect x="5" y="4" width="6" height="8" className="text-brand-paper" />
          <rect x="2" y="4" width="1" height="2" className="text-brand-accent" />
          <rect x="2" y="8" width="1" height="2" className="text-brand-accent" />
          <rect x="13" y="5" width="1" height="1" />
          <rect x="13" y="9" width="1" height="1" />
          <rect x="6" y="6" width="3" height="4" className="text-brand-accent" />
        </svg>
      )
    },
    {
      title: "On-Location Setup",
      description: "Direct village venue travel with custom, eye-safe physical lighting boards to preserve low-light ritual colors cleanly without blinding flashes.",
      metaCode: "PORTABLE // CALIBRATED",
      pixelSymbol: (
        <svg className="w-8 h-8 text-brand-olive" viewBox="0 0 16 16" fill="currentColor">
          <rect x="6" y="1" width="4" height="4" />
          <rect x="5" y="5" width="6" height="1" />
          <rect x="7" y="6" width="2" height="6" />
          <rect x="4" y="12" width="8" height="2" className="text-brand-accent" />
          <rect x="8" y="3" width="1" height="1" className="text-brand-accent" />
        </svg>
      )
    },
    {
      title: "Fast Delivery",
      description: "Clear timelines and dual physical drive backups ensuring your fully processed high-resolution catalogs are secured and delivered on-schedule.",
      metaCode: "DRIVE_WRITE // STABLE",
      pixelSymbol: (
        <svg className="w-8 h-8 text-brand-olive" viewBox="0 0 16 16" fill="currentColor">
          <rect x="2" y="2" width="12" height="12" />
          <rect x="4" y="4" width="8" height="2" className="text-brand-accent" />
          <rect x="4" y="8" width="2" height="2" />
          <rect x="8" y="8" width="4" height="2" className="text-brand-accent/60" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-brand-paper min-h-screen text-brand-dark font-sans selection:bg-brand-accent/20 selection:text-brand-dark overflow-x-hidden relative" id="app-root">
      
      {/* Film grain and light leak layouts */}
      <div className="fixed inset-0 opacity-[0.25] pointer-events-none film-grain z-30"></div>
      <div className="fixed inset-0 opacity-[0.12] pointer-events-none light-leak-1 z-30"></div>
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none light-leak-2 z-30"></div>

      {/* 1. Global Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* 2. Hero Section with 2D HUD and custom grid overlays */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen w-full relative flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 overflow-hidden"
      >
        {/* Fine geometric layout borders */}
        <div className="absolute top-0 left-0 w-full h-[8px] geometric-border opacity-20"></div>

        {/* Cursor follow HUD reticle inside Hero container */}
        <div 
          className="absolute w-24 h-24 border border-dashed border-brand-accent/30 rounded-full flex items-center justify-center pointer-events-none z-20 transition-opacity duration-300 hidden md:flex"
          style={{ 
            left: `${heroMouse.x - 48}px`, 
            top: `${heroMouse.y - 48}px`,
            opacity: heroMouse.opacity
          }}
        >
          {/* Inner targeting crosshairs */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-brand-accent/30"></div>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-brand-accent/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-accent/50"></div>
          <span className="absolute -bottom-4 font-pixel text-[9px] text-brand-accent tracking-widest uppercase">
            TRK_SYS_ACT
          </span>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 flex-1 my-auto">
          
          {/* Hero Left Column: Confidence and Honesty */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center text-left" id="hero-text-wrap">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-olive/10 border border-brand-olive/35 rounded text-brand-olive text-xs font-bold tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span className="font-pixel text-[11px] tracking-widest font-bold">CALIBRATION // STABLE_SYS</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark tracking-tight leading-[1.15] font-black uppercase">
                Traditional traditions, <br />
                <span className="italic font-normal text-brand-accent text-3xl sm:text-5xl lg:text-6xl lowercase block mt-1">
                  preserved with high fidelity.
                </span>
              </h1>
            </div>

            <p className="text-brand-dark/85 text-sm sm:text-base font-sans leading-relaxed max-w-xl font-semibold">
              We shoot high-quality, honest wedding films and aerial drone views in Mahnar Bazar and across Bihar. No simulated poses, no generic golden-luxury clutter &mdash; just the real atmosphere of your family events captured with absolute precision.
            </p>

            {/* Confident Actions & CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <button
                  onClick={handleOpenQuote}
                  className="w-full sm:w-auto px-6 py-4 bg-brand-accent hover:bg-brand-accent-hover text-brand-paper font-sans font-black text-xs tracking-wider uppercase rounded shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  id="hero-cta-quote"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-4 h-4 text-brand-paper" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-4 bg-brand-card/40 hover:bg-brand-card text-brand-dark border border-brand-border/80 hover:border-brand-accent/50 rounded font-sans font-black text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  id="hero-cta-portfolio"
                >
                  <span>Browse Work Archive</span>
                </button>
              </div>
            </div>

            {/* Humble stats strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-brand-dark/70 font-mono text-[10px] tracking-widest uppercase font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></span>
                <span>150+ traditional weddings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-olive rounded-full"></span>
                <span>Active quadcopter fleet</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: 2D Flight HUD Display (replaces 3D rig completely) */}
          <div className="lg:col-span-6 w-full relative h-[420px] sm:h-[460px] flex items-center justify-center rounded-lg bg-brand-card border border-brand-border/80 overflow-hidden shadow-xl" id="hero-illustration-wrap">
            <div className="absolute inset-0 geometric-border opacity-[0.08] pointer-events-none"></div>
            {/* Viewfinder simulation corners */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-olive/30"></div>
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-olive/30"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-olive/30"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-olive/30"></div>
            
            {/* 2D HUD Viewfinder Container */}
            <div className="w-full h-full relative z-10 p-3">
              <Scene />
            </div>
          </div>

        </div>

        {/* Confident scroll indicator */}
        <div className="flex flex-col items-center gap-1.5 text-brand-dark/50 pointer-events-none mt-12 select-none">
          <span className="font-pixel text-[11px] font-bold tracking-[0.25em] uppercase">SCROLL_DOWN // SYS_CHECK</span>
          <div className="w-[1px] h-8 bg-brand-olive/60"></div>
        </div>
      </section>

      {/* Marquee horizontal ticker strip below Hero section */}
      <div className="w-full bg-brand-dark text-brand-paper py-3.5 overflow-hidden border-y border-brand-border/50 relative z-10 select-none">
        <div className="flex whitespace-nowrap gap-12 font-pixel text-sm uppercase tracking-[0.2em] font-bold animate-marquee">
          <span>MAHNAR BAZAR // BIHAR &bull; SHUBH VIVAH &bull; REC STATUS: ACTIVE &bull; f/2.8 PRO GLASS &bull; STABLE FLIGHT COMP LOCK &bull; LAT 25.6°N LON 85.4°E</span>
          <span>MAHNAR BAZAR // BIHAR &bull; SHUBH VIVAH &bull; REC STATUS: ACTIVE &bull; f/2.8 PRO GLASS &bull; STABLE FLIGHT COMP LOCK &bull; LAT 25.6°N LON 85.4°E</span>
          <span>MAHNAR BAZAR // BIHAR &bull; SHUBH VIVAH &bull; REC STATUS: ACTIVE &bull; f/2.8 PRO GLASS &bull; STABLE FLIGHT COMP LOCK &bull; LAT 25.6°N LON 85.4°E</span>
        </div>
      </div>

      {/* 3. Services Section: 4-item grid using pixel-icon + olive-accent styling */}
      <section className="py-24 px-4 sm:px-8 bg-brand-card border-b border-brand-border relative overflow-hidden text-brand-dark" id="services">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#211f1d_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-pixel text-sm text-brand-olive tracking-[0.3em] uppercase block mb-2 font-bold">
              SYS_OPERATIONS // CORE_SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-dark font-extrabold tracking-tight">
              Services & Specialties
            </h2>
            <div className="w-16 h-[2px] bg-brand-olive/40 mx-auto mt-4 mb-4"></div>
            <p className="text-brand-dark/75 text-xs sm:text-sm font-sans leading-relaxed">
              We provide highly focused photography and aerial quadcopter video recording setups. No hidden costs, completely honest outcomes.
            </p>
          </div>

          {/* 4-Item Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid-wrapper">
            {servicesList.map((srv, idx) => (
              <div 
                key={idx}
                className="p-6 bg-brand-paper border border-brand-border/70 rounded hover:border-brand-accent/50 transition-colors duration-250 flex flex-col sm:flex-row gap-5 items-start text-left group"
              >
                {/* Pixelized Vector Icon Container */}
                <div className="w-14 h-14 bg-brand-card rounded border border-brand-border/50 flex items-center justify-center flex-shrink-0 group-hover:scale-102 transition-transform duration-250 relative">
                  {srv.pixelSymbol}
                  {/* Decorative pixelated corners */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-brand-olive/20"></div>
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-brand-olive/20"></div>
                </div>

                <div className="space-y-2 flex-1">
                  <span className="font-pixel text-[10px] text-brand-accent tracking-widest uppercase font-bold block">
                    {srv.metaCode}
                  </span>
                  <h3 className="font-serif text-lg text-brand-dark font-black tracking-tight uppercase">
                    {srv.title}
                  </h3>
                  <p className="text-brand-dark/80 text-xs sm:text-sm font-sans leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Portfolio Section */}
      <Portfolio />

      {/* 5. About Section */}
      <About />

      {/* FAQ Section */}
      <Faq />

      {/* 6. Contact Section */}
      <Contact showToast={showToast} />

      {/* 7. Footer */}
      <Footer />

      {/* 8. Floating Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        showToast={showToast}
      />

      {/* 9. Toast System notifications */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

    </div>
  );
}
