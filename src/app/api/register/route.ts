import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sql } from "@/lib/db";

const VALID_SEGMENTS = ["international", "gcc", "government"] as const;
type SegmentId = (typeof VALID_SEGMENTS)[number];

function buildDetails(segment: SegmentId, body: Record<string, string>) {
  if (segment === "international") {
    return {
      capabilityArea: body.capabilityArea ?? "",
      productDescription: body.productDescription ?? "",
    };
  }
  if (segment === "gcc") {
    return {
      sourcingCategory: body.sourcingCategory ?? "",
      preferredRegion: body.preferredRegion ?? "",
    };
  }
  return {
    institutionType: body.institutionType ?? "",
    priorityArea: body.priorityArea ?? "",
  };
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, organization, email, country, segment } = body;

  if (
    !name ||
    !organization ||
    !email ||
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
      INSERT INTO clients (segment, name, organization, email, country, details)
      VALUES (${segment}, ${name}, ${organization}, ${email}, ${country}, ${sql.json(details)})
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
