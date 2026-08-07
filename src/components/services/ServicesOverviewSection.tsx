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
              Platform Overview
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[68px] font-black text-med-ink leading-[1.05] tracking-tight mb-8 sm:mb-10 max-w-[1100px] services-overview-reveal services-overview-delay-2">
            How Doctors Diagnose <br className="hidden md:block" />
            With AI Confidence, <br className="hidden md:block" />
            <span className="text-med-primary italic pr-2">Every Day.</span>
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-med-slate leading-[1.8] max-w-[900px] lg:max-w-[980px] mx-auto services-overview-reveal services-overview-delay-3">
            <p>
              Misdiagnosis rarely comes down to one bad decision. More often, it's what happens when a doctor has ten minutes, a stack of scattered notes, and a patient history that doesn't quite add up. Symptoms overlap. Records go missing. Even experienced clinicians can miss something under that kind of pressure.
            </p>
            <p>
              So we built something to close that gap. Rather than one AI reviewing a case, we run several agents in parallel each checking the others' reasoning, catching inconsistencies, flagging what a single pass might miss. Doctors spend less time hunting for missing pieces. More time treating the patient in front of them. With a second layer of scrutiny working quietly in the background.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
