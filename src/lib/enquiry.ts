import { z } from "zod";
import { BUDGETS } from "@/content/services";
import type { ServiceSlug } from "@/content/types";

export const TOPICS = [
  "Product development",
  "Tech consultancy",
  "Digital marketing",
  "Ads tracking setup",
  "Plug and play solutions",
  "Something else",
] as const;

/** Maps ?service= on the contact page to a preselected topic. */
export const TOPIC_FOR: Record<ServiceSlug, (typeof TOPICS)[number]> = {
  development: "Product development",
  consultancy: "Tech consultancy",
  "digital-marketing": "Digital marketing",
  "ads-tracking": "Ads tracking setup",
  "plug-and-play": "Plug and play solutions",
};

export const enquirySchema = z.object({
  topics: z.array(z.enum(TOPICS)).min(1, "Pick at least one."),
  budget: z.enum(BUDGETS).optional(),
  name: z.string().trim().min(1, "Add your name.").max(100),
  email: z.email("Add an email we can reply to.").max(200),
  company: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(20, "Tell us a little more, at least a sentence or two.").max(4000),
  // Honeypot. Real people never see this field.
  website: z.string().max(0).optional().default(""),
});

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryField = "topics" | "name" | "email" | "message";
export const ENQUIRY_FIELDS: EnquiryField[] = ["topics", "name", "email", "message"];

export function fieldErrors(error: z.ZodError) {
  const out: Partial<Record<EnquiryField, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as EnquiryField;
    if (ENQUIRY_FIELDS.includes(key) && !out[key]) out[key] = issue.message;
  }
  return out;
}

export const subscribeSchema = z.object({
  email: z.email("Add a valid email.").max(200),
  website: z.string().max(0).optional().default(""),
});
