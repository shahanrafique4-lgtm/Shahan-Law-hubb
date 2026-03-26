import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-600 text-sm font-bold mb-8 uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted Legal Representation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-900 leading-[1.1] mb-6"
            >
              Experienced Legal Counsel. <br/>
              <span className="text-accent-500 italic font-light">Dedicated to Your Success.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
            >
              Providing comprehensive legal services with a commitment to integrity, professionalism, and achieving the best possible outcomes for our clients.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-900/20">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+923099409120" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-brand-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all">
                (+92) 309-9409120
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-accent-500 rounded-[2.5rem] transform translate-x-6 translate-y-6 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
              alt="Law Office" 
              className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5] border-8 border-white"
            />
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <div>
                <div className="flex text-accent-500 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-sm font-bold text-brand-900">500+ Success Stories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
