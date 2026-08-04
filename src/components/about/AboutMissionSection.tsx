import { useEffect, useRef, useState } from 'react'

const MISSION_CARDS = [
  {
    title: 'Effortless Simplicity',
    description: 'No steep learning curve, no lengthy onboarding. If it takes a manual to figure out, we didn\'t build it right.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: 'Rock-Solid Reliability',
    description: '99.9% uptime. Patient data is there the second you need it no spinning wheels, no "try again later."',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    title: 'Patient-First Experience',
    description: 'Appointments, records, follow-ups everything\'s built around the patient, not the other way around.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
  {
    title: 'Relentless Innovation',
    description: 'We talk to the clinicians actually using this every day, and we build what they ask for. Fast.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
  },
]

export default function AboutMissionSection() {
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
      className="relative w-full pt-8 lg:pt-12 pb-16 lg:pb-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Block (Centered) */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-16 lg:mb-20">
          
          {/* Eyebrow */}
          <span 
            className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '50ms' }}
          >
            OUR MISSION
          </span>

          {/* Heading */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-[42px] font-black text-med-ink leading-[1.1] tracking-tight mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Empowering Clinics with Seamless Digital Workflows
          </h2>

          {/* Description */}
          <p 
            className={`text-sm md:text-base text-med-slate leading-[1.6] font-medium max-w-[640px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            Whether you're running a single-room practice or a network with locations across the city, our mission stays the same: give clinics a platform they can actually trust, one that takes paperwork off staff's plates so clinicians can get back to what matters patients.
          </p>

        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {MISSION_CARDS.map((card, idx) => (
            <div 
              key={idx}
              className={`group flex flex-col bg-white/90 backdrop-blur-md rounded-[28px] md:rounded-[36px] p-6 md:p-8 border border-white shadow-[0_16px_40px_rgba(44,35,25,0.03)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-med-primary/30 hover:shadow-[0_20px_40px_rgba(224,123,42,0.12)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${150 + (idx * 50)}ms` }}
            >
              {/* Icon Bubble */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-50 text-med-primary flex items-center justify-center mb-5 md:mb-8 transition-all duration-300 group-hover:scale-110 group-hover:bg-med-primary group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(224,123,42,0.35)]">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-[19px] md:text-[21px] font-black text-med-ink mb-4 leading-[1.2]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-med-slate leading-[1.6] font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
