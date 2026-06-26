import { useState } from 'react'
import PrivacySidebar from './PrivacySidebar'
import PrivacyContent from './PrivacyContent'
import { privacyData } from '../../data/privacyData'

export default function PrivacyLayout() {
  const [activeSection, setActiveSection] = useState<string>(privacyData[0]?.id || '')

  const handleIntersect = (id: string) => {
    setActiveSection(id)
  }

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 bg-transparent overflow-hidden min-h-screen">
      <div className="absolute top-[-10%] left-[-5%] -z-10 w-[50%] h-[60%] bg-med-accent/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[0%] right-[-5%] -z-10 w-[40%] h-[50%] bg-med-blue/5 blur-[100px] rounded-full"></div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-med-accent/20 border border-med-primary/10 shadow-sm privacy-reveal">
          <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-med-primary">
            Last Updated: May 2026
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-foreground leading-[1.2] sm:leading-tight mb-4 sm:mb-6 tracking-tight privacy-reveal privacy-delay-100">
          Privacy Policy – <span className="text-med-primary italic">Medfliq</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-med-slate max-w-2xl mx-auto leading-relaxed font-semibold privacy-reveal privacy-delay-200">
          At Medfliq, protecting your personal information and maintaining your trust are important to us. This Privacy Policy explains how Medfliq and its affiliated entities collect, use, process, store, and safeguard information when you access our website, applications, platforms, products, or services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-med-accent/10 backdrop-blur-md border border-med-primary/10 shadow-premium privacy-reveal privacy-delay-300">
          <p className="text-xs sm:text-sm md:text-base text-foreground font-semibold leading-relaxed">
            By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the practices described herein. This Privacy Policy may be updated periodically, and continued use of our services after any changes indicates your acceptance of those updates.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <PrivacySidebar 
            sections={privacyData} 
            activeSection={activeSection} 
          />
          <PrivacyContent 
            sections={privacyData} 
            onIntersect={handleIntersect} 
          />
        </div>
      </div>
    </section>
  )
}
