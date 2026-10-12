import { useState, useEffect } from 'react';
import { ArrowRight, Video, ShieldCheck } from 'lucide-react';
import CountUp from '@/components/CountUp';

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/236730/pexels-photo-236730.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Conference room with video conferencing equipment',
  },
  {
    src: 'https://images.pexels.com/photos/38816547/pexels-photo-38816547.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Spacious conference room with presentation screen',
  },
  {
    src: 'https://images.pexels.com/photos/7643888/pexels-photo-7643888.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Team participating in a virtual meeting',
  },
  {
    src: 'https://images.pexels.com/photos/6949336/pexels-photo-6949336.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Meeting room with digital screens and microphones',
  },
];

const stats = [
  { to: 10, suffix: '+', label: 'Years in UC&C' },
  { to: 6, suffix: '', label: 'Service lines' },
  { to: 5, suffix: '', label: 'Technology partners' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-surface-wash via-surface to-surface">
      {/* One soft wash of colour, nothing more */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-electric-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-midnight-100 bg-surface px-3.5 py-1.5 text-xs text-midnight-600">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Solution integrator · Kolkata, India
          </p>

          <h1 className="mt-6 text-[2.5rem] font-medium leading-[1.1] tracking-tight text-midnight-900 sm:text-5xl lg:text-[3.25rem] [text-wrap:balance]">
            Technology that helps your business{' '}
            <span className="text-electric-600">work as one</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-midnight-500 sm:text-lg">
            Unified communications, network infrastructure, data centre, cyber
            security and enterprise applications — designed, supplied and
            supported end to end.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#products" className="btn-primary group">
              Explore solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to our team
            </a>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-midnight-100 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-medium text-midnight-900">
                  <CountUp to={s.to} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs text-midnight-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Imagery */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-midnight-50 shadow-xl shadow-midnight-900/10">
            {heroImages.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                  idx === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Show image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === current ? 'w-8 bg-white' : 'w-1.5 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-midnight-100 bg-surface p-4 pr-6 shadow-lg shadow-midnight-900/5 sm:-left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-50">
              <Video className="h-5 w-5 text-electric-600" />
            </span>
            <span>
              <span className="block text-xs text-midnight-400">Authorized distributor</span>
              <span className="block text-sm font-medium text-midnight-900">Yealink · Yeastar &amp; more</span>
            </span>
          </div>

          <div className="absolute -right-2 top-8 hidden items-center gap-2.5 rounded-2xl border border-midnight-100 bg-surface px-4 py-3 shadow-lg shadow-midnight-900/5 sm:flex lg:-right-4">
            <ShieldCheck className="h-4 w-4 text-accent-600" />
            <span className="text-xs text-midnight-600">End-to-end UC&amp;C</span>
          </div>
        </div>
      </div>
    </section>
  );
}
