import { useEffect, useRef, useState } from 'react'

export default function ContactHero() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full pt-16 lg:pt-24 pb-16 lg:pb-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Main Column: Text Content (Centered & Enlarged) */}
        <div className="flex flex-col lg:col-span-12 max-w-[900px] mx-auto items-center text-center">
          
          {/* Eyebrow */}
          <div 
            className={`flex items-center justify-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="w-2 h-2 rounded-full bg-med-primary shadow-[0_0_8px_rgba(224,123,42,0.6)]"></div>
            <span className="text-xs sm:text-[13px] font-bold text-med-primary uppercase tracking-[0.2em]">
              CONNECT WITH US
            </span>
          </div>

          {/* Heading */}
          <h1 
            className={`text-5xl sm:text-6xl md:text-[60px] lg:text-[64px] xl:text-[70px] font-black text-med-ink leading-[1] tracking-tight mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Building the Future of <br />
            <span className="text-med-primary italic text-[0.9em]">Intelligent </span>
            <span className="text-med-primary italic relative inline-block text-[0.9em]">
              Healthcare.
            </span>
          </h1>

          {/* Paragraph */}
          <p 
            className={`text-lg md:text-xl text-med-slate leading-relaxed max-w-[720px] font-medium transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '450ms' }}
          >
            From hospitals to healthcare innovators, we collaborate with organizations ready to redefine care delivery through connected intelligence.
          </p>
          
        </div>



      </div>
    </section>
  )
}
