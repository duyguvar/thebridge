"use client";

import { useState } from "react";

const segmentOptions = [
  "International Company Entering the GCC",
  "GCC Defense Organization",
  "Government & Public Sector",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <div className="border border-black/15 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-4">
          Message Received
        </p>
        <p className="text-lg font-medium">
          Thank you for reaching out. A member of The Bridge team will
          respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!res.ok) throw new Error("Request failed");
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Full Name
        </span>
        <input
          required
          type="text"
          name="name"
          className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Organization
        </span>
        <input
          required
          type="text"
          name="organization"
          className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Segment
        </span>
        <select
          required
          name="segment"
          defaultValue=""
          className="border border-black/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-black"
        >
          <option value="" disabled>
            Select an option
          </option>
          {segmentOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black resize-none"
        />
      </label>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-black/70">
          Something went wrong sending your message. Please try again, or
          email us directly at contact@thebridgeconsulting.ae.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-black text-white hover:bg-bridge-charcoal transition-colors disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Request a Consultation"}
        </button>
      </div>
    </form>
  );
}
