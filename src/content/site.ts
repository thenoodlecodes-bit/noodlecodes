// Company facts. Counts are placeholders.
export const site = {
  name: "Noodle Codes",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://noodlecodes.com",
  tagline: "Technology consultancy from India",
  description:
    "Noodle Codes is a technology consultancy from India. We build products, fix tangled systems and set up the marketing and tracking that grow them.",
  founded: 2019,
  emails: {
    hello: "thenoodlecodes@gmail.com",
    careers: "thenoodlecodes@gmail.com",
    press: "thenoodlecodes@gmail.com",
  },
  phone: "+91 73004 99552",
  /** WhatsApp number in international format without the plus, for wa.me links. */
  whatsapp: "917300499552",
  facts: [
    { value: "24", label: "clients since 2019" },
    { value: "40+", label: "engineers, designers and marketers" },
    { value: "6", label: "industries we know well" },
    { value: "83%", label: "of clients come back for a second project" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
} as const;
