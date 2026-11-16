import { enquirySchema, fieldErrors, type Enquiry } from "@/lib/enquiry";
import { limited, notifyTeam, readJson } from "@/lib/mail";

function render(e: Enquiry) {
  return [
    `Topics: ${e.topics.join(", ")}`,
    `Budget: ${e.budget ?? "Not given"}`,
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    e.company ? `Company: ${e.company}` : null,
    e.phone ? `Phone: ${e.phone}` : null,
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
  const enquiry = parsed.data;

  // Bots fill the hidden field. Pretend it worked.
  if (enquiry.website) return Response.json({ ok: true });

  const sent = await notifyTeam({
    tag: "enquiry",
    subject: `New enquiry from ${enquiry.name}${enquiry.company ? `, ${enquiry.company}` : ""}`,
    text: render(enquiry),
    replyTo: enquiry.email,
  });
  if (!sent.ok) return Response.json({ error: sent.error }, { status: sent.status });
  return Response.json({ ok: true });
}
