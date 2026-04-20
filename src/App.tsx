/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyUs />
        <Testimonials />
        <CTABanner />
        <ContactForm />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

