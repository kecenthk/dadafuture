import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { NEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "新闻动态",
  description: "搭搭未来新闻动态：公司动态、线下活动、行业洞察（出海 + AI、爆品方法论、品类红利选题）。",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="新闻动态"
        subtitle="公司动态 · 线下活动 · 行业洞察"
        description="出海 + AI、爆品方法论、品类红利——行业洞察内容计划持续更新。"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8 lg:px-10">
          <div className="space-y-4">
            {NEWS.map((n) => (
              <article
                key={n.title}
                className="flex items-start gap-4 rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.10)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                  <Newspaper className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-medium text-amber-700">{n.date}</p>
                  <h2 className="mt-1 font-bold text-brand-900">{n.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-sub">{n.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[14px] bg-brand-50 p-6 text-center ring-1 ring-line">
            <p className="text-sm text-sub">更多行业洞察（出海 + AI、爆品方法论、品类红利）持续更新中。</p>
            <Link
              href="/contact?type=resource"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
            >
              领取价值 199 元外贸资料包 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
