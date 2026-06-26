import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  tag?: string
  className?: string
}

// ServiceCard — shell only. Visual design will be applied when the relevant section is assigned.
export default function ServiceCard({ icon, title, description, tag, className = '' }: ServiceCardProps) {
  return (
    <div className={`med-card p-6 flex flex-col gap-4 group cursor-pointer ${className}`}>
      {tag && (
        <span className="text-xs font-semibold text-med-green uppercase tracking-widest">
          {tag}
        </span>
      )}
      <div className="text-med-green w-10 h-10 flex items-center justify-center rounded-lg bg-med-border group-hover:bg-med-green group-hover:text-med-dark transition-colors duration-200">
        {icon}
      </div>
      <div>
        <h3 className="text-med-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-med-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
