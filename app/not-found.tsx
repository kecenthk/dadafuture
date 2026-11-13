"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const HOT_LINKS = [
  { href: "/services", label: "九大服务", desc: "独立站 · SEO/GEO · 广告投放 · 爆款共创" },
  { href: "/solutions", label: "解决方案", desc: "五种合作方式，按产品与团队能力选" },
  { href: "/cases", label: "案例中心", desc: "四大赛道实战数据墙" },
  { href: "/training", label: "培训赋能", desc: "「出海 + AI」线下实战沙龙" },
  { href: "/about", label: "关于我们", desc: "团队 · 行业方向负责人 · 顾问体系" },
  { href: "/contact", label: "联系我们", desc: "免费获取出海方案" },
];

export default function NotFound() {
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const key = q.trim();
    if (!key) return;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(`site:dadafuture.com ${key}`)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-xs font-bold tracking-widest text-amber-700">404</p>
          <h1 className="mt-2 text-3xl font-bold text-brand-900 md:text-4xl">
            这个页面没找到
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-sub md:text-base">
            链接可能已调整或失效。你可以回到首页，或直接搜索想看的内容 —— 也可以把需求留给我们，24 小时内给到出海建议。
          </p>

          <form onSubmit={onSearch} className="mx-auto mt-6 flex max-w-[520px] gap-2">
            <label htmlFor="site-search" className="sr-only">
              站内搜索
            </label>
            <input
              id="site-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索：独立站 / SEO / 广告投放 / 沙龙…"
              className="h-12 w-full rounded-[10px] bg-white px-4 text-sm text-ink ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-600"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[10px] bg-brand-900 px-5 text-sm font-semibold text-amber-400 transition hover:bg-brand-800"
            >
              <Search className="h-4 w-4" />
              搜索
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
            >
              返回首页 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-brand-900 ring-1 ring-line transition hover:bg-brand-50"
            >
              直接咨询
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[960px]">
          <h2 className="text-center text-sm font-bold tracking-widest text-amber-700">热门内容</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-[14px] bg-white p-5 ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
                <p className="flex items-center justify-between font-bold text-brand-900">
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-amber-600" />
                </p>
                <p className="mt-1 text-xs leading-relaxed text-sub">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
