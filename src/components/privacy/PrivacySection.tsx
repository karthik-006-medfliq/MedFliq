import type { PrivacySectionData } from '../../data/privacyData'
import { getIconForSection } from '../../data/privacyIcons'
import { useEffect, useRef } from 'react'
import React from 'react'

interface PrivacySectionProps {
  section: PrivacySectionData
  index: number
  onIntersect: (id: string) => void
}

export default function PrivacySection({ section, index, onIntersect }: PrivacySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    const container = document.getElementById('privacy-content-scroll')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(section.id)
          }
        })
      },
      {
        root: container,
        rootMargin: '-10% 0px -80% 0px', // Adjusted for scroll container
        threshold: 0
      }
    )

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [section.id, onIntersect])

  // Animation delay utility class
  const delayClass = `privacy-delay-${(index % 5 + 1) * 100}`
  
  const sectionIcon = getIconForSection(index)

  const transformedHtml = section.html
    .replace(/text-primary/g, 'text-med-primary')
    .replace(/bg-primary/g, 'bg-med-primary')
    .replace(/border-primary/g, 'border-med-primary')
    .replace(/text-foreground/g, 'text-med-ink')
    .replace(/text-slate-gray/g, 'text-med-slate')
    .replace(/bg-accent/g, 'bg-med-accent')

  return (
    <div
      ref={sectionRef}
      id={section.id}
      className={`bg-white/80 p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[40px] border border-slate-200/60 shadow-premium scroll-mt-24 group hover:border-med-accent/60 hover:shadow-2xl transition-all duration-300 privacy-reveal ${delayClass}`}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-med-accent/20 text-med-primary flex items-center justify-center shrink-0">
          {React.createElement(sectionIcon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
        </div>
        <div>
          <span className="text-[9px] sm:text-[10px] font-black text-med-primary/80 uppercase tracking-widest">
            Section {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-med-ink tracking-tight">
            {section.title}
          </h2>
        </div>
      </div>
      
      <div 
        className="space-y-4 text-xs sm:text-sm text-med-slate leading-relaxed font-semibold privacy-html-content"
        dangerouslySetInnerHTML={{ __html: transformedHtml }}
      />
    </div>
  )
}
