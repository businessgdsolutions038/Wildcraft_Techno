import { CalendarDays, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactStrip from '@/components/ContactStrip';

const pastEvents = [
  {
    name: 'India Convergence Expo',
    date: 'March 2023',
    place: 'New Delhi',
    summary: 'Wildcard Techno Services showcased its unified communications and collaboration portfolio to partners and customers.',
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Meet us in person."
        intro="Trade shows, partner meets and product showcases where you can see our solutions first-hand."
      />
      <section className="bg-surface pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <h2 className="eyebrow">Upcoming</h2>
          <div className="mt-5 rounded-3xl border border-dashed border-midnight-200 bg-surface-soft p-8 text-sm text-midnight-500">
            No upcoming events are announced right now. Check back soon, or{' '}
            <a href="#contact" className="text-electric-700 underline underline-offset-4">get in touch</a> to arrange a demo.
          </div>

          <h2 className="eyebrow mt-14">Past events</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {pastEvents.map((e) => (
              <article key={e.name} className="rounded-3xl border border-midnight-100 p-7">
                <h3 className="text-xl font-medium text-midnight-900">{e.name}</h3>
                <p className="mt-4 flex items-center gap-2 text-sm text-midnight-500">
                  <CalendarDays className="h-4 w-4 text-electric-600" /> {e.date}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-midnight-500">
                  <MapPin className="h-4 w-4 text-electric-600" /> {e.place}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-midnight-500">{e.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactStrip heading="Want a private demo instead?" />
    </>
  );
}
