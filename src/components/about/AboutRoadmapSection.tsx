import { useEffect, useRef, useState } from 'react'

const ROADMAP_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Agentic EHR Infrastructure',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    phase: 'Phase 2',
    title: 'AI-Native Hospital Management System',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
  },
  {
    phase: 'Phase 3',
    title: 'Full Intelligent Hospital Operating System',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
]

export default function AboutRoadmapSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 lg:py-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-16 lg:mb-20">
          
          {/* Eyebrow */}
          <span 
            className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '50ms' }}
          >
            OUR ROADMAP
          </span>

          {/* Heading */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-[42px] font-black text-med-ink leading-[1.1] tracking-tight transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Building The Future Backbone Of Smart Healthcare
          </h2>

        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div 
              key={idx}
              className={`group flex flex-col items-center text-center bg-white/90 backdrop-blur-md rounded-[36px] md:rounded-[48px] p-6 md:p-8 lg:p-12 border border-white shadow-[0_8px_24px_rgba(44,35,25,0.03)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:border-[#e8751a]/20 hover:shadow-[0_18px_45px_rgba(232,117,26,0.10)] hover:bg-white/90 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${150 + (idx * 50)}ms` }}
            >
              {/* Phase Pill */}
              <div className="bg-med-primary text-white rounded-full px-5 py-1.5 text-[11px] lg:text-xs font-black uppercase tracking-wider mb-5 md:mb-8 transition-all duration-300 shadow-[0_4px_12px_rgba(224,123,42,0.2)] group-hover:shadow-[0_6px_16px_rgba(224,123,42,0.3)]">
                {phase.phase}
              </div>

              {/* Title */}
              <h3 className="text-[17px] md:text-[19px] lg:text-[21px] font-black text-med-ink leading-[1.4] mb-6 md:mb-8 max-w-[240px]">
                {phase.title}
              </h3>

              {/* Icon Bubble */}
              <div className="mt-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-50/50 border border-orange-100/50 text-med-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(224,123,42,0.15)]">
                {phase.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p 
          className={`mt-16 text-sm md:text-[15px] text-med-slate leading-[1.6] font-medium max-w-2xl text-center transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '250ms' }}
        >
          Our long-term vision is to create the intelligent infrastructure layer powering next-generation healthcare institutions globally.
        </p>

      </div>
    </section>
  )
}
