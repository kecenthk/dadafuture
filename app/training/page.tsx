import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { img } from "@/lib/images";
import { BRAND, SALON, SALON_PERKS, TRAININGS } from "@/lib/data";

export const metadata: Metadata = {
  title: "出海 + AI 实战沙龙｜企业 AI 内训 · 主理人 IP 训练营 · 培训赋能",
  description:
    "搭搭未来赋能体系：「主理人 IP + 轻实体」培训、企业 AI 应用专项培训、「出海 + AI」线下实战沙龙（第 2 期 11 月 19 日 13:00–17:30，¥1980/人，仅 20 席，含 30 天 1 次 1v1 诊断）。以实战指导实战，以游学眼见为实，只讲正在跑的打法。",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="培训赋能"
        subtitle="以实战指导实战 · 以游学眼见为实"
        description="赋能体系与训练营：把搭搭未来在 50 亿+ 爆品实战中验证过的方法，沉淀给合作企业与合作伙伴。"
        image={img("business training workshop scene, professional speaker presenting to audience, modern seminar room, engaged participants")}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {TRAININGS.map((t) => (
              <div key={t.name} className="rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                  <Icon name={t.icon} className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-brand-900">{t.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-sub">{t.desc}</p>
                <ul className="mt-4 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-sub">
                      <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 线下沙龙 · 最新一期 */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest text-amber-700">
              最新一期 · {SALON.edition}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
              「出海 + AI」线下实战沙龙
            </h2>
            <p className="mt-2 text-sm text-sub md:text-base">
              只讲自己正在跑的打法，不讲行业趋势 —— 三位主讲，20 席闭门
            </p>
          </div>

          {/* 关键信息 */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "时间", value: SALON.date, note: SALON.time },
              { label: "地点", value: SALON.venue, note: "签到后统一引导入场" },
              { label: "席位", value: SALON.seats, note: SALON.audience },
              { label: "费用", value: `¥${SALON.price}/人`, note: SALON.priceNote },
            ].map((item) => (
              <div key={item.label} className="rounded-[14px] bg-white p-5 ring-1 ring-line">
                <p className="text-xs font-bold tracking-widest text-amber-700">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-brand-900">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-sub">{item.note}</p>
              </div>
            ))}
          </div>

          {/* 第 2 期宣传图：一行三张 */}
          <div className="mx-auto mt-6 grid max-w-[1180px] grid-cols-3 gap-3 md:gap-5">
            {[
              { src: "/salon/salon-2-invite.png", alt: "第 2 期「出海 + AI」实战沙龙诚邀" },
              { src: "/salon/salon-2-speakers.png", alt: "第 2 期主讲阵容" },
              { src: "/salon/salon-2-recap.png", alt: "往期沙龙现场" },
            ].map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                className="w-full rounded-[14px] ring-1 ring-line"
                loading="lazy"
              />
            ))}
          </div>

          {/* 三位主讲 */}
          <div className="mt-12">
            <h3 className="text-center text-lg font-bold text-brand-900">
              三位主讲 · 只讲自己正在跑的打法
            </h3>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {SALON.speakers.map((s) => (
                <div
                  key={s.no}
                  className="flex h-full flex-col rounded-[14px] border-t-4 border-amber-600 bg-white p-6 ring-1 ring-line"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-black text-amber-400">
                      {s.no}
                    </span>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
                      {s.tag}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-brand-900">{s.topic}</h4>
                  <p className="mt-1 text-xs text-sub">
                    {s.name} · {s.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sub">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 border-t border-line pt-3 text-sm font-medium text-brand-800">
                    「{s.quote}」
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 当天流程 */}
          <div className="mt-12 rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-bold text-brand-900">当天流程</h3>
              <p className="text-xs text-sub">
                {SALON.date} · {SALON.time}
              </p>
            </div>
            <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
              {SALON.agenda.map((a) => (
                <div
                  key={a.time}
                  className="flex items-start gap-3 border-b border-line py-2.5"
                >
                  <span className="w-12 shrink-0 text-sm font-bold text-amber-700">{a.time}</span>
                  <span className="flex-1 text-sm text-ink">{a.title}</span>
                  <span className="shrink-0 text-xs text-sub">{a.who}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 三个不同 */}
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {SALON.values.map((v, i) => (
              <div key={v.title} className="rounded-[14px] bg-white p-5 ring-1 ring-line">
                <span className="text-2xl font-black text-amber-600/40">0{i + 1}</span>
                <h4 className="mt-1 font-bold text-brand-900">{v.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-sub">{v.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-medium text-brand-800">
            「{SALON.claim}」
          </p>

          {/* 到场即得 + 报名 */}
          <div className="mt-10 rounded-[14px] bg-brand-900 p-6 md:p-8">
            <h3 className="font-bold text-amber-400">到场即得（价值 199 元外贸资料包 · 6 项）</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SALON_PERKS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-brand-100">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/contact?type=salon"
                className="inline-flex w-max items-center gap-2 rounded-[10px] bg-amber-500 px-8 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
              >
                报名 / 咨询沙龙席位 <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-100">
                报名 / 咨询：
                <span className="font-bold text-amber-400">{BRAND.contactPhone}</span>
                （{BRAND.contactName} · {BRAND.contactTitle}，微信同号）
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
