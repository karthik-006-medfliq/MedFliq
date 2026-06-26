// HeroSection — matches https://www.medfliq.com/ hero section exactly
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const showHeroImage = false;
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-start justify-center overflow-hidden pt-4 sm:pt-6 pb-12 bg-transparent"
    >
      {/* Background orbs removed to keep clean cream dotted background */}

      {/* ── Content grid ── */}
      <div className={`max-w-7xl mx-auto px-6 grid gap-12 lg:gap-16 items-center relative z-10 ${showHeroImage ? 'lg:grid-cols-2' : 'grid-cols-1 place-items-center'}`}>

        {/* ═══ Left column — text ═══ */}
        <div className={`text-center ${showHeroImage ? 'lg:text-left' : 'max-w-3xl mx-auto flex flex-col items-center'}`}>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-bold mb-6 border border-med-primary/10 shadow-premium text-med-primary min-w-[310px] max-w-full justify-center shimmer">
            <div className="w-2 h-2 rounded-full bg-med-primary animate-ping shrink-0" />
            <span className="tracking-[0.25em] uppercase font-black font-mono text-med-primary">
              AI-Native Hospital Intelligence Platform
            </span>
          </div>

          {/* Main heading — three lines */}
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-black leading-[1.1] mb-4 tracking-[-0.03em] text-med-ink">
            <span className="block mb-1">Healthcare Systems</span>
            <span className="block mb-1">That Don't Just</span>
            <span className="text-gradient-orange italic block">Store Data, They Think.</span>
          </h1>

          {/* Body paragraph */}
          <p className={`text-sm md:text-base text-med-slate mb-6 mx-auto leading-relaxed font-medium ${showHeroImage ? 'max-w-xl lg:mx-0' : 'max-w-2xl text-center'}`}>
            MedFliq transforms fragmented hospital workflows into a unified,
            intelligent care ecosystem. From clinical reasoning to operational
            coordination,{' '}
            <span className="text-med-ink font-bold">Fliq 360</span>
            {' '}empowers hospitals with AI agents that actively assist every
            decision, every department, and every patient journey.
          </p>

          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${showHeroImage ? 'lg:justify-start' : ''}`}>

            {/* Primary — orange with shimmer sweep */}
            <Link
              to="/contact"
              className="glow group btn-shine w-full sm:w-auto bg-med-primary text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0 flex items-center justify-center gap-4 overflow-hidden relative text-center"
            >
              <span className="relative z-10">Talk To Our Team</span>
            </Link>

            {/* Secondary — glass */}
            <Link
              to="/services"
              className="group w-full sm:w-auto bg-white/80 backdrop-blur-md text-med-ink px-8 py-4 rounded-full font-bold text-sm border border-slate-200 hover:border-med-primary/40 hover:bg-white hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0 flex items-center justify-center gap-3 text-center"
            >
              Explore Services
              <span className="font-mono text-base font-black shrink-0">→</span>
            </Link>
          </div>

          {/* Caption */}
          <p className={`text-xs font-bold text-med-slate mt-4 text-center ${showHeroImage ? 'lg:text-left' : ''}`}>
            Built for next-generation hospitals, clinics, and healthcare institutions.
          </p>
        </div>

        {/* ═══ Right column — hero image ═══ */}
        {showHeroImage && (
          <div className="relative lg:ml-auto max-w-[380px] lg:max-w-[420px] mx-auto w-full animate-float">
            {/* Image card */}
            <div className="relative z-10 rounded-[40px] lg:rounded-[48px] overflow-hidden shadow-2xl border-[8px] border-white">
              <img
                src="/images/hero-doctor.png"
                alt="Elite Healthcare"
                width={420}
                height={540}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Image orbs removed to keep clean cream dotted background */}
          </div>
        )}

      </div>
    </section>
  )
}
