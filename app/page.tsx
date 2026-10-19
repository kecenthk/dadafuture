import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  FileDown,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { img } from "@/lib/images";
import {
  ADVISORS,
  BRAND,
  CASES,
  CORE_STATS,
  DUAL_WHEEL,
  FAQS,
  FOUR_EMPHASES,
  FOUR_STAGES,
  RESOURCE_PACK,
  SALON_PERKS,
  SERVICES,
  SOLUTIONS,
  TEAM,
  TRAININGS,
} from "@/lib/data";

/* 服务矩阵只平铺 9 项核心服务（超级合伙人全案与全部报价在 /services 呈现），
   以保证 4 列 × 3 行的满格排布 */
const MATRIX_SERVICES = SERVICES.filter((s) => s.order <= 9);

/* ---------------- S1 首屏 ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F3FAFB] via-[#F3FAFB] to-[#E6F3F5]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img(
          "modern ceramic tile factory production line with export containers at port in background, global trade theme, cinematic industrial photography"
        )}
        alt="工厂出海与全球贸易场景"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.13]"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-brand-700 md:text-sm">
          <BadgeCheck className="h-4 w-4" />
          品牌孵化器 · 17 年实战营销 · 50+ 孵化签约 IP · 覆盖 9+ 平台
        </p>
        <h1 className="mt-6 text-4xl leading-tight font-black text-brand-900 md:text-6xl">
          {BRAND.slogan}
        </h1>
        <p className="mt-4 text-xl font-bold text-brand-700 md:text-3xl">
          {BRAND.positioning}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sub md:text-lg">
          {BRAND.promise}——以离岸数字孵化服务制造企业品牌出海升级：不碰货、不垫资、
          无贸易差价，覆盖新科技、新材料、新能源、智能制造四大赛道。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-[10px] bg-amber-500 px-8 py-3.5 text-base font-semibold text-brand-900 shadow-[0_8px_24px_rgba(22,50,58,0.10)] transition hover:bg-amber-400"
          >
            免费获取出海方案
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact?type=resource"
            className="flex items-center justify-center gap-2 rounded-[10px] border border-brand-200 bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            <FileDown className="h-4 w-4" />
            领取外贸资料包
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 text-xs text-sub sm:grid-cols-4 md:text-sm">
          {["一对一运营", "收费透明", "广告费直充平台", "90 天见效"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 shrink-0 text-leaf-600" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- S2 四大强调宣言条 ---------------- */
