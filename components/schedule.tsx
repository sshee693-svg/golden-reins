import { SectionHeading } from '@/components/section-heading'

const SCHEDULE = [
  {
    time: '4:00 PM',
    title: 'Gates Open',
    description: 'Arrive in style, enjoy welcome drinks, and explore the paddock.',
  },
  {
    time: '5:00 PM',
    title: 'First Race',
    description: 'The horses are at the gate. The first race of the Classic begins.',
  },
  {
    time: '7:30 PM',
    title: 'Live Performance',
    description: 'Our special guest headliners take the stage as the sun sets.',
  },
  {
    time: '9:00 PM',
    title: 'Final Race & Trophy Presentation',
    description: 'The feature race and crowning of the Golden Reins champion, followed by celebrations until late.',
  },
]

export function Schedule() {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="schedule-title" eyebrow="Schedule" title="Order of the Evening" />

        <ol className="relative mt-16 border-l border-primary/60 pl-8 md:pl-12">
          {SCHEDULE.map((item) => (
            <li key={item.title} className="relative pb-12 last:pb-0">
              <span
                className="gold-gradient absolute -left-[calc(2rem+7px)] top-1.5 size-3.5 rotate-45 shadow md:-left-[calc(3rem+7px)]"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                {item.time}
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-center text-sm italic text-muted-foreground">
          Times are approximate and subject to change.
        </p>
      </div>
    </section>
  )
}
