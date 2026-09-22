import { useState } from 'react'

export default function Logo({ className = 'h-10', showText = true }) {
  const [useImage, setUseImage] = useState(true)

  return (
    <div className="flex items-center gap-2.5">
      {useImage ? (
        <img
          src="/yourthoughtslogo.svg"
          alt="Your Thoughts logo"
          className={className}
          onError={() => setUseImage(false)}
        />
      ) : (
        <svg
          className={className}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Your Thoughts logo"
        >
          <defs>
            <linearGradient id="yt-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F7EFD9" />
              <stop offset="35%" stopColor="#E4CB8E" />
              <stop offset="70%" stopColor="#C29A4C" />
              <stop offset="100%" stopColor="#85622B" />
            </linearGradient>
            <linearGradient id="yt-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E4CB8E" />
              <stop offset="100%" stopColor="#A67E37" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="30" stroke="url(#yt-ring)" strokeWidth="1.5" opacity="0.6" />
          <circle cx="32" cy="32" r="25" fill="url(#yt-gold)" opacity="0.08" />
          <path
            d="M20 22 C20 19 22 17 25 17 H39 C42 17 44 19 44 22 V34 C44 37 42 39 39 39 H31 L25 45 L26 39 H25 C22 39 20 37 20 34 Z"
            fill="url(#yt-gold)"
            opacity="0.9"
          />
          <path
            d="M32 25.5 C31 24 28.5 23.5 27.5 25.5 C26.5 27.5 29 30 32 32.5 C35 30 37.5 27.5 36.5 25.5 C35.5 23.5 33 24 32 25.5 Z"
            fill="#1A130E"
            opacity="0.7"
          />
        </svg>
      )}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold gold-text-static tracking-wide">
            Your Thoughts
          </span>
          <span className="text-[9px] font-medium tracking-[0.2em] text-champagne-400/70 uppercase">
            Scan • Surprise • Smile
          </span>
        </div>
      )}
    </div>
  )
}
