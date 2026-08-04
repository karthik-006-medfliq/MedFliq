import { useEffect, useRef, useState } from 'react'

const DIFFERENCE_ITEMS = [
  'Streamlined appointment flow',
  'Secure, unified patient records',
  'Instant team collaboration',
  'Accurate, automated billing',
  'Scalable practice infrastructure',
  'Real-time performance insights',
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
              Why Clinics Trust MedFliq
            </span>

            {/* Heading */}
            <h2
              className={`text-3xl md:text-4xl lg:text-[42px] font-black text-med-ink leading-[1.1] tracking-tight mb-8 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Empowering Daily Clinic Success
            </h2>

            {/* Paragraphs */}
            <div
              className={`flex flex-col gap-6 text-sm md:text-[15px] text-med-slate leading-[1.7] font-medium transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              <p>
                Patient care and smooth operations should go hand in hand. In practice, they often don't. Booking, records, billing, follow-ups one weak link and the whole day gets harder for everyone, staff and patients alike.
              </p>
              <p>
                MedFliq puts scheduling, records, billing, and team communication under one roof. Manual handoffs go away. So do the errors that tend to slip through when three different systems don't talk to each other.
              </p>
              <p>
                It also grows with you new location, more staff, another service line, whatever comes next. No rebuilding from scratch, no disruption.
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
