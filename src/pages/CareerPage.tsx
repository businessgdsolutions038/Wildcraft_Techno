import { useState, type FormEvent } from 'react';
import { Clock, Heart, Users, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { CONTACT, mailtoLink } from '@/lib/contact';

const values = [
  { icon: Clock, title: 'We value your time and skills', text: 'Your expertise matters, and so does how you spend your day.' },
  { icon: Heart, title: 'Respect and people first', text: 'We treat colleagues, partners and customers the way we would like to be treated.' },
  { icon: Users, title: 'Growth is a team sport', text: 'We learn, build and progress together.' },
];

export default function CareerPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    window.location.href = mailtoLink(`Career application${d.position ? `: ${d.position}` : ''}`, {
      Name: d.name, Email: d.email, Phone: d.phone, Position: d.position, Message: d.message,
    });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build your career with Wildcard."
        intro="We're always interested in meeting talented people. There are no specific openings listed right now, but you can apply for any role below."
      />
      <section className="bg-surface pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="eyebrow">What we believe</h2>
            <ul className="mt-6 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-electric-50">
                    <v.icon className="h-[18px] w-[18px] text-electric-600" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-midnight-900">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-midnight-500">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-midnight-100 bg-surface-soft p-6 sm:p-8">
              <h2 className="text-xl font-medium text-midnight-900">Apply now</h2>
              {sent ? (
                <p className="mt-4 text-sm leading-relaxed text-midnight-600">
                  Your email app should have opened with your details. Please attach your resume and send it to{' '}
                  <a className="text-electric-700 underline underline-offset-4" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block"><span className="mb-1.5 block text-xs text-midnight-500">Name</span>
                    <input required name="name" autoComplete="name" className="field" /></label>
                  <label className="block"><span className="mb-1.5 block text-xs text-midnight-500">Email</span>
                    <input required type="email" name="email" autoComplete="email" className="field" /></label>
                  <label className="block"><span className="mb-1.5 block text-xs text-midnight-500">Phone</span>
                    <input type="tel" name="phone" autoComplete="tel" className="field" /></label>
                  <label className="block"><span className="mb-1.5 block text-xs text-midnight-500">Position</span>
                    <input name="position" className="field" placeholder="Role you're applying for" /></label>
                  <label className="block sm:col-span-2"><span className="mb-1.5 block text-xs text-midnight-500">Message</span>
                    <textarea name="message" rows={4} className="field resize-none" /></label>
                  <p className="text-xs text-midnight-400 sm:col-span-2">You&apos;ll be asked to attach your resume in the email that opens.</p>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary group">
                      Submit application
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
