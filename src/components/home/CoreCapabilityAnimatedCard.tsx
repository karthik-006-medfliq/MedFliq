import type { ReactNode } from 'react';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: string;
}

export default function CoreCapabilityAnimatedCard({
  title,
  description,
  icon,
  delay = '0ms',
}: AnimatedCardProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <div 
      className="group relative w-full h-full min-h-[260px] md:min-h-[280px] rounded-[28px] overflow-visible"
      style={{ 
        perspective: '1200px',
        animationDelay: delay
      }}
    >
      {/* 
        The 3D Card Element 
      */}
      <div 
        className={`relative w-full h-full rounded-[28px] border border-orange-200/30 overflow-hidden flex flex-col transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${prefersReducedMotion 
            ? 'shadow-sm hover:shadow-md hover:-translate-y-1' 
            : 'shadow-[0_10px_30px_rgba(44,35,25,0.05)] hover:shadow-[0_20px_40px_rgba(232,117,26,0.15)]'
          }
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'none',
        }}
      >
        {/* Outer Background */}
        <div className="absolute inset-0 bg-[#fffaf2]/80 z-0"></div>

        {/* Decorative SVG Blob (Orange/Peach) */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-300/20 to-peach-300/10 blur-3xl z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

        {/* Inner Blur Layer (Glass Effect) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute inset-0 bg-white/40 backdrop-blur-md transition-all duration-500 group-hover:bg-white/60 group-hover:backdrop-blur-sm"></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full" style={{ transform: 'translateZ(30px)' }}>
          {/* Icon */}
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>

          {/* Text */}
          <h3 className="text-xl sm:text-2xl font-black text-med-ink mb-3 leading-tight group-hover:text-med-primary transition-colors">
            {title}
          </h3>
          <p className="text-med-slate text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Internal Style for the group-hover 3D reset */}
      <style>{`
        .group:hover > div[style*="preserve-3d"] {
          transform: translateY(-6px) !important;
        }
      `}</style>
    </div>
  );
}
