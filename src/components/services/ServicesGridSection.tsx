export default function ServicesGridSection() {
  const cards = [
    {
      title: "AI Clinical Decision Support",
      description: "Our intelligent clinical assistance system continuously analyzes patient data, symptoms, diagnostics, vitals, and medical history to support physicians with contextual insights and evidence-backed recommendations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
          <path d="M8 15v8"/>
          <path d="M16 2v6a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1"/>
          <path d="M11 20h2"/>
          <path d="M15 15h4"/>
          <path d="M17 19h2"/>
        </svg>
      ),
      specs: [
        "Differential diagnosis assistance",
        "Real-time clinical reasoning"
      ],
      delayClass: "services-card-delay-100",
      active: false
    },
    {
      title: "Smart Medical Documentation",
      description: "Reduce administrative overload with AI-generated medical documentation that automatically structures patient information into organized clinical notes and summaries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
          <path d="M3 12A9 3 0 0 0 21 12"/>
        </svg>
      ),
      specs: [
        "Automated SOAP note generation",
        "Intelligent patient summaries"
      ],
      delayClass: "services-card-delay-200",
      active: false
    },
    {
      title: "Medication & Patient Safety Intelligence",
      description: "Improve patient safety through intelligent monitoring systems that proactively detect medication risks, drug interactions, and critical safety signals across patient histories.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      specs: [
        "Drug interaction detection",
        "Patient safety monitoring"
      ],
      delayClass: "services-card-delay-300",
      active: false
    },
    {
      title: "Hospital Workflow Automation",
      description: "Automate repetitive operational workflows and improve coordination across departments with intelligent process management systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      specs: [
        "Discharge workflow automation",
        "Follow-up coordination",
        "Consultation management",
        "Cross-department workflow synchronization"
      ],
      delayClass: "services-card-delay-400",
      active: false
    },
    {
      title: "Unified Hospital Management System",
      description: "Connect clinical, operational, and administrative systems into one centralized AI-native healthcare ecosystem designed for modern hospitals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      ),
      specs: [
        "Unified healthcare infrastructure",
        "Multi-role hospital access",
        "Connected departmental workflows",
        "End-to-end hospital coordination"
      ],
      delayClass: "services-card-delay-500",
      active: false
    },
    {
      title: "Real-Time Operational Intelligence",
      description: "Transform fragmented hospital operations into actionable intelligence with centralized monitoring, AI summaries, and intelligent workflow visibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      ),
      specs: [
        "AI-generated operational insights",
        "Intelligent patient timelines",
        "Centralized workflow visibility",
        "Faster institutional coordination"
      ],
      delayClass: "services-card-delay-600",
      active: false
    }
  ]

  return (
    <section id="services-grid" className="relative pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`services-card-reveal ${card.delayClass} flex flex-col h-full bg-white/70 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 border group hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
                card.active 
                  ? 'border-med-primary/20 shadow-[0_8px_32px_rgba(232,117,26,0.1)]' 
                  : 'border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] group-hover:border-med-primary/40'
              }`}
            >
              {/* Icon Bubble */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-sm transition-all duration-500 ${
                card.active 
                  ? 'bg-med-primary text-white' 
                  : 'bg-white border border-gray-100 text-med-primary group-hover:border-[#e8751a]/30 group-hover:shadow-[0_0_20px_rgba(232,117,26,0.15)]'
              }`}>
                {card.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[26px] xl:text-[30px] font-black text-med-ink leading-tight mb-4">
                {card.title}
              </h3>
              <p className="text-[16px] xl:text-[17px] font-medium text-med-slate leading-relaxed flex-grow">
                {card.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-med-slate/10 w-full my-6"></div>

              {/* Key Specifications */}
              <div>
                <h4 className="text-[11px] sm:text-[12px] font-bold text-med-primary uppercase tracking-[0.15em] mb-4">
                  KEY SPECIFICATIONS
                </h4>
                <ul className="space-y-3">
                  {card.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-med-primary mt-0.5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" className="text-med-primary/20 fill-med-primary/10"></circle>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] sm:text-[16px] font-bold text-med-ink leading-snug">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
