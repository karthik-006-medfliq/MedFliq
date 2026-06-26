import type { TermsSectionData } from '../../data/termsData'
import { getIconForSection } from '../../data/termsIcons'
import { useEffect, useRef } from 'react'
import React from 'react'

interface TermsSectionProps {
  section: TermsSectionData
  index: number
  onIntersect: (id: string) => void
}

export default function TermsSection({ section, index, onIntersect }: TermsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    const container = document.getElementById('terms-content-scroll')
    
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

  // Sequential delay up to 5 elements (100ms, 200ms, ... 500ms)
  const delayClass = `terms-delay-${(index % 5 + 1) * 100}`
  
  const sectionIcon = getIconForSection(index)

  const transformedHtml = section.html
    .replace(/text-primary/g, 'text-med-primary')
    .replace(/bg-primary/g, 'bg-med-primary')
    .replace(/border-primary/g, 'border-med-primary')
    .replace(/text-foreground/g, 'text-med-ink')
    .replace(/text-slate-gray/g, 'text-med-slate')
    .replace(/bg-accent/g, 'bg-med-accent')

  return (
    <section
      id={section.id}
      ref={sectionRef}
      className={`bg-white/80 backdrop-blur-xl rounded-[40px] p-8 sm:p-12 border border-slate-100 shadow-premium terms-reveal ${delayClass}`}
    >
      <div className="flex items-start gap-6 sm:gap-8 mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/50 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-med-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {React.createElement(sectionIcon, { className: "w-6 h-6 text-med-primary relative z-10" })}
        </div>
        <div>
          <span className="inline-block text-[9px] sm:text-[10px] font-black text-med-primary/80 uppercase tracking-widest mb-2">
            Section {(index + 1).toString().padStart(2, '0')}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-med-ink tracking-tight">
            {section.title}
          </h2>
        </div>
      </div>
      
      <div 
        className="space-y-4 text-sm sm:text-base text-med-slate leading-relaxed font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:pl-1 [&_a]:text-med-primary [&_a:hover]:underline [&_h3]:text-med-ink [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mt-6"
        dangerouslySetInnerHTML={{ __html: transformedHtml }}
      />
    </section>
  )
}
