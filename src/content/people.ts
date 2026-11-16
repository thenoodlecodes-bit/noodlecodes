import type { Person, PersonId } from "./types";

// Placeholder team. Replace names, roles and bios with the real people.
export const people: Person[] = [
  {
    id: "aarav",
    name: "Aarav Mehta",
    role: "Co-founder and CEO",
    bio: "Spent ten years building payments products in Bengaluru and London before starting Noodle Codes. Still reviews every proposal we send.",
    leadership: true,
  },
  {
    id: "nisha",
    name: "Nisha Raman",
    role: "Co-founder and CTO",
    bio: "Has led platform rewrites, and talked three clients out of them. Writes most of our architecture guidance.",
    leadership: true,
  },
  {
    id: "kabir",
    name: "Kabir Sethi",
    role: "Head of Growth",
    bio: "Ran performance marketing for D2C brands spending ₹50 lakh a month. Now makes sure our clients can prove what their ads earn.",
    leadership: true,
  },
  {
    id: "meera",
    name: "Meera Iyer",
    role: "Principal Engineer",
    bio: "Mobile and backend engineer for twelve years. Leads our work on privacy, security and the DPDP Act.",
    leadership: true,
  },
  {
    id: "rohan",
    name: "Rohan Das",
    role: "Head of Data and AI",
    bio: "Builds data platforms and language model features that hold up in production. Previously at a large Indian fintech.",
    leadership: true,
  },
  {
    id: "ananya",
    name: "Ananya Kulkarni",
    role: "Design Director",
    bio: "Designs products for people who use them every day, in more than one language. Runs our research practice.",
    leadership: true,
  },
  {
    id: "farhan",
    name: "Farhan Qureshi",
    role: "Head of Delivery",
    bio: "Owns timelines, budgets and the Friday demo. Has never missed one.",
    leadership: true,
  },
  {
    id: "tara",
    name: "Tara Joseph",
    role: "Head of People",
    bio: "Hires slowly and on purpose. Built our levels, pay bands and learning budget.",
    leadership: true,
  },
];

export function person(id: PersonId): Person {
  const p = people.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown person: ${id}`);
  return p;
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}
