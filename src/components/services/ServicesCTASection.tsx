import { Link } from 'react-router-dom'

export default function ServicesCTASection() {
  return (
    <section id="services-cta" className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        
        <h2 className="services-cta-reveal services-cta-delay-100 text-[40px] sm:text-[56px] lg:text-[72px] font-black text-med-ink leading-[1.05] tracking-tight mb-8">
          Transform Your Hospital With <br className="hidden sm:block" />
          <span className="text-med-primary">Intelligent Healthcare</span> <br className="hidden sm:block" />
          <span className="text-med-primary">Infrastructure</span>
        </h2>

        <p className="services-cta-reveal services-cta-delay-200 text-[18px] sm:text-[20px] text-med-slate font-medium leading-relaxed max-w-[720px] mb-12">
          Bring clinical intelligence, operational automation, and connected healthcare workflows into one unified ecosystem with Fliq 360.
        </p>

        <Link 
          to="/contact" 
          className="services-cta-reveal btn-shine services-cta-delay-300 w-full sm:w-auto inline-flex items-center justify-center rounded-full px-12 py-5 bg-[#e8751a] text-[16px] sm:text-[18px] text-white font-bold shadow-[0_16px_35px_rgba(232,117,26,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(232,117,26,0.35)]"
        >
          <span className="relative z-10">Talk To Our Team</span>
        </Link>
        
      </div>
    </section>
  )
}
