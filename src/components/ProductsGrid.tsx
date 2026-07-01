"use client";

import { useMemo, useState } from "react";
import type { Product, SegmentId } from "@/lib/data";

type FilterKey = "all" | SegmentId | "cross";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Solutions" },
  { key: "international", label: "International" },
  { key: "gcc", label: "GCC Organizations" },
  { key: "government", label: "Government" },
  { key: "cross", label: "Cross-Segment" },
];

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) =>
      p.segments === "cross" ? active === "cross" : p.segments.includes(active as SegmentId)
    );
  }, [active, products]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
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

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
        {filtered.map((product) => (
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
            <ul className="mt-5 space-y-2 pt-5 border-t border-black/10">
              {product.scope.map((item) => (
                <li key={item} className="flex gap-3 text-xs text-black/60 leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-black/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-black/50 text-sm">
          No solutions match this filter.
        </p>
      )}
    </div>
  );
}