function Emphasis() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-amber-700">服务理念</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            实战出发，出海为本，爆品突围，品类制胜
          </h2>
          <p className="mt-2 text-base text-sub md:text-lg">
            搭搭未来四大强调——我们和别人的根本不同
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_EMPHASES.map((e, i) => (
            <div
              key={e.key}
              className="rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
            >
              <span className="text-3xl font-black text-amber-600/30">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-brand-900">{e.title}</h3>
              <p className="mt-1 text-xs font-medium text-amber-700">{e.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-sub">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- S3 双轮驱动增长模型 ---------------- */
function DualWheel() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[14px] bg-white p-4 ring-1 ring-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={DUAL_WHEEL.image}
            alt="搭搭未来双轮驱动模型"
            className="w-full rounded-[10px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-700">品牌孵化引擎</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            {DUAL_WHEEL.title}
          </h2>
          <p className="mt-2 text-sm font-medium text-sub md:text-base">
            {DUAL_WHEEL.subtitle}——两大轮子一起转，品牌才转得起来
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {DUAL_WHEEL.wheels.map((w) => (
              <div key={w.name} className="rounded-[14px] border-t-4 border-amber-600 bg-white p-5 ring-1 ring-line">
                <h3 className="font-bold text-brand-900">{w.name}</h3>
                <ul className="mt-3 space-y-2">
                  {w.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-sub">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-leaf-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-sub">
            三大实战赛道：
            {DUAL_WHEEL.tracks.map((t) => (
              <span key={t} className="ml-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
                {t}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S4 数据背书 ---------------- */
function Stats() {
  return (
    <section className="bg-brand-900 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-8 px-5 sm:px-8 lg:px-10 lg:grid-cols-4">
        {CORE_STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-black text-amber-400 md:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs text-brand-100 md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- S4 四阶段全链路 ---------------- */
function Stages() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">
            不卖一次性流量，只做全链路增长
          </h2>
          <p className="mt-2 text-base text-sub md:text-lg">
            基建期 → 获客期 → 转化期 → 复盘期，四阶段一体交付
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {FOUR_STAGES.map((s, i) => (
            <div key={s.stage} className="relative">
              <div className="h-full rounded-[14px] border-t-4 border-amber-600 bg-white p-6 shadow-[0_1px_2px_rgba(22,50,58,0.05)] ring-1 ring-line">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-bold text-amber-400">
                    {s.stage}
                  </span>
                  <span className="text-2xl font-black text-brand-100">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.services.map((slug) => {
                    const svc = SERVICES.find((x) => x.slug === slug);
                    return svc ? (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 transition hover:bg-amber-100 hover:text-amber-700"
                      >
                        {svc.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
              {i < 3 && (
                <ChevronRight className="absolute top-1/2 -right-4 z-10 hidden h-6 w-6 -translate-y-1/2 text-amber-600 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- S5 服务矩阵 ---------------- */
function ServiceMatrix() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">
            九大核心服务 + 超级合伙人全案
          </h2>
          <p className="mt-2 text-base text-sub md:text-lg">
            从爆款共创到出海 + AI 智能体，服务模块可按需组合
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MATRIX_SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`group relative flex h-full flex-col rounded-[14px] bg-white p-6 ring-1 transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)] lg:p-7 ${
                s.featured
                  ? "ring-2 ring-amber-600 sm:col-span-2 lg:row-span-2"
                  : "ring-line"
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
              <h3
                className={`mt-4 font-bold text-brand-900 group-hover:text-amber-700 ${
                  s.featured ? "text-xl lg:text-2xl" : "text-lg"
                }`}
              >
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-sub">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                查看详情 <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            查看全部服务与完整报价 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S7 案例数据墙 ---------------- */
function CaseWall() {
  const featured = CASES.slice(0, 6);
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">案例数据墙</h2>
            <p className="mt-2 text-base text-sub md:text-lg">
              每一张卡片背后，都是一套跑通的打法
            </p>
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
          >
            查看全部案例 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <Link
              key={c.id}
              href="/cases"
              className="group overflow-hidden rounded-[14px] bg-white ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
            >
              <div className="relative h-40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.client}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 rounded-full bg-brand-900/80 px-3 py-1 text-xs font-medium text-amber-400">
                  {c.industry}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xl font-black text-amber-700">{c.data}</p>
                <h3 className="mt-1 font-bold text-brand-900">{c.client}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sub">{c.result}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- S8 为什么选择 ---------------- */
function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">
            为什么选择搭搭未来
          </h2>
          <p className="mt-2 text-base text-sub md:text-lg">
            不是只卖工具的服务商——自己下场实战的团队，累计 30+ 年经验，覆盖 9+ 平台
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-[14px] bg-white ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.name}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-brand-900">{t.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-amber-700">{t.role}</p>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-sub">
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADVISORS.map((a) => (
            <div key={a.name} className="rounded-[14px] bg-brand-900 p-5">
              <p className="font-bold text-white">
                {a.name}
                <span className="ml-2 text-xs font-medium text-amber-400">{a.role}</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-brand-100">{a.duty}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
          >
            了解品牌故事与创始人方法论 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S9 培训赋能 + 沙龙 ---------------- */
function Training() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">
            培训赋能：以实战指导实战，以游学眼见为实
          </h2>
          <p className="mt-2 text-base text-sub md:text-lg">
            赋能体系与训练营——把验证过的方法沉淀给合作企业
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {TRAININGS.map((t) => (
            <div key={t.name} className="rounded-[14px] bg-white p-6 ring-1 ring-line">
              <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-900 text-amber-400">
                <Icon name={t.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-brand-900">{t.name}</h3>
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
        <div className="mt-8 rounded-[14px] bg-brand-900 p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold tracking-widest text-amber-400">下期预告</p>
              <h3 className="mt-2 text-xl font-bold text-white">
                「出海 + AI」线下实战沙龙 · 半天六段
              </h3>
              <p className="mt-2 text-sm text-brand-100">
                ¥998/人 · 审核制仅 18 席 · 含半天共创、资料包、工具表、茶歇
              </p>
            </div>
            <Link
              href="/training"
              className="shrink-0 rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
            >
              了解沙龙与报名
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S10 资料包留资 ---------------- */
function ResourcePack() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-700">限时领取</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
            {RESOURCE_PACK.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-sub md:text-base">
            {RESOURCE_PACK.subtitle}。填写表单免费申请，审核通过后发送领取方式。
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {RESOURCE_PACK.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-xs text-sub">
            <Phone className="h-3.5 w-3.5" />
            也可直接联系：{BRAND.contactName} {BRAND.contactPhone}（微信同号）
          </p>
        </div>
        <div className="rounded-[14px] bg-brand-50 p-6 ring-1 ring-line md:p-8">
          <ResourceFormNote />
        </div>
      </div>
    </section>
  );
}

function ResourceFormNote() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}

/* ---------------- S11 前 FAQ + 入口（footer 全站统一） ---------------- */
function FaqSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">常见问题</h2>
          <p className="mt-2 text-sm text-sub">
            关于实战、出海 + AI、效果保证与合作方式
          </p>
        </div>
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-800 ring-1 ring-line transition hover:bg-amber-100 hover:text-amber-700"
            >
              {s.name}出海方案
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Emphasis />
      <DualWheel />
      <Stats />
      <Stages />
      <ServiceMatrix />
      <CtaSection />
      <CaseWall />
      <WhyUs />
      <Training />
      <ResourcePack />
      <FaqSection />
      <CtaSection
        title="先评估，再合作——免费获取出海方案"
        subtitle={`留下您的产品与目标市场，我们按「${SALON_PERKS[0]}」的方法论帮您做一次市场契合度诊断。`}
      />
    </>
  );
}
