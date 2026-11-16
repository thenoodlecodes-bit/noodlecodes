// Company facts. Addresses, phone numbers and counts are placeholders.
export const site = {
  name: "Noodle Codes",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://noodlecodes.com",
  tagline: "Technology consultancy from India",
  description:
    "Noodle Codes is a technology consultancy from India. We build products, fix tangled systems and set up the marketing and tracking that grow them.",
  founded: 2019,
  emails: {
    hello: "hello@noodlecodes.com",
    careers: "careers@noodlecodes.com",
    press: "press@noodlecodes.com",
  },
  phone: "+91 80 4710 2200",
  facts: [
    { value: "24", label: "clients since 2019" },
    { value: "40+", label: "engineers, designers and marketers" },
    { value: "3", label: "studios in India" },
    { value: "83%", label: "of clients come back for a second project" },
  ],
  offices: [
    {
      city: "Bengaluru",
      note: "Head office",
      lines: ["3rd floor, 80 Feet Road", "Indiranagar, Bengaluru 560038"],
    },
    {
      city: "Pune",
      note: "Engineering studio",
      lines: ["Level 5, North Main Road", "Koregaon Park, Pune 411001"],
    },
    {
      city: "Gurugram",
      note: "Growth studio",
      lines: ["Tower B, Golf Course Road", "Sector 54, Gurugram 122002"],
    },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
} as const;
