import React from 'react';
import { Camera, Film, Sparkles, Heart, Cpu, Shield, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Traditional Celebrations Covered', value: '150+', icon: Heart },
    { label: 'Years in Mahnar Bazar, Bihar', value: '6+', icon: Camera },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-brand-paper relative overflow-hidden text-brand-dark">
      {/* Film sprocket holes at the top of the section */}
      <div className="absolute top-0 left-0 w-full h-[12px] bg-brand-dark flex justify-between px-1 opacity-25 overflow-hidden select-none pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-4 h-2 bg-brand-paper rounded-sm"></div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10 pt-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-pixel text-sm text-brand-olive tracking-[0.3em] uppercase block mb-2 font-bold">
            FOUNDER_LOG_V1.1 // THE CREATIVE EYE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-dark font-extrabold tracking-tight">
            About The Founder
          </h2>
          <div className="w-16 h-[2px] bg-brand-olive/40 mx-auto mt-4"></div>
        </div>

        {/* Founder Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Column 1: Portrait Container (Pixelated image + CRT Scanline effect) */}
          <div className="lg:col-span-5 flex justify-center" id="founder-portrait-wrap">
            <div className="w-full max-w-sm rounded-lg overflow-hidden bg-brand-dark text-brand-paper p-5 border border-brand-border/60 shadow-xl relative scanline-anim">
              
              {/* Technical Monospace metadata */}
              <div className="flex justify-between items-center text-[8px] font-mono text-brand-olive mb-3">
                <span className="font-pixel text-[10px]">VIDEO_FEED_STABLE</span>
                <span className="font-pixel text-[10px]">ISO 400 &bull; f/2.8</span>
              </div>

              {/* Handcrafted Stylized Retro Pixel Art Portrait (using custom nested SVGs/CSS pixels for that deliberate look) */}
              <div className="aspect-square w-full bg-brand-olive/20 rounded relative overflow-hidden border border-brand-olive/35 flex items-center justify-center p-4">
                
                {/* CRT overlay line grids */}
                <div className="absolute inset-0 pointer-events-none crt-lines opacity-25"></div>
                
                {/* Custom Pixel-Art Character/Gamer Vector */}
                <svg className="w-44 h-44 text-brand-olive" viewBox="0 0 16 16" fill="currentColor">
                  {/* Face base background */}
                  <rect x="4" y="3" width="8" height="10" className="text-brand-paper/90" />
                  {/* Hair */}
                  <rect x="4" y="2" width="8" height="2" className="text-brand-dark" />
                  <rect x="3" y="3" width="2" height="4" className="text-brand-dark" />
                  <rect x="11" y="3" width="2" height="4" className="text-brand-dark" />
                  {/* Eyes (vintage camera goggles/glasses) */}
                  <rect x="5" y="5" width="2" height="2" className="text-brand-accent" />
                  <rect x="9" y="5" width="2" height="2" className="text-brand-accent" />
                  <rect x="7" y="5" width="2" height="1" className="text-brand-dark" />
                  {/* Goggles Strap */}
                  <rect x="3" y="5" width="1" height="1" className="text-brand-dark" />
                  <rect x="12" y="5" width="1" height="1" className="text-brand-dark" />
                  {/* Camera view finder lens element in eye */}
                  <rect x="6" y="5" width="1" height="1" className="text-brand-paper" />
                  <rect x="10" y="5" width="1" height="1" className="text-brand-paper" />
                  {/* Beard / Shadow */}
                  <rect x="4" y="9" width="8" height="2" className="text-brand-dark" />
                  <rect x="5" y="11" width="6" height="1" className="text-brand-dark" />
                  <rect x="7" y="8" width="2" height="1" className="text-brand-accent/70" /> {/* Smile */}
                  {/* Shirt collar */}
                  <rect x="6" y="13" width="4" height="2" className="text-brand-olive" />
                  <rect x="5" y="14" width="6" height="1" className="text-brand-olive" />
                </svg>

                {/* Cybernetic overlay indicators */}
                <div className="absolute top-2 left-2 font-pixel text-[10px] text-brand-accent">REC ●</div>
                <div className="absolute bottom-2 right-2 font-mono text-[8px] text-brand-olive/80">AV_CAM_GRID_02</div>
              </div>

              {/* Founder Tag */}
              <div className="mt-4 text-center">
                <span className="font-sans text-lg font-black text-brand-paper uppercase tracking-widest block">
                  Md Haseeb
                </span>
                <span className="text-[10px] font-pixel text-brand-accent tracking-[0.25em] uppercase mt-0.5 block font-bold">
                  FOUNDER & CHIEF OPERATOR
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Plain, honest philosophy paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-left" id="philosophy-text-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-olive/10 border border-brand-olive/30 rounded text-brand-olive text-xs font-bold tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>THE OPERATOR'S STATEMENT</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark font-extrabold tracking-tight leading-snug">
              Capturing Bihar's family traditions with absolute clarity and zero pretension.
            </h3>

            <p className="text-brand-dark/85 font-sans text-sm leading-relaxed">
              I established AV Films in Mahnar Bazar to solve a single common frustration: local celebrations are beautiful, but they often get buried under clumsy setups, heavy flashes, or editing styles that completely wash out the real warmth of our culture.
            </p>

            <p className="text-brand-dark/85 font-sans text-sm leading-relaxed">
              We shoot with clean discipline. Whether we are launching our stable aerial drone platforms to capture a lively Barat procession entering Mahnar, or mounting high-performance full-frame glass for low-light Mandap rituals, our goal is high-fidelity accuracy. We do not do awkward forced poses, and we do not alter your memories with cheap trends.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="bg-brand-card p-4 rounded border border-brand-border/70 space-y-2">
                <div className="w-8 h-8 rounded bg-brand-olive/10 flex items-center justify-center border border-brand-olive/20 text-brand-olive">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm text-brand-dark font-extrabold">Complete Dependability</h4>
                <p className="text-brand-dark/70 text-xs font-sans leading-relaxed">
                  We own and maintain our entire camera array and quadcopter fleet. No rental delays or gear failures on your wedding day.
                </p>
              </div>

              <div className="bg-brand-card p-4 rounded border border-brand-border/70 space-y-2">
                <div className="w-8 h-8 rounded bg-brand-olive/10 flex items-center justify-center border border-brand-olive/20 text-brand-olive">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm text-brand-dark font-extrabold">Punctual Delivery</h4>
                <p className="text-brand-dark/70 text-xs font-sans leading-relaxed">
                  Your raw and edited digital catalogs are secured on dual physical drives and delivered cleanly within promised dates.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="stats-strip">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="bg-brand-card p-5 rounded border border-brand-border flex items-center gap-4 hover:border-brand-accent/40 transition-colors duration-250">
                <div className="w-10 h-10 rounded bg-brand-olive/10 flex items-center justify-center border border-brand-olive/20 text-brand-olive flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-brand-dark/60 text-[10px] font-sans tracking-widest uppercase font-bold block mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Film sprocket holes at the bottom of the section */}
      <div className="absolute bottom-0 left-0 w-full h-[12px] bg-brand-dark flex justify-between px-1 opacity-25 overflow-hidden select-none pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-4 h-2 bg-brand-paper rounded-sm"></div>
        ))}
      </div>
    </section>
  );
}
