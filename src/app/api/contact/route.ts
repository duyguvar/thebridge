import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, organization, email, segment, message } = await request.json();

  if (!name || !organization || !email || !segment || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: process.env.CONTACT_TO_EMAIL ?? user,
      cc: process.env.CONTACT_CC_EMAIL ?? "gokerakinci@thebridgeconsulting.ae",
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
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Send failed";
    return NextResponse.json({ error: msg }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
