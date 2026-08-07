import { useEffect, useRef, useState } from 'react'
import AboutHeroImageVisual from './AboutHeroImageVisual'

export default function AboutHero() {
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
      className="relative w-full pt-2 lg:pt-6 pb-10 lg:pb-16 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Text & Stats */}
        <div className="flex flex-col lg:col-span-6 lg:pr-4 xl:pl-12">

          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '50ms' }}
          >
            <div className="w-2 h-2 rounded-full bg-med-primary shadow-[0_0_8px_rgba(224,123,42,0.6)]"></div>
            <span className="text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em]">
              ABOUT MEDFLIQ
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl md:text-[52px] lg:text-[60px] font-black text-med-ink leading-[0.98] tracking-tight mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Elevating
            <br />
            <span className="text-med-primary italic">Diagnostic Accuracy.</span>
          </h1>

          {/* Paragraph */}
          <p
            className={`text-sm md:text-[15px] text-med-slate leading-relaxed max-w-[500px] font-medium mb-12 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            Misdiagnosis hasn't gone away. If anything it's gotten harder to catch. Doctors see patients for less time than they used to, histories often stretch across years and different providers who never talked to each other, and biases quietly shape decisions long before anyone stops to question them. MedFliq works alongside doctors as a clinical co-pilot a set of specialized AI agents that check patient data against medical guidelines in real time, so the details that matter don't get lost in the noise.
          </p>

          {/* Stats Block */}
          <div
            className={`flex flex-wrap gap-12 sm:gap-16 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-[34px] font-black text-med-primary leading-none mb-2">Multi</span>
              <span className="text-[9px] font-bold text-med-ink uppercase tracking-widest">AGENT ANALYSIS</span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-[34px] font-black text-med-primary leading-none mb-2">24/7</span>
              <span className="text-[9px] font-bold text-med-ink uppercase tracking-widest">CLINICAL SUPPORT</span>
            </div>
          </div>

        </div>

        {/* Right Column: Orbit Visual */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <AboutHeroImageVisual isVisible={isVisible} />
        </div>

      </div>
    </section>
  )
}
