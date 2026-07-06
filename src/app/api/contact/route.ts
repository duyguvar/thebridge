import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, organization, email, segment, message } = await request.json();

  if (!name || !organization || !email || !segment || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "The Bridge Website <onboarding@resend.dev>",
    to: process.env.RESEND_TO_EMAIL ?? "contact@thebridgeconsulting.ae",
    replyTo: email,
    subject: `New consultation request from ${name} (${organization})`,
    text: [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Email: ${email}`,
      `Segment: ${segment}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
