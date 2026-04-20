import { motion } from 'motion/react';
import { Award, ShieldCheck, Clock, BadgeDollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Experienced Professional Team',
    desc: 'Our staff are industry veterans with local market expertise.'
  },
  {
    icon: ShieldCheck,
    title: 'High Quality Standards',
    desc: 'We adhere to international quality benchmarks in every project.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Reliability is our hallmark. We meet deadlines without compromise.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    desc: 'Premium service delivered at values that reflect market reality.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-bg-primary overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-bold text-navy mt-4 mb-10 leading-tight">
              A Legacy of Trust & <br />
              <span className="text-gold">Unmatched Quality</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl">
              High Coast Group has established itself as a premier service provider in the UAE by focusing on three core pillars: Integrity, Excellence, and Innovation. Whether it's a construction project or a complex business setup, we deliver results that exceed expectations.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-50">
              <p className="text-slate-600 font-medium italic text-lg leading-relaxed mb-6">
                "Our mission is to provide integrated professional services that empower businesses and elevate the standard of living across the United Arab Emirates."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center font-bold text-white">
                  HC
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">Managing Director</div>
                  <div className="text-slate-400 text-xs uppercase tracking-tighter">High Coast Group</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-50 shadow-soft group hover:border-gold transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
