const partners = [
  { name: 'Yealink', logo: '/logos/yealink.png' },
  { name: 'Yeastar', logo: '/logos/yeastar.png' },
  { name: 'SonicWall', logo: '/logos/sonicwall.png' },
  { name: 'Milesight', logo: '/logos/milesight.png' },
  { name: 'TringTone', logo: '/logos/trintone.png' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="eyebrow">Technology partners</span>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-midnight-900 sm:text-3xl">
            Authorized distributor for leading brands.
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <li
              key={p.name}
              className="group flex h-28 items-center justify-center rounded-2xl border border-midnight-100 bg-white px-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-300 hover:shadow-lg hover:shadow-midnight-900/5"
            >
              <img
                src={p.logo}
                alt={p.name}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
