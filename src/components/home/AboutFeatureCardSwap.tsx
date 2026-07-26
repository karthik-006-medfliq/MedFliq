import CardSwap, { Card } from '../effects/CardSwap'

export const aboutCardsData = [
  {
    label: 'REAL-TIME',
    description: 'Handle patient consultations and coordinate clinic workflows instantly, eliminating delays.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    label: 'SECURE',
    description: 'Robust security that keeps patient records safe and fully compliant with regulations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  },
  {
    label: 'UNIFIED',
    description: 'A single, reliable system that links EMRs, billing, and daily clinic workflows seamlessly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  {
    label: 'INTELLIGENT',
    description: 'Designed with intelligent tools that actively support your clinic staff at every step.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  },
]

export default function AboutFeatureCardSwap() {
  return (
    <CardSwap 
      width="min(100%, 420px)" 
      height={320} 
      cardDistance={40} 
      verticalDistance={48} 
      delay={3000}
      pauseOnHover={true}
      skewAmount={2}
      easing="power1.inOut"
    >
      {aboutCardsData.map((card, index) => (
        <Card 
          key={index} 
          customClass="p-8 flex flex-col items-start text-left cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 mb-6">
            {card.icon}
          </div>
          
          <h3 className="text-[18px] font-black text-med-ink uppercase tracking-[0.1em] mb-3">
            {card.label}
          </h3>
          
          <p className="text-[15px] text-med-slate font-medium leading-relaxed">
            {card.description}
          </p>
        </Card>
      ))}
    </CardSwap>
  )
}
