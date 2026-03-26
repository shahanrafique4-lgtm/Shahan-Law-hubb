import { Car, Briefcase, Users, Scale, ArrowRight } from 'lucide-react';

export function PracticeAreas() {
  const areas = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Personal Injury",
      desc: "Providing compassionate representation for individuals who have been injured due to negligence.",
      link: "#"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Criminal Defense",
      desc: "Offering robust defense strategies to protect your rights and ensure a fair legal process.",
      link: "#"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Law",
      desc: "Guiding clients through divorce, custody, and other sensitive family law matters with care and discretion.",
      link: "#"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Litigation",
      desc: "Assisting businesses with contract disputes, litigation, and comprehensive legal counsel.",
      link: "#"
    }
  ];

  return (
    <section id="practice-areas" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Our Practice Areas</h2>
            <p className="text-gray-600 text-lg">We offer comprehensive legal services across a range of practice areas to meet the diverse needs of our clients.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-accent-600 font-bold hover:text-accent-700 transition-colors uppercase tracking-wider text-sm">
            View All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-8 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">{area.desc}</p>
              <a href={area.link} className="inline-flex items-center gap-2 text-accent-600 font-bold group-hover:text-brand-900 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
