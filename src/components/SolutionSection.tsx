import { ShieldCheck } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-900 rounded-[2rem] transform -translate-x-4 -translate-y-4 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?auto=format&fit=crop&q=80" 
              alt="Lawyer consulting with client" 
              className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6 leading-tight">
              Comprehensive Legal Solutions <br/><span className="text-accent-500 italic">Tailored to You.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Shahan Law Hub, we believe in a client-first approach. We work closely with you to understand your unique situation and develop a strategic plan to achieve your goals.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Strategic Planning", desc: "We carefully analyze your case to develop a comprehensive legal strategy." },
                { title: "Dedicated Representation", desc: "We advocate strongly on your behalf in negotiations and in the courtroom." },
                { title: "Client-Centered Focus", desc: "We keep you informed and involved throughout the entire legal process." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
                Contact Our Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
