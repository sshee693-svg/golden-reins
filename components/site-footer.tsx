import { EVENT } from '@/lib/event'
import { Ornament } from '@/components/section-heading'

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-6 py-16 text-center text-background">
      <p className="font-serif text-3xl text-primary">{EVENT.name}</p>
      <Ornament className="mt-5" />
      <p className="mt-6 text-sm uppercase tracking-[0.25em] text-background/80">
        {EVENT.date} <span className="mx-2 text-primary" aria-hidden="true">•</span>{' '}
        {EVENT.time}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-background/80">{EVENT.location}</p>
      <p className="mt-10 text-xs text-background/50">
        {'© 2026 '}
        {EVENT.name}. All rights reserved.
      </p>
    </footer>
  )
}
