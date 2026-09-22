export default function SectionHeading({ eyebrow, title, subtitle, center = true, className = '' }) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`mb-3 ${center ? 'flex justify-center' : ''}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-champagne-400/30 bg-champagne-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne-300">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="heading-2 font-display text-cream-50">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-cream-200/70 sm:text-lg">{subtitle}</p>}
    </div>
  )
}
