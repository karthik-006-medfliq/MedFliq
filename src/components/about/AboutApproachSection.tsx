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
          className={`relative bg-white/90 backdrop-blur-xl border border-white rounded-[40px] md:rounded-[64px] lg:rounded-[80px] py-16 md:py-24 lg:py-32 px-6 md:px-12 flex flex-col items-center text-center shadow-[0_16px_40px_rgba(44,35,25,0.03)] hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(44,35,25,0.06)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          
          {/* Eyebrow */}
          <span 
            className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '50ms' }}
          >
            OUR APPROACH
          </span>

          {/* Heading */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-[42px] font-black text-med-ink leading-[1.1] tracking-tight mb-10 md:mb-12 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Built With Long-Term Healthcare<br className="hidden md:block" /> Transformation In Mind
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 max-w-[800px] items-center">
            <p 
              className={`text-[15px] md:text-[17px] text-med-slate leading-[1.7] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '150ms' }}
            >
              MedFliq is driven by the belief that healthcare systems deserve technology designed around intelligence, collaboration, and operational clarity.
            </p>
            <p 
              className={`text-[15px] md:text-[17px] text-med-slate leading-[1.7] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              We work at the intersection of healthcare, artificial intelligence, and system design to build infrastructure capable of supporting the future demands of modern medicine.
            </p>
          </div>

          {/* Orange Italic Line */}
          <p 
            className={`mt-10 md:mt-12 text-[17px] md:text-[19px] font-black italic text-med-primary transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '250ms' }}
          >
            Our focus is not simply digitization, but intelligent transformation.
          </p>

        </div>

      </div>
    </section>
  )
}
