import { useEffect, useRef, useState } from 'react'
import AboutFeatureCardSwap from './AboutFeatureCardSwap'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const bullets = [
    'Centralized EMR for every clinic location',
    'Smart tools that assist doctors and front‑desk staff',
    'Automated workflows that cut admin friction',
    'Scalable from solo practices to multi‑branch clinics',
  ]

  return (
    <section id="about" ref={sectionRef} className="relative w-full px-4 sm:px-6 md:px-12 py-16 lg:py-20 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">
        
        {/* Left Column — Text & Checklist */}
        <div className="flex flex-col relative z-20">
          {/* Eyebrow */}
          <div className={`text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.15em] mb-4 sm:mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            ABOUT US
          </div>
          
          {/* Heading */}
          <h2 className={`text-[32px] sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-med-ink tracking-tight mb-8 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Your Clinic’s Operating System
          </h2>
          
          {/* Paragraphs */}
          <div className={`flex flex-col gap-6 text-med-slate text-base md:text-lg leading-relaxed font-medium mb-12 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p>
              Today’s clinics often juggle fragmented tools, scattered patient records, delayed appointments, and heavy admin work. MedFliq offers a single, unified platform that organizes and streamlines daily operations for your clinic.
            </p>
            <p>
              Fliq 360 brings together EMR, billing, scheduling, notes, and overall clinic workflows into one reliable ecosystem, speeding up patient intake, securing records, and enhancing collaboration across every team member.
            </p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-5">
            {bullets.map((bullet, i) => (
              <li 
                key={i} 
                className={`flex items-start gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${300 + (i * 100)}ms` }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary shrink-0 mt-[2px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <span className="text-sm md:text-base font-bold text-med-ink/90 leading-snug">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column — Cards/Gallery */}
        <div className={`relative transition-all duration-1000 ease-out h-[300px] md:h-[400px] lg:h-[480px] w-full -mt-16 lg:mt-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative w-full h-full flex justify-center lg:justify-end -ml-[120px] md:ml-0">
            <AboutFeatureCardSwap />
          </div>
        </div>

      </div>
    </section>
  )
}
