import { Phone, Video, Headphones, Cpu, Plug } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactStrip from '@/components/ContactStrip';

const groups = [
  {
    icon: Phone,
    title: 'IP Phones',
    description: 'Desk phones for every role and budget, from executive handsets to team collaboration devices.',
    items: ['Executive IP phones', 'Mid-level IP phones', 'Entry-level IP phones', 'Team collaboration phones'],
  },
  {
    icon: Video,
    title: 'Video Conferencing',
    description: 'Room systems for the platform your teams already use, plus open SIP options.',
    items: ['Microsoft Teams Room systems', 'Zoom Room systems', 'Native SIP video conferencing'],
  },
  {
    icon: Headphones,
    title: 'Headsets & Webcams',
    description: 'Clear audio and video for desks, home offices and huddle spaces.',
    items: ['Bluetooth wireless headsets', 'Wired headsets', 'USB cameras'],
  },
  {
    icon: Cpu,
    title: 'Intelligent Room Devices',
    description: 'Make meeting spaces smarter: easier to present in, to book and to manage.',
    items: ['Wireless presentation systems', 'Room scheduling panels', 'Room sensors'],
  },
  {
    icon: Plug,
    title: 'Accessories',
    description: 'The finishing touches that make a meeting space complete.',
    items: ['Speakerphones', 'BYOD kits', 'More accessories'],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Devices for every kind of conversation."
        intro="Our portfolio covers IP phones, video conferencing, headsets, intelligent room devices and accessories, with expert pre-sales and post-sales support."
      />
      <section className="bg-surface pb-24">
        <div className="mx-auto max-w-[1280px] space-y-6 px-6 lg:px-8">
          {groups.map((g) => (
            <article
              key={g.title}
              className="grid grid-cols-1 gap-8 rounded-3xl border border-midnight-100 p-7 sm:p-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50">
                  <g.icon className="h-5 w-5 text-electric-600" />
                </span>
                <h2 className="mt-5 text-2xl font-medium tracking-tight text-midnight-900">{g.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-midnight-500">{g.description}</p>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
                {g.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#contact"
                      className="flex items-center justify-between rounded-2xl border border-midnight-100 bg-surface-soft px-5 py-4 text-sm text-midnight-800 transition-colors hover:border-electric-300 hover:bg-surface"
                    >
                      {item}
                      <span className="text-xs text-electric-700">Enquire</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <ContactStrip heading="Not sure which device fits? We'll help you choose." />
    </>
  );
}
