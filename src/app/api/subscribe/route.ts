import { subscribeSchema } from "@/lib/enquiry";
import { countryOf } from "@/lib/locale";
import { deliver, limited, readJson } from "@/lib/mail";

export async function POST(request: Request) {
  if (limited(request, "subscribe", 3)) {
    return Response.json({ error: "Too many attempts. Try again in a few minutes." }, { status: 429 });
  }

  const json = await readJson(request);
  const parsed = subscribeSchema.safeParse(json ?? {});
  if (!parsed.success) return Response.json({ error: "Add a valid email." }, { status: 422 });
  if (parsed.data.website) return Response.json({ ok: true });

  // Until a mailing list tool is chosen, subscribers land in the enquiry sheet and the team inbox.
  const { email } = parsed.data;
  const sent = await deliver({
    tag: "subscribe",
    row: { name: "", email, service: "Newsletter", source: "Newsletter", message: "Subscribed to the monthly email from the website footer.", country: countryOf(request) },
    mail: { subject: `New newsletter subscriber: ${email}`, text: `${email} subscribed from the website footer.` },
  });
  if (!sent.ok) return Response.json({ error: sent.error }, { status: sent.status });
  return Response.json({ ok: true });
}
