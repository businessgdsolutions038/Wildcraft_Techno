import Logo from '@/components/Logo';
import { CONTACT } from '@/lib/contact';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#/products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const more = [
  { label: 'Events', href: '#/events' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Career', href: '#/career' },
  { label: 'E-Waste', href: '#/e-waste' },
  { label: 'Terms & Conditions', href: '#/terms' },
  { label: 'Privacy Policy', href: '#/privacy' },
];

const linkClass = 'text-sm text-navy-200 transition-colors duration-200 hover:text-white';
const headingClass = 'text-xs font-medium uppercase tracking-[0.2em] text-navy-300';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900 dark:bg-navy-950">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light className="h-10" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              Solution integrator and authorized distributor for Unified
              Communications &amp; Collaboration, network, security and
              enterprise IT across India.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className={headingClass}>Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href} className={linkClass}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className={headingClass}>Company</h3>
            <ul className="mt-5 space-y-2.5">
              {more.map((l) => (
                <li key={l.label}><a href={l.href} className={linkClass}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-navy-200">
              {CONTACT.phones.map((p) => (
                <li key={p.href}><a href={p.href} className={linkClass}>{p.label}</a></li>
              ))}
              <li><a href={`mailto:${CONTACT.email}`} className={linkClass}>{CONTACT.email}</a></li>
            </ul>
            <address className="mt-5 text-sm not-italic leading-relaxed text-navy-200">{CONTACT.address}</address>
            <p className="mt-4 text-xs text-navy-300">Regional offices: {CONTACT.regionalOffices.join(', ')}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-300">
            All Rights Reserved &copy; {new Date().getFullYear()} Wildcard Techno Services
          </p>
          <p className="text-xs text-navy-300">
            This site is designed and managed by{' '}
            <a
              href="https://www.gdsolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-100 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              GD Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
