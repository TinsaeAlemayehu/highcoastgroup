import { motion } from 'motion/react';
import { 
  HardHat, 
  Wrench, 
  Building2, 
  Users2, 
  BarChart3, 
  Scale,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Contracting',
    icon: HardHat,
    desc: 'Commercial and residential construction, high-end renovations, fit-out and finishing works.',
    tag: 'Construction'
  },
  {
    title: 'General Maintenance',
    icon: Wrench,
    desc: 'Expert electrical, plumbing, HVAC maintenance and mechanical system interventions.',
    tag: 'Technical'
  },
  {
    title: 'Property Management',
    icon: Building2,
    desc: 'Strategic leasing, facility supervision, and full-spectrum residential & commercial management.',
    tag: 'Real Estate'
  },
  {
    title: 'HR & Sales',
    icon: Users2,
    desc: 'Bespoke recruitment, sales performance management, and comprehensive workforce solutions.',
    tag: 'Operations'
  },
  {
    title: 'Business Consulting',
    icon: BarChart3,
    desc: 'Strategic operations, structural growth planning, and market entry strategy in the UAE.',
    tag: 'Strategy'
  },
  {
    title: 'Legal Consulting',
    icon: Scale,
    desc: 'Company setup, contract drafting, regulatory compliance, and business legal advisory.',
    tag: 'Compliance'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-bold text-navy mt-4 leading-tight">
            Comprehensive Solutions <br />
            <span className="text-slate-400">for Modern Enterprises</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-soft hover:border-gold transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-gold" size={24} />
              </div>
              
              <div className="mb-6 inline-flex p-4 bg-bg-primary rounded-lg text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                {service.tag}
              </span>
              <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <a 
                href="#contact" 
                className="text-navy font-bold text-sm flex items-center gap-2 group-hover:text-gold transition-colors"
              >
                Learn More <ArrowRight className="inline" size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
