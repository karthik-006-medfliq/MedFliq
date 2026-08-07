import ServicesHeroOrbit from './ServicesHeroOrbit'

export default function ServicesHero() {
  const checkList = [
    'Comprehensive patient data analysis',
    'Cross-referencing overlapping symptoms',
    'Transparent clinical reasoning',
  ]

  return (
    <section id="services-hero" className="relative pt-[5px] pb-24 lg:pt-[5px] lg:pb-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* ── Left Column: Content ── */}
          <div className="flex flex-col max-w-3xl lg:ml-6 xl:ml-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 service-hero-reveal">
              <span className="w-[7px] h-[7px] rounded-full bg-med-primary"></span>
              <span className="text-[9px] sm:text-[10px] font-black text-med-primary tracking-[0.2em] uppercase">
                Our Capabilities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[34px] sm:text-[43px] lg:text-[53px] xl:text-[58px] font-black text-med-ink leading-[1.05] tracking-tight mb-6 service-hero-reveal service-hero-delay-1">
              Agentic AI Co-Pilot <br className="hidden lg:block" />
              Built for Diagnostic <br className="hidden lg:block" />
              <span className="text-med-primary italic">Accuracy.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[15px] sm:text-[16px] lg:text-[14px] text-med-slate font-medium leading-relaxed mb-8 max-w-[440px] service-hero-reveal service-hero-delay-2">
               Time limits. Complex histories. Overlapping symptoms. That's a lot to navigate when making critical decisions. MedFliq brings a team of specialized AI agents into your workflow, validating reasoning and catching risks so you can deliver safer patient care.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {checkList.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3.5 service-hero-reveal service-hero-delay-${index + 3}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary shrink-0">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-[14px] lg:text-[13px] font-bold text-med-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Column: Animated Card Stack ── */}
          <div className="lg:ml-12 xl:ml-20">
            <ServicesHeroOrbit />
          </div>

        </div>
      </div>
    </section>
  )
}
