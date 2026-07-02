import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import LogoWatermark from "@/components/LogoWatermark";
import { domains } from "@/lib/data";

export const metadata: Metadata = {
  title: "Domains | The Bridge",
  description:
    "Five defense capability domains — LAND, AIR, NAVY, C4I, and MUNITIONS — spanning the breadth of The Bridge's advisory expertise.",
};

export default function DomainsPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[280px] sm:h-[310px] lg:h-[340px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            Capability Areas
          </p>
          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            Five Domains of Expertise
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Our advisory teams bring technical grounding across the full
            spectrum of defense capability areas, from ground platforms to
            command systems to guided munitions components.
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
          {domains.map((domain) => (
            <div key={domain.key} className="bg-white p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Domain
              </span>
              <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.1em]">
                {domain.name}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-black/60">
                {domain.description}
              </p>
              <ul className="mt-6 space-y-3 pt-6 border-t border-black/10">
                {domain.capabilities.map((cap) => (
                  <li key={cap} className="flex gap-3 text-sm text-black/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-black" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide max-w-2xl mx-auto">
            Discuss a Domain-Specific Priority
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-black/60 leading-relaxed">
            Whether your focus is a single platform area or a cross-domain
            program, we can help you scope the right advisory engagement.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
