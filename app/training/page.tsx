import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { img } from "@/lib/images";
import { SALON_PERKS, TRAININGS } from "@/lib/data";

export const metadata: Metadata = {
  title: "培训赋能",
  description:
    "搭搭未来赋能体系：「主理人 IP + 轻实体」培训、企业 AI 应用专项培训、「出海 + AI」线下实战沙龙（¥998/人，审核制 18 席）。以实战指导实战，以游学眼见为实。",
};

const STEPS = [
  { title: "填写报名表", desc: "公司 / 想打出的爆款产品 SKU 级 / 目标市场 / 产能成本区间 / 当前卡在哪一步" },
  { title: "审核", desc: "审核制筛选，确保同场交流质量" },
  { title: "缴费锁席", desc: "¥998/人，缴费确认座位，仅 18 席" },
  { title: "到场共创", desc: "半天六段实战分享 + 资料包 + 工具表 + 茶歇" },
];

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

      {/* 线下沙龙 */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">「出海 + AI」线下实战沙龙</h2>
            <p className="mt-2 text-sm text-sub">
              半天六段 · ¥998/人 · 审核制仅 18 席 · 讲师阵容：一祎、小凤、Coco、雪梨、十月、搞跨境的可乐哥
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-[14px] border-t-4 border-amber-600 bg-white p-6 ring-1 ring-line">
                <span className="text-2xl font-black text-amber-600/40">{i + 1}</span>
                <h3 className="mt-2 font-bold text-brand-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[14px] bg-brand-900 p-6 md:p-8">
            <h3 className="font-bold text-amber-400">参会权益（价值 199 元外贸资料包）</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SALON_PERKS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-brand-100">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact?type=salon"
                className="inline-flex items-center gap-2 rounded-[10px] bg-amber-500 px-8 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
              >
                报名 / 咨询沙龙席位 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
