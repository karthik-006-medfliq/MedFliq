export default function ServicesHeroAgentCards() {
  const cards = [
    {
      id: 1,
      title: 'Patient Safety',
      icon: '🛡️',
      color: 'bg-white',
      position: 'top-[8%] left-[5%] sm:top-[12%] sm:left-[10%]',
      zIndex: 'z-10',
      scale: 'scale-[0.80] sm:scale-[0.85]',
      rotate: '-rotate-3',
      entranceDelay: '0ms',
      floatDelay: '0s',
    },
    {
      id: 2,
      title: 'Smart Docs',
      icon: '📝',
      color: 'bg-white',
      position: 'top-[4%] right-[5%] sm:top-[6%] sm:right-[15%]',
      zIndex: 'z-10',
      scale: 'scale-[0.80] sm:scale-[0.85]',
      rotate: 'rotate-3',
      entranceDelay: '150ms',
      floatDelay: '-1.5s',
    },
    {
      id: 3,
      title: 'Workflow Automation',
      icon: '⚙️',
      color: 'bg-white',
      position: 'top-[35%] left-[0%] sm:top-[40%] sm:left-[5%]',
      zIndex: 'z-20',
      scale: 'scale-[0.90] sm:scale-[0.95]',
      rotate: '-rotate-1',
      entranceDelay: '300ms',
      floatDelay: '-3s',
    },
    {
      id: 4,
      title: 'Unified EHR',
      icon: '🏥',
      color: 'bg-white',
      position: 'top-[30%] right-[0%] sm:top-[35%] sm:right-[10%]',
      zIndex: 'z-20',
      scale: 'scale-[0.90] sm:scale-[0.95]',
      rotate: 'rotate-2',
      entranceDelay: '450ms',
      floatDelay: '-0.5s',
    },
    {
      id: 5,
      title: 'AI Reasoning',
      icon: '🧠',
      color: 'bg-white',
      position: 'top-[65%] left-[10%] sm:top-[70%] sm:left-[20%]',
      zIndex: 'z-30',
      scale: 'scale-[1] sm:scale-[1.05]',
      rotate: '-rotate-2',
      entranceDelay: '600ms',
      floatDelay: '-2s',
    },
    {
      id: 6,
      title: 'Hospital Intelligence',
      icon: '📊',
      color: 'bg-white',
      position: 'top-[60%] right-[5%] sm:top-[65%] sm:right-[5%]',
      zIndex: 'z-30',
      scale: 'scale-[1] sm:scale-[1.05]',
      rotate: 'rotate-1',
      entranceDelay: '750ms',
      floatDelay: '-4s',
    },
  ]

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto mt-12 lg:mt-0 transition-opacity duration-1000">
      
      {/* Subtle Background Data Flow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#172033" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Decorative faint code-like lines */}
          <rect x="40" y="80" width="120" height="4" rx="2" fill="#e8751a" />
          <rect x="40" y="100" width="80" height="4" rx="2" fill="#172033" />
          <rect x="240" y="200" width="100" height="4" rx="2" fill="#172033" />
          <rect x="240" y="220" width="140" height="4" rx="2" fill="#e8751a" />
          <rect x="80" y="320" width="160" height="4" rx="2" fill="#172033" />
        </svg>
      </div>

      {/* Glow Backdrop */}
      <div className="absolute inset-0 bg-med-primary/5 blur-[80px] rounded-full scale-110 -z-10 translate-y-8"></div>

      {/* Cards Container */}
      <div className="relative w-full h-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`absolute ${card.position} ${card.zIndex} ${card.scale} ${card.rotate} origin-center animate-agent-entrance`}
            style={{ animationDelay: card.entranceDelay }}
          >
            {/* The floating wrapper */}
            <div 
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] animate-agent-float"
              style={{ animationDelay: card.floatDelay }}
            >
              <div className={`w-full h-full ${card.color} backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/80 shadow-[0_16px_40px_rgba(44,35,25,0.08)] flex flex-col items-center justify-center p-4 group hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(232,117,26,0.12)] transition-all duration-300 cursor-default`}>
                
                {/* Icon Circle */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-med-primary/10 flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:bg-med-primary/15 transition-colors">
                  {card.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-center text-sm sm:text-[15px] md:text-base font-bold text-med-ink leading-tight tracking-tight">
                  {card.title}
                </h3>
                
                {/* Micro Label / Detail */}
                <div className="w-8 sm:w-10 h-1 sm:h-1.5 rounded-full bg-med-primary/20 mt-2 sm:mt-3 group-hover:bg-med-primary/40 transition-colors"></div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
