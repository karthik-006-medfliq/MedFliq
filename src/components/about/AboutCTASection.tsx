import { useEffect, useRef, useState } from 'react'

export default function AboutCTASection() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 
          className={`text-[36px] md:text-[44px] lg:text-[54px] font-black text-med-ink leading-[1.1] tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '50ms' }}
        >
          Ready to Elevate Your<br className="hidden md:block" />
          <span className="text-med-primary"> Clinic Operations?</span>
        </h2>

        {/* Paragraph */}
        <p 
          className={`mt-6 lg:mt-8 text-[16px] md:text-[18px] lg:text-[20px] text-med-slate leading-[1.6] font-medium max-w-[700px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Whether you're just opening your first practice or scaling across several locations, MedFliq is built to grow with you with tools shaped around how clinical work actually gets done today.
        </p>

      </div>
    </section>
  )
}
