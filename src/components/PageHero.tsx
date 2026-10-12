export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-wash to-surface">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-electric-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-[1280px] px-6 pb-14 pt-36 lg:px-8 lg:pb-20 lg:pt-44">
        <nav aria-label="Breadcrumb" className="text-xs text-midnight-400">
          <a href="#home" className="hover:text-midnight-700">Home</a>
          <span className="mx-2">/</span>
          <span className="text-midnight-600">{eyebrow}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-midnight-900 [text-wrap:balance] sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight-500 sm:text-lg">{intro}</p>}
      </div>
    </section>
  );
}
