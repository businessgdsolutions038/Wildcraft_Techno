import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { CONTACT } from '@/lib/contact';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Products & Solutions',
    href: '#/products',
    children: [
      { label: 'IP Phones', href: '#/products' },
      { label: 'Video Conferencing', href: '#/products' },
      { label: 'Headsets & Webcams', href: '#/products' },
      { label: 'Intelligent Room Devices', href: '#/products' },
      { label: 'MS Teams Solutions', href: '#solutions' },
      { label: 'Zoom Solutions', href: '#solutions' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  {
    label: 'More',
    href: '#/events',
    children: [
      { label: 'Events', href: '#/events' },
      { label: 'Blog', href: '#/blog' },
      { label: 'Career', href: '#/career' },
      { label: 'E-Waste', href: '#/e-waste' },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-midnight-100/80 bg-surface/90 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" aria-label="Wildcard Techno Services home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] text-midnight-600 transition-colors duration-200 hover:text-midnight-900"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full w-64 animate-fade-in pt-2">
                    <div className="rounded-2xl border border-midnight-100 bg-surface p-2 shadow-xl shadow-midnight-900/5">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-[13.5px] text-midnight-600 transition-colors hover:bg-midnight-50 hover:text-midnight-900"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={CONTACT.phones[0].href} className="text-[13.5px] text-midnight-600 transition-colors hover:text-midnight-900">
              {CONTACT.phones[0].label}
            </a>
            <ThemeToggle />
            <a href="#contact" className="btn-primary !py-2.5">
              Contact us
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              className="p-1 text-midnight-800"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="animate-fade-in lg:hidden">
          <div className="mx-auto max-w-[1280px] px-6 pb-4 pt-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-midnight-700 transition-colors hover:bg-midnight-50"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3">
                Contact us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
