import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, FileText, Clock, Camera, ShieldCheck, HelpCircle as AskIcon } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  meta: string;
  icon: React.ReactNode;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "How do we book a session with AV Films?",
      answer: "To secure our crew for your date, submit our secured availability form on this console or reach out directly on WhatsApp. We operate on a direct and transparent local contract. A standard deposit confirms your reservation in our flight and production log, and the remaining fee is processed upon delivery of the catalog.",
      meta: "BOOKING_SYS // RES_LOCK",
      icon: <HelpCircle className="w-4 h-4 text-brand-accent" />
    },
    {
      question: "What is the typical editing and delivery timeline?",
      answer: "We value absolute, high-fidelity precision over rushed, low-quality outputs. Standard photo catalogs are fully calibrated, color-corrected, and uploaded to private, secure digital servers within 14–21 days of the event. Custom cinematic videos, drone highlight reels, and sound-mixed wedding films undergo manual low-level editing and color-grading, taking 4–6 weeks for final delivery.",
      meta: "TIMELINE // WRITE_LATENCY",
      icon: <Clock className="w-4 h-4 text-brand-accent" />
    },
    {
      question: "What equipment and aerial systems do you operate?",
      answer: "We shoot with professional mirrorless capture arrays equipped with high-aperture prime glass (f/1.8 and f/2.8) for beautiful natural low-light mandap visuals. Our aerial platform uses a custom quadcopter drone equipped with active stabilization and GPS flight-computer routing, operated by a certified crew to handle Mahnar processions safely.",
      meta: "HARDWARE_SPECS // FLT_CAL",
      icon: <Camera className="w-4 h-4 text-brand-accent" />
    },
    {
      question: "Do you travel to venues outside of Mahnar Bazar?",
      answer: "Yes. While we are based locally in Mahnar Bazar, we regularly transport our production kits and quadcopter rigs across Bihar, including Patna, Hajipur, Muzaffarpur, and surrounding villages. Travel logistics and local lodging (if required) are completely estimated and transparently detailed up-front with zero hidden surcharges.",
      meta: "GEO_LOC // INTER_CITY",
      icon: <HelpCircle className="w-4 h-4 text-brand-accent" />
    },
    {
      question: "How are our wedding films and raw files secured?",
      answer: "We practice strict data dependability standards. At the end of every shooting day, all digital cards are duplicated directly on-site to dual shock-resistant physical SSD backups. Your finalized cinematic reels and edited captures are preserved in our cold storage archive for up to 12 months after delivery as a safety backup.",
      meta: "SECURE_VAULT // COLD_STORE",
      icon: <ShieldCheck className="w-4 h-4 text-brand-accent" />
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-8 bg-brand-card relative overflow-hidden border-b border-brand-border text-brand-dark">
      {/* Flight line overlay grid for drone aesthetics */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#211f1d_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Top visual tech borders */}
      <div className="absolute top-0 left-0 w-full h-[6px] geometric-border opacity-20"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-pixel text-sm text-brand-olive tracking-[0.3em] uppercase block mb-2 font-bold">
            QUERY_LOG // FREQUENT_ASKED
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-dark font-extrabold tracking-tight">
            Common Questions
          </h2>
          <div className="w-16 h-[2px] bg-brand-olive/40 mx-auto mt-4 mb-4"></div>
          <p className="text-brand-dark/75 text-xs sm:text-sm font-sans leading-relaxed">
            Get transparent details on scheduling policies, drone operations, dual backup reliability, and post-production timelines.
          </p>
        </div>

        {/* FAQ list with interactive accordion */}
        <div className="space-y-4" id="faq-accordion-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="bg-brand-paper border border-brand-border/80 hover:border-brand-accent/40 rounded overflow-hidden transition-all duration-300 shadow-[0_2px_8px_rgba(33,31,29,0.02)]"
                id={`faq-item-${index}`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Left aesthetic indicator */}
                    <div className="w-8 h-8 rounded bg-brand-olive/5 border border-brand-olive/20 flex items-center justify-center flex-shrink-0 text-brand-olive group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors duration-250">
                      <span className="font-pixel text-[11px] font-bold">0{index + 1}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="font-pixel text-[9px] text-brand-olive/80 tracking-widest uppercase block font-bold">
                        {item.meta}
                      </span>
                      <h3 className="font-serif text-sm sm:text-base text-brand-dark font-black tracking-tight uppercase group-hover:text-brand-accent transition-colors duration-200">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* Right hand toggle chevron */}
                  <div className="w-6 h-6 flex items-center justify-center text-brand-olive/60 group-hover:text-brand-accent">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Body Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-left border-t border-brand-border/40 bg-brand-card/30">
                        <p className="text-brand-dark/85 text-xs sm:text-sm font-sans leading-relaxed">
                          {item.answer}
                        </p>
                        
                        {/* Interactive decorative telemetry tag */}
                        <div className="mt-4 flex items-center gap-2 font-mono text-[9px] text-brand-olive/70 uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/70"></span>
                          <span>STATION_LOG: STATUS_VERIFIED</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <div className="mt-12 text-center">
          <p className="text-xs font-sans text-brand-dark/70 mb-4 font-semibold">
            Have a question that is not logged in our flight logs?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark hover:bg-brand-olive text-brand-paper hover:text-brand-paper border border-brand-border rounded font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm"
          >
            <AskIcon className="w-3.5 h-3.5 text-brand-accent" />
            <span>Consult Crew Directly</span>
          </button>
        </div>

      </div>
    </section>
  );
}
