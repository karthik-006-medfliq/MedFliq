interface OrbitNodeProps {
  label: string;
  icon: string;
  positionClass: string;
  reverseClass: string;
  delay?: string;
  duration?: string;
}

const OrbitNode = ({ label, icon, positionClass, reverseClass, duration }: OrbitNodeProps) => {
  return (
    <div 
      className={`absolute flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-[0_2px_12px_rgba(44,35,25,0.08)] border border-slate-100 whitespace-nowrap cursor-default transition-all hover:shadow-[0_4px_16px_rgba(232,117,26,0.15)] hover:-translate-y-0.5 hover:border-med-primary/20 group z-20 ${positionClass} ${reverseClass}`}
      style={{ animationDuration: duration }}
    >
      <div className="w-5 h-5 rounded-full bg-med-cream flex items-center justify-center text-[10px] group-hover:bg-med-primary/10 transition-colors">
        {icon}
      </div>
      <span className="text-[11px] font-bold text-med-ink tracking-tight group-hover:text-med-primary transition-colors">
        {label}
      </span>
    </div>
  )
}

export default function AboutHeroOrbitVisual({ isVisible }: { isVisible: boolean }) {
  const outerSpeed = '32s';
  const middleSpeed = '26s';
  const innerSpeed = '18s';

  return (
    <div 
      className={`relative w-full aspect-square max-w-[440px] mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
      style={{ transitionDelay: '700ms' }}
    >
      {/* Decorative Ambient Glow */}
      <div className="absolute inset-0 bg-med-primary/5 blur-[80px] rounded-full scale-110 -z-10 translate-y-8"></div>

      <div className="relative w-full h-full">

        {/* --- Outer Ring (96%) --- */}
        <div 
          className="absolute top-1/2 left-1/2 w-[96%] h-[96%] border border-med-primary/15 rounded-full animate-orbit-forward"
          style={{ animationDuration: outerSpeed }}
        >
          {/* Small dot on track */}
          <div className="absolute top-[14%] left-[14%] w-1.5 h-1.5 bg-med-primary/40 rounded-full"></div>
          
          <OrbitNode 
            label="Patient Safety" 
            icon="🛡️" 
            positionClass="top-[25%] left-[6.7%]" 
            reverseClass="animate-node-reverse"
            duration={outerSpeed}
          />
          <OrbitNode 
            label="Workflow Automation" 
            icon="⚙️" 
            positionClass="top-[100%] left-[50%]" 
            reverseClass="animate-node-reverse"
            duration={outerSpeed}
          />
          <OrbitNode 
            label="Hospital Intelligence" 
            icon="🩺" 
            positionClass="top-[25%] left-[93.3%]" 
            reverseClass="animate-node-reverse"
            duration={outerSpeed}
          />
        </div>

        {/* --- Middle Ring (68%) --- */}
        <div 
          className="absolute top-1/2 left-1/2 w-[68%] h-[68%] border border-med-primary/20 rounded-full animate-orbit-reverse"
          style={{ animationDuration: middleSpeed }}
        >
          {/* Small dot on track */}
          <div className="absolute top-[85%] left-[15%] w-1.5 h-1.5 bg-med-primary/50 rounded-full"></div>

          <OrbitNode 
            label="Smart Documentation" 
            icon="📝" 
            positionClass="top-[0%] left-[50%]" 
            reverseClass="animate-node-forward"
            duration={middleSpeed}
          />
          <OrbitNode 
            label="Clinical Timeline" 
            icon="📊" 
            positionClass="top-[75%] left-[93.3%]" 
            reverseClass="animate-node-forward"
            duration={middleSpeed}
          />
          <OrbitNode 
            label="Decision Support" 
            icon="💡" 
            positionClass="top-[75%] left-[6.7%]" 
            reverseClass="animate-node-forward"
            duration={middleSpeed}
          />
        </div>

        {/* --- Inner Ring (40%) --- */}
        <div 
          className="absolute top-1/2 left-1/2 w-[40%] h-[40%] border border-med-primary/30 rounded-full animate-orbit-forward"
          style={{ animationDuration: innerSpeed }}
        >
          <OrbitNode 
            label="AI Reasoning" 
            icon="🧠" 
            positionClass="top-[50%] left-[0%]" 
            reverseClass="animate-node-reverse"
            duration={innerSpeed}
          />
          <OrbitNode 
            label="Unified EHR" 
            icon="🏥" 
            positionClass="top-[50%] left-[100%]" 
            reverseClass="animate-node-reverse"
            duration={innerSpeed}
          />
        </div>

        {/* --- Center Core --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] h-[24%] min-w-[80px] min-h-[80px] bg-white rounded-full flex flex-col items-center justify-center border-[6px] border-white shadow-[0_8px_30px_rgba(44,35,25,0.08)] z-30">
          <div className="w-10 h-10 flex items-center justify-center -translate-x-[2px] -translate-y-[2px]">
            <img src="/images/medfliq-logo.png" alt="MedFliq Logo" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          <span className="text-[9px] font-black text-med-ink tracking-widest uppercase mt-0.5">Fliq 360</span>
        </div>

      </div>
    </div>
  )
}
