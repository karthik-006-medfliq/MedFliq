import { useEffect, useRef, useState } from 'react'
import CoreCapabilityAnimatedCard from './CoreCapabilityAnimatedCard'

export default function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 md:px-12 py-16 lg:py-24 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Text Column (Moves to Right on Desktop, stays on top on Mobile) */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 lg:pl-8">
          <div className="lg:sticky lg:top-32">
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-4 sm:mb-6">
                PLATFORM FEATURES
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-med-ink tracking-tight mb-8">
              One AI Platform for <br className="hidden lg:block" />
              <span className="text-med-primary italic">Clinical</span>
              <br className="hidden sm:block" />
              Workflows.
            </h2>
            <p className="text-med-slate text-base md:text-lg leading-relaxed font-medium max-w-md">
              No single AI model can do it all. That's why the platform runs on specialized workflows, handling clinical data, documentation, and coordination to support physicians at every stage.
            </p>
            </div>
          </div>
        </div>

        {/* Cards Column (Moves to Left on Desktop, stays below text on Mobile) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6 lg:gap-8 order-2 lg:order-1">
          
          <div className={`transition-all duration-700 ease-out delay-100 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <CoreCapabilityAnimatedCard 
              title="AI Medical Scribe"
              description="Complex histories, scattered records, overlapping symptoms the platform pulls it all together into one clear clinical picture doctors can actually work with."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              }
            />
          </div>

          <div className={`transition-all duration-700 ease-out delay-200 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
             <CoreCapabilityAnimatedCard 
              title="Voice-Based Clinical Documentation"
              description="Clinical decisions get checked against the latest medical guidelines and research, so the accuracy holds up when it matters most."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <line x1="4" y1="10" x2="20" y2="10"></line>
                </svg>
              }
            />
          </div>

          <div className={`transition-all duration-700 ease-out delay-300 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <CoreCapabilityAnimatedCard 
              title="OPD and Outpatient Workflow Automation"
              description="Risks, medication interactions, documentation gaps the kind of things that are easy to miss under pressure get caught early, before they turn into errors."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              }
            />
          </div>

          <div className={`transition-all duration-700 ease-out delay-400 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <CoreCapabilityAnimatedCard 
              title="Hospital Coordination and Intelligence"
              description="Every diagnostic recommendation comes with the reasoning behind it, step by step. Nothing's hidden. It's a co-pilot doctors can trust, not a black box they have to take on faith."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              }
            />
          </div>

        </div>

      </div>
    </section>
  )
}
