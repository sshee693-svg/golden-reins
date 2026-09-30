export const EVENT = {
  name: 'Golden Reins Classic',
  tagline: 'Where Elegance Meets the Finish Line',
  date: 'Saturday, December 12, 2026',
  time: '4:00 PM until late',
  location: 'West Palm Beach, Florida',
  rsvpEmail: 'rsvp@example.com',
}

export const RSVP_MAILTO = `mailto:${EVENT.rsvpEmail}?subject=${encodeURIComponent(
  'RSVP – Golden Reins Classic',
)}&body=${encodeURIComponent(
  'Name:\nNumber of guests:\nPhone:\n\nWe look forward to joining you at the Golden Reins Classic.',
)}`
