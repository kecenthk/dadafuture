"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/** FAQ 手风琴 */
export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-[14px] bg-white ring-1 ring-line">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-surface"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-brand-800 md:text-base">{item.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <p className="px-5 pb-4 text-sm leading-relaxed text-sub">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
