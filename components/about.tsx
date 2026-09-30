import Image from 'next/image'
import { EVENT } from '@/lib/event'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <div
            className="absolute -inset-3 rounded-lg border border-primary/60 md:-inset-4"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl shadow-accent/20">
            <Image
              src="/images/about.png"
              alt="Elegantly dressed guests raising champagne on a terrace overlooking the racetrack"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            About the Event
          </p>
          <h2 id="about-title" className="mt-4 text-balance text-4xl leading-tight md:text-5xl">
            A glamorous afternoon <span className="italic text-accent">into evening</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-primary" aria-hidden="true" />
          <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              The {EVENT.name} invites you to an unforgettable celebration of the sport of kings.
              Beneath the Florida sky, guests gather trackside for thundering hooves, spirited
              competition, and the timeless pageantry of live horse racing.
            </p>
            <p>
              Savor refined fare and handcrafted cocktails, mingle with riders and fellow
              enthusiasts, and toast every photo finish in a setting as polished as the champions
              themselves. Whether you live for the races or simply adore horses, this is your
              place in the winner&apos;s circle.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { label: 'Date', value: 'Dec 12' },
              { label: 'Gates', value: '4:00 PM' },
              { label: 'Until', value: 'Late' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl text-accent">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
