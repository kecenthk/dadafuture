"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASES, SOLUTIONS } from "@/lib/data";

const TABS = [{ slug: "all", name: "全部" }, ...SOLUTIONS.map((s) => ({ slug: s.slug, name: s.name }))];

/** 案例中心：四大赛道 tab + 数据卡片 */
export default function CaseTabs() {
  const [tab, setTab] = useState("all");
  const list = tab === "all" ? CASES : CASES.filter((c) => c.track.includes(tab));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.slug}
            type="button"
            onClick={() => setTab(t.slug)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              tab === t.slug
                ? "bg-brand-600 text-white"
                : "bg-white text-sub ring-1 ring-line hover:ring-brand-600"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <article
            key={c.id}
            className="overflow-hidden rounded-[14px] bg-white ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
          >
            <div className="relative h-44 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.client} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute top-3 left-3 rounded-full bg-brand-900/85 px-3 py-1 text-xs font-medium text-amber-400">
                {c.industry}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xl font-black text-amber-700">{c.data}</p>
              <h3 className="mt-1 font-bold text-brand-800">{c.client}</h3>
              <p className="mt-1 text-xs text-sub">{c.clientType}</p>
              <p className="mt-2 text-sm leading-relaxed text-sub">{c.result}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.services.map((s) => (
                  <span key={s} className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-brand-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-[14px] bg-brand-900 p-6 text-center md:p-8">
        <h2 className="text-lg font-bold text-white md:text-xl">您的工厂，可能就是下一个案例</h2>
        <p className="mt-2 text-sm text-brand-100">留下产品与目标市场，免费做一次出海契合度诊断。</p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-amber-500 px-8 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
        >
          免费获取出海方案 <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
