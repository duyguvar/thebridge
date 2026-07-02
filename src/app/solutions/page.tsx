import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import ProductsGrid from "@/components/ProductsGrid";
import LogoWatermark from "@/components/LogoWatermark";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions | The Bridge",
  description:
    "Our service portfolio — advisory programs structured by segment and capability area for the GCC defense ecosystem.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[280px] sm:h-[310px] lg:h-[340px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            Solutions
          </p>
          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            Our Service Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Advisory services structured by segment and capability area —
            scoped to value and outcomes, not transactions.
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <ProductsGrid products={products} />
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide max-w-2xl mx-auto">
            Not Sure Which Program Fits?
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-black/60 leading-relaxed">
            Tell us about your organization and objectives — we will
            recommend the right starting point.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact">Request a Consultation</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
