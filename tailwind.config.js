/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#FBF6EC', 100: '#F7EFD9', 200: '#EFE0B8', 300: '#E4CB8E',
          400: '#D4B06A', 500: '#C29A4C', 600: '#A67E37', 700: '#85622B',
          800: '#5E4420', 900: '#3A2A15',
        },
        cream: {
          50: '#FFFCF6', 100: '#FDF8EC', 200: '#FAF1DB', 300: '#F5E7C6',
        },
        cocoa: {
          400: '#8A6B4E', 500: '#6B4F37', 600: '#5A4230', 700: '#4A3528',
          800: '#3A2A20', 900: '#2A1E17', 950: '#1A130E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-mid': 'floatMid 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        floatSlow: { '0%, 100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(-20px) translateX(10px)' } },
        floatMid: { '0%, 100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(-15px) translateX(-8px)' } },
        glowPulse: { '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' }, '50%': { opacity: '0.7', filter: 'blur(50px)' } },
        sparkle: { '0%, 100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' }, '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' } },
        shimmer: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
      },
    },
  },
  plugins: [],
}
