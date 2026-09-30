import { Sparkles } from 'lucide-react'
import { Ornament } from '@/components/section-heading'

export function Performers() {
  return (
    <section
      id="performers"
      aria-labelledby="performers-title"
      className="bg-foreground px-6 py-24 text-background md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">Performers</p>
        <h2 id="performers-title" className="mt-6 text-balance text-4xl leading-tight md:text-6xl">
          Special Guest Headliners
        </h2>
        <Ornament className="mt-8" />
        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-primary/60 px-8 py-3">
          <Sparkles className="size-4 text-primary" aria-hidden="true" />
          <span className="font-serif text-xl italic text-primary md:text-2xl">To Be Announced</span>
          <Sparkles className="size-4 text-primary" aria-hidden="true" />
        </div>
        <p className="mx-auto mt-8 max-w-xl text-pretty leading-relaxed text-background/70">
          An exclusive live performance will crown the evening. Our headliners will be revealed
          soon, reserve your place now so you don&apos;t miss a moment.
        </p>
      </div>
    </section>
  )
}
