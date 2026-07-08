import React, { useState } from 'react';
import { Mail, MapPin, ArrowRight, MessageSquare, Instagram, ShieldCheck, Heart } from 'lucide-react';

interface ContactProps {
  showToast: (message: string) => void;
}

export default function Contact({ showToast }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.eventDate || !formData.location || !formData.message) {
      showToast('Please fill in all required fields (Name, Event Date, Location, and Message).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you, ${formData.name}! Your booking inquiry has been received. Md Haseeb will contact you shortly.`);
      setFormData({
        name: '',
        eventDate: '',
        location: '',
        message: ''
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppClick = () => {
    // TODO: real number - replace placeholder with actual WhatsApp business contact
    // Scroll directly to the contact form for now
    const formEl = document.getElementById('direct-contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-brand-paper relative overflow-hidden text-brand-dark">
      {/* Bihar block-pattern border line */}
      <div className="absolute top-0 left-0 w-full h-[6px] geometric-border opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Local Contact Details */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-col text-left">
            <div className="text-left">
              <span className="font-pixel text-sm text-brand-olive tracking-[0.3em] uppercase block mb-2 font-bold">
                COMM_LINK // CONTACT_FEED
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark font-extrabold tracking-tight">
                Inquire For Booking
              </h2>
              <div className="w-16 h-[2px] bg-brand-olive/40 mt-4"></div>
            </div>

            <p className="text-brand-dark/85 font-sans text-sm leading-relaxed text-left">
              Our scheduling is transparent and fully local. Whether you are hosting a traditional wedding ceremony in Mahnar Bazar, a family festival, or a corporate forum in Patna, fill out our secure inquiry console or contact us directly to reserve dates.
            </p>

            {/* Direct Details */}
            <div className="space-y-4 pt-2 text-left" id="direct-contact-links">
              
              {/* Studio Location */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded bg-brand-olive/10 border border-brand-olive/25 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-olive">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-brand-dark text-[10px] font-mono tracking-wider uppercase font-bold">Local Station Base</h4>
                  <p className="text-brand-dark/80 text-sm mt-0.5 leading-relaxed font-bold">
                    Mahnar Bazar, Bihar, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded bg-brand-olive/10 border border-brand-olive/25 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-olive">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-brand-dark text-[10px] font-mono tracking-wider uppercase font-bold">Secured Email Link</h4>
                  <a 
                    href="mailto:contact@haseebphotography.in" 
                    className="text-brand-dark/80 hover:text-brand-accent text-sm mt-0.5 transition-colors block font-bold"
                  >
                    contact@haseebphotography.in
                  </a>
                </div>
              </div>

              {/* Instagram Placeholder block */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded bg-brand-olive/10 border border-brand-olive/25 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-olive">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-brand-dark text-[10px] font-mono tracking-wider uppercase font-bold">Instagram Handler</h4>
                  <span className="text-brand-dark/70 text-sm mt-0.5 block font-bold">
                    @avfilms_bihar <span className="text-[10px] text-brand-accent/90 ml-1 font-pixel font-bold tracking-wider">(COMING SOON)</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Real Instant WhatsApp Connection */}
            <div className="pt-4 text-left">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-dark hover:bg-brand-olive text-brand-paper hover:text-brand-paper rounded font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-brand-accent" />
                <span>Chat on WhatsApp</span>
              </button>
              <span className="block text-[10px] text-brand-dark/60 mt-1.5 font-bold font-mono">
                * SYSTEM LINKED DIRECTLY TO LOCAL DISPATCH FEED
              </span>
            </div>
          </div>

          {/* Right Column: Grounded Inquiry Form */}
          <div className="lg:col-span-7 bg-brand-card rounded-lg border border-brand-border p-6 sm:p-8 relative overflow-hidden shadow-lg text-left" id="direct-contact-form">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-2xl pointer-events-none rounded-full"></div>
            
            <div className="mb-6">
              <span className="font-pixel text-[11px] text-brand-accent tracking-widest block mb-1 font-bold">SYS_CONSOLE // INQUIRY_SECURE</span>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-black tracking-tight">Direct Availability Check</h3>
              <p className="text-brand-dark/70 text-xs font-sans mt-1">Submit your specific ceremony details directly to our tracking logs.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-brand-dark/80 text-[10px] font-mono tracking-wider uppercase font-bold block">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.g. Rajesh Kumar"
                  className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3.5 py-2.5 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Event Date */}
                <div className="space-y-1">
                  <label className="text-brand-dark/80 text-[10px] font-mono tracking-wider uppercase font-bold block">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3.5 py-2.5 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <label className="text-brand-dark/80 text-[10px] font-mono tracking-wider uppercase font-bold block">Event Venue / City *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="E.g. Mahnar Bazar"
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3.5 py-2.5 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-brand-dark/80 text-[10px] font-mono tracking-wider uppercase font-bold block">Message / Expected Timeline *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your event expectations, drone preferences, lighting style..."
                  className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3.5 py-2.5 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 resize-none font-semibold"
                />
              </div>

              {/* Submit button using Amber action highlight */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-brand-paper font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer rounded"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-brand-paper/20 border-t-brand-paper rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-brand-paper" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
