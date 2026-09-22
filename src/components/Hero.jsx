import { ArrowRight, Play, QrCode, Smartphone, Heart, Sparkles } from 'lucide-react'
import Button from './Button.jsx'
import Particles from './Particles.jsx'
import { IMAGES, BRAND } from '../data/content.js'

export default function Hero() {
  return <section id="home" className="relative min-h-screen overflow-hidden bg-cocoa-950 pt-24 sm:pt-28">
    <div className="absolute inset-0 bg-gradient-to-b from-cocoa-950 via-cocoa-900 to-cocoa-950" /><div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-radial-gold" /><Particles count={25} />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:pb-24 lg:pt-16">
      <div className="text-center lg:text-left">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne-400/30 bg-champagne-400/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-champagne-300"><Sparkles className="h-3.5 w-3.5" />{BRAND.brandLine}</div>
        <h1 className="heading-1 animate-fade-up font-display text-cream-50 text-shadow-gold">Turn Your Memories Into A <span className="gold-text">Beautiful Surprise.</span></h1>
        <p className="tamil mt-4 text-xl text-champagne-200/80 sm:text-2xl">{BRAND.taglineTamil}</p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-200/70 sm:text-lg lg:mx-0">Your memories deserve more than a message. We turn your photos, feelings, wishes, stories, music and special moments into a beautiful personalized website — delivered as a QR code.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm lg:justify-start">{['Your Memories','Our Creativity','Your Special Website','QR Surprise'].map((s, i, a) => <span key={s} className="flex items-center gap-2"><span className="rounded-full border border-champagne-400/25 bg-white/5 px-3 py-1.5 text-champagne-200">{s}</span>{i < a.length - 1 && <ArrowRight className="h-4 w-4 text-champagne-500" />}</span>)}</div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"><Button as="a" href="#plans" size="lg"><Heart className="h-5 w-5" />Create Your Surprise</Button><Button as="a" href="#how-it-works" size="lg" variant="secondary"><Play className="h-4 w-4" />See How It Works</Button></div>
      </div>
      <div className="relative mx-auto w-full max-w-md lg:max-w-none"><div className="relative overflow-hidden rounded-3xl border border-champagne-400/20 shadow-2xl shadow-black/40"><img src={IMAGES.birthdayCouple} alt="Couple celebrating a birthday with candles" className="aspect-[4/5] w-full object-cover" loading="eager" /><div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/85 via-transparent to-cocoa-950/10" /><div className="absolute right-6 top-6 rounded-full bg-cocoa-950/45 p-3 backdrop-blur-md"><Heart className="h-6 w-6 fill-champagne-400 text-champagne-400" /></div><div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-card p-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-champagne-400/15"><Smartphone className="h-6 w-6 text-champagne-300" /></div><div className="flex-1"><p className="text-sm font-semibold text-cream-100">A Personal Memory Website</p><p className="text-xs text-cream-200/60">Photos • Stories • Music • Wishes</p></div><QrCode className="h-8 w-8 text-champagne-400" /></div></div></div><div className="absolute -right-3 -top-3 rounded-2xl glass-card p-4 shadow-xl animate-float-mid sm:-right-7"><QrCode className="h-10 w-10 text-champagne-300" /><p className="mt-1 text-[10px] uppercase tracking-wider text-champagne-300/70">Scan to surprise</p></div><div className="absolute -left-3 bottom-1/3 rounded-2xl glass-card px-4 py-3 shadow-xl animate-float-slow sm:-left-7"><p className="text-sm text-cream-100">One scan. A thousand memories.</p></div></div>
    </div>
  </section>
}
