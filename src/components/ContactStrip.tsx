import { Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function ContactStrip({ heading = 'Have a question? Talk to our team.' }: { heading?: string }) {
  return (
    <section className="bg-surface pb-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[2rem] bg-gradient-to-br from-surface-wash2 to-surface-alt p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-md text-2xl font-medium tracking-tight text-midnight-900 sm:text-3xl">{heading}</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={CONTACT.phones[0].href} className="btn-secondary">
              <Phone className="h-4 w-4" /> {CONTACT.phones[0].label}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn-secondary">
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <a href="#contact" className="btn-primary group">
              Send an enquiry
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
