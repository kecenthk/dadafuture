import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import CaseCarousel from "@/components/CaseCarousel";
import { Icon } from "@/components/Icon";
import { SERVICES, SOLUTIONS } from "@/lib/data";
import {
  BUSINESS_CARDS,
  COOPERATION_MODELS,
  FUNNEL_STEPS,
  INCUBATION_STEPS,
  JOINT_OPERATION,
  PLATFORM_LOGOS,
  TRAINING_TRACK,
} from "@/lib/cooperation";

export const metadata: Metadata = {
  title: "工厂出海解决方案｜五种合作方式 · 孵化陪跑 · 企业内训 · 联合运营",
  description:
    "搭搭未来出海 + AI 的五种合作方式：超级合伙人、工厂出海孵化、企业内训陪跑、联合运营 B2B + B2C、爆款共创。按产品、目标市场与团队能力，选择建设、推广、培训、共创或联合运营；另有孵化陪跑 3–5 万/月、企业内训 2 万/次，按月或按项目计费。先约一次诊断，再定合作方式。",
};

const FUNNEL_BORDERS = [
  "border-brand-900",
  "border-brand-700",
  "border-brand-600",
  "border-brand-500",
  "border-brand-400",
];

export default function SolutionsPage() {
  const heroImage = SERVICES.find((s) => s.slug === "partnership")?.heroImage;
  const [featured, ...rest] = COOPERATION_MODELS;

  return (
    <>
      <PageHero
        title="解决方案"
        subtitle="出海 + AI · 五种合作方式"
        description="结合工厂的产品、目标市场和团队能力，选择建设、推广、培训、共创服务或联合运营。"
        image={heroImage}
      />

      {/* ---------------- 整体业务模块 ---------------- */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">整体业务</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            四块业务，组成一套出海体系
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sub md:text-base">
            从产品筛选到站点、推广与团队能力，四块业务可单独启动，也可按合作方式组合推进。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_CARDS.map((c) => (
              <article
                key={c.name}
                className="flex h-full flex-col rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-900">{c.name}</h3>
                <dl className="mt-4 flex-1 space-y-3 border-t border-line pt-4">
                  <div>
                    <dt className="text-xs font-bold text-amber-700">模式</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-sub">{c.mode}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-amber-700">价值</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-sub">{c.value}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 五种合作方式 ---------------- */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">五种合作方式</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            先确定怎么合作，再确定做多少
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sub md:text-base">
            从产品与市场出发，先明确主推产品、目标市场与现有短板，再约定建设范围、获客渠道和验收口径。
          </p>

          <Link
            href={featured.href}
            className="group mt-8 block rounded-[14px] bg-brand-900 p-6 transition hover:shadow-[0_8px_24px_rgba(0,128,144,0.16)] md:p-8"
          >
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-amber-500 text-brand-900">
                    <Icon name={featured.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-bold tracking-widest text-amber-400">
                    {featured.code} · 年度全案托管
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white md:text-2xl">{featured.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-100">
                  {featured.action}。
                </p>
                <p className="mt-3 text-xs leading-relaxed text-brand-200">适合：{featured.fit}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-brand-800 px-3 py-1 text-xs font-medium text-brand-100"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900">
                查看全案 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {rest.map((m) => (
              <Link
                key={m.code}
                href={m.href}
                className="group flex h-full flex-col rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                    <Icon name={m.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-sub">{m.code}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-900 group-hover:text-amber-700">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">{m.action}</p>
                <p className="mt-3 text-xs leading-relaxed text-sub">
                  <span className="font-semibold text-brand-800">适合：</span>
                  {m.fit}
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {m.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-ink">
                      <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-600" />
                      {d}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                  了解合作方式{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 五步漏斗 ---------------- */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">推进路径</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            从产品与市场出发，推进获客与转化
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sub md:text-base">
            五种合作方式共用一条推进路径，按企业当前阶段切入，不必一次做完。
          </p>

          <ol className="mt-8 grid gap-4 lg:grid-cols-5">
            {FUNNEL_STEPS.map((step, i) => (
              <li
                key={step.title}
                className={`rounded-[14px] border-t-4 bg-white p-5 ring-1 ring-line ${FUNNEL_BORDERS[i]}`}
              >
                <span className="text-xs font-black text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-bold text-brand-900">{step.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {step.points.map((p) => (
                    <li key={p} className="text-xs leading-relaxed text-sub">
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- 工厂出海孵化 ---------------- */}
      <section id="incubation" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">合作方式 02</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">工厂出海孵化</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-sub md:text-base">
            面向有产品和交付能力、正在搭建海外获客体系的工厂，从一个目标市场启动试点，四步走到可复盘的结论。
          </p>

          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INCUBATION_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex h-full flex-col rounded-[14px] bg-white p-6 ring-1 ring-line"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-xs font-black text-amber-400">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-brand-900">{step.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-sub">
                  <span className="font-semibold text-brand-800">目标：</span>
                  {step.goal}
                </p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-sub">
                  <span className="font-semibold text-amber-700">交付：</span>
                  {step.delivery}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- 企业内训陪跑 ---------------- */}
      <section id="training" className="scroll-mt-24 bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">合作方式 03</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">企业内训陪跑</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-sub md:text-base">
            用企业自己的产品、站点和销售流程做练习，让团队掌握日常操作和复盘。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {TRAINING_TRACK.modes.map((m) => (
              <div key={m.name} className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                <h3 className="font-bold text-brand-900">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TRAINING_TRACK.modules.map((m) => (
              <div key={m.title} className="rounded-[14px] bg-white p-5 ring-1 ring-line">
                <h3 className="text-sm font-bold text-brand-900">{m.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sub">{m.points}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-brand-900">交付：</span>
            {TRAINING_TRACK.deliverables.map((d) => (
              <span
                key={d}
                className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 ring-1 ring-brand-100"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 联合运营 ---------------- */}
      <section id="joint" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">合作方式 04</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">联合运营 B2B + B2C</h2>
          <span className="mt-3 block h-1 w-24 bg-amber-500" aria-hidden />

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[0.92fr_2.22fr] lg:gap-10">
            {/* 品牌与双方分工 */}
            <aside className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-brand-900 px-7 py-9 text-center text-white">
              <span className="flex h-24 w-24 items-center justify-center rounded-[12px] bg-white p-3">
                <Image
                  src="/brand/logo.png"
                  alt="搭搭未来"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">产销一体化</h3>
                <p className="mt-2 text-sm font-bold text-amber-400">{JOINT_OPERATION.subtitle}</p>
              </div>
              <p className="w-full max-w-[270px] border-t border-white/40 pt-4 text-sm leading-relaxed text-brand-100">
                {JOINT_OPERATION.intro}
              </p>
              <dl className="w-full max-w-[300px] space-y-3 text-left">
                {JOINT_OPERATION.split.map((s) => (
                  <div key={s.party} className="grid grid-cols-[76px_1fr] gap-1.5">
                    <dt className="text-xs font-bold text-amber-400">{s.party}</dt>
                    <dd className="text-xs leading-relaxed text-brand-100">{s.duty}</dd>
                  </div>
                ))}
              </dl>
            </aside>

            {/* 问题 → 方案 → 业务线 → 约定 */}
            <div className="flex min-w-0 flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-brand-900 md:text-xl">
                  {JOINT_OPERATION.problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">
                  {JOINT_OPERATION.problem.body}
                </p>
              </div>

              <div className="border-t border-line pt-5">
                <h3 className="text-lg font-bold text-brand-900 md:text-xl">
                  {JOINT_OPERATION.solutionTitle}
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-3 text-center sm:grid-cols-5">
                  {JOINT_OPERATION.build.map((b) => (
                    <li key={b.title} className="min-w-0">
                      <div className="mb-2.5 flex h-14 items-center justify-center gap-1 xl:gap-1.5">
                        {b.logos.map((key) => {
                          const logo = PLATFORM_LOGOS[key];
                          return (
                            <Image
                              key={key}
                              src={logo.src}
                              alt={logo.name}
                              width={32}
                              height={32}
                              unoptimized
                              className="h-5 w-5 object-contain xl:h-7 xl:w-7"
                            />
                          );
                        })}
                      </div>
                      <h4 className="text-sm font-bold text-brand-900">{b.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-sub">
                        {b.points.map((p) => (
                          <span key={p} className="block">
                            {p}
                          </span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="space-y-3 border-t border-line pt-5">
                {JOINT_OPERATION.lines.map((l) => (
                  <div
                    key={l.name}
                    className="grid gap-1 border-l-4 border-amber-600 pl-3 sm:grid-cols-[170px_1fr] sm:gap-2"
                  >
                    <dt className="text-sm font-bold text-brand-900">{l.name}</dt>
                    <dd className="text-xs leading-relaxed text-sub sm:text-sm">{l.desc}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-xs leading-relaxed text-sub">{JOINT_OPERATION.footnote}</p>
                <Link
                  href={JOINT_OPERATION.cta.href}
                  className="text-sm font-bold text-amber-700 underline underline-offset-4"
                >
                  {JOINT_OPERATION.cta.label} <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 案例介绍 */}
          <div className="mt-12 border-t border-line pt-8 lg:mt-14">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold tracking-widest text-amber-700">案例介绍</p>
                <h3 className="mt-2 text-xl font-bold text-brand-900 md:text-2xl">
                  案例不在多，在每个赛道打穿一个
                </h3>
              </div>
              <p className="text-sm text-sub">真实投放与运营口径，可提供进一步沟通</p>
            </div>

            <div className="mt-6">
              <CaseCarousel cases={JOINT_OPERATION.cases} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 四大赛道入口 ---------------- */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-widest text-amber-700">按行业看落地案例</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            以上合作方式在四大赛道均有落地
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sub md:text-base">
            大家居、大美丽、大健康、产业升级——同一套方法论：在渠道红利中找品类红利，靠渠道起势，用爆品突围。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group flex items-center gap-3 rounded-[14px] bg-white p-5 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-brand-900 group-hover:text-amber-700">{s.name}</h3>
                  <p className="mt-0.5 truncate text-xs text-sub">{s.scope}</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-amber-700 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
