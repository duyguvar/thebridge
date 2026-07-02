"use client";

import { useMemo, useState } from "react";
import type { Product, SegmentId } from "@/lib/data";
import { segments } from "@/lib/data";

type FilterKey = "all" | SegmentId | "cross";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Solutions" },
  { key: "international", label: "Companies" },
  { key: "gcc", label: "GCC Organizations" },
  { key: "government", label: "Government" },
  { key: "cross", label: "Cross-Segment" },
];

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
  const [active, setActive] = useState<FilterKey>("all");

  const groups = useMemo(() => {
    const visibleKeys = active === "all" ? groupOrder : [active];
    return visibleKeys
      .map((key) => ({
        key,
        products: products.filter((p) =>
          p.segments === "cross" ? key === "cross" : p.segments.includes(key as SegmentId)
        ),
      }))
      .filter((group) => group.products.length > 0);
  }, [active, products]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors ${
              active === f.key
                ? "bg-black text-white border-black"
                : "bg-white text-black/70 border-black/20 hover:border-black"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-16">
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
        <p className="mt-12 text-center text-black/50 text-sm">
          No solutions match this filter.
        </p>
      )}
    </div>
  );
}
