import { CheckCircle2, Target, Eye } from 'lucide-react';
import CountUp from '@/components/CountUp';

const aboutImage = 'https://images.pexels.com/photos/1181745/pexels-photo-1181745.jpeg?auto=compress&cs=tinysrgb&w=1000';

const capabilities = [
  'Unified Communications & Collaboration',
  'Network Infrastructure & Services',
  'Data Center & Storage',
  'Cyber Security (Cyber-i)',
  'Enterprise Application & Services',
  'Wireless Internet Solutions',
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Team collaborating in a modern conference room"
              className="h-[400px] w-full rounded-[2rem] object-cover lg:h-[500px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-midnight-100 bg-surface px-6 py-5 shadow-lg shadow-midnight-900/5 sm:right-8">
              <div className="font-display text-3xl font-medium text-midnight-900">
                <CountUp to={10} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-midnight-400">Years in Unified Communications</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">Company overview</span>
            <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-tight text-midnight-900 sm:text-4xl lg:text-[2.6rem]">
              A solution integrator built for <span className="text-electric-600">modern business</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-midnight-500">
              Wildcard Techno Services helps organisations modernise how they
              communicate. As an authorized Value-Added Distributor and
              end-to-end integrator, we deliver solutions that accelerate
              revenue growth, optimise operating cost and improve employee
              productivity.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-accent-500" />
                  <span className="text-sm text-midnight-700">{cap}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-midnight-100 bg-surface p-5">
                <Target className="h-5 w-5 text-electric-600" />
                <h3 className="mt-3 text-sm font-medium text-midnight-900">Our mission</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-midnight-500">
                  To provide best-of-breed technology solutions that help clients
                  improve their business and profitability.
                </p>
              </div>
              <div className="rounded-2xl border border-midnight-100 bg-surface p-5">
                <Eye className="h-5 w-5 text-accent-600" />
                <h3 className="mt-3 text-sm font-medium text-midnight-900">Our vision</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-midnight-500">
                  To shape how clients view technology by introducing an
                  extraordinary experience of solutions and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
