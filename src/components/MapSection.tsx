import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const q = encodeURIComponent(CONTACT.address);
const embedSrc = `https://maps.google.com/maps?q=${q}&z=16&output=embed`;
const viewHref = `https://www.google.com/maps/search/?api=1&query=${q}`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

export default function MapSection() {
  return (
    <section id="location" className="bg-surface pb-24 pt-4 lg:pb-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl border border-midnight-100 bg-surface-alt p-8 lg:col-span-4">
            <div>
              <span className="eyebrow">Find us</span>
              <h2 className="mt-4 text-2xl font-medium tracking-tight text-midnight-900 sm:text-3xl">Visit our head office</h2>
              <div className="mt-6 flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface">
                  <MapPin className="h-[18px] w-[18px] text-electric-600" />
                </span>
                <address className="text-sm not-italic leading-relaxed text-midnight-700">{CONTACT.address}</address>
              </div>
              <p className="mt-5 text-xs text-midnight-400">
                Regional offices: {CONTACT.regionalOffices.join(', ')}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Navigation className="h-4 w-4" /> Get directions
              </a>
              <a href={viewHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <ExternalLink className="h-4 w-4" /> Open in Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-midnight-100 bg-midnight-50 lg:col-span-8">
            <iframe
              title="Map showing Wildcard Techno Services head office, Webel IT Park, Newtown, Kolkata"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[360px] w-full border-0 lg:h-full lg:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
