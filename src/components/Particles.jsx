import { useMemo } from 'react'

export default function Particles({ count = 20, className = '' }) {
  const particles = useMemo(() => Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 5,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
  })), [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-champagne-300"
          style={{
            left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}px`, height: `${p.size}px`, opacity: p.opacity,
            animation: `floatSlow ${p.duration}s ease-in-out infinite`, animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px rgba(228,203,142,0.5)`,
          }}
        />
      ))}
    </div>
  )
}
