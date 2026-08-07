import { useEffect, useRef, useState } from 'react'

const DIFFERENCE_ITEMS = [
  'Automated validation against the latest clinical guidelines, every time',
  'Proactive identification of risks before they affect patient outcomes',
  'Real-time alerts for potential medication interactions and conflicts',
  'Explainable AI recommendations with clear, step-by-step reasoning',
  'Active reduction of cognitive bias in high-pressure clinical decisions',
  "Real-time clinical feedback delivered exactly when it's needed most",
];

export default function AboutDifferenceSection() {
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
      <div className="max-w-7xl mx-auto flex flex-col">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column (Text) */}
          <div className="lg:col-span-5 flex flex-col">

            {/* Eyebrow */}
            <span
              className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-6 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '50ms' }}
            >
              Why Doctors Trust MedFliq
            </span>

            {/* Heading */}
            <h2
              className={`text-3xl md:text-4xl lg:text-[42px] font-black text-med-ink leading-[1.1] tracking-tight mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Empowering Clinical Decision Making
            </h2>

            {/* Paragraphs */}
            <div
              className={`flex flex-col gap-6 text-sm md:text-[15px] text-med-slate leading-[1.7] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              <p>
                Accuracy and confidence should go together in clinical work. In practice, they often don't physicians are dealing with huge volumes of patient data, symptoms that overlap in confusing ways, and barely enough time to think it all through. One detail slips by, and treatment gets delayed.
              </p>
              <p>
                MedFliq brings in a multi-agent system that reviews clinical reasoning as it happens, checks diagnoses against evidence-based guidelines, and flags potential risks before a decision is locked in.
              </p>
              <p>
                It works alongside your expertise, not against it running quietly in the background so you can focus on delivering safer, more personalized care.
              </p>
            </div>
          </div>

          {/* Right Column (Pill Stack) */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5 w-full">
            {DIFFERENCE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`group flex items-center gap-4 lg:gap-5 bg-white/90 backdrop-blur-md rounded-full py-4 lg:py-5 px-6 lg:px-8 border border-white shadow-[0_8px_24px_rgba(44,35,25,0.03)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-med-primary/30 hover:shadow-[0_12px_30px_rgba(224,123,42,0.12)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${150 + (idx * 50)}ms` }}
              >
                {/* Orange Dot */}
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-med-primary transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(224,123,42,0.6)]"></div>

                {/* Title */}
                <h3 className="text-[14px] md:text-[15px] lg:text-[16px] font-black text-med-ink leading-tight">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
