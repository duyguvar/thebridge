import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import LogoWatermark from "@/components/LogoWatermark";
import type { Product, Segment } from "@/lib/data";
import { products as allProducts } from "@/lib/data";

export default function SegmentPage({ segment }: { segment: Segment }) {
  const relevantProducts: Product[] = allProducts.filter(
    (p) => p.segments !== "cross" && p.segments.includes(segment.id)
  );

  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[560px] sm:h-[620px] lg:h-[680px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            Segment
          </p>
          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            {segment.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            {segment.tagline}
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm sm:text-base leading-relaxed text-black/70">
            {segment.summary}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Who This Is For" title="Audience" />
            <ul className="mt-8 space-y-4">
              {segment.audience.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-black" />
                  <span className="text-sm sm:text-base leading-relaxed text-black/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="What We See" title="Key Challenges" />
            <ul className="mt-8 space-y-4">
              {segment.challenges.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-black" />
                  <span className="text-sm sm:text-base leading-relaxed text-black/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bridge-charcoal text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
          <SectionHeading eyebrow="Our Approach" title="How We Work" inverted />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {segment.approach.map((step, index) => (
              <div key={step} className="bg-bridge-charcoal p-7 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Relevant Solutions"
          title="Programs for This Segment"
          description="A focused set of engagement models tailored to the needs of this segment."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {relevantProducts.map((product) => (
            <div key={product.slug} className="bg-white p-7 sm:p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                {product.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-wide">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                {product.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton href="/solutions">View All Solutions</CTAButton>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide max-w-2xl mx-auto">
            Discuss Your {segment.shortName} Priorities
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-black/60 leading-relaxed">
            Every engagement begins with a conversation about where you
            stand today and what you are trying to achieve.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact">Request a Consultation</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
