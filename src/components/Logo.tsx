export default function Logo({ light = false, className = 'h-10' }: { light?: boolean; className?: string }) {
  const base = `${className} w-auto`;
  if (light) {
    // Always-dark surfaces (footer): white mark
    return <img src="/logos/wildcard-white.png" alt="Wildcard Techno Services" className={base} width={312} height={90} />;
  }
  return (
    <>
      <img src="/logos/wildcard.png" alt="Wildcard Techno Services" className={`${base} dark:hidden`} width={312} height={90} />
      <img src="/logos/wildcard-white.png" alt="Wildcard Techno Services" className={`${base} hidden dark:block`} width={312} height={90} />
    </>
  );
}
