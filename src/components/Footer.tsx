import { Linkedin, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight leading-none uppercase">
                HIGH COAST
              </span>
              <span className="text-xs font-medium text-gold tracking-[0.2em] leading-none mt-1 uppercase">
                GROUP
              </span>
            </a>
            <p className="text-white/50 leading-relaxed font-light">
              Your premium partner for excellence in contracting, property management, and business advisory services across the United Arab Emirates.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Why Choose Us', 'Latest Projects', 'Request Quote', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold scale-0 group-hover:scale-100 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Contracting', 'Maintenance', 'Property Management', 'HR & Sales', 'Business Strategy', 'Legal Advisory'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span className="text-white/60">Office 1234, Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <span className="text-white/60">+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <span className="text-white/60">info@highcoastgroup.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 High Coast Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
