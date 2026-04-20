import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden bg-navy shadow-xl">
          <div className="relative z-10 px-8 py-16 md:px-20 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-navy via-navy to-[#1a2a44]">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your <br />
                <span className="text-gold">Next Project?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl">
                Get a no-obligation quote from our expert team today. We're here to help you build your future.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="bg-gold text-white px-10 py-5 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-gold/20 whitespace-nowrap"
              >
                Request a Free Quote <ArrowRight size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
