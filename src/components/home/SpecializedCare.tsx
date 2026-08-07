import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function SpecializedCare() {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const departments = [
    {
      title: 'Complex Cases',
      description: 'Complicated histories. Overlapping symptoms. The platform helps doctors work through both, so diagnoses land closer to right the first time.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      title: 'Routine Consultations',
      description: 'High patient volume makes it easy for bias or rushed judgment to creep in. Real-time checks help keep every visit even the routine ones as sharp as the first.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Preventative Care',
      description: "Unaddressed risks and gaps in documentation don't stay small they compound. The platform flags them early, before they turn into adverse events.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
          <path d="M10 3h4a2 2 0 0 1 2 2v2h-8V5a2 2 0 0 1 2-2zM3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
          <path d="M12 11v6M9 14h6"></path>
        </svg>
      )
    }
  ]

  return (
    <section 
      id="specialized-care" 
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 md:px-12 py-16 lg:py-20 z-10 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Block (Stacked Layout) */}
        <div 
          className={`flex flex-col items-start gap-6 mb-16 lg:mb-24 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em]">
                DIAGNOSTIC SUPPORT
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-med-ink tracking-tight mb-6">
              Safer, More Accurate<br />
              <span className="text-med-primary">Care for Every Patient.</span>
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-med-slate text-base md:text-lg leading-relaxed font-medium">
              Collaborative AI intelligence, built into your workflow, to cut down diagnostic errors, support clinical decisions, and improve outcomes across every case doctors see.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className={`group bg-[#FAF7F2] backdrop-blur-xl border border-white/80 rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-10 flex flex-col shadow-[0_20px_60px_rgba(44,35,25,0.03)] min-h-0 md:min-h-[400px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(44,35,25,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              {/* Icon Bubble */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-10 group-hover:-translate-y-1 transition-transform duration-300">
                {dept.icon}
              </div>

              {/* Text Content */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-xl md:text-2xl font-black text-med-ink mb-3 md:mb-4 leading-tight group-hover:text-med-primary transition-colors duration-300">
                  {dept.title}
                </h3>
                <p className="text-med-slate text-sm leading-relaxed font-medium">
                  {dept.description}
                </p>
              </div>

              {/* Learn More Button */}
              <Link to="/services" className="mt-auto group/btn cursor-pointer inline-flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover/btn:translate-x-1 group-hover/btn:bg-med-primary transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-ink group-hover/btn:text-white transition-colors duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <span className="font-bold text-sm text-med-ink tracking-wide uppercase transition-colors duration-300">
                  Learn More
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
