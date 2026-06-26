import type { ReactNode } from 'react'

interface StatCardProps {
  title: string
  labelLine1: string
  labelLine2: string
  icon: ReactNode
}

export default function StatCard({ title, labelLine1, labelLine2, icon }: StatCardProps) {
  return (
    <div className="group/item flex flex-col items-center text-center cursor-default">
      {/* Icon Card */}
      <div className="w-14 h-14 bg-[#FCF6F0] border border-white/80 rounded-[16px] flex items-center justify-center mb-6 shadow-sm transition-all duration-500 group-hover/item:-translate-y-[6px] group-hover/item:shadow-md group-hover/item:bg-white">
        {icon}
      </div>
      
      {/* Dark Stat Title */}
      <h3 className="text-3xl md:text-4xl font-black text-med-ink tracking-tight mb-2">
        {title}
      </h3>
      
      {/* Uppercase Spaced Subtitle */}
      <div className="text-[10px] sm:text-[11px] font-bold text-med-slate uppercase tracking-[0.2em] leading-relaxed">
        {labelLine1}<br />{labelLine2}
      </div>
    </div>
  )
}
