import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much does a consultation cost?",
      a: "We offer an initial consultation to discuss your case and determine how we can best assist you. Please contact our office for details."
    },
    {
      q: "How do I pay for your services?",
      a: "Our fee structures vary depending on the type of case. We offer transparent billing practices and will discuss all fees during your initial consultation."
    },
    {
      q: "How long will my case take?",
      a: "The duration of a legal matter depends on its complexity and various other factors. We strive to resolve cases as efficiently as possible while ensuring your interests are fully protected."
    },
    {
      q: "Will I have to go to court?",
      a: "Many cases are resolved through negotiation or mediation without the need for a trial. However, if a court appearance is necessary, our attorneys are fully prepared to represent you effectively."
    }
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 font-light">Find answers to common questions about our legal services.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
              >
                <span className="font-bold text-brand-900 text-lg pr-8">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open === i ? 'bg-accent-500 text-white' : 'bg-brand-50 text-brand-900'}`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed font-light">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
