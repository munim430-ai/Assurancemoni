import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { company, concerns, heroVideoUrl } from '../data/content'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE = 0.5 // seconds

    const tick = () => {
      const v = videoRef.current
      if (v && v.duration && !Number.isNaN(v.duration)) {
        const t = v.currentTime
        const d = v.duration
        let opacity = 1
        if (t < FADE) {
          opacity = t / FADE // fade in
        } else if (t > d - FADE) {
          opacity = Math.max(0, (d - t) / FADE) // fade out
        }
        v.style.opacity = String(opacity)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      const v = videoRef.current
      if (!v) return
      v.style.opacity = '0'
      window.setTimeout(() => {
        v.currentTime = 0
        v.play().catch(() => {})
      }, 100)
    }

    video.style.opacity = '0'
    video.play().catch(() => {})
    video.addEventListener('ended', handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        {/* Video background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={heroVideoUrl}
            muted
            playsInline
            autoPlay
            preload="auto"
            style={{ opacity: 0, transition: 'opacity 0.1s linear' }}
          />
          {/* Fade in from top, keep middle clear, fade back to white at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-white/10 to-background" />
        </div>

        {/* Hero content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
          style={{ paddingTop: 'calc(8rem - 75px)' }}
        >
          <h1
            className="animate-fade-rise max-w-7xl font-instrument-serif text-5xl font-normal text-foreground sm:text-7xl md:text-8xl"
            style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
          >
            Excellence in <span style={{ color: '#6F6F6F' }} className="italic">Garments,</span> Real
            Estate, and <span style={{ color: '#6F6F6F' }} className="italic">Beyond.</span>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: '#6F6F6F' }}>
            {company.shortDescription}
          </p>

          <Link
            to="/concerns"
            className="animate-fade-rise-delay-2 mt-12 inline-block rounded-full bg-foreground px-14 py-5 text-base text-background transition-transform duration-200 hover:scale-[1.03]"
          >
            Explore Our Concerns
          </Link>
        </div>
      </section>

      {/* ── Concerns preview ─────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Our Concerns</p>
            <h2
              className="mt-3 font-instrument-serif text-4xl text-foreground sm:text-5xl"
              style={{ letterSpacing: '-1px' }}
            >
              One group, three industries.
            </h2>
          </div>
          <Link to="/concerns" className="text-sm text-muted transition-colors hover:text-foreground">
            View all concerns &rarr;
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
          {concerns.map((c) => (
            <Link
              key={c.slug}
              to="/concerns"
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-black/[0.02]"
            >
              <h3 className="font-instrument-serif text-2xl text-foreground">{c.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{c.summary}</p>
              <span className="mt-8 text-sm text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 pb-8">
        <div className="rounded-3xl bg-foreground px-8 py-20 text-center text-background">
          <h2
            className="mx-auto max-w-3xl font-instrument-serif text-4xl sm:text-5xl"
            style={{ letterSpacing: '-1px' }}
          >
            Build with a partner that keeps its word.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
            Whether you are sourcing garments, packaging, or property, our standard is the same:
            quality, delivered reliably.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-background px-12 py-4 text-base text-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
