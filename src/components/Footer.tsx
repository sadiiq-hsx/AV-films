import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-brand-paper py-16 px-4 sm:px-8 relative overflow-hidden" id="main-footer">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ede6d6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 relative z-10">
        
        {/* Footer Top: Logo & Wordmark */}
        <div className="flex flex-col items-center text-center">
          <button 
            onClick={scrollToTop}
            className="flex flex-col items-center group focus:outline-none cursor-pointer"
            id="footer-brand-logo"
          >
            <span className="font-sans text-xl sm:text-3xl font-black text-brand-paper tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-brand-accent">
              AV FILMS
            </span>
            <span className="text-[10px] font-pixel text-brand-olive tracking-[0.2em] uppercase -mt-0.5 font-bold">
              EST. 2020 // MAHNAR BAZAR // BIHAR
            </span>
          </button>
          
          <p className="max-w-md text-brand-paper/70 font-sans text-xs leading-relaxed mt-4">
            Honest, high-fidelity wedding videography and aerial quadcopter footage capturing the genuine warmth of family gatherings.
          </p>
        </div>

        {/* Footer Middle: Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-[10px] tracking-widest uppercase font-bold text-brand-paper/85">
          <button onClick={() => handleNavClick('home')} className="hover:text-brand-accent transition-colors duration-200 cursor-pointer">Home</button>
          <button onClick={() => handleNavClick('services')} className="hover:text-brand-accent transition-colors duration-200 cursor-pointer">Services</button>
          <button onClick={() => handleNavClick('portfolio')} className="hover:text-brand-accent transition-colors duration-200 cursor-pointer">Work</button>
          <button onClick={() => handleNavClick('faq')} className="hover:text-brand-accent transition-colors duration-200 cursor-pointer">FAQ</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-brand-accent transition-colors duration-200 cursor-pointer">Contact</button>
        </nav>

        {/* Footer Bottom: copyright & Back to top */}
        <div className="w-full pt-8 border-t border-brand-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-paper/50 font-sans text-[10px] tracking-wide uppercase font-semibold">
          <div>
            &copy; {new Date().getFullYear()} AV Films &bull; Md Haseeb. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 font-pixel text-xs text-brand-olive tracking-widest">
            <span>CALIBRATION STATUS: LOCKED // 25.65°N 85.45°E</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-brand-border/40 hover:border-brand-accent/40 hover:text-brand-paper text-brand-paper/80 transition-all duration-300 group cursor-pointer"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-accent group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
