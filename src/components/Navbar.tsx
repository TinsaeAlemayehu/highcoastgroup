import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Projects', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-3 shadow-sm' : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg">
            <div className="w-6 h-6 border-2 border-gold rotate-45"></div>
          </div>
          <span className="text-2xl font-bold text-navy tracking-tight">
            HIGH COAST <span className="text-gold">GROUP</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition shadow-lg shadow-gold/20 text-sm font-bold"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900 border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-gold-500 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-gold-500 text-navy-900 px-8 py-4 rounded-xl text-center font-bold text-lg"
              >
                Get a Free Quote
              </a>
              <div className="flex items-center justify-center gap-2 text-gold-500 font-medium">
                <Phone size={20} />
                <span>Call Us: +971 4 XXX XXXX</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
