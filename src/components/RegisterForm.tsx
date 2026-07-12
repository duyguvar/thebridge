"use client";

import { useState } from "react";
import type { SegmentId } from "@/lib/data";
import { domains, segments } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const institutionTypes = [
  "Ministry",
  "Free Zone / Economic Development Authority",
  "Defense Innovation Office",
  "Other Government Entity",
];

export default function RegisterForm() {
  const [segment, setSegment] = useState<SegmentId>("international");
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <div className="border border-black/15 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-4">
          Registration Received
        </p>
        <p className="text-lg font-medium">
          Thank you for registering with The Bridge. Our team will review
          your submission and follow up.
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
          const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, segment }),
          });

          if (!res.ok) throw new Error("Request failed");
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
    >
      <div className="flex flex-wrap gap-3 mb-10">
        {segments.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSegment(s.id)}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors ${
              segment === s.id
                ? "bg-black text-white border-black"
                : "bg-white text-black/70 border-black/20 hover:border-black"
            }`}
          >
            {s.shortName}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
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

        <label className="flex flex-col gap-2">
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

        <label className="flex flex-col gap-2">
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

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Country
          </span>
          <input
            required
            type="text"
            name="country"
            className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
        </label>

        {segment === "international" && (
          <>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Capability Area
              </span>
              <select
                required
                name="capabilityArea"
                defaultValue=""
                className="border border-black/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-black"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {domains.map((d) => (
                  <option key={d.key} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Product / Service Description
              </span>
              <textarea
                required
                name="productDescription"
                rows={4}
                className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black resize-none"
              />
            </label>
          </>
        )}

        {segment === "gcc" && (
          <>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Sourcing Category
              </span>
              <input
                required
                type="text"
                name="sourcingCategory"
                placeholder="e.g. UAS components, naval sensors"
                className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Preferred Supplier Region
              </span>
              <input
                type="text"
                name="preferredRegion"
                placeholder="e.g. Turkey"
                className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
              />
            </label>
          </>
        )}

        {segment === "government" && (
          <>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Institution Type
              </span>
              <select
                required
                name="institutionType"
                defaultValue=""
                className="border border-black/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-black"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {institutionTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Localization / Tech-Transfer Priority
              </span>
              <input
                required
                type="text"
                name="priorityArea"
                placeholder="e.g. UAS localization, AI/ML capability building"
                className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
              />
            </label>
          </>
        )}
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-black/70">
          Something went wrong submitting your registration. Please try
          again, or email us directly at contact@thebridgeconsulting.ae.
        </p>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-black text-white hover:bg-bridge-charcoal transition-colors disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting…" : "Submit Registration"}
        </button>
      </div>
    </form>
  );
}
