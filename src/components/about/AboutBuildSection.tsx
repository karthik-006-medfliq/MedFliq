import { useEffect, useRef, useState } from 'react'

const BUILD_FEATURES = [
  { id: 1, title: 'Comprehensive data analysis', active: false },
  { id: 2, title: 'Evidence-based guideline matching', active: false },
  { id: 3, title: 'Real-time cognitive bias checks', active: false },
  { id: 4, title: 'Automated symptom cross-referencing', active: false },
  { id: 5, title: 'Medication interaction tracking', active: false },
  { id: 6, title: 'Transparent clinical reasoning', active: false },
  { id: 7, title: 'Proactive diagnostic suggestions', active: false },
  { id: 8, title: 'Explainable AI recommendations', active: false },
]

export default function AboutBuildSection() {
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
      className="relative w-full pt-16 lg:pt-24 pb-8 lg:pb-12 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Main Grid: Left Text + Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Text) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            
            {/* Eyebrow */}
            <span 
              className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '50ms' }}
            >
              OUR DIAGNOSTIC IMPACT
            </span>

            {/* Heading */}
            <h2 
              className={`text-3xl md:text-4xl lg:text-[40px] font-black text-med-ink leading-[1.1] tracking-tight mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Reducing Diagnostic Errors Every Day
            </h2>

            {/* Paragraphs */}
            <div 
              className={`flex flex-col gap-5 text-sm md:text-[15px] text-med-slate leading-[1.6] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              <p>
                There's more patient data than any one person can manually track, guidelines update faster than clinics can keep up with, and pressure has a way of letting bias slip into decisions unnoticed. MedFliq catches what a rushed consultation might otherwise let slide.
              </p>
              <p>
                Fewer delays. Hidden risks flagged sooner. Care that stays consistently strong, patient after patient.
              </p>
            </div>
          </div>

          {/* Right Column (Feature Pills) */}
          <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 w-full">
            {BUILD_FEATURES.map((feature, idx) => (
              <div 
                key={feature.id}
                className={`group flex items-center gap-4 bg-white/90 backdrop-blur-md rounded-full py-4 px-5 pr-6 lg:pr-8 border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 
                  ${feature.active 
                    ? 'border-med-primary/30 shadow-[0_12px_30px_rgba(224,123,42,0.1)]' 
                    : 'border-white shadow-[0_8px_24px_rgba(44,35,25,0.03)] hover:border-med-primary/30 hover:shadow-[0_12px_30px_rgba(224,123,42,0.12)]'
                  } 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: `${150 + (idx * 50)}ms` }}
              >
                {/* Number Badge */}
                <div 
                  className={`flex-shrink-0 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full text-[11px] md:text-xs font-black transition-colors duration-300
                    ${feature.active 
                      ? 'bg-med-primary text-white' 
                      : 'bg-orange-50/80 text-med-primary group-hover:bg-med-primary group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(224,123,42,0.3)]'
                    }
                  `}
                >
                  {feature.id}
                </div>

                {/* Title */}
                <h3 
                  className={`text-[13px] md:text-[14px] lg:text-[15px] font-black leading-tight transition-colors duration-300
                    ${feature.active ? 'text-med-ink' : 'text-med-ink group-hover:text-med-ink/80'}
                  `}
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

        {/* Quote Block (Bottom) */}
        <div 
          className={`relative max-w-4xl mx-auto mt-20 lg:mt-28 flex items-center justify-center border-l-4 border-med-primary pl-6 md:pl-8 py-2 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-[17px] md:text-[20px] font-black italic text-med-ink leading-[1.6]">
            "Having an intelligent co-pilot review every case instantly changes the game. We catch what humans naturally miss under pressure."
          </p>
        </div>

      </div>
    </section>
  )
}
