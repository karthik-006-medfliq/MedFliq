import { useEffect, useRef, useState } from 'react'

const VISION_CARDS = [
  {
    title: 'Disconnected Systems',
    description: 'Records are scattered, and clinical teams navigate massive friction daily. Fragmented tools slow down decisions and increase coordination gaps.',
    highlight: true,
  },
  {
    title: 'Unified Intelligence',
    description: 'Fliq 360 unifies EHRs, diagnostics, and operations into one connected layer. Every department gains access to connected, real-time clinical context.',
    highlight: true,
  },
  {
    title: 'Active Assistance',
    description: 'AI agents that actively assist decisions instead of passive alerts. Intelligent support helps teams act faster with fewer manual steps.',
    highlight: true,
  },
  {
    title: 'Seamless Care',
    description: 'Safer decisions, reduced workloads, and cohesive team collaboration. Connected workflows improve continuity from diagnosis to follow-up.',
    highlight: true,
  },
]

export default function AboutVisionSection() {
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
      className="relative w-full pt-10 lg:pt-16 pb-8 lg:pb-12 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Text */}
        <div className="flex flex-col lg:col-span-7 lg:pr-8">
          
          {/* Eyebrow */}
          <div 
            className={`flex items-center gap-3 mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '50ms' }}
          >
            <span className="text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em]">
              OUR VISION
            </span>
          </div>

          {/* Heading */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-[48px] font-black text-med-ink leading-[1.1] tracking-tight mb-10 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Healthcare Should Think Faster<br className="hidden md:block" />
            Than The Complexity Around It
          </h2>

          {/* Paragraphs */}
          <div 
            className={`flex flex-col gap-4 text-[13px] md:text-[15px] text-med-slate leading-[1.6] font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p>
              Modern hospitals generate enormous amounts of clinical and operational data every second. Yet most healthcare systems remain disconnected, reactive, and heavily dependent on manual coordination.
            </p>
            <p>
              Doctors navigate fragmented records. Nurses manage operational bottlenecks. Administrative teams work across isolated systems. Critical insights are often buried beneath noise, delays, and repetitive workflows.
            </p>
            <p>
              MedFliq was created to solve this foundational problem.
            </p>
            <p>
              We envisioned a healthcare ecosystem where intelligent AI agents work silently alongside medical professionals, continuously analyzing, coordinating, documenting, and assisting in real time.
            </p>
          </div>

          {/* Italic Line */}
          <p 
            className={`text-[17px] md:text-[20px] font-black italic text-med-ink mt-8 mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            That vision became Fliq 360.
          </p>

          {/* Final Paragraph */}
          <p 
            className={`text-[13px] md:text-[15px] text-med-slate leading-relaxed font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            An AI-native healthcare platform designed not as another software layer, but as the intelligent infrastructure connecting the entire hospital.
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch relative mt-8 lg:mt-0">
          {VISION_CARDS.map((card, idx) => (
            <div key={idx} className="h-full">
              <div 
                className={`h-full flex flex-col bg-white/90 backdrop-blur-md rounded-[28px] md:rounded-[36px] p-6 md:p-9 lg:p-10 border border-white shadow-[0_16px_40px_rgba(44,35,25,0.03)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-med-primary/30 hover:shadow-[0_20px_40px_rgba(224,123,42,0.12)] min-h-[200px] md:min-h-[260px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${150 + (idx * 50)}ms` }}
              >
                <h3 className={`text-[19px] md:text-[21px] font-black mb-3 ${card.highlight ? 'text-med-primary' : 'text-med-ink'}`}>
                  {card.title}
                </h3>
                <p className="text-sm md:text-[15px] text-med-slate leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
