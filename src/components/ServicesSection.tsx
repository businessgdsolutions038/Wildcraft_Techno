import { ShieldCheck, PenTool, Settings, Users, RefreshCw, Server } from 'lucide-react';

const img = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const services = [
  {
    icon: ShieldCheck,
    title: 'GUARDIAN Support Services',
    description: 'Warranty and support services that keep your communications infrastructure running.',
    image: img(7709287),
    alt: 'Support agent with a headset working on a laptop',
  },
  {
    icon: PenTool,
    title: 'Advanced Design Consultancy',
    description: 'Pre-sales consultation, product demos and BOQ design tailored to your requirements.',
    image: img(7651734),
    alt: 'Colleagues planning together in front of their laptops',
  },
  {
    icon: Settings,
    title: 'Managed Services',
    description: 'End-to-end management of your unified communications environment, with proactive monitoring.',
    image: img(1181354),
    alt: 'Engineer standing beside server racks',
  },
  {
    icon: Users,
    title: 'Professional Services',
    description: 'Installation, configuration and troubleshooting by certified technical professionals.',
    image: img(19226354),
    alt: 'Engineer working on network equipment in a data centre',
  },
  {
    icon: RefreshCw,
    title: 'RMIA',
    description: 'Return, merchandise and inventory management for seamless product lifecycle support.',
    image: img(31043129),
    alt: 'Warehouse team handling boxes',
  },
  {
    icon: Server,
    title: 'IT Services',
    description: 'Infrastructure services spanning networking, security and enterprise applications.',
    image: img(37605911),
    alt: 'IT technician working in a data centre server room',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Our services</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-midnight-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Support from first call to long after go-live.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-midnight-500 sm:text-lg">
            From pre-sales consultation to post-sales care, our services make
            sure your technology investment keeps delivering.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative isolate flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl border border-midnight-100 bg-midnight-50 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-xl hover:shadow-midnight-900/10"
            >
              {/* Picture behind the card */}
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                className="absolute inset-0 -z-30 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              {/* Light veil keeps the text readable and the card airy */}
              <div className="absolute inset-0 -z-20 bg-gradient-to-t from-surface via-surface/90 to-surface/40" />
              {/* Navy tint revealed on hover */}
              <div className="absolute inset-0 -z-10 bg-navy-900/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/90 shadow-sm transition-colors duration-500 group-hover:bg-surface">
                  <service.icon className="h-5 w-5 text-electric-600" />
                </span>
                <h3 className="mt-5 text-base font-medium text-midnight-900 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight-600 transition-colors duration-500 group-hover:text-midnight-100">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
