import { EVENT } from '@/lib/event'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#performers', label: 'Performers' },
  { href: '#schedule', label: 'Schedule' },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6"
      >
        <a href="#top" className="font-serif text-lg tracking-wide text-white">
          {EVENT.name}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.25em] text-white/85 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#rsvp"
          className="rounded-full border border-primary px-5 py-2 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          RSVP
        </a>
      </nav>
    </header>
  )
}
