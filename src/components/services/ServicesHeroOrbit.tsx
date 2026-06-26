export default function ServicesHeroOrbit() {
  const allCards = [
    { id: 1, title: 'Patient Safety', icon: <><span className="hidden lg:inline">🛡️</span><span className="lg:hidden">🩺</span></>, angle: 0 },
    { id: 4, title: 'Unified EHR', icon: '🏥', angle: 60 },
    { id: 2, title: 'Smart Docs', icon: '📝', angle: 120 },
    { id: 5, title: 'Hospital Intelligence', icon: '📊', angle: 180 },
    { id: 3, title: 'Workflow Automation', icon: '⚙️', angle: 240 },
    { id: 6, title: 'AI Reasoning', icon: '🧠', angle: 300 },
  ]

  const orbitRadius = 150; // Orbit Diameter: 300px

  const renderCard = (card: { id: number, title: string, icon: React.ReactNode, angle: number }, radius: number) => {
    return (
      <div 
        key={card.id}
        className="absolute top-1/2 left-1/2 w-0 h-0 z-20"
        style={{
          transform: `rotate(${card.angle}deg) translateY(-${radius}px)`,
        }}
      >
        <div style={{ transform: `rotate(-${card.angle}deg)` }}>
          <div className="absolute -top-[47px] -left-[55px] lg:-top-[52px] lg:-left-[60px] w-[110px] h-[95px] lg:w-[120px] lg:h-[105px] animate-orbit-counter-spin">
            <div className="w-full h-full bg-[#fffaf2]/90 backdrop-blur-xl rounded-2xl border border-med-primary/15 shadow-[0_8px_24px_rgba(44,35,25,0.04)] flex flex-col items-center justify-center p-2 group hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(232,117,26,0.12)] hover:border-med-primary/30 transition-all duration-300 cursor-default">
              
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-med-primary/10 flex items-center justify-center text-base lg:text-lg mb-1.5 sm:mb-2 group-hover:bg-med-primary/15 transition-colors">
                {card.icon}
              </div>
              
              <h3 className="text-center text-[10px] lg:text-[11px] font-bold text-med-ink leading-tight tracking-tight">
                {card.title}
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:mt-0 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
      
      {/* ── Orbit Animation (All Screens) ── */}
      <div className="flex relative w-[300px] h-[300px] mx-auto items-center justify-center scale-[0.80] sm:scale-[0.90] lg:scale-100 -my-8 lg:my-0 origin-center">
        
        {/* Glow Backdrop */}
        <div className="absolute inset-0 bg-med-primary/5 blur-[80px] rounded-full scale-110 -z-10 translate-y-8 pointer-events-none"></div>

        {/* Orbit Rings Container (Rotates) */}
        <div className="absolute inset-0 animate-orbit-spin">
          
          {/* Single Outer Ring (Radius: 150px) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full z-0">
            {/* Travelling Dots */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-med-primary rounded-full shadow-[0_0_8px_#e8751a]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-med-primary rounded-full shadow-[0_0_8px_#e8751a]"></div>
          </div>

          {/* Render Orbiting Cards */}
          {allCards.map(c => renderCard(c, orbitRadius))}

        </div>
      </div>

    </div>
  )
}
