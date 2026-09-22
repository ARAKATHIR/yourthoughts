export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa-950'

  const variants = {
    primary:
      'bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-cocoa-950 font-semibold shadow-lg shadow-champagne-500/20 hover:shadow-champagne-400/40 hover:scale-[1.03] hover:from-champagne-200 hover:to-champagne-400',
    secondary:
      'glass-card text-cream-100 border border-champagne-300/30 hover:border-champagne-300/60 hover:bg-cream-100/10 hover:scale-[1.03]',
    outline:
      'border border-champagne-400/40 text-champagne-200 hover:bg-champagne-400/10 hover:border-champagne-400/70',
    ghost: 'text-cream-200 hover:text-champagne-300 hover:bg-cream-100/5',
    whatsapp:
      'bg-[#25D366] text-white font-semibold shadow-lg shadow-green-600/20 hover:shadow-green-500/40 hover:scale-[1.03]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className={classes} target={target} rel={rel} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
