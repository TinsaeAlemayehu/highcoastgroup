import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Ahmed Al Mansoori',
    role: 'CEO',
    company: 'XYZ Properties',
    content: 'The property management services provided by High Coast Group are second to none. They handled our portfolio transition with professionalism and extreme attention to detail.',
    rating: 5
  },
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Global Retail UAE',
    content: 'We reached out for business consulting during a expansion phase. Their insights into the local Dubai market regulations were invaluable for our strategy.',
    rating: 5
  },
  {
    name: 'Omar Khalid',
    role: 'Homeowner',
    company: 'Jumeirah Estates',
    content: 'From the initial quote to the finishing touches of my villa renovation, the team was transparent and professional. The contracting quality is world-class.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4">
            Trusted by Leaders <br />
            <span className="text-slate-400">Across the Gulf</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-soft transition-all duration-300 relative border border-slate-50"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-navy text-lg italic leading-relaxed mb-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
