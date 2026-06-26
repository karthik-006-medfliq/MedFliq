import ServicesAudienceCardSwap, { audienceCardsData } from './ServicesAudienceCardSwap'

export default function ServicesAudienceSection() {
  return (
    <section id="services-audience" className="relative pt-0 pb-16 lg:pt-0 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col max-w-xl">
            <h4 className="text-[11px] sm:text-[12px] font-bold text-med-primary uppercase tracking-[0.2em] mb-4">
              WHO WE SERVE
            </h4>
            
            <h2 className="text-[42px] sm:text-[48px] lg:text-[56px] font-black text-med-ink leading-tight mb-6">
              Designed For Every Layer Of Modern Healthcare
            </h2>

            <p className="text-med-slate text-base md:text-lg leading-relaxed font-medium max-w-md">
              MedFliq’s ecosystem is custom-built to support the distinct needs of every healthcare professional from frontline clinicians to administrative leaders ensuring seamless collaboration and improved patient outcomes across the entire organization.
            </p>
          </div>

          {/* Right Column: CardSwap (Desktop) */}
          <div className="hidden lg:block relative h-[560px] w-full mt-10">
            <ServicesAudienceCardSwap />
          </div>

          {/* Right Column: Stacked Cards (Mobile / Tablet Fallback) */}
          <div className="flex lg:hidden flex-col gap-6 w-full mt-6">
            {audienceCardsData.map((card, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-8 border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col w-full"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 mb-6">
                  {card.icon}
                </div>
                <h3 className="text-[20px] font-black text-med-ink leading-snug mb-4">
                  {card.title}
                </h3>
                <p className="text-[16px] text-med-slate font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
