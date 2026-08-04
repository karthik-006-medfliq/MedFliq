import { useEffect, useRef, useState } from 'react'

const VISION_CARDS = [
  {
    title: 'Fragmented Clinic Tools',
    description: 'Most clinics run on patchwork an app for this, a spreadsheet for that, paper forms filling in the gaps. It adds up. Staff spend more time managing tools than managing patients, and care slows down as a result.',
    highlight: true,
  },
  {
    title: 'Connected Clinic Workflow',
    description: 'Put appointments, records, and billing in one place and something changes: anyone on your team can pull up the right patient info, right when they need it. No digging through three systems to find one answer.',
    highlight: true,
  },
  {
    title: 'Intelligent Clinic Automation',
    description: 'Nobody went into healthcare to enter billing codes. Automation handles the scheduling, the reminders, the repetitive entries so your staff gets that time back for actual patient care.',
    highlight: true,
  },
  {
    title: 'Coordinated Patient Care',
    description: 'When a patient moves from consult to follow-up, context should move with them. Clean hand-offs mean fewer things fall through the cracks, and shorter waits for everyone.',
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
              Running a clinic means constantly splitting your attention between patient care and admin work that never really stops. Appointments need booking, records need updating, bills need sending, follow-ups need tracking and somehow it all has to happen at once.
            </p>
            <p>
              The usual fix is a pile of disconnected tools and manual workarounds. But clinics don't need more software. They need one secure place to run everything, without adding another layer of friction.
            </p>
            <p>
              That's the problem MedFliq set out to solve.
            </p>
            <p>
              We believe every clinic whether it's a single doctor's office or a multi-branch operation deserves technology that actually makes things easier, not harder. Technology that supports the people doing the work and strengthens the relationships they've built with patients.
            </p>
          </div>

          {/* Italic Line */}
          <p 
            className={`text-[17px] md:text-[20px] font-black italic text-med-ink mt-8 mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            That belief became MedFliq:
          </p>

          {/* Final Paragraph */}
          <p 
            className={`text-[13px] md:text-[15px] text-med-slate leading-relaxed font-medium max-w-[580px] transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            not just another piece of software sitting on top of your existing mess, but the infrastructure your entire clinic runs on.
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
