"use client";

import { useMemo, useState } from "react";
import type { Product, SegmentId } from "@/lib/data";
import { segments } from "@/lib/data";

type FilterKey = "all" | SegmentId | "cross";
type View = { mode: "picker" } | { mode: "results"; filter: FilterKey };

const groupOrder: FilterKey[] = ["international", "gcc", "government", "cross"];

function groupHeading(key: FilterKey): string {
  if (key === "cross") return "Cross-Segment Services";
  const segment = segments.find((s) => s.id === key);
  return segment ? segment.shortName : key;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-7 sm:p-8 flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
        {product.category}
      </p>
      <h3 className="mt-3 text-lg font-semibold uppercase tracking-wide">
        {product.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black/60">
        {product.summary}
      </p>
      <ul className="mt-5 space-y-2 pt-5 border-t border-black/10">
        {product.scope.map((item) => (
          <li key={item} className="flex gap-3 text-xs text-black/60 leading-relaxed">
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-black/40" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [view, setView] = useState<View>({ mode: "picker" });

  const groups = useMemo(() => {
    if (view.mode !== "results") return [];
    const visibleKeys = view.filter === "all" ? groupOrder : [view.filter];
    return visibleKeys
      .map((key) => ({
        key,
        products: products.filter((p) =>
          p.segments === "cross" ? key === "cross" : p.segments.includes(key as SegmentId)
        ),
      }))
      .filter((group) => group.products.length > 0);
  }, [view, products]);

  if (view.mode === "picker") {
    return (
      <div className="animate-fade-in">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-4">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
            Which Best Describes You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
          {segments.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setView({ mode: "results", filter: s.id })}
              className="group bg-white p-8 sm:p-10 text-left flex flex-col justify-between min-h-[280px] hover:bg-black transition-colors duration-300"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 group-hover:text-white/50 transition-colors">
                  Segment
                </p>
                <h3 className="mt-4 text-xl sm:text-2xl font-semibold uppercase tracking-wide text-black group-hover:text-white transition-colors">
                  {s.shortName}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/60 group-hover:text-white/70 transition-colors">
                  {s.tagline}
                </p>
              </div>
              <span className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-black group-hover:text-white transition-colors">
                View Solutions &rarr;
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setView({ mode: "results", filter: "all" })}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 hover:text-black underline underline-offset-4 transition-colors"
          >
            View All Solutions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div key={view.filter} className="animate-fade-in">
      <button
        type="button"
        onClick={() => setView({ mode: "picker" })}
        className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors"
      >
        &larr; Choose a Different Segment
      </button>

      <div className="space-y-16">
        {groups.map((group) => (
          <div key={group.key}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">
                {groupHeading(group.key)}
              </h2>
              {group.key === "international" && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                  Turkey Corridor — Priority Focus
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
              {group.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {groups.length === 0 && (
        <p className="mt-4 text-center text-black/50 text-sm">
          No solutions match this filter.
        </p>
      )}
    </div>
  );
}
