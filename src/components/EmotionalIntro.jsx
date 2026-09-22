import { Heart } from 'lucide-react'
import Button from './Button.jsx'
import { IMAGES } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function EmotionalIntro() {
  const { ref, visible } = useReveal(); const moments = ['A birthday wish.','A love story.','A wedding journey.','A friendship that lasted years.',"A parent's precious memories.",'A farewell.','A milestone.']
  return <section className="relative overflow-hidden bg-cocoa-950 py-20 md:py-28"><div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12"><div ref={ref} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 reveal ${visible ? 'is-visible' : ''}`}><div><h2 className="heading-2 font-display text-cream-50">Some memories deserve <span className="gold-text-static">more than a photo.</span></h2><div className="mt-6 space-y-2.5">{moments.map((m) => <p key={m} className="text-lg text-cream-200/70">{m}</p>)}</div><div className="mt-8 border-l-2 border-champagne-400/40 pl-5"><p className="text-xl text-cream-100/90">Some moments are too special to fit into a simple message.</p><p className="mt-2 text-lg font-medium text-champagne-300">That's where Your Thoughts comes in.</p></div><div className="mt-8"><Button as="a" href="#plans" size="lg"><Heart className="h-5 w-5" />Create A Memory</Button></div></div><div className="relative"><div className="overflow-hidden rounded-3xl border border-champagne-400/20 shadow-2xl"><img src={IMAGES.familyHug} alt="Father and daughter sharing a warm embrace" className="aspect-[4/5] w-full object-cover" loading="lazy" /></div><div className="absolute -bottom-5 -left-5 rounded-2xl glass-card px-5 py-3 shadow-xl"><p className="text-sm text-cream-100">Not just a gift. A memory.</p></div></div></div></div></section>
}
