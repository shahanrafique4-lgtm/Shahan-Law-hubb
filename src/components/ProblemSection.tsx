import { AlertTriangle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-24 bg-brand-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AlertTriangle className="w-16 h-16 text-accent-500 mx-auto mb-8 opacity-90" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
          Navigating Complex Legal Challenges <span className="text-accent-500 italic">With Confidence.</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
          Legal matters can be complex and stressful. Our experienced team is here to provide clear guidance, protect your interests, and help you navigate the legal system effectively.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            "Personalized attention and dedicated case management.",
            "Clear, transparent communication at every step.",
            "Thorough understanding of local and national laws.",
            "A commitment to protecting your rights and future."
          ].map((item, i) => (
            <div key={i} className="bg-brand-800/50 p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0 border border-accent-500/20">
                <span className="text-accent-500 font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-300 font-medium leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
