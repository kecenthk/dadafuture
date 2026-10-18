import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { SOLUTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "解决方案",
  description:
    "搭搭未来四大赛道出海底座方案：大家居（建材/家居/照明/机械）、大美丽（美妆/个护/包装）、大健康（保健品/器械）、产业升级（科技出海/数字化全球化）。在渠道红利中找品类红利，靠渠道起势，用爆品突围。",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="解决方案"
        subtitle="四大赛道：大家居 / 大美丽 / 大健康 / 产业升级"
        description="同一套方法论：在渠道红利中找品类红利，靠渠道起势，用爆品突围。每个赛道配专属打法与代表案例。"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group overflow-hidden rounded-[14px] bg-white ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.heroImage}
                    alt={s.name}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-amber-500 text-brand-900">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-white">{s.name}</h2>
                      <p className="text-xs text-brand-100">{s.scope}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-sub">{s.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700">
                    查看赛道方案 <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
