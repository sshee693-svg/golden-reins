import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Performers } from '@/components/performers'
import { Schedule } from '@/components/schedule'
import { Rsvp } from '@/components/rsvp'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Performers />
        <Schedule />
        <Rsvp />
      </main>
      <SiteFooter />
    </>
  )
}
