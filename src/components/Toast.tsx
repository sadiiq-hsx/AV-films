import React, { useEffect } from 'react';
import { CheckCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
          id="toast-container"
        >
          <div className="glass-panel border-brand-gold/30 rounded-xl p-4 flex items-start gap-3 border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
            
            <div className="flex-shrink-0 mt-0.5">
              {type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-brand-gold" />
              ) : (
                <Info className="w-5 h-5 text-brand-gold" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-sans font-medium leading-relaxed">
                {message}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-0.5 rounded-md"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
