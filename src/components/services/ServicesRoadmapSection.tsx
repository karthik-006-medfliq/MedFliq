export default function ServicesRoadmapSection() {
  const cards = [
    {
      number: "01",
      title: "Rapid Onboarding",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
          <path d="M3 12A9 3 0 0 0 21 12"/>
        </svg>
      ),
      delay: "services-roadmap-delay-400"
    },
    {
      number: "02",
      title: "Core Patient Records",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      ),
      delay: "services-roadmap-delay-500"
    },
    {
      number: "03",
      title: "Advanced Billing & Automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      delay: "services-roadmap-delay-600"
    }
  ]

  return (
    <section id="services-roadmap" className="relative py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="services-roadmap-reveal services-roadmap-delay-100 text-[11px] sm:text-[12px] font-bold text-med-primary uppercase tracking-[0.2em] mb-4">
            IMPLEMENTATION ROADMAP
          </h4>
          
          <h2 className="services-roadmap-reveal services-roadmap-delay-200 text-[36px] sm:text-[42px] lg:text-[48px] font-black text-med-ink leading-tight mb-6">
            Clinic-Focused Implementation Journey <br className="hidden md:block" />
            
          </h2>

          <p className="services-roadmap-reveal services-roadmap-delay-300 text-[16px] sm:text-[18px] text-med-slate font-medium leading-relaxed max-w-2xl mx-auto">
            Nobody wants a six-month rollout. We get clinics up and running fast, then build from there records first, then the billing and automation pieces once the basics are solid. Each step has to earn its keep before we move to the next one.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`services-roadmap-reveal ${card.delay} relative overflow-hidden bg-white/60 backdrop-blur-md rounded-[28px] sm:rounded-[40px] p-6 md:p-8 lg:p-10 border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-center items-center group hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-med-primary/30 min-h-[160px] md:min-h-[280px]`}
            >
              {/* Massive Faded Number Background */}
              <div className="absolute top-4 right-6 text-[80px] lg:text-[100px] font-black text-slate-900/[0.03] select-none leading-none z-0">
                {card.number}
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-[18px] lg:text-[20px] font-black text-med-ink leading-snug max-w-[200px]">
                  {card.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
