export default function LegacyServicesHeroVisual() {
  const steps = [
    { label: 'AI Decision Support', icon: '🧠', delay: '0s' },
    { label: 'Smart Documentation', icon: '📝', delay: '1.5s' },
    { label: 'Patient Safety', icon: '🛡️', delay: '3.0s' },
    { label: 'Workflow Automation', icon: '⚙️', delay: '4.5s' },
    { label: 'Unified Management', icon: '🏥', delay: '6.0s' },
    { label: 'Operational Intelligence', icon: '📊', delay: '7.5s' },
  ]

  return (
    <div className="relative w-full max-w-[360px] mx-auto mt-8 lg:mt-0 service-hero-reveal-scale service-hero-delay-5">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-med-primary/5 blur-[60px] rounded-full scale-110 -z-10 translate-y-4"></div>

      {/* Main Glass Container */}
      <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[420px] rounded-[20px] sm:rounded-[24px] bg-[#fbf6ed]/80 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.08)] border-[5px] border-white overflow-hidden p-6 sm:p-8 flex items-center">
        
        {/* Subtle Horizontal Background Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-med-primary/30 to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-med-primary/30 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-med-primary/30 to-transparent"></div>
        </div>

        {/* Central Vertical Timeline */}
        <div className="relative h-full flex flex-col justify-between w-full z-10 pl-4 sm:pl-6">
          
          {/* Vertical Spine */}
          <div className="absolute top-2 bottom-2 left-[33px] sm:left-[41px] w-[2px] bg-gradient-to-b from-med-primary/10 via-med-primary/30 to-med-primary/10 rounded-full">
            {/* Traveling Glowing Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-med-primary shadow-[0_0_12px_rgba(232,117,26,0.8)] animate-workflow-dot"></div>
          </div>

          {/* Workflow Steps */}
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl py-2 px-3 pr-4 border border-white shadow-sm w-fit animate-workflow-node"
              style={{ animationDelay: step.delay }}
            >
              {/* Icon Container */}
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-med-cream border border-slate-100 text-[14px] shrink-0 animate-workflow-icon"
                style={{ animationDelay: step.delay }}
              >
                {step.icon}
              </div>
              
              {/* Label */}
              <span 
                className="text-xs sm:text-[13px] font-bold text-med-slate tracking-tight whitespace-nowrap animate-workflow-text"
                style={{ animationDelay: step.delay }}
              >
                {step.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
