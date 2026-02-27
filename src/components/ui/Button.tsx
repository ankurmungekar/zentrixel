import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  onClick?: () => void
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  outline: 'border border-white text-white hover:bg-white/10',
  ghost: 'text-primary bg-primary/10 hover:bg-primary/20',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2.5 rounded-[30px] px-4 py-3 font-body text-base transition-colors ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link to={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={base} onClick={onClick}>
      {children}
    </button>
  )
}
