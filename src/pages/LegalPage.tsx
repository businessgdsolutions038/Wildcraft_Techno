import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/contact';

type Section = { heading: string; body: string[] };

// NOTE: Draft wording prepared for the redesign. Replace with the client's
// approved legal text (their live Terms / Privacy pages) before launch.
const terms: Section[] = [
  { heading: 'Use of this website', body: ['By accessing this website you agree to these terms. The content is provided for general information about Wildcard Techno Services and its products and services, and may be changed at any time without notice.'] },
  { heading: 'Products and information', body: ['Product descriptions, specifications and availability are indicative and may change. Nothing on this website is a binding offer; supply of products and services is subject to a written quotation or agreement.'] },
  { heading: 'Intellectual property', body: ['Content on this website belongs to Wildcard Techno Services or its technology partners. Partner names and logos are trademarks of their respective owners and are used to identify authorized distribution.'] },
  { heading: 'Limitation of liability', body: ['We take reasonable care to keep this website accurate and available, but provide it without warranties of any kind. To the extent permitted by law, we are not liable for loss arising from use of, or inability to use, this website.'] },
  { heading: 'Third-party links', body: ['This website may link to third-party sites. We do not control and are not responsible for their content or practices.'] },
  { heading: 'Contact', body: [`Questions about these terms can be sent to ${CONTACT.email}.`] },
];

const privacy: Section[] = [
  { heading: 'Information we collect', body: ['When you contact us or apply for a role, we collect the details you provide, such as your name, email address, phone number, company, message and, for job applications, your resume.'] },
  { heading: 'How we use it', body: ['We use your information to respond to enquiries, provide quotations, deliver products and services, process applications and improve our website. We do not sell your personal information.'] },
  { heading: 'Sharing', body: ['We may share information with technology partners, logistics and service providers only as needed to fulfil your request, or where required by law.'] },
  { heading: 'Retention and security', body: ['We keep personal information only as long as needed for the purposes above and take reasonable measures to protect it.'] },
  { heading: 'Your choices', body: [`You can ask us to access, correct or delete your personal information by writing to ${CONTACT.email}.`] },
  { heading: 'Changes to this policy', body: ['We may update this policy from time to time. The latest version will always be available on this page.'] },
];

export default function LegalPage({ kind }: { kind: 'terms' | 'privacy' }) {
  const isTerms = kind === 'terms';
  const sections = isTerms ? terms : privacy;
  return (
    <>
      <PageHero
        eyebrow={isTerms ? 'Terms & Conditions' : 'Privacy Policy'}
        title={isTerms ? 'Terms & Conditions' : 'Privacy Policy'}
      />
      <section className="bg-surface pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="text-lg font-medium text-midnight-900">{i + 1}. {s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-[15px] leading-relaxed text-midnight-500">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
