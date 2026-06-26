interface SectionHeadingProps {
  label?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

// SectionHeading — section label, title with optional gradient highlight, and description.
export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass} ${className}`}>
      {label && (
        <span className="section-label">
          <span className="w-5 h-px bg-med-green inline-block" />
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-med-white leading-tight">
        {title}{' '}
        {highlight && <span className="text-gradient-green">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-med-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
