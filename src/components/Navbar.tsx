import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scrolling to track active section and change scroll style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'services', 'portfolio', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 py-3 px-4 sm:px-8 ${
        isScrolled ? 'md:py-2' : 'md:py-4'
      }`}
      id="main-header"
    >
      <div
        className={`max-w-7xl mx-auto rounded-lg transition-all duration-300 px-6 py-3 flex justify-between items-center ${
          isScrolled
            ? 'bg-brand-paper/95 border border-brand-border/80 shadow-[0_4px_20px_rgba(33,31,29,0.08)] backdrop-blur-md'
            : 'bg-transparent border border-transparent'
        }`}
        id="navbar-inner-wrap"
      >
        {/* Brand Logo / Wordmark - "AV FILMS" only (no Md Haseeb name) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start focus:outline-none cursor-pointer group text-left"
          id="brand-logo"
        >
          <span className="font-sans text-xl sm:text-2xl font-black text-brand-dark tracking-[0.15em] transition-colors duration-300 group-hover:text-brand-accent uppercase">
            AV FILMS
          </span>
          <span className="text-[9px] font-pixel text-brand-olive tracking-[0.2em] uppercase -mt-0.5 block font-bold">
            REC ● HD_4K
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-xs tracking-widest uppercase font-bold">
          {[
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'portfolio', label: 'Work' },
            { id: 'faq', label: 'FAQ' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 cursor-pointer transition-colors duration-300 focus:outline-none ${
                activeSection === item.id ? 'text-brand-accent' : 'text-brand-dark/80 hover:text-brand-dark'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action CTA with Amber color */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded border border-brand-olive hover:bg-brand-olive hover:text-brand-paper text-brand-dark font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
            id="nav-quote-btn"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brand-dark hover:text-brand-accent p-1 focus:outline-none"
          id="mobile-nav-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Cream background Slide-Down) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-card border border-brand-border mx-4 mt-2 rounded-lg p-5 shadow-xl absolute left-0 right-0 z-50"
            id="mobile-nav-drawer"
          >
            <div className="flex flex-col gap-3 text-center font-sans text-xs tracking-wider uppercase font-bold">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Work' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2.5 rounded border focus:outline-none transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'border-brand-accent/20 text-brand-accent bg-brand-accent/10'
                      : 'border-transparent text-brand-dark/80 hover:text-brand-dark'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="h-[1px] bg-brand-border/40 my-1"></div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded bg-brand-accent hover:bg-brand-accent-hover text-brand-paper font-sans font-bold tracking-wider text-xs uppercase cursor-pointer transition-all duration-250"
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
