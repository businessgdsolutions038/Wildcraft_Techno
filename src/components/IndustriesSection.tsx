import { useRef, useState, type KeyboardEvent } from 'react';
import {
  Building2,
  GraduationCap,
  Landmark,
  Plane,
  Factory,
  Monitor,
  Shield,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';

// NOTE: descriptions and focus areas are illustrative draft copy. Please have
// the client confirm or replace them with their own wording before launch.
const industries = [
  {
    icon: Building2,
    name: 'BFSI',
    summary: 'Dependable communication across branches, contact centres and boardrooms.',
    focus: ['Contact-centre phones & headsets', 'Branch-to-HQ video meetings', 'Boardroom conferencing'],
  },
  {
    icon: Landmark,
    name: 'Government & PSUs',
    summary: 'Collaboration that keeps departments and locations connected.',
    focus: ['IP telephony for offices', 'Review-room video conferencing', 'Managed support & AMC'],
  },
  {
    icon: GraduationCap,
    name: 'Education',
    summary: 'Hybrid classrooms and campus-wide communication.',
    focus: ['Classroom video conferencing', 'Wireless presentation', 'Campus IP telephony'],
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    summary: 'Smooth guest-facing and back-office communication across sites.',
    focus: ['Front-desk IP phones', 'Multi-site telephony', 'Meeting-room systems'],
  },
  {
    icon: Factory,
    name: 'Manufacturing & Energy',
    summary: 'Connecting plants, remote sites and head office.',
    focus: ['Plant-floor telephony', 'Site-to-HQ video', 'Remote support services'],
  },
  {
    icon: Monitor,
    name: 'IT / ITES',
    summary: 'Collaboration tools for distributed, always-on teams.',
    focus: ['Teams & Zoom Rooms', 'Headsets & webcams', 'Room scheduling & sensors'],
  },
  {
    icon: Shield,
    name: 'Defense',
    summary: 'Communication solutions where reliability matters most.',
    focus: ['Dependable telephony', 'Conferencing systems', 'Dedicated support'],
  },
  {
    icon: Layers,
    name: 'Mid-market solutions',
    summary: 'Right-sized solutions for growing businesses.',
    focus: ['Scalable IP telephony', 'Room systems', 'Managed services'],
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = industries[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const next =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? (i + 1) % industries.length
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? (i - 1 + industries.length) % industries.length
          : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="industries" className="relative overflow-hidden bg-surface-alt py-24 lg:py-32">
      {/* Soft dotted texture, fades out toward the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-midnight-300 opacity-[0.18] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Industries we serve</span>
          <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-tight text-midnight-900 sm:text-4xl lg:text-[2.6rem]">
            Trusted across diverse sectors.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-midnight-500 sm:text-lg">
            Every project is unique and gets our full professional attention.
            Choose a sector to see where we typically help.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Sector list */}
          <div
            role="tablist"
            aria-label="Industries"
            aria-orientation="vertical"
            className="grid grid-cols-2 gap-2 lg:col-span-5 lg:grid-cols-1"
          >
            {industries.map((ind, i) => {
              const selected = i === active;
              return (
                <button
                  key={ind.name}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`industry-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="industry-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group relative flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 lg:gap-4 lg:px-5 ${
                    selected
                      ? 'border-midnight-100 bg-surface shadow-lg shadow-midnight-900/5'
                      : 'border-transparent hover:bg-surface/60'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1/2 hidden h-6 w-1 -translate-y-1/2 rounded-r-full bg-electric-500 transition-opacity duration-300 lg:block ${
                      selected ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      selected ? 'bg-electric-50 text-electric-600' : 'bg-midnight-50 text-midnight-400 group-hover:text-electric-600'
                    }`}
                  >
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="hidden text-[11px] tabular-nums text-midnight-300 lg:block">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`block text-sm leading-snug lg:text-[15px] ${selected ? 'font-medium text-midnight-900' : 'text-midnight-600'}`}>
                      {ind.name}
                    </span>
                  </span>
                  <ArrowRight
                    className={`hidden h-4 w-4 flex-shrink-0 text-electric-600 transition-all duration-300 lg:block ${
                      selected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            role="tabpanel"
            id="industry-panel"
            aria-labelledby={`industry-tab-${active}`}
            className="relative overflow-hidden rounded-[2rem] border border-midnight-100 bg-surface p-8 shadow-xl shadow-midnight-900/5 sm:p-10 lg:col-span-7 lg:p-12"
          >
            <current.icon
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-64 text-electric-500 opacity-[0.07]"
              strokeWidth={1}
            />

            <div key={active} className="relative animate-fade-in">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-50">
                <current.icon className="h-7 w-7 text-electric-600" />
              </span>
              <p className="mt-6 text-xs tabular-nums tracking-[0.2em] text-midnight-400">
                {String(active + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-midnight-900 sm:text-3xl">{current.name}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-midnight-500">{current.summary}</p>

              <h4 className="mt-9 text-xs font-medium uppercase tracking-[0.2em] text-midnight-400">Where we help</h4>
              <ul className="mt-4 space-y-3">
                {current.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-midnight-700">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-50">
                      <Check className="h-3 w-3 text-accent-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary group mt-10">
                Discuss your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
