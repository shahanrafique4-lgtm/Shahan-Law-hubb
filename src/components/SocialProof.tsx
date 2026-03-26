import { Star, Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Khalid Mahmood",
      case: "Personal Injury Client",
      text: "Shahan Law Hub provided exceptional guidance during a very difficult time. Their team was professional, responsive, and ultimately helped me secure a favorable outcome for my case."
    },
    {
      name: "Aimen Bibi",
      case: "Family Law Client",
      text: "I highly recommend Shahan Law Hub. They handled my family law matter with great sensitivity and expertise, keeping me informed every step of the way."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-900 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-800 transform skew-x-12 translate-x-32"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Client <br/><span className="text-accent-500 italic">Testimonials</span></h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">Read what our clients have to say about their experience working with Shahan Law Hub.</p>
            <div className="flex items-center gap-6 bg-brand-800/50 p-6 rounded-2xl border border-white/5 inline-flex">
              <div className="text-5xl font-bold text-accent-500">15+</div>
              <div className="text-sm text-gray-300 uppercase tracking-widest font-bold leading-relaxed">Years of<br/>Dedicated Service</div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl relative border border-white/10 hover:bg-white/10 transition-colors">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-accent-500/20" />
                <div className="flex text-accent-500 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-200 mb-8 relative z-10 leading-relaxed font-light text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center text-accent-500 font-serif font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white tracking-wide">{t.name}</div>
                    <div className="text-sm text-accent-500">{t.case}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
