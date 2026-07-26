import { useEffect, useRef, useState } from 'react'

const VISION_CARDS = [
  {
    title: 'Fragmented Clinic Tools',
    description: 'Clinics juggle multiple apps, spreadsheets, and paper forms daily, creating friction that slows patient care and burdens staff.',
    highlight: true,
  },
  {
    title: 'Connected Clinic Workflow',
    description: 'A single platform unifies appointments, records, and billing, giving every team member instant access to up‑to‑date patient information.',
    highlight: true,
  },
  {
    title: 'Intelligent Clinic Automation',
    description: 'Automation takes care of routine tasks like scheduling, reminders, and billing entries, so staff can focus on care instead of paperwork.',
    highlight: true,
  },
  {
    title: 'Coordinated Patient Care',
    description: 'Real‑time context and streamlined hand‑offs let clinicians move patients smoothly from consult to follow‑up, reducing errors and wait times.',
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
            Modern Clinical Operations
          </h2>

          {/* Paragraphs */}
          <div 
            className={`flex flex-col gap-4 text-[13px] md:text-[15px] text-med-slate leading-[1.6] font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p>
              Managing a clinic often means balancing patient care with intense administrative responsibilities. Appointments, medical records, billing, and follow-ups all compete for your attention.
            </p>
            <p>
              Instead of relying on disconnected systems or manual processes, clinics need a way to manage their daily operations from one secure platform without adding friction.
            </p>
            <p>
              MedFliq was created to solve this foundational problem.
            </p>
            <p>
              We envision a future where every clinic, regardless of its size, has access to practical technology that improves efficiency, supports healthcare teams, and strengthens patient relationships.
            </p>
          </div>

          {/* Italic Line */}
          <p 
            className={`text-[17px] md:text-[20px] font-black italic text-med-ink mt-8 mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            That vision became MedFliq.
          </p>

          {/* Final Paragraph */}
          <p 
            className={`text-[13px] md:text-[15px] text-med-slate leading-relaxed font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            A comprehensive healthcare platform designed not as another software layer, but as the central infrastructure connecting your entire clinic.
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
