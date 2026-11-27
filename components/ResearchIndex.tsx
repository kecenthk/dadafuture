"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, FileText, RotateCcw, Search } from "lucide-react";
import type { ResearchKind, ResearchReport } from "@/lib/research/reports";
import { reportHref } from "@/lib/research/reports";
import type { researchCopy } from "@/lib/content/pages/zh/research";

type Copy = typeof researchCopy;

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
        active
          ? "bg-brand-900 text-white"
          : "bg-white text-brand-800 ring-1 ring-line hover:bg-brand-50"
      }`}
    >
      {children}
    </button>
  );
}

export default function ResearchIndex({
  reports,
  copy,
  kinds,
  categories,
  regions,
  initialQuery = "",
}: {
  reports: ResearchReport[];
  copy: Copy;
  kinds: ResearchKind[];
  categories: string[];
  regions: string[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [activeKinds, setActiveKinds] = useState<ResearchKind[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeRegions, setActiveRegions] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports
      .filter((r) => {
        if (activeKinds.length && !activeKinds.includes(r.kind)) return false;
        if (activeCategories.length && !activeCategories.includes(r.category)) return false;
        if (activeRegions.length && !r.regions.some((g) => activeRegions.includes(g))) return false;
        if (!q) return true;
        const haystack = [r.title, r.summary, r.category, r.kind, ...r.regions, ...r.tags, ...r.highlights]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }, [reports, query, activeKinds, activeCategories, activeRegions]);

  const hasFilter =
    query.trim().length > 0 || activeKinds.length > 0 || activeCategories.length > 0 || activeRegions.length > 0;

  const reset = () => {
    setQuery("");
    setActiveKinds([]);
    setActiveCategories([]);
    setActiveRegions([]);
  };

  return (
    <div>
      <div className="rounded-[16px] bg-brand-50/70 p-5 ring-1 ring-line sm:p-6">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-700/60" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.filters.searchPlaceholder}
            className="w-full rounded-[12px] border-0 bg-white py-3 pl-11 pr-4 text-sm text-brand-900 shadow-[0_1px_2px_rgba(22,50,58,0.06)] ring-1 ring-line outline-none transition focus:ring-2 focus:ring-brand-500"
          />
        </label>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold text-brand-900/60">{copy.filters.kindsLabel}</span>
            {kinds.map((k) => (
              <Chip key={k} active={activeKinds.includes(k)} onClick={() => setActiveKinds((prev) => toggle(prev, k))}>
                {k}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold text-brand-900/60">{copy.filters.categoriesLabel}</span>
            {categories.map((c) => (
              <Chip
                key={c}
                active={activeCategories.includes(c)}
                onClick={() => setActiveCategories((prev) => toggle(prev, c))}
              >
                {c}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold text-brand-900/60">{copy.filters.regionsLabel}</span>
            {regions.map((r) => (
              <Chip
                key={r}
                active={activeRegions.includes(r)}
                onClick={() => setActiveRegions((prev) => toggle(prev, r))}
              >
                {r}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-brand-900">
          {copy.filters.resultTemplate.replace("{n}", String(filtered.length))}
        </p>
        {hasFilter && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 transition hover:text-amber-800"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {copy.filters.reset}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-[14px] bg-white p-10 text-center ring-1 ring-line">
          <p className="font-bold text-brand-900">{copy.filters.emptyTitle}</p>
          <p className="mt-1.5 text-sm text-sub">{copy.filters.emptyDesc}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {copy.filters.emptyAction}
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filtered.map((r) => (
            <a
              key={r.slug}
              href={reportHref(r.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,128,144,0.12)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                  <FileText className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium text-amber-700">
                  {copy.card.updated.replace("{date}", r.publishedAt)}
                </span>
              </div>
              <h2 className="mt-4 text-base font-bold leading-snug text-brand-900 group-hover:text-brand-700">
                {r.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sub">{r.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {[r.kind, r.category, ...r.regions].map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-800">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-900">
                {copy.card.view}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
