interface ButtonProps {
  label: string
  variant?: 'primary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
}

// Button — shell only. Variants will be implemented with section content.
export default function Button({ label, variant = 'primary', onClick, href, className = '' }: ButtonProps) {
  const cls = variant === 'primary' ? `btn-primary ${className}` : `btn-outline ${className}`

  if (href) {
    return <a href={href} className={cls}>{label}</a>
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {label}
    </button>
  )
}
