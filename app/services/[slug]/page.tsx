import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { SERVICES, getService, L_SERIES, COOP_GUARANTEES, PRICING_PRINCIPLE } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name}｜工厂出海服务`,
    description: `${service.name}：${service.short}。搭搭未来——工厂出海超级营销合伙人，AI 独立站、SEO/GEO、九大平台广告投放与爆款共创一体交付，不碰货、不垫资、无贸易差价，效果与计费口径写进方案。`,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.slogan}
        image={service.heroImage}
        parent={{ href: "/services", label: "服务产品" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
                <h2 className="text-lg font-bold text-brand-900">服务说明</h2>
                {service.intro.map((p, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-sub md:text-base">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <div key={h.title} className="rounded-[14px] bg-white p-5 ring-1 ring-line">
                    <h3 className="flex items-center gap-2 font-bold text-brand-900">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-amber-600" />
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sub">{h.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[14px] bg-brand-900 p-6 md:p-8">
                <h2 className="font-bold text-amber-400">交付内容</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-brand-100">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {service.slug === "partnership" && (
                <>
                  <div className="mt-6 rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
                    <p className="text-center text-sm font-bold text-brand-900 md:text-base">
                      {PRICING_PRINCIPLE}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-lg font-bold text-brand-900">
                      共创 L 系列（品类冠军路径 · 项目制）
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {L_SERIES.map((l) => (
                        <div key={l.code} className="rounded-[14px] border-t-4 border-amber-600 bg-white p-5 ring-1 ring-line">
                          <div className="flex items-center justify-between">
                            <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-black text-amber-400">
                              {l.code}
                            </span>
                            <span className="text-xs text-sub">{l.duration}</span>
                          </div>
                          <h3 className="mt-3 font-bold text-brand-900">{l.name}</h3>
                          <p className="mt-1 text-xl font-black text-amber-700">{l.price}</p>
                          <p className="mt-2 text-xs leading-relaxed text-sub">{l.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 rounded-[14px] bg-brand-50 p-6 ring-1 ring-line">
                    <h2 className="font-bold text-brand-900">合作保障四条款</h2>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {COOP_GUARANTEES.map((g) => (
                        <div key={g} className="flex items-start gap-2 rounded-[10px] bg-white px-4 py-3 text-sm text-ink ring-1 ring-line">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                          {g}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <aside className="space-y-6">
              {service.price && (
                <div className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                  <h2 className="font-bold text-brand-900">服务定价</h2>
                  <div className="mt-4 space-y-4">
                    {service.price.map((p) => (
                      <div key={p.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                        <p className="text-xs text-sub">{p.label}</p>
                        <p className="mt-1 text-xl font-black text-amber-700">{p.value}</p>
                        {p.note && <p className="mt-1 text-xs leading-relaxed text-sub">{p.note}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                <h2 className="font-bold text-brand-900">常见问题</h2>
                <div className="mt-4">
                  <FaqAccordion items={service.faqs} />
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-[10px] bg-amber-500 px-6 py-3.5 text-base font-semibold text-brand-900 transition hover:bg-amber-400"
              >
                免费获取出海方案 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 rounded-[10px] border border-line px-6 py-3 text-sm font-medium text-sub transition hover:bg-surface"
              >
                <ArrowLeft className="h-4 w-4" /> 返回服务产品
              </Link>
            </aside>
          </div>

          <div className="mt-14">
            <h2 className="text-lg font-bold text-brand-900">相关服务</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 rounded-[14px] bg-white p-5 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-brand-900">{s.name}</span>
                    <span className="mt-0.5 line-clamp-1 block text-xs text-sub">{s.short}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
