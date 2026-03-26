export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "Schedule a meeting to discuss your case and learn how we can assist you."
    },
    {
      num: "02",
      title: "Case Evaluation",
      desc: "We will thoroughly review the details of your situation and outline potential legal strategies."
    },
    {
      num: "03",
      title: "Dedicated Advocacy",
      desc: "Our team will work diligently to represent your interests and seek a favorable resolution."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Our Legal Process</h2>
          <p className="text-xl text-gray-600 font-light">What to expect when you partner with Shahan Law Hub.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative text-center z-10 group">
              <div className="w-20 h-20 mx-auto bg-white text-accent-500 rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-8 shadow-[0_0_0_8px_rgba(255,255,255,1)] border border-gray-100 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
