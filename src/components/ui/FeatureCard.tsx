import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

// FeatureCard — shell only. Visual design will be applied when the relevant section is assigned.
export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`med-card p-6 flex flex-col gap-4 ${className}`}>
      <div className="text-med-green w-10 h-10 flex items-center justify-center rounded-lg bg-med-border">
        {icon}
      </div>
      <div>
        <h3 className="text-med-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-med-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
