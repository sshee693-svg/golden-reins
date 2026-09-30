import { Mail } from 'lucide-react'
import { EVENT, RSVP_MAILTO } from '@/lib/event'
import { Ornament } from '@/components/section-heading'

export function Rsvp() {
  return (
    <section id="rsvp" aria-labelledby="rsvp-title" className="bg-secondary px-6 py-24 md:py-32">
      <div className="gold-card mx-auto max-w-3xl rounded-lg border border-primary/50 px-6 py-16 text-center sm:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Reserve Your Place
        </p>
        <h2 id="rsvp-title" className="mt-4 text-balance text-4xl leading-tight md:text-5xl">
          The Pleasure of Your Company
        </h2>
        <Ornament className="mt-6" />
        <p className="mx-auto mt-8 max-w-lg text-pretty leading-relaxed text-foreground/80">
          Tickets are available <strong className="font-semibold text-foreground">by email reservation only</strong>.
          Send us your name and number of guests, and our team will confirm your attendance.
        </p>

        <a
          href={RSVP_MAILTO}
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
        >
          <Mail className="size-4" aria-hidden="true" />
          RSVP by Email
        </a>
        <p className="mt-5 text-sm text-foreground/70">
          or write to{' '}
          <a href={`mailto:${EVENT.rsvpEmail}`} className="font-medium text-accent underline-offset-4 hover:underline">
            {EVENT.rsvpEmail}
          </a>
        </p>
      </div>
    </section>
  )
}
