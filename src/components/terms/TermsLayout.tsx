import { useState, useCallback } from 'react'
import TermsSidebar from './TermsSidebar'
import TermsContent from './TermsContent'
import { termsData } from '../../data/termsData'

export default function TermsLayout() {
  const [activeSection, setActiveSection] = useState<string>(termsData[0]?.id || '')

  const handleIntersect = useCallback((id: string) => {
    setActiveSection(id)
  }, [])

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 bg-transparent overflow-hidden min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 relative z-10 text-center lg:text-left terms-reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-med-primary animate-pulse"></span>
          <span className="text-[10px] font-black tracking-widest uppercase text-med-primary">Legal & Compliance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-med-ink tracking-tight mb-4 sm:mb-6">
          Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-primary to-orange-400">Conditions</span>
        </h1>
        <p className="text-base sm:text-lg text-med-slate max-w-2xl mx-auto lg:mx-0 font-medium">
          Please read these terms carefully before using our platform. They outline your rights and responsibilities when engaging with Medfliq.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <TermsSidebar 
            sections={termsData} 
            activeSection={activeSection} 
          />
          <TermsContent 
            sections={termsData} 
            onIntersect={handleIntersect} 
          />
        </div>
      </div>
    </section>
  )
}
