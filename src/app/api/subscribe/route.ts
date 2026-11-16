import { subscribeSchema } from "@/lib/enquiry";
import { limited, notifyTeam, readJson } from "@/lib/mail";

export async function POST(request: Request) {
  if (limited(request, "subscribe", 3)) {
    return Response.json({ error: "Too many attempts. Try again in a few minutes." }, { status: 429 });
  }

  const json = await readJson(request);
  const parsed = subscribeSchema.safeParse(json ?? {});
  if (!parsed.success) return Response.json({ error: "Add a valid email." }, { status: 422 });
  if (parsed.data.website) return Response.json({ ok: true });

  // Until a mailing list tool is chosen, new subscribers arrive as an email to the team.
  const sent = await notifyTeam({
    tag: "subscribe",
    subject: `New newsletter subscriber: ${parsed.data.email}`,
    text: `${parsed.data.email} subscribed from the website footer.`,
  });
  if (!sent.ok) return Response.json({ error: sent.error }, { status: sent.status });
  return Response.json({ ok: true });
}
