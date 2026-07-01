import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import LogoWatermark from "@/components/LogoWatermark";
import { serviceBoundaryStatement } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | The Bridge",
  description:
    "The Bridge is an independent GCC defense accelerator — mission, mandate, and service boundary.",
};

const principles = [
  {
    title: "Independence",
    body: "We hold no commission, brokerage fee, or trading interest in any transaction. Our counsel is not shaped by a sale.",
  },
  {
    title: "Technical Grounding",
    body: "Every assessment, roadmap, and recommendation is rooted in domain expertise across LAND, AIR, NAVY, C4I, and MUNITIONS capability areas.",
  },
  {
    title: "Continuity",
    body: "We work as an extension of our clients' teams — often over multi-year horizons — rather than delivering a single report and departing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[560px] sm:h-[620px] lg:h-[680px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            About The Bridge
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            An Independent GCC Defense Accelerator
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            We connect global technology, regional industry, and government
            priorities — through advisory, not brokerage.
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Mission" title="Why We Exist" />
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/70">
              The GCC defense ecosystem sits at the intersection of global
              technology, regional industrial ambition, and national
              priorities. The Bridge exists to make that intersection
              navigable — providing independent, technically grounded
              advisory support to the organizations shaping it, without the
              conflicts of interest that come from trading in the products
              being evaluated.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Vision" title="Where We're Headed" />
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/70">
              We aim to be the standing advisory layer of the GCC defense
              innovation ecosystem — trusted by international entrants,
              regional industry, and government institutions alike, precisely
              because we represent none of their competing interests and
              all of their shared need for sound, independent judgment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bridge-charcoal text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
          <SectionHeading eyebrow="How We Operate" title="Our Principles" inverted />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {principles.map((p) => (
              <div key={p.title} className="bg-bridge-charcoal p-7 sm:p-8">
                <h3 className="text-lg font-semibold uppercase tracking-[0.15em]">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="border border-black/15 p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-5">
            Service Boundary
          </p>
          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-black">
            {serviceBoundaryStatement}
          </p>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide max-w-2xl mx-auto">
            Get in Touch
          </h2>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
