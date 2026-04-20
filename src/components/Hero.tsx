import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const trustBadges = [
  '10+ Years Experience',
  '500+ Projects Completed',
  'Licensed & Insured',
  'On-Time Delivery',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-primary">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-gold font-bold tracking-widest text-xs uppercase">
                <span>Est. 2014</span>
                <span className="h-px w-8 bg-gold"></span>
                <span>UAE Standard</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] text-balance">
                Building Excellence <br />
                Across the <span className="text-gold">UAE</span>
              </h1>
              
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                Premium contracting, property management, and business consulting tailored for the Gulf market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="bg-navy text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-opacity-90 transition-all"
              >
                Get a Free Quote <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-navy hover:bg-slate-50 transition-all text-center"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy">500+</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">Projects Delivered</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy">10+</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">Years Experience</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy">98%</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">Client Satisfaction</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full relative">
            <div className="absolute -z-10 -right-20 -top-20 w-64 h-64 bg-gold opacity-5 blur-[100px] rounded-full" />
            
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-50 flex flex-col justify-between group cursor-pointer aspect-square">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition text-2xl">
                🏗️
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-navy">Contracting</h3>
                <p className="text-xs text-slate-400 mt-1">Fit-out, renovation & construction.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-50 flex flex-col justify-between group cursor-pointer aspect-square mt-8">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition text-2xl">
                🔧
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-navy">Maintenance</h3>
                <p className="text-xs text-slate-400 mt-1">AC, electrical & plumbing.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-50 flex flex-col justify-between group cursor-pointer aspect-square -mt-8">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition text-2xl">
                🏢
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-navy">Property Mgmt</h3>
                <p className="text-xs text-slate-400 mt-1">Facility & leasing supervision.</p>
              </div>
            </div>

            <div className="bg-navy p-6 rounded-2xl shadow-soft flex flex-col justify-between relative overflow-hidden aspect-square">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-gold opacity-10 rounded-full"></div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gold text-2xl">
                📊
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-white">Consulting</h3>
                <p className="text-xs text-white/60 mt-1">Growth & operations planning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
