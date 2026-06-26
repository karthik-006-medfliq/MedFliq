export default function LegacyServicesHeroImage() {
  return (
    <div className="relative w-full max-w-[360px] mx-auto mt-8 lg:mt-0 service-hero-reveal-scale service-hero-delay-5">

      {/* Main Image Container */}
      <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border-[5px] border-white/60 backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-500">
        <div className="absolute inset-0 bg-med-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <img
          src="/images/app-mockup.png"
          alt="MedFliq Dashboard Interface"
          className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Floating Card: Heart Rate (Top Right) */}
      <div className="absolute top-8 -right-2 sm:-right-8 lg:-right-10 z-20 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-white px-3 sm:px-4 py-2 flex items-center gap-2 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 service-hero-reveal service-hero-delay-6">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        <div>
          <div className="text-[6px] sm:text-[7px] font-black text-med-slate uppercase tracking-[0.15em] mb-0.5">Heart Rate</div>
          <div className="text-[12px] sm:text-[13px] font-black text-med-ink leading-none">72 BPM</div>
        </div>
      </div>

      {/* Floating Card: Blood Oxygen (Bottom Left) */}
      <div className="absolute bottom-10 -left-2 sm:-left-8 lg:-left-10 z-20 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-white px-3 sm:px-4 py-2 flex items-center gap-2 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 service-hero-reveal service-hero-delay-7">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div>
          <div className="text-[6px] sm:text-[7px] font-black text-med-slate uppercase tracking-[0.15em] mb-0.5">Blood Oxygen</div>
          <div className="text-[12px] sm:text-[13px] font-black text-med-ink leading-none">98%</div>
        </div>
      </div>

    </div>
  )
}
