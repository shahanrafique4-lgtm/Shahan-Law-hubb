import { Phone, Mail, MapPin } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-900/95 backdrop-blur-md border-b border-white/10">
      {/* Top bar for contact info */}
      <div className="hidden lg:flex justify-end items-center gap-6 px-8 py-2 bg-brand-800 text-xs text-gray-400 border-b border-white/5">
        <div className="flex items-center gap-2"><MapPin className="w-3 h-3 text-accent-500"/> Chamber no. 26, Usman Ghani Block, District Court Hafizabad</div>
        <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-accent-500"/> shahanrafique4@gmail.com</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
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
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#practice-areas" className="text-gray-300 hover:text-accent-500 transition-colors text-sm font-semibold tracking-wide uppercase">Practice Areas</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-accent-500 transition-colors text-sm font-semibold tracking-wide uppercase">Process</a>
          <a href="#reviews" className="text-gray-300 hover:text-accent-500 transition-colors text-sm font-semibold tracking-wide uppercase">Reviews</a>
        </div>

        <a href="tel:+923099409120" className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-accent-500/20 transform hover:-translate-y-0.5">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">(+92) 309-9409120</span>
        </a>
      </div>
    </nav>
  );
}
