import CardSwap, { Card } from '../effects/CardSwap'

export const audienceCardsData = [
  {
    title: "Doctors & Clinical Teams",
    description: "AI-assisted clinical intelligence that supports faster and more informed medical decisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
        <path d="M8 15v8"/>
        <path d="M16 2v6a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1"/>
      </svg>
    )
  },
  {
    title: "Nursing & Operational Staff",
    description: "Coordinated workflows and intelligent task management designed to reduce operational friction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: "Laboratories & Diagnostic Teams",
    description: "Connected diagnostics and streamlined information flow across hospital systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
        <path d="M10 2v7.31"/>
        <path d="M14 9.3V1.99"/>
        <path d="M8.5 2h7"/>
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>
        <path d="M5.52 16h12.96"/>
      </svg>
    )
  },
  {
    title: "Hospital Administration",
    description: "Centralized visibility, operational intelligence, and scalable workflow management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-med-primary transition-transform duration-300 group-hover:scale-110">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    )
  }
]

export default function ServicesAudienceCardSwap() {
  return (
    <CardSwap 
      width={520} 
      height={360} 
      cardDistance={48} 
      verticalDistance={58} 
      delay={3000}
      pauseOnHover={true}
      skewAmount={2}
      easing="power1.inOut"
    >
      {audienceCardsData.map((card, index) => (
        <Card 
          key={index} 
          customClass="p-8 lg:p-10 flex flex-col items-start text-left cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 mb-6">
            {card.icon}
          </div>
          
          <h3 className="text-[20px] lg:text-[24px] font-black text-med-ink leading-snug mb-4">
            {card.title}
          </h3>
          
          <p className="text-[16px] lg:text-[18px] text-med-slate font-medium leading-relaxed">
            {card.description}
          </p>
        </Card>
      ))}
    </CardSwap>
  )
}
