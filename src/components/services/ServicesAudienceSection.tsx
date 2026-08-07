import ServicesAudienceCardSwap from './ServicesAudienceCardSwap'

export default function ServicesAudienceSection() {
  return (
    <section id="services-audience" className="relative pt-0 pb-16 lg:pt-0 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col max-w-xl">
            <h4 className="text-[11px] sm:text-[12px] font-bold text-med-primary uppercase tracking-[0.2em] mb-4">
                WHO BENEFITS
            </h4>
            
            <h2 className="text-[42px] sm:text-[48px] lg:text-[56px] font-black text-med-ink leading-tight mb-6">
                Tailored for Diagnosticians and Patients
            </h2>

            <p className="text-med-slate text-base md:text-lg leading-relaxed font-medium max-w-md">
                Our platform is crafted to support medical professionals, providing a reliable AI safety net that mitigates cognitive bias and ensures patients receive accurate, highly personalized care.
            </p>
          </div>



          {/* Right Column: CardSwap (Desktop) */}
          <div className="hidden lg:block relative h-[560px] w-full -mt-4">
            <ServicesAudienceCardSwap />
          </div>

          {/* Right Column: Card Swap Animation (Mobile Fallback) */}
          <div className="flex lg:hidden justify-center w-full mt-32 ml-8">
            <div className="scale-[0.70] sm:scale-[0.85] origin-top mb-0">
              <ServicesAudienceCardSwap />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
