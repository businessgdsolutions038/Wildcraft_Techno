import { Phone, Truck, Recycle, BadgePercent, Repeat } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactStrip from '@/components/ContactStrip';
import { CONTACT } from '@/lib/contact';

const steps = [
  { icon: Phone, title: 'Get in touch', text: 'Call, email or visit our office. We explain the disposal process and point you to the nearest drop-off.' },
  { icon: Truck, title: 'Drop off or schedule pickup', text: 'Hand over e-waste at a collection centre of our logistics partner, Om Logistics, or ask us to arrange a doorstep pickup.' },
  { icon: Recycle, title: 'Responsible recycling', text: 'Collected material goes to our recycling partner, Hulladek Recycling Pvt. Ltd., and its recycler Lubrina Recycling, for dismantling and recycling across India.' },
];

export default function EwastePage() {
  return (
    <>
      <PageHero
        eyebrow="E-Waste"
        title="Recycle your end-of-life electronics responsibly."
        intro="Our PAN-India e-waste programme makes it simple for businesses, individuals and residential associations to dispose of old devices the right way."
      />
      <section className="bg-surface pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <h2 className="eyebrow">How it works</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-midnight-100 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50">
                  <s.icon className="h-5 w-5 text-electric-600" />
                </span>
                <h3 className="mt-5 text-lg font-medium text-midnight-900">{i + 1}. {s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight-500">{s.text}</p>
              </li>
            ))}
          </ol>

          <h2 className="eyebrow mt-16">Collection schemes</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-surface-alt p-8">
              <Repeat className="h-5 w-5 text-electric-600" />
              <h3 className="mt-4 text-lg font-medium text-midnight-900">Buyback</h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight-500">
                Bulk consumers, individuals and resident associations can sell back their e-waste and receive an
                incentive. We also plan to install collection bins at residential associations and organisations.
              </p>
            </div>
            <div className="rounded-3xl bg-surface-alt p-8">
              <BadgePercent className="h-5 w-5 text-electric-600" />
              <h3 className="mt-4 text-lg font-medium text-midnight-900">Exchange &amp; coupons</h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight-500">
                Return an end-of-life product and you may receive a discount voucher worth up to Rs. 1,000,
                depending on its condition, redeemable on future purchases.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-midnight-100 p-8">
            <h3 className="text-lg font-medium text-midnight-900">Contact the e-waste team</h3>
            <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-midnight-400">Toll-free</dt>
                <dd className="mt-1"><a className="text-midnight-900 hover:text-electric-700" href={CONTACT.tollFree.href}>{CONTACT.tollFree.label}</a></dd>
              </div>
              <div>
                <dt className="text-midnight-400">Hours</dt>
                <dd className="mt-1 text-midnight-900">10am to 7pm, Monday to Saturday</dd>
              </div>
              <div>
                <dt className="text-midnight-400">Email</dt>
                <dd className="mt-1"><a className="text-midnight-900 hover:text-electric-700" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <ContactStrip heading="Ready to schedule a pickup?" />
    </>
  );
}
