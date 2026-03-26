/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PracticeAreas } from './components/PracticeAreas';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 font-sans selection:bg-accent-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <ProblemSection />
        <SolutionSection />
        <PracticeAreas />
        <HowItWorks />
        <SocialProof />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-900 border-t border-white/10 md:hidden z-50 flex gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <a href="tel:+923099409120" className="flex-1 flex items-center justify-center gap-2 bg-accent-500 text-white py-3 rounded-lg font-bold text-sm">
          <Phone className="w-4 h-4" />
          (+92) 309-9409120
        </a>
        <a href="#contact" className="flex-1 flex items-center justify-center bg-white/10 text-white py-3 rounded-lg font-bold text-sm">
          Free Consult
        </a>
      </div>
    </div>
  );
}
