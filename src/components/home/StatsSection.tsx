import { useEffect, useRef, useState } from 'react'
import StatCard from '../ui/StatCard'

export default function StatsSection() {
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
  const stats = [
    {
      title: '24/7',
      labelLine1: 'AI Clinical',
      labelLine2: 'Assistance',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: 'Unified',
      labelLine1: 'Hospital Intelligence',
      labelLine2: 'Layer',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Real-Time',
      labelLine1: 'Clinical Decision',
      labelLine2: 'Support',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      title: 'End-to-End',
      labelLine1: 'Hospital Workflow',
      labelLine2: 'Automation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
  ]

  return (
    <section id="stats" ref={sectionRef} className="relative w-full px-4 sm:px-6 md:px-12 -mt-16 sm:-mt-24 z-20 pb-12">
      <div className={`group max-w-[1700px] mx-auto relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Soft Ambient Glow Behind Container */}
        <div className="absolute inset-0 bg-med-primary/10 blur-3xl rounded-[40px] md:rounded-[80px] -z-10 translate-y-4 scale-[0.98] transition-all duration-700 group-hover:bg-med-primary/15 group-hover:scale-100" />
        
        {/* Main Glass Container */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[40px] md:rounded-[80px] shadow-[0_30px_90px_rgba(44,35,25,0.10)] px-6 py-8 sm:py-16 lg:py-20 relative z-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_40px_100px_rgba(44,35,25,0.15)]">
        
        {/* Container for the 4 items with partial vertical dividers on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex items-center flex-1 w-full relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + (i * 150)}ms` }}
            >
              <div className="w-full">
                <StatCard 
                  title={stat.title}
                  labelLine1={stat.labelLine1}
                  labelLine2={stat.labelLine2}
                  icon={stat.icon}
                />
              </div>
              
              {/* Vertical divider (visible only on lg screens, except for the last item) */}
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-med-primary/10"></div>
              )}
            </div>
          ))}
        </div>

        </div>

      </div>
    </section>
  )
}
