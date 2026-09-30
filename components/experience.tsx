import { Camera, Flag, GlassWater, Music, Sandwich, Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const EXPERIENCES = [
  {
    icon: Flag,
    title: 'Live Racing',
    description: 'Feel the thunder trackside as elite thoroughbreds race for glory down the stretch.',
  },
  {
    icon: Music,
    title: 'Live Music',
    description: 'An evening soundtrack of live performances carrying the celebration into the night.',
  },
  {
    icon: GlassWater,
    title: 'Food & Drinks',
    description: 'Chef-curated plates, champagne, and signature cocktails served in true style.',
  },
  {
    icon: Sandwich,
    title: 'Light Snacks',
    description: 'Elegant bites and canapés to enjoy between races, delivered throughout the event.',
  },
  {
    icon: Trophy,
    title: 'Paddock Tours',
    description: 'Step behind the rail for an up-close look at the horses before they head to post.',
  },
  {
    icon: Camera,
    title: "Winner's Circle Photos",
    description: 'Capture your moment of triumph with a keepsake portrait in the winner’s circle.',
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-secondary px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="experience-title" eyebrow="The Experience" title="An Evening of Distinction" />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="gold-card group rounded-lg border border-primary/40 p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex size-14 items-center justify-center rounded-full border border-accent/40 bg-background/70">
                <Icon className="size-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/75">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
