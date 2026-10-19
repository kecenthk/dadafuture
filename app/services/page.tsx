import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import {
  COOP_GUARANTEES,
  GUARANTEE,
  L_SERIES,
  PLAN_MATRIX,
  PLANS,
  PRICING_PRINCIPLE,
  SERVICES,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "服务产品",
  description:
    "搭搭未来九大核心服务 + 超级合伙人全案：爆款共创、WordPress/Shopify 独立站建站、SEO/GEO 运营、九大平台广告投放、内容运营与社媒矩阵、LinkedIn 主动开发、2C 直播、B2B 业务转化与管理、出海 + AI 智能体。",
};

export default function ServicesPage() {
  const [core, partnership] = [
    SERVICES.filter((s) => s.slug !== "partnership"),
    SERVICES.find((s) => s.slug === "partnership")!,
  ];
  return (
    <>
      <PageHero
        title="服务产品"
        subtitle="九大核心服务 + 超级合伙人全案"
        description="从爆款共创到出海 + AI 智能体，所有服务都按「实战出发，出海为本，爆品突围，品类制胜」的一体化方法交付。"
        image={partnership.heroImage}
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group relative rounded-[14px] bg-white p-6 ring-1 transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)] ${
                  s.featured ? "ring-2 ring-amber-600" : "ring-line"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-brand-900">
                    主推 · 首位
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-sub">
                    {String(s.order).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-brand-900 group-hover:text-amber-700">
                  {s.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-sub">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                  查看详情 <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/services/partnership"
            className="mt-6 block rounded-[14px] bg-brand-900 p-6 transition hover:shadow-[0_8px_24px_rgba(0,128,144,0.16)] md:p-8"
          >
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold tracking-widest text-amber-400">深度合作全案</p>
                <h2 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  {partnership.name} · 12 模块 · 150,000 元起/年
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-100">
                  {partnership.slogan}，与工厂形成年度增长共同体。
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900">
                查看全案 <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* ---------------- 报价：两个入口，一条路径 ---------------- */}
          <div className="mt-16 text-center">
            <p className="text-xs font-bold tracking-widest text-amber-700">报价与入口</p>
            <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
              两个入口，一条路径
            </h2>
            <p className="mt-2 text-base text-sub md:text-lg">{PRICING_PRINCIPLE}</p>
          </div>

          {/* 入口一 · 商务版 */}
          <div className="mt-10">
            <h3 className="text-center text-lg font-bold text-brand-900">
              入口一 · 商务版（年订阅制，套餐价＝所选模块累加）
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {PLAN_MATRIX.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-800"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.key}
                className={`flex h-full flex-col rounded-[14px] bg-white p-6 ring-1 ${
                  p.hot ? "ring-2 ring-amber-600 shadow-[0_8px_24px_rgba(22,50,58,0.10)]" : "ring-line"
                }`}
              >
                {p.hot && (
                  <span className="mb-3 inline-flex w-max rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-brand-900">
                    最受欢迎
                  </span>
                )}
                <h3 className="text-lg font-bold text-brand-900">{p.name}</h3>
                <p className="mt-1 text-xs text-sub">{p.tagline}</p>
                <p className="mt-4">
                  <span className="text-lg font-bold text-amber-700">¥</span>
                  <span className="text-4xl font-black text-brand-900">{p.price}</span>
                  <span className="ml-1 text-sm text-sub">{p.unit}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-sub">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block rounded-[10px] py-2.5 text-center text-sm font-semibold transition ${
                    p.hot
                      ? "bg-amber-500 text-brand-900 hover:bg-amber-400"
                      : "bg-brand-900 text-white hover:bg-brand-800"
                  }`}
                >
                  免费获取出海方案
                </Link>
              </div>
            ))}
          </div>

          {/* 入口二 · 共创 L 系列 */}
          <div className="mt-14">
            <h3 className="text-center text-lg font-bold text-brand-900">
              入口二 · 共创 L 系列（品类冠军路径 · 项目制）
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L_SERIES.map((l) => (
                <div
                  key={l.code}
                  className="flex h-full flex-col rounded-[14px] border-t-4 border-amber-600 bg-white p-5 ring-1 ring-line"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-black text-amber-400">
                      {l.code}
                    </span>
                    <span className="text-xs text-sub">{l.duration}</span>
                  </div>
                  <h4 className="mt-3 font-bold text-brand-900">{l.name}</h4>
                  <p className="mt-1 text-xl font-black text-amber-700">{l.price}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-sub">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 合作保障 */}
          <div className="mt-10 rounded-[14px] bg-surface p-6 ring-1 ring-line md:p-8">
            <h3 className="text-center font-bold text-brand-900">合作保障四条款</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {COOP_GUARANTEES.map((g) => (
                <div
                  key={g}
                  className="flex items-start gap-2 rounded-[10px] bg-white px-4 py-3 text-sm text-ink ring-1 ring-line"
                >
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  {g}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[14px] bg-white ring-1 ring-line">
            <div className="bg-brand-900 px-5 py-4">
              <h2 className="font-bold text-amber-400">{GUARANTEE.title}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-brand-50 text-left text-brand-900">
                    {GUARANTEE.headers.map((h) => (
                      <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {GUARANTEE.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={`px-5 py-3 ${i === 0 ? "text-sub" : "font-bold text-amber-700"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-line px-5 py-3 text-xs leading-relaxed text-sub">
              {GUARANTEE.note}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["一对一运营，专属专家量身规划", "收费透明，广告费直充平台", "定期复盘，周度同步 + 月度复盘"].map((t) => (
              <div key={t} className="flex items-center gap-2 rounded-[10px] bg-white px-4 py-3 text-sm text-ink ring-1 ring-line">
                <BadgeCheck className="h-4 w-4 shrink-0 text-leaf-600" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
