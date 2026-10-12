import { PenLine } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactStrip from '@/components/ContactStrip';

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on communication technology."
        intro="Guides, product news and ideas from our team."
      />
      <section className="bg-surface pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-midnight-200 bg-surface-soft px-6 py-20 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-50">
              <PenLine className="h-5 w-5 text-electric-600" />
            </span>
            <h2 className="mt-5 text-xl font-medium text-midnight-900">Coming soon</h2>
            <p className="mt-2 max-w-sm text-sm text-midnight-500">
              We&apos;re preparing our first articles. In the meantime, our team is happy to answer any question.
            </p>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
