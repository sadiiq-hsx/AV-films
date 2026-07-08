import React, { useState } from 'react';
import { X, Calendar, MapPin, Film, Mail, User, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteInquiry } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (message: string) => void;
}

export default function QuoteModal({ isOpen, onClose, showToast }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteInquiry>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    packageInterest: 'premium',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.eventDate || !formData.location) {
      showToast('Please fill in Name, Phone, Date, and Location.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you, ${formData.name}! Your inquiry for ${formData.location} has been received. Md Haseeb will contact you shortly.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        location: '',
        packageInterest: 'premium',
        message: ''
      });
      onClose();
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#211F1D]/60 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-brand-card w-full max-w-xl rounded relative z-10 overflow-hidden shadow-2xl border border-brand-border text-brand-dark"
            id="quote-modal"
          >
            {/* Geometric border pattern */}
            <div className="absolute top-0 left-0 w-full h-[4px] geometric-border opacity-20"></div>

            {/* Header */}
            <div className="p-5 border-b border-brand-border flex justify-between items-center relative z-10 bg-brand-paper/50 text-left">
              <div>
                <span className="font-pixel text-[11px] text-brand-accent tracking-widest block font-bold">AV_SYS // INQUIRY_CONSOLE</span>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-black tracking-tight">Check Availability</h3>
              </div>
              <button
                onClick={onClose}
                className="text-brand-dark/50 hover:text-brand-dark transition-colors duration-200 p-1.5 hover:bg-brand-paper rounded"
                id="close-modal-btn"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 relative z-10 max-h-[75vh] overflow-y-auto text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-brand-dark/85 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-olive" /> Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3 py-2 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-brand-dark/85 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-olive" /> Phone / WhatsApp <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone || ''}
                    onChange={handleChange}
                    placeholder="E.g. +91 99000 00000"
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3 py-2 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-1">
                  <label className="text-brand-dark/85 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-olive" /> Event Date <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3 py-2 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <label className="text-brand-dark/85 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-olive" /> Venue / City <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Mahnar Bazar, Patna"
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3 py-2 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>
              </div>

              {/* Package Select */}
              <div className="space-y-1">
                <label className="text-brand-dark/85 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                  <Film className="w-3.5 h-3.5 text-brand-olive" /> Style Required
                </label>
                <div className="relative">
                  <select
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                    className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3 py-2.5 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 appearance-none cursor-pointer font-semibold"
                  >
                    <option value="cinematic">Full Marriage Shoot (Photography & Quadcopter Video)</option>
                    <option value="editorial">Pre-Wedding Session (Riverside Sunset & Sunset portraits)</option>
                    <option value="premium">Traditional Celebrations / Local Gatherings</option>
                    <option value="custom">Other Family Rituals & Custom Portraits</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-accent">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Custom Details Message */}
              <div className="space-y-1">
                <label className="text-brand-dark/85 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-olive" /> Custom Vision details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Share details about your timeline, expected rituals, or layout..."
                  className="w-full bg-brand-paper border border-brand-border hover:border-brand-accent/40 focus:border-brand-accent rounded px-3 py-2 text-brand-dark text-xs font-sans focus:outline-none transition-all duration-300 resize-none font-semibold"
                />
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-brand-border flex justify-end items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center min-w-[140px] px-6 py-3.5 rounded bg-brand-accent hover:bg-brand-accent/90 text-brand-paper font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-brand-paper/20 border-t-brand-paper rounded-full animate-spin"></div>
                  ) : (
                    'Submit Console Inquiry'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
