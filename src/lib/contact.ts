export const CONTACT = {
  phones: [
    { label: '+91 91633 00178', href: 'tel:+919163300178' },
    { label: '+91 33 4061 8149', href: 'tel:+913340618149' },
  ],
  email: 'support@wildcardts.com',
  tollFree: { label: '1800-212-7880', href: 'tel:18002127880' },
  address:
    'PHASE-2, Webel IT Park, Module 409-410, behind Tata Medical Cancer Hospital, DH Block, Action Area I, Newtown, Kolkata, West Bengal 700156',
  regionalOffices: ['Delhi', 'Mumbai', 'Bangalore', 'Hong Kong'],
};

/** Opens the visitor's mail app with the form details prefilled (no backend needed). */
export function mailtoLink(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
