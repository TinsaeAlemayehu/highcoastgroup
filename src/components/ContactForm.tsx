import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(8, { message: 'Please enter a valid phone number' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log('Form Submitted:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert('Thank you! Your request has been sent. We will get back to you shortly.');
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us Now',
      value: '+971 4 123 4567',
      link: 'tel:+97141234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@highcoastgroup.ae',
      link: 'mailto:info@highcoastgroup.ae'
    },
    {
      icon: MapPin,
      title: 'Our Office',
      value: 'Office 1234, Business Bay, Dubai, UAE',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info Side */}
          <div className="lg:col-span-2">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">Reach Out</span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mt-4 mb-8">
              Let's Discuss <br />
              <span className="text-navy-900/40 italic">Your Vision</span>
            </h2>
            <p className="text-slate-600 mb-12 text-lg">
              Have questions about our services or need a customized quote? Our team is available Sunday to Friday to handle your requests.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-gold-500 shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</div>
                    <a href={item.link} className="text-lg font-bold text-navy-900 hover:text-gold-500 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-green-50 rounded-3xl border border-green-100 flex flex-col items-center text-center">
              <MessageCircle size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">Prefer WhatsApp?</h3>
              <p className="text-green-800/70 text-sm mb-6">Chat with our consultants instantly for a quick response.</p>
              <a 
                href="https://wa.me/971501234567" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all w-full"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-soft relative overflow-hidden">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest px-1">Full Name</label>
                    <input
                      {...register('name')}
                      placeholder="Enter your name"
                      className={`w-full bg-bg-primary border ${errors.name ? 'border-red-500' : 'border-slate-100'} rounded-xl px-6 py-4 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 px-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest px-1">Phone Number</label>
                    <input
                      {...register('phone')}
                      placeholder="+971 5X XXX XXXX"
                      className={`w-full bg-bg-primary border ${errors.phone ? 'border-red-500' : 'border-slate-100'} rounded-xl px-6 py-4 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 px-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest px-1">Email Address</label>
                  <input
                    {...register('email')}
                    placeholder="your@email.com"
                    className={`w-full bg-bg-primary border ${errors.email ? 'border-red-500' : 'border-slate-100'} rounded-xl px-6 py-4 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 px-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest px-1">Service Required</label>
                  <select
                    {...register('service')}
                    className={`w-full bg-bg-primary border ${errors.service ? 'border-red-500' : 'border-slate-100'} rounded-xl px-6 py-4 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all appearance-none cursor-pointer`}
                  >
                    <option value="">Select a service</option>
                    <option value="contracting">🏗 Contracting</option>
                    <option value="maintenance">🔧 General Maintenance</option>
                    <option value="property">🏢 Property Management</option>
                    <option value="hr">👥 HR & Sales</option>
                    <option value="consulting">📊 Business Consulting</option>
                    <option value="legal">⚖️ Legal Consulting</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 px-1">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest px-1">Subject / Project Details</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className={`w-full bg-bg-primary border ${errors.message ? 'border-red-500' : 'border-slate-100'} rounded-xl px-6 py-4 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 px-1">{errors.message.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full bg-navy text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-opacity-95 disabled:opacity-70`}
                >
                  {isSubmitting ? 'Sending Request...' : 'Send My Request'}
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
