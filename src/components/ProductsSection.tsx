import { Phone, Video, Headphones, Cpu, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Phone,
    title: 'IP Phones',
    description: 'Executive, mid-level, entry-level, and team collaboration IP phones for every workspace.',
    image: 'https://images.pexels.com/photos/17636234/pexels-photo-17636234.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Modern office IP phone with blue lighting',
  },
  {
    icon: Video,
    title: 'Video Conferencing',
    description: 'Teams Room Systems, Zoom Room Systems, and Native SIP video conferencing solutions.',
    image: 'https://images.pexels.com/photos/38816547/pexels-photo-38816547.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Conference room with presentation screen',
  },
  {
    icon: Headphones,
    title: 'Headsets & Webcams',
    description: 'Bluetooth wireless headsets, wired headsets, and USB cameras for clear communication.',
    image: 'https://images.pexels.com/photos/8866720/pexels-photo-8866720.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Professional communication headsets',
  },
  {
    icon: Cpu,
    title: 'Intelligent Room Devices',
    description: 'Wireless presentation systems, room scheduling, and room sensors for smart meeting spaces.',
    image: 'https://images.pexels.com/photos/4623339/pexels-photo-4623339.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Person using tablet in a modern office environment',
  },
  {
    icon: Calendar,
    title: 'MS Teams Solutions',
    description: 'Comprehensive Teams Room and Teams Phone solutions for seamless Microsoft collaboration.',
    image: 'https://images.pexels.com/photos/7643888/pexels-photo-7643888.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Team participating in a virtual meeting using modern technology',
  },
  {
    icon: ShieldCheck,
    title: 'Zoom Solutions',
    description: 'Full range of Zoom Room and Zoom Phone device solutions for easy collaboration.',
    image: 'https://images.pexels.com/photos/15399855/pexels-photo-15399855.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Team discusses projects during a virtual and in-person meeting',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Products &amp; solutions</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-midnight-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Everything a modern meeting space needs.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-midnight-500 sm:text-lg">
            A complete portfolio of unified communications and collaboration
            products, backed by expert pre-sales and post-sales support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-midnight-100 bg-surface transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-xl hover:shadow-midnight-900/5"
            >
              <div className="relative h-52 overflow-hidden bg-midnight-50">
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-surface shadow-sm">
                  <cat.icon className="h-[18px] w-[18px] text-electric-600" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium text-midnight-900">{cat.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-midnight-500">{cat.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-700 transition-all duration-300 group-hover:gap-2.5"
                >
                  Enquire
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
