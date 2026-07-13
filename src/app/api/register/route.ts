import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sql } from "@/lib/db";

const VALID_SEGMENTS = ["international", "gcc", "government"] as const;
type SegmentId = (typeof VALID_SEGMENTS)[number];

function buildDetails(segment: SegmentId, body: Record<string, unknown>) {
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  const arr = (v: unknown): string[] =>
    Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];

  if (segment === "international") {
    return {
      capabilityAreas: arr(body.capabilityAreas),
      productDescription: str(body.productDescription),
    };
  }
  if (segment === "gcc") {
    return {
      sourcingCategories: arr(body.sourcingCategories),
      preferredRegions: arr(body.preferredRegions),
    };
  }
  return {
    institutionTypes: arr(body.institutionTypes),
    priorityAreas: arr(body.priorityAreas),
  };
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, organization, email, phone, country, segment } = body;

  if (
    !name ||
    !organization ||
    !email ||
    !phone ||
    !country ||
    !VALID_SEGMENTS.includes(segment)
  ) {
    return NextResponse.json(
      { error: "Missing or invalid required fields." },
      { status: 400 }
    );
  }

  const details = buildDetails(segment, body);

  try {
    await sql`
      INSERT INTO clients (segment, name, organization, email, phone, country, details)
      VALUES (${segment}, ${name}, ${organization}, ${email}, ${phone}, ${country}, ${sql.json(details)})
    `;
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Database error";
    return NextResponse.json({ error: msg }, { status: 502 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (user && pass) {
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
        subject: `New client registration: ${organization} (${segment})`,
        text: [
          `Segment: ${segment}`,
          `Name: ${name}`,
          `Organization: ${organization}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Country: ${country}`,
          "",
          "Details:",
          JSON.stringify(details, null, 2),
        ].join("\n"),
      });
    } catch {
      // Registration is already saved in the database; email notification
      // failing shouldn't fail the request.
    }
  }

  return NextResponse.json({ ok: true });
}
