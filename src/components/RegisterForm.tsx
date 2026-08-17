"use client";

import { useState } from "react";
import type { SegmentId } from "@/lib/data";
import { domains, segments } from "@/lib/data";
import MultiSelectField from "./MultiSelectField";

type Status = "idle" | "submitting" | "success" | "error";

const institutionTypes = [
  "Ministry",
  "Free Zone / Economic Development Authority",
  "Innovation Office",
  "Other Government Entity",
];

const sourcingCategoryOptions = [
  "Aviation Platforms & Components",
  "Engineering & Industrial Systems",
  "Secure Communications & Systems Integration",
  "Avionics & Flight Systems",
  "Cybersecurity & Information Systems",
  "AI/ML & Data Systems",
  "Other",
];

const preferredRegionOptions = [
  "Turkey",
  "Europe",
  "North America",
  "Asia-Pacific",
  "Middle East & North Africa",
  "Other",
];

const priorityAreaOptions = [
  "Aviation Systems Localization",
  "Engineering & Industrial Localization",
  "Systems Integration & Secure Communications",
  "AI/ML Capability Building",
  "Workforce & Skills Development",
  "Other",
];

function withOther(selected: string[], otherText: string) {
  return selected.map((v) =>
    v === "Other" && otherText.trim() ? `Other: ${otherText.trim()}` : v
  );
}

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia",
  "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

export default function RegisterForm() {
  const [segment, setSegment] = useState<SegmentId>("international");
  const [status, setStatus] = useState<Status>("idle");
  const [capabilityAreas, setCapabilityAreas] = useState<string[]>([]);
  const [capabilityError, setCapabilityError] = useState(false);

  function toggleCapabilityArea(capability: string) {
    setCapabilityError(false);
    setCapabilityAreas((prev) =>
      prev.includes(capability)
        ? prev.filter((c) => c !== capability)
        : [...prev, capability]
    );
  }

  const [sourcingCategories, setSourcingCategories] = useState<string[]>([]);
  const [sourcingCategoryOther, setSourcingCategoryOther] = useState("");
  const [sourcingCategoryError, setSourcingCategoryError] = useState(false);

  function toggleSourcingCategory(value: string) {
    setSourcingCategoryError(false);
    setSourcingCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  const [preferredRegions, setPreferredRegions] = useState<string[]>([]);
  const [preferredRegionOther, setPreferredRegionOther] = useState("");

  function togglePreferredRegion(value: string) {
    setPreferredRegions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  const [institutionTypesSelected, setInstitutionTypesSelected] = useState<
    string[]
  >([]);
  const [institutionTypeError, setInstitutionTypeError] = useState(false);

  function toggleInstitutionType(value: string) {
    setInstitutionTypeError(false);
    setInstitutionTypesSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  const [priorityAreas, setPriorityAreas] = useState<string[]>([]);
  const [priorityAreaOther, setPriorityAreaOther] = useState("");
  const [priorityAreaError, setPriorityAreaError] = useState(false);

  function togglePriorityArea(value: string) {
    setPriorityAreaError(false);
    setPriorityAreas((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  if (status === "success") {
    return (
      <div className="border border-black/15 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-4">
          Registration Received
        </p>
        <p className="text-lg font-medium">
          Thank you for registering with The Bridge Consulting and Advisory Limited.
          <br />
          Our team will review your submission and follow up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (segment === "international" && capabilityAreas.length === 0) {
          setCapabilityError(true);
          return;
        }
        if (segment === "gcc" && sourcingCategories.length === 0) {
          setSourcingCategoryError(true);
          return;
        }
        if (segment === "government" && institutionTypesSelected.length === 0) {
          setInstitutionTypeError(true);
          return;
        }
        if (segment === "government" && priorityAreas.length === 0) {
          setPriorityAreaError(true);
          return;
        }

        setStatus("submitting");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
          const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...data,
              segment,
              ...(segment === "international" ? { capabilityAreas } : {}),
              ...(segment === "gcc"
                ? {
                    sourcingCategories: withOther(
                      sourcingCategories,
                      sourcingCategoryOther
                    ),
                    preferredRegions: withOther(
                      preferredRegions,
                      preferredRegionOther
                    ),
                  }
                : {}),
              ...(segment === "government"
                ? {
                    institutionTypes: institutionTypesSelected,
                    priorityAreas: withOther(priorityAreas, priorityAreaOther),
                  }
                : {}),
            }),
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
            Contact Number
          </span>
          <input
            required
            type="tel"
            name="phone"
            placeholder="+971 50 000 0000"
            className="border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Country
          </span>
          <select
            required
            name="country"
            defaultValue=""
            className="border border-black/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-black"
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        {segment === "international" && (
          <>
            <fieldset className="flex flex-col gap-2 sm:col-span-2">
              <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 mb-2">
                Company Capabilities
              </legend>
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 border px-4 py-4 ${
                  capabilityError ? "border-red-500" : "border-black/20"
                }`}
              >
                {domains.map((d) => (
                  <div key={d.key} className="flex flex-col gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      {d.name}
                    </span>
                    {d.capabilities.map((c) => (
                      <label
                        key={c}
                        className="flex items-start gap-2 text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={capabilityAreas.includes(c)}
                          onChange={() => toggleCapabilityArea(c)}
                          className="mt-0.5 accent-black"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                ))}
              </div>
              {capabilityError && (
                <p className="text-xs text-red-600">
                  Select at least one capability.
                </p>
              )}
            </fieldset>

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
            <MultiSelectField
              label="Looking For?"
              options={sourcingCategoryOptions}
              selected={sourcingCategories}
              onToggle={toggleSourcingCategory}
              columns={3}
              hasOther
              otherValue={sourcingCategoryOther}
              onOtherChange={setSourcingCategoryOther}
              error={sourcingCategoryError}
              errorMessage="Select at least one option."
            />

            <MultiSelectField
              label="Preferred Supplier Region"
              options={preferredRegionOptions}
              selected={preferredRegions}
              onToggle={togglePreferredRegion}
              columns={3}
              hasOther
              otherValue={preferredRegionOther}
              onOtherChange={setPreferredRegionOther}
            />
          </>
        )}

        {segment === "government" && (
          <>
            <MultiSelectField
              label="Institution Type"
              options={institutionTypes}
              selected={institutionTypesSelected}
              onToggle={toggleInstitutionType}
              columns={2}
              error={institutionTypeError}
              errorMessage="Select at least one institution type."
            />

            <MultiSelectField
              label="Localization / Tech-Transfer Priority"
              options={priorityAreaOptions}
              selected={priorityAreas}
              onToggle={togglePriorityArea}
              columns={3}
              hasOther
              otherValue={priorityAreaOther}
              onOtherChange={setPriorityAreaOther}
              error={priorityAreaError}
              errorMessage="Select at least one priority area."
            />
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
