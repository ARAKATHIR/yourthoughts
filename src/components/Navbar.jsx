import { useEffect, useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

const links = [
  ['Home', '#home'], ['How It Works', '#how-it-works'], ['Celebrations', '#celebrations'],
  ['Plans', '#plans'], ['Why Your Thoughts', '#why'], ['Our Story', '#our-story'], ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-champagne-400/15 bg-cocoa-950/85 shadow-xl shadow-black/20 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <a href="#home" aria-label="Your Thoughts home"><Logo className="h-9 sm:h-10" /></a>
        <ul className="hidden items-center gap-1 xl:flex">{links.map(([label, href]) => <li key={href}><a href={href} className="rounded-full px-3 py-2 text-sm text-cream-200/80 transition hover:bg-white/5 hover:text-champagne-300">{label}</a></li>)}</ul>
        <div className="hidden xl:block"><Button as="a" href="#plans" size="md"><Heart className="h-4 w-4" />Create Your Surprise</Button></div>
        <button onClick={() => setOpen(true)} className="rounded-full p-2 text-cream-100 xl:hidden" aria-label="Open menu"><Menu /></button>
      </nav>
    </header>
    <div className={`fixed inset-0 z-[60] xl:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
      <aside className={`absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-champagne-400/20 bg-cocoa-950 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-champagne-400/15 px-5 py-4"><Logo className="h-8" /><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
        <div className="flex flex-col gap-1 p-4">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base text-cream-200 hover:bg-champagne-400/10 hover:text-champagne-300">{label}</a>)}</div>
        <div className="px-4"><Button as="a" href="#plans" onClick={() => setOpen(false)} size="lg" className="w-full"><Heart className="h-4 w-4" />Create Your Surprise</Button></div>
      </aside>
    </div>
  </>
}
