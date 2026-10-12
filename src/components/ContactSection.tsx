import { useState, type FormEvent } from 'react';
import { MapPin, MapPinned, Phone, Mail, ArrowRight, Check } from 'lucide-react';
import { CONTACT, mailtoLink } from '@/lib/contact';

const serviceOptions = [
  'GUARDIAN Support Services',
  'Advanced Design Consultancy',
  'Managed Services',
  'Professional Services',
  'RMIA',
  'IT Services',
  'Products & Solutions',
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // Opens the visitor's mail app with their details prefilled. Swap for a form
  // endpoint / email service if you want submissions without a mail client.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    window.location.href = mailtoLink(`Website enquiry${d.service ? `: ${d.service}` : ''}`, {
      Name: d.name, Email: d.email, Phone: d.phone, Interest: d.service, Message: d.message,
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 rounded-[2rem] bg-gradient-to-br from-surface-wash2 to-surface-alt p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-tight text-midnight-900 sm:text-4xl">
              Let&apos;s plan your next upgrade.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-midnight-500">
              Tell us what you&apos;re working on. From product selection to
              deployment, our team is with you at every step.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface">
                  <Phone className="h-[18px] w-[18px] text-electric-600" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-midnight-400">Sales &amp; support</div>
                  <p className="mt-1.5 space-x-3 text-sm text-midnight-700">
                    {CONTACT.phones.map((p) => (
                      <a key={p.href} href={p.href} className="hover:text-electric-700">{p.label}</a>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface">
                  <Mail className="h-[18px] w-[18px] text-electric-600" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-midnight-400">Email</div>
                  <a href={`mailto:${CONTACT.email}`} className="mt-1.5 block text-sm text-midnight-700 hover:text-electric-700">{CONTACT.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface">
                  <MapPin className="h-[18px] w-[18px] text-electric-600" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-midnight-400">Head office</div>
                  <address className="mt-1.5 text-sm not-italic leading-relaxed text-midnight-700">{CONTACT.address}</address>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface">
                  <MapPinned className="h-[18px] w-[18px] text-electric-600" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-midnight-400">Regional offices</div>
                  <p className="mt-1.5 text-sm text-midnight-700">{CONTACT.regionalOffices.join(' · ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50">
                    <Check className="h-6 w-6 text-accent-600" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-midnight-900">Almost done</h3>
                  <p className="mt-2 max-w-xs text-sm text-midnight-500">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-midnight-500">Name</span>
                    <input required name="name" type="text" autoComplete="name" className="field" placeholder="Your full name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-midnight-500">Email</span>
                    <input required name="email" type="email" autoComplete="email" className="field" placeholder="you@company.com" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-midnight-500">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" className="field" placeholder="+91" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-midnight-500">Interested in</span>
                    <select name="service" defaultValue="" className="field">
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-xs text-midnight-500">Message</span>
                    <textarea required name="message" rows={5} className="field resize-none" placeholder="How can we help?" />
                  </label>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary group w-full sm:w-auto">
                      Send message
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
