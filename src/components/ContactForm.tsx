import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 text-white relative">
              {/* Decorative pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#C68E58 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  Contact <span className="text-accent-500 italic">Shahan Law Hub</span>
                </h2>
                <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
                  Please fill out the form below or contact us directly to schedule a consultation with our legal team.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Call Us</div>
                      <a href="tel:+923099409120" className="text-2xl font-bold text-white hover:text-accent-500 transition-colors">(+92) 309-9409120</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Email Us</div>
                      <a href="mailto:shahanrafique4@gmail.com" className="text-lg font-medium text-white hover:text-accent-500 transition-colors">shahanrafique4@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Visit Us</div>
                      <address className="text-lg font-medium text-white not-italic">
                        Chamber no. 26, Usman Ghani Block,<br/>District Court Hafizabad.
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                  <ShieldCheck className="w-8 h-8 text-accent-500" />
                  <div className="text-sm text-gray-300 font-medium">100% Confidential & Secure Evaluation</div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-50 p-10 md:p-16">
              <h3 className="text-3xl font-bold text-brand-900 mb-8">Request Your Free Evaluation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-accent-500 outline-none transition-all bg-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-accent-500 outline-none transition-all bg-white"
                    placeholder="(+92) 309-9409120"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="case" className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">What do you need help with?</label>
                  <select 
                    id="case" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-accent-500 outline-none transition-all bg-white appearance-none"
                    required
                  >
                    <option value="">Select Case Type...</option>
                    <option value="injury">Personal Injury</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="family">Family Law</option>
                    <option value="business">Business Litigation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-accent-500/30 transform hover:-translate-y-1 mt-4"
                >
                  Submit Request
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-6 font-medium">
                  By submitting this form, you agree to our Terms & Privacy Policy. Information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
