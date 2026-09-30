import Image from 'next/image'
import { CalendarDays, MapPin } from 'lucide-react'
import { EVENT } from '@/lib/event'
import { Ornament } from '@/components/section-heading'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero.png"
        alt="Thoroughbreds galloping down a turf track at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_60/0.75)] via-[oklch(0.18_0.03_60/0.55)] to-[oklch(0.18_0.03_60/0.85)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">An Evening at the Races</p>
        <h1
          id="hero-title"
          className="mt-6 text-balance text-5xl leading-[1.05] sm:text-6xl md:text-8xl"
        >
          Golden Reins <span className="italic text-primary">Classic</span>
        </h1>
        <Ornament className="mt-8" />
        <p className="mt-8 text-pretty font-serif text-xl italic text-white/90 md:text-2xl">
          {EVENT.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm uppercase tracking-[0.2em] text-white/90 sm:flex-row sm:gap-10">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" aria-hidden="true" />
            {EVENT.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {EVENT.location}
          </span>
        </div>

        <a
          href="#rsvp"
          className="gold-gradient mt-12 inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5"
        >
          RSVP Now
        </a>
      </div>
    </section>
  )
}
