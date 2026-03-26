import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-white/10 pt-20 pb-10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 group cursor-pointer mb-8">
              <div className="relative flex items-center justify-center w-11 h-11">
                <div className="absolute inset-0 border-2 border-accent-500/30 transform rotate-45 rounded-sm transition-all duration-500 group-hover:border-accent-500 group-hover:rotate-90"></div>
                <div className="absolute inset-1 border border-accent-500/50 transform -rotate-45 rounded-sm transition-all duration-500 group-hover:border-accent-500/80 group-hover:-rotate-90"></div>
                <span className="relative text-accent-500 font-serif font-bold text-2xl z-10">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-2xl tracking-wide leading-none">Shahan</span>
                <span className="text-accent-500 text-[0.65rem] font-bold uppercase tracking-[0.3em] mt-1">Law Hub</span>
              </div>
            </div>
            <p className="mb-8 max-w-md leading-relaxed font-light text-gray-300">
              Aggressive, strategic, and relentless legal representation. We fight for your rights when everything is on the line.
            </p>
            <div className="space-y-4">
              <a href="tel:+923099409120" className="flex items-center gap-3 text-white hover:text-accent-500 transition-colors">
                <Phone className="w-5 h-5 text-accent-500" />
                <span className="font-bold text-lg">(+92) 309-9409120</span>
              </a>
              <a href="mailto:shahanrafique4@gmail.com" className="flex items-center gap-3 text-white hover:text-accent-500 transition-colors">
                <Mail className="w-5 h-5 text-accent-500" />
                <span className="font-medium">shahanrafique4@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-1" />
                <address className="not-italic font-medium">
                  Chamber no. 26, Usman Ghani Block,<br/>District Court Hafizabad.
                </address>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Practice Areas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Personal Injury</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Business Litigation</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Firm</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent-500 transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-accent-500 transition-colors">Our Process</a></li>
              <li><a href="#reviews" className="hover:text-accent-500 transition-colors">Client Results</a></li>
              <li><a href="#contact" className="hover:text-accent-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Shahan Law Hub. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
          Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
        </div>
      </div>
    </footer>
  );
}
