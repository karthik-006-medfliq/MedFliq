import { useEffect, useRef, useState } from 'react'

export default function AboutApproachSection() {
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
      <div className="max-w-[1200px] mx-auto">
        
        {/* Massive Glass Container */}
        <div 
          className={`relative bg-white/90 backdrop-blur-xl border border-white rounded-[32px] md:rounded-[48px] lg:rounded-[64px] py-10 md:py-14 lg:py-16 px-6 md:px-8 flex flex-col items-center text-center shadow-[0_16px_40px_rgba(44,35,25,0.03)] hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(44,35,25,0.06)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          
          {/* Eyebrow */}
          <span 
            className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '50ms' }}
          >
            OUR CLINIC STORY
          </span>

          {/* Heading */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-[42px] font-black text-med-ink leading-[1.1] tracking-tight mb-10 md:mb-12 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Why We Built MedFliq for<br className="hidden md:block" /> Modern Clinics
          </h2>

          {/* Content Wrapper for better alignment */}
          <div className="flex flex-col gap-6 max-w-[950px] items-center">
            {/* Paragraphs */}
            <p 
              className={`text-[15px] md:text-[17px] text-med-slate leading-[1.7] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '150ms' }}
            >
              Managing a clinic often means balancing patient care with countless administrative responsibilities. Appointments, medical records, billing, staff coordination, and follow-ups all compete for attention throughout the day.
            </p>
            <p 
              className={`text-[15px] md:text-[17px] text-med-slate leading-[1.7] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Our goal is simple: make everyday work easier so healthcare professionals can spend more time delivering quality care and less time managing paperwork.
            </p>

            {/* Orange Italic Line */}
            <p 
              className={`mt-4 md:mt-6 text-[17px] md:text-[19px] font-black italic text-med-primary transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '250ms' }}
            >
              Whether it's an independent practice or a growing multi-specialty clinic, MedFliq is designed to support the way clinics actually operate.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
