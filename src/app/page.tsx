import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import LogoWatermark from "@/components/LogoWatermark";
import { segments, domains, tagline } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[280px] sm:h-[310px] lg:h-[340px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            GCC Consultancy Group
          </p>
          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            AI, Aviation, Engineering &amp; Business Consulting for the GCC
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            {tagline}
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      {/* Segments */}
      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Three Segments, One Bridge"
          description="Distinct programs designed for the specific realities of each stakeholder in the GCC technology and industrial innovation ecosystem."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/10">
          {segments.map((segment) => (
            <Link
              key={segment.id}
              href={`/segments/${segment.slug}`}
              className="group bg-white p-8 sm:p-10 flex flex-col justify-between min-h-[320px] hover:bg-black transition-colors duration-300"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 group-hover:text-white/50 transition-colors">
                  Segment
                </p>
                <h3 className="mt-4 text-xl sm:text-2xl font-semibold uppercase tracking-wide text-black group-hover:text-white transition-colors">
                  {segment.shortName}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/60 group-hover:text-white/70 transition-colors">
                  {segment.tagline}
                </p>
              </div>
              <span className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-black group-hover:text-white transition-colors">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section className="bg-bridge-charcoal text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            eyebrow="Capability Areas"
            title="Three Domains of Expertise"
            description="Our consultancy work spans the full breadth of these capability areas — grounded in technical understanding, not sales targets."
            inverted
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {domains.map((domain) => (
              <div key={domain.key} className="bg-bridge-charcoal p-6 sm:p-7">
                <h3 className="text-lg font-semibold uppercase tracking-[0.15em]">
                  {domain.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton href="/about#domains" variant="outline-light">
              Explore Domains
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-28 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide max-w-2xl mx-auto">
          Ready to Discuss Your Next GCC Engagement?
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-black/60 leading-relaxed">
          Every engagement begins with a conversation. Reach out to discuss
          where your organization stands and how The Bridge Consulting and Advisory Limited
          can help.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href="/contact">Contact Us</CTAButton>
        </div>
      </section>
    </>
  );
}
