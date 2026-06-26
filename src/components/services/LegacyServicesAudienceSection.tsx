export default function LegacyServicesAudienceSection() {
  const cards = [
    {
      title: "Doctors & Clinical Teams",
      description: "AI-assisted clinical intelligence that supports faster and more informed medical decisions.",
      delay: "services-audience-delay-300",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
          <path d="M8 15v8"/>
          <path d="M16 2v6a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1"/>
        </svg>
      )
    },
    {
      title: "Nursing & Operational Staff",
      description: "Coordinated workflows and intelligent task management designed to reduce operational friction.",
      delay: "services-audience-delay-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Laboratories & Diagnostic Teams",
      description: "Connected diagnostics and streamlined information flow across hospital systems.",
      delay: "services-audience-delay-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <path d="M10 2v7.31"/>
          <path d="M14 9.3V1.99"/>
          <path d="M8.5 2h7"/>
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>
          <path d="M5.52 16h12.96"/>
        </svg>
      )
    },
    {
      title: "Hospital Administration",
      description: "Centralized visibility, operational intelligence, and scalable workflow management.",
      delay: "services-audience-delay-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      )
    }
  ]

  return (
    <section id="services-audience" className="relative py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="services-audience-reveal services-audience-delay-100 text-[11px] sm:text-[12px] font-bold text-med-primary uppercase tracking-[0.2em] mb-4">
            WHO WE SERVE
          </h4>
          
          <h2 className="services-audience-reveal services-audience-delay-200 text-[42px] sm:text-[48px] lg:text-[56px] font-black text-med-ink leading-tight">
            Designed For Every Layer Of<br className="hidden md:block" /> Modern Healthcare
          </h2>
        </div>

        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.slice(0, 3).map((card, index) => (
            <div 
              key={index}
              className={`services-audience-reveal ${card.delay} bg-white/60 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-8 lg:p-10 border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col group hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-med-primary/30 h-full`}
            >
              {/* Icon Bubble */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 mb-6">
                {card.icon}
              </div>
              
              <h3 className="text-[20px] lg:text-[24px] font-black text-med-ink leading-snug mb-4">
                {card.title}
              </h3>
              
              <p className="text-[16px] lg:text-[18px] text-med-slate font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 1 Card Aligned Left */}
        <div className="w-full md:w-[calc(33.333%-1.07rem)] lg:w-[calc(33.333%-1.33rem)] mt-6 lg:mt-8">
          <div className={`services-audience-reveal ${cards[3].delay} bg-white/60 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-8 lg:p-10 border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col group hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-med-primary/30 h-full`}>
            {/* Icon Bubble */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 mb-6">
              {cards[3].icon}
            </div>
            
            <h3 className="text-[20px] lg:text-[24px] font-black text-med-ink leading-snug mb-4">
              {cards[3].title}
            </h3>
            
            <p className="text-[16px] lg:text-[18px] text-med-slate font-medium leading-relaxed">
              {cards[3].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
