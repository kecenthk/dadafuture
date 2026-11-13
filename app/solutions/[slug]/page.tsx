import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { SOLUTIONS, getSolution, getService } from "@/lib/data";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: `${s.name}出海解决方案｜选品 · 渠道 · 内容 · 转化全链路`,
    description: `${s.name}（${s.scope}）出海解决方案：${s.intro}搭搭未来——工厂出海超级营销合伙人，从选品、渠道到内容与转化的全链路陪跑。`,
  };
}

export default async function SolutionDetailPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero
        title={`${s.name}出海`}
        subtitle={s.scope}
        description={s.intro}
        image={s.heroImage}
        parent={{ href: "/solutions", label: "解决方案" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
              <h2 className="text-lg font-bold text-brand-900">赛道痛点</h2>
              <ul className="mt-4 space-y-3">
                {s.painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-sub">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[14px] bg-brand-900 p-6 md:p-8">
              <h2 className="text-lg font-bold text-amber-400">「渠道红利中的品类红利」机会分析</h2>
              <ul className="mt-4 space-y-3">
                {s.opportunity.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm leading-relaxed text-brand-100">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-center text-2xl font-bold text-brand-900">打法：靠渠道起势，用爆品突围</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {s.playbook.map((p, i) => (
                <div key={p.title} className="rounded-[14px] border-t-4 border-amber-600 bg-white p-6 ring-1 ring-line">
                  <span className="text-2xl font-black text-amber-600/40">{i + 1}</span>
                  <h3 className="mt-2 font-bold text-brand-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sub">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-brand-900">代表案例</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {s.cases.map((c) => (
                <div key={c.name} className="flex items-start justify-between gap-4 rounded-[14px] bg-white p-5 ring-1 ring-line">
                  <div>
                    <h3 className="font-bold text-brand-900">{c.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sub">{c.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold whitespace-nowrap text-amber-700">
                    {c.data}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[14px] bg-brand-50 p-6 ring-1 ring-line md:p-8">
            <h2 className="text-lg font-bold text-brand-900">对应服务组合</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {s.services.map((slug) => {
                const svc = getService(slug);
                if (!svc) return null;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="flex items-center gap-3 rounded-[10px] bg-white p-4 ring-1 ring-line transition hover:ring-amber-600"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                      <Icon name={svc.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-bold text-brand-900">{svc.name}</span>
                      <span className="mt-0.5 line-clamp-1 block text-xs text-sub">{svc.short}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-amber-600" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CtaSection title={`免费获取${s.name}出海方案`} subtitle={`留下您的${s.scope.split("／")[0]}产品与目标市场，先做市场调研，评估产品与市场的契合度。`} />
    </>
  );
}
