export default function ServicesOverviewSection() {
  return (
    <section id="services-overview" className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      {/* Container aligned with the global layout */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Centered content wrapper */}
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Eyebrow */}
          <div className="mb-6 sm:mb-8 services-overview-reveal services-overview-delay-1">
            <span className="inline-flex items-center justify-center rounded-full bg-white/60 border border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-med-primary">
              Clinic Overview
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[68px] font-black text-med-ink leading-[1.05] tracking-tight mb-8 sm:mb-10 max-w-[1100px] services-overview-reveal services-overview-delay-2">
            How Clinics Thrive <br className="hidden md:block" />
            with a Single Platform <br className="hidden md:block" />
            <span className="text-med-primary italic pr-2">Every Day.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-med-slate leading-[1.8] max-w-[900px] lg:max-w-[980px] mx-auto services-overview-reveal services-overview-delay-3">
            Every clinic runs into the same walls. Scheduling gets messy, records end up scattered across three different tools, staff coordination happens over text and sticky notes, and billing falls behind because nobody has time to catch up. We built one platform that handles all of it, so your clinicians get back to focusing on patients and the rest of the team isn't stuck putting out fires all day.
          </p>

        </div>
      </div>
    </section>
  )
}
