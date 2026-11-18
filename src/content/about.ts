import type { Step } from "./types";

// Placeholder company story. Replace dates and milestones with the real ones.
export const about = {
  title: "We started Noodle Codes to do the work properly.",
  intro:
    "Noodle Codes is a technology consultancy from India. We build software, fix the systems that hold companies back and set up the marketing and tracking that make it pay.",
  story: [
    "Our founders spent years on product and payments teams, watching good companies lose a year to agencies that sold senior people and sent juniors, and to rewrites nobody needed.",
    "So in 2019 they started Noodle Codes with a simple rule: the people who pitch the work do the work. The name came from the first whiteboard session with a client, where their system diagram looked like a bowl of noodles. Untangling it became the job.",
    "Today we are about 40 people working across India. We have worked with 24 clients, from first-time founders to listed brands, in India, the Gulf and the UK. Most of them came back for a second project.",
  ],
  values: [
    { title: "Say what you think", text: "Clients pay for our judgement. We give it plainly, even when the answer is a smaller project." },
    { title: "Ship every week", text: "Progress you can click on beats progress you read about. Every team demos on Friday." },
    { title: "Leave it better", text: "Code, docs and dashboards should make sense to the next person, including your own team after we leave." },
    { title: "Measure the outcome", text: "We judge our work by what changed for the business, not by how much we shipped." },
    { title: "Stay small on purpose", text: "Senior teams of three to six. We turn down work rather than staff it with people still learning." },
    { title: "Teach as we go", text: "Your team should understand every decision we make. We pair, write it down and explain." },
  ] satisfies Step[],
  timeline: [
    { title: "2019", text: "Founded in India. First client: a lending startup." },
    { title: "2021", text: "Grew to a team of 15. First healthcare and mobility clients." },
    { title: "2023", text: "Started the growth practice, so the people building products also make them pay." },
    { title: "2024", text: "Released the five plug and play modules after running them in client products for two years." },
    { title: "2026", text: "Third edition of the Stack Report. About 40 people, 24 clients and counting." },
  ] satisfies Step[],
  giving: [
    { title: "Free audits for non-profits", text: "Two technical audits a quarter, at no cost, for Indian non-profits and social enterprises." },
    { title: "Open source", text: "We publish internal tools and contribute fixes upstream to the projects we depend on." },
    { title: "Meetups and mentoring", text: "We host monthly engineering meetups and mentor students from Tier 2 colleges." },
  ] satisfies Step[],
};
