import { useEffect, useRef, useState } from 'react'

const VISION_CARDS = [
  {
    title: 'Information Overload',
    description: "Patient data keeps piling up in modern healthcare, and doctors are stuck manually cross-referencing complex histories in whatever time a consultation allows. That's a recipe for missed details and missed details lead to misdiagnosis.",
    highlight: true,
  },
  {
    title: 'Multi-Agent Collaboration',
    description: 'MedFliq runs specialized AI agents in parallel, each checking a different piece of the picture symptoms, medications, history against current medical guidelines in real time.',
    highlight: true,
  },
  {
    title: 'Mitigating Cognitive Bias',
    description: "Even good doctors make worse decisions under pressure; that's just how human judgment works. MedFliq's AI co-pilot acts as an objective second opinion, catching the details that get overlooked before they turn into real errors.",
    highlight: true,
  },
  {
    title: 'Clear AI Reasoning',
    description: "Trust matters more than accuracy alone. That's why MedFliq shows its work every suggestion comes with clear, step-by-step reasoning, so physicians stay fully in control of patient care, not just following along.",
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
            Our Vision for the Future of<br className="hidden md:block" />
            Diagnostic Accuracy
          </h2>

          {/* Paragraphs */}
          <div 
            className={`flex flex-col gap-4 text-[13px] md:text-[15px] text-med-slate leading-[1.6] font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p>
              There's only so much a doctor can hold in their head. Medical data keeps piling up, consultation windows keep shrinking, and symptoms rarely point cleanly to one answer. Miss a single detail buried in a complicated history, and treatment gets delayed or gets it wrong entirely.
            </p>
            <p>
              Right now, doctors are mostly left to catch every risk factor themselves, on top of seeing more patients than ever. What they're missing isn't another tool to manage. It's a system that actually thinks alongside them.
            </p>
          </div>

          {/* Italic Line */}
          <p 
            className={`text-[17px] md:text-[20px] font-black italic text-med-ink mt-8 mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            That's what MedFliq set out to build.
          </p>

          {/* Final Paragraph */}
          <div 
            className={`flex flex-col gap-4 text-[13px] md:text-[15px] text-med-slate leading-relaxed font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <p>
              Every clinician should have a partner in their corner something that checks decisions against real evidence, catches what fatigue might miss, and lightens the mental load without getting in the way. That's the idea MedFliq grew out of.
            </p>
            <p>
              Not an assistant bolted onto a workflow. A multi-agent clinical co-pilot, built so doctors can diagnose with real confidence, not guesswork.
            </p>
            <p>
              It keeps up too. The platform learns continuously from global medical literature, so its guidance stays current which means a physician in a small clinic has access to the same caliber of diagnostic intelligence as one at a major hospital, regardless of specialty.
            </p>
            <p>
              Where we're headed: a future where preventable diagnostic errors simply stop happening. Give doctors the tools to handle complexity without wearing them down, and patient care gets safer for everyone.
            </p>
          </div>
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
