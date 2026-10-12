import { ArrowUpRight } from 'lucide-react';

const solutionsImage = 'https://images.pexels.com/photos/6949336/pexels-photo-6949336.jpeg?auto=compress&cs=tinysrgb&w=1000';

const groups = [
  {
    name: 'Microsoft Teams',
    items: [
      { title: 'Teams Room', description: 'A seamless Teams experience for every meeting space.' },
      { title: 'Teams Phone', description: 'Complete Teams Phone solutions for business calling.' },
      { title: 'Teams Headsets', description: 'Certified headsets optimised for Teams.' },
    ],
  },
  {
    name: 'Zoom',
    items: [
      { title: 'Zoom Room', description: 'Device solutions for easy, reliable collaboration.' },
      { title: 'Zoom Phone', description: 'Cloud calling that takes communication further.' },
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Platform solutions</span>
            <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-tight text-midnight-900 sm:text-4xl lg:text-[2.6rem]">
              One partner for <span className="text-electric-600">Teams &amp; Zoom</span> rooms.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-midnight-500">
              Audio and video device solutions for Microsoft Teams and Zoom,
              from huddle rooms to boardrooms.
            </p>

            <div className="mt-10 space-y-8">
              {groups.map((group) => (
                <div key={group.name}>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-midnight-400">{group.name}</h3>
                  <ul className="mt-3 divide-y divide-midnight-100 border-y border-midnight-100">
                    {group.items.map((sol) => (
                      <li key={sol.title}>
                        <a href="#contact" className="group flex items-center justify-between gap-4 py-4">
                          <span>
                            <span className="block text-base font-medium text-midnight-900 transition-colors group-hover:text-electric-700">
                              {sol.title}
                            </span>
                            <span className="mt-0.5 block text-sm text-midnight-500">{sol.description}</span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-midnight-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-600" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <img
              src={solutionsImage}
              alt="Meeting room with digital screens and microphones"
              className="h-[400px] w-full rounded-[2rem] object-cover lg:h-[540px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
