import { enquirySchema, fieldErrors, type Enquiry } from "@/lib/enquiry";
import { countryOf } from "@/lib/locale";
import { deliver, limited, readJson } from "@/lib/mail";

function render(e: Enquiry, country: string) {
  return [
    `Topics: ${e.topics.join(", ")}`,
    `Budget: ${e.budget || "Not given"}`,
    `Timeline: ${e.timeline ?? "Not given"}`,
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    e.company ? `Company: ${e.company}` : null,
    e.phone ? `Phone or WhatsApp: ${e.phone}` : null,
    country ? `Country: ${country}` : null,
    `Source: ${e.source || "Contact form"}`,
    "",
    e.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export async function POST(request: Request) {
  if (limited(request, "enquiry")) {
    return Response.json({ error: "Too many messages. Try again in a few minutes." }, { status: 429 });
  }

  const json = await readJson(request);
  if (json === undefined) return Response.json({ error: "Invalid request." }, { status: 400 });

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    return Response.json({ error: "Check the highlighted fields.", fields: fieldErrors(parsed.error) }, { status: 422 });
  }
  const e = parsed.data;

  // Bots fill the hidden field. Pretend it worked.
  if (e.website) return Response.json({ ok: true });

  const country = countryOf(request);
  const sent = await deliver({
    tag: "enquiry",
    row: {
      name: e.name,
      email: e.email,
      company: e.company,
      service: e.topics.join(", "),
      budget: e.budget,
      timeline: e.timeline,
      source: e.source || "Contact form",
      // The phone also goes in the message, so it is kept even before the sheet has a phone column.
      message: e.phone ? `${e.message}\n\nPhone or WhatsApp: ${e.phone}` : e.message,
      phone: e.phone,
      country,
    },
    mail: {
      subject: `New enquiry from ${e.name}${e.company ? `, ${e.company}` : ""}`,
      text: render(e, country),
      replyTo: e.email,
    },
  });
  if (!sent.ok) return Response.json({ error: sent.error }, { status: sent.status });
  return Response.json({ ok: true });
}
