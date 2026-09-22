import { Play } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { LINKS } from '../data/content.js'

function getEmbedUrl(link) {
  if (!link || link === 'YOUTUBE_AD_VIDEO_LINK') return ''

  try {
    const url = new URL(link)
    const videoId = url.searchParams.get('v')
    if (videoId) return `https://www.youtube.com/embed/${videoId}`

    const shortMatch = link.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=))([^?&/]+)/)
    if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`
  } catch {
    const fallbackMatch = link.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=))([^?&/]+)/)
    if (fallbackMatch?.[1]) return `https://www.youtube.com/embed/${fallbackMatch[1]}`
  }

  return link
}

export default function AdvertisementVideo() {
  const embedUrl = getEmbedUrl(LINKS.youtubeAd)
  const iframeSrc = embedUrl ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}rel=0` : ''
  const placeholder = !embedUrl

  return <section className="bg-cocoa-900 py-20 md:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow="Watch" title="See The Idea In 10 Seconds" subtitle="One scan. A thousand memories. One unforgettable feeling."/><div className="mt-12 overflow-hidden rounded-3xl border border-champagne-400/20 shadow-2xl">{placeholder?<div className="flex aspect-video flex-col items-center justify-center gap-4 bg-gradient-to-br from-cocoa-800 to-cocoa-950 p-8 text-center"><div className="flex h-20 w-20 items-center justify-center rounded-full border border-champagne-400/30 bg-champagne-400/15"><Play className="h-10 w-10 text-champagne-300"/></div><p className="font-display text-xl text-cream-100">Promotional Video</p><p className="text-sm text-cream-200/60">Replace the YouTube link in the content file with your video URL.</p></div>:<div className="aspect-video"><iframe className="h-full w-full" src={iframeSrc} title="Your Thoughts promotional video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"/></div>}</div></div></section>}
