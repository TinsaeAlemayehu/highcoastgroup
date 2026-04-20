import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar on mobile when scrolled a bit
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-navy-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Chat with Us
        </span>
      </motion.a>

      {/* Mobile Sticky CTA Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[70] md:hidden bg-navy/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex gap-4"
          >
            <a
              href="tel:+97141234567"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="#contact"
              className="flex-[1.5] bg-gold hover:bg-gold-hover text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-lg shadow-gold/20"
            >
              Get Free Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
