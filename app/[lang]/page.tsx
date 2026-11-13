import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BadgeCheck, ChevronRight, FileDown, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { currentLocale } from "@/lib/content";
import { getData, type DataContent } from "@/lib/content/data";
import { getPages } from "@/lib/content/pages";
import type { CommonCopy } from "@/lib/content/pages/zh/common";
import type { HomeCopy } from "@/lib/content/pages/zh/home";
import type { TrainingCopy } from "@/lib/content/pages/zh/training";
import { localizePath, type Locale } from "@/lib/i18n/config";

type SectionProps = {
  locale: Locale;
  copy: HomeCopy;
  data: DataContent;
  form: CommonCopy["form"];
  salonCopy: TrainingCopy["salon"];
  href: (path: string) => string;
};

/* ---------------- S1 首屏 ---------------- */
function Hero({ copy, data, href }: SectionProps) {
  const { BRAND } = data;
  return (
    <section className="overflow-hidden bg-[#F3FAFB]">
      <div className="mx-auto grid w-full max-w-8xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 md:pt-16 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-brand-700 md:text-sm">
            <BadgeCheck className="h-4 w-4" />
            {copy.hero.badge}
          </p>
          <h1 className="mt-6 text-4xl leading-tight font-black text-brand-900 md:text-6xl">
            {BRAND.slogan}
          </h1>
          <p className="mt-4 text-xl font-bold text-brand-700 md:text-3xl">{BRAND.positioning}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sub md:text-lg">
            {BRAND.promise}
            {copy.hero.promiseSuffix}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={href("/contact")}
              className="flex items-center justify-center gap-2 rounded-[10px] bg-amber-500 px-8 py-3.5 text-base font-semibold text-brand-900 shadow-[0_8px_24px_rgba(22,50,58,0.10)] transition hover:bg-amber-400"
            >
              {copy.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={href("/contact?type=resource")}
              className="flex items-center justify-center gap-2 rounded-[10px] border border-brand-200 bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              <FileDown className="h-4 w-4" />
              {copy.hero.ctaSecondary}
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 text-xs text-sub sm:grid-cols-4 md:text-sm">
            {copy.hero.trust.map((t) => (
              <div key={t} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 shrink-0 text-leaf-600" />
                {t}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/office-gate.jpg"
          alt={copy.hero.heroAlt}
          className="h-[280px] w-full rounded-[14px] object-cover shadow-[0_8px_24px_rgba(22,50,58,0.10)] ring-1 ring-line sm:h-[380px] lg:h-[600px]"
        />
      </div>
    </section>
  );
}

/* ---------------- S2 四大强调宣言条 ---------------- */
function Emphasis({ copy, data }: SectionProps) {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-amber-700">{copy.emphasis.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">{copy.emphasis.title}</h2>
          <p className="mt-2 text-base text-sub md:text-lg">{copy.emphasis.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.FOUR_EMPHASES.map((e, i) => (
            <div
              key={e.key}
              className="rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
            >
              <span className="text-3xl font-black text-amber-600/30">0{i + 1}</span>
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
function DualWheel({ copy, data, href }: SectionProps) {
  const DUAL_WHEEL = data.DUAL_WHEEL;
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-8xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[14px] bg-white p-4 ring-1 ring-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={DUAL_WHEEL.image}
            alt={copy.dualWheel.imageAlt}
            className="w-full rounded-[10px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-700">{copy.dualWheel.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">{DUAL_WHEEL.title}</h2>
          <p className="mt-2 text-sm font-medium text-sub md:text-base">
            {DUAL_WHEEL.subtitle}
            {copy.dualWheel.suffix}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {DUAL_WHEEL.wheels.map((w) => (
              <div
                key={w.name}
                className="rounded-[14px] border-t-4 border-amber-600 bg-white p-5 ring-1 ring-line"
              >
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
            {copy.dualWheel.tracksLabel}
            {DUAL_WHEEL.tracks.map((t) => (
              <span
                key={t}
                className="ml-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
              >
                {t}
              </span>
            ))}
          </p>
          <Link
            href={href("/solutions")}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
          >
            {copy.dualWheel.solutionsLink}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S4 数据背书 ---------------- */
function Stats({ data }: SectionProps) {
  return (
    <section className="bg-brand-900 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-2 gap-8 px-5 sm:px-8 lg:px-10 lg:grid-cols-4">
        {data.CORE_STATS.map((s) => (
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
function Stages({ copy, data, href }: SectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.stages.title}</h2>
          <p className="mt-2 text-base text-sub md:text-lg">{copy.stages.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {data.FOUR_STAGES.map((s, i) => (
            <div key={s.stage} className="relative">
              <div className="h-full rounded-[14px] border-t-4 border-amber-600 bg-white p-6 shadow-[0_1px_2px_rgba(22,50,58,0.05)] ring-1 ring-line">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-bold text-amber-400">
                    {s.stage}
                  </span>
                  <span className="text-2xl font-black text-brand-100">{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.services.map((slug) => {
                    const svc = data.SERVICES.find((x) => x.slug === slug);
                    return svc ? (
                      <Link
                        key={slug}
                        href={href(`/services/${slug}`)}
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
function ServiceMatrix({ copy, data, href }: SectionProps) {
  const matrix = data.SERVICES.filter((s) => s.order <= 9);
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.services.title}</h2>
          <p className="mt-2 text-base text-sub md:text-lg">{copy.services.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matrix.map((s) => (
            <Link
              key={s.slug}
              href={href(`/services/${s.slug}`)}
              className={`group relative flex h-full flex-col rounded-[14px] bg-white p-6 ring-1 transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)] lg:p-7 ${
                s.featured ? "ring-2 ring-amber-600" : "ring-line"
              }`}
            >
              {s.featured && (
                <span className="absolute -top-3 left-5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-brand-900">
                  {copy.services.featuredBadge}
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
              <h3 className="mt-4 text-lg font-bold text-brand-900 group-hover:text-amber-700">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-sub">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                {copy.services.detail}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={href("/services")}
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            {copy.services.all} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S7 案例数据墙 ---------------- */
function CaseWall({ copy, data, href }: SectionProps) {
  const featured = data.CASES.slice(0, 6);
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.cases.title}</h2>
            <p className="mt-2 text-base text-sub md:text-lg">{copy.cases.subtitle}</p>
          </div>
          <Link
            href={href("/cases")}
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
          >
            {copy.cases.all} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <Link
              key={c.id}
              href={href("/cases")}
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
function WhyUs({ copy, data, href }: SectionProps) {
  const founder = data.TEAM[0];
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.why.title}</h2>
          <p className="mt-2 text-base text-sub md:text-lg">{copy.why.subtitle}</p>
        </div>
        <Link
          href={href("/about")}
          className="group mt-10 grid overflow-hidden rounded-[14px] bg-white ring-1 ring-line transition hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)] sm:grid-cols-[280px_1fr]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={founder.image}
            alt={founder.name}
            className="h-56 w-full object-cover object-top sm:h-full sm:max-h-[360px]"
            loading="lazy"
          />
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h3 className="text-xl font-bold text-brand-900">{founder.name}</h3>
            <p className="mt-1 text-sm font-medium text-amber-700">{founder.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-sub">{founder.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {founder.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 group-hover:underline">
              {copy.why.aboutLink} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}

/* ---------------- S9 培训赋能 + 沙龙 ---------------- */
function Training({ copy, data, href, salonCopy }: SectionProps) {
  const { BRAND, SALON } = data;
  const salonInfo = [
    { label: salonCopy.timeLabel, value: SALON.date, note: SALON.time },
    { label: salonCopy.placeLabel, value: SALON.venue, note: salonCopy.venueNote },
    { label: salonCopy.seatsLabel, value: SALON.seats, note: SALON.audience },
    {
      label: salonCopy.feeLabel,
      value: salonCopy.feeTemplate.replace("{price}", SALON.price),
      note: SALON.priceNote,
    },
  ];
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.training.title}</h2>
          <p className="mt-2 text-base text-sub md:text-lg">{copy.training.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {data.TRAININGS.map((t) => (
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
        {/* 线下沙龙 · 最新一期 */}
        <div className="mt-12 rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,520px)] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-bold tracking-widest text-amber-700">
                {salonCopy.latestTemplate.replace("{edition}", SALON.edition)}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">{salonCopy.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sub md:text-base">{salonCopy.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {salonInfo.map((item) => (
                  <div key={item.label} className="rounded-[10px] bg-surface p-4">
                    <p className="text-xs font-bold tracking-widest text-amber-700">{item.label}</p>
                    <p className="mt-1.5 text-base font-bold text-brand-900">{item.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-sub">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={href("/contact?type=salon")}
                  className="inline-flex w-max items-center gap-2 rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
                >
                  {salonCopy.signupCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-xs text-sub">
                  {salonCopy.contactPrefix}
                  <span className="font-bold text-brand-800">{BRAND.contactPhone}</span>
                  {salonCopy.contactSuffix
                    .replace("{name}", BRAND.contactName)
                    .replace("{title}", BRAND.contactTitle)}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {salonCopy.images.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  className="w-full rounded-[10px] ring-1 ring-line"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-center text-lg font-bold text-brand-900">{salonCopy.speakersTitle}</h4>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {SALON.speakers.map((s) => (
                <div
                  key={s.no}
                  className="flex h-full flex-col rounded-[14px] border-t-4 border-amber-600 bg-surface p-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-900 px-2.5 py-1 text-xs font-black text-amber-400">
                      {s.no}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-brand-800">
                      {s.tag}
                    </span>
                  </div>
                  <h5 className="mt-3 font-bold text-brand-900">{s.topic}</h5>
                  <p className="mt-1 text-xs text-sub">
                    {s.name} · {s.role}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-sub">{s.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S10 资料包留资 ---------------- */
function ResourcePack({ copy, data, form }: SectionProps) {
  const RESOURCE_PACK = data.RESOURCE_PACK;
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-8xl items-center gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-700">{copy.resource.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">{RESOURCE_PACK.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-sub md:text-base">
            {RESOURCE_PACK.subtitle}
            {copy.resource.suffix}
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
            {copy.resource.contactNote}
            {data.BRAND.contactName} · {data.BRAND.contactTitle} {data.BRAND.contactPhone}
          </p>
        </div>
        <div className="rounded-[14px] bg-brand-50 p-6 ring-1 ring-line md:p-8">
          <Suspense fallback={null}>
            <ContactForm copy={form} brand={data.BRAND} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

/* ---------------- S11 前 FAQ + 入口（footer 全站统一） ---------------- */
function FaqSection({ copy, data, href }: SectionProps) {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.faq.title}</h2>
          <p className="mt-2 text-sm text-sub">{copy.faq.subtitle}</p>
        </div>
        <div className="mt-8">
          <FaqAccordion items={data.FAQS} />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {data.SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              href={href(`/solutions/${s.slug}`)}
              className="rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-800 ring-1 ring-line transition hover:bg-amber-100 hover:text-amber-700"
            >
              {s.name}
              {copy.faq.solutionSuffix}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const locale = await currentLocale();
  const data = await getData();
  const pages = await getPages();
  const copy = pages.home;
  const href = (path: string) => localizePath(path, locale);
  const props: SectionProps = {
    locale,
    copy,
    data,
    href,
    form: pages.common.form,
    salonCopy: pages.training.salon,
  };

  return (
    <>
      <Hero {...props} />
      <Emphasis {...props} />
      <DualWheel {...props} />
      <Stats {...props} />
      <Stages {...props} />
      <ServiceMatrix {...props} />
      <CtaSection locale={locale} />
      <CaseWall {...props} />
      <WhyUs {...props} />
      <Training {...props} />
      <ResourcePack {...props} />
      <FaqSection {...props} />
      <CtaSection locale={locale} title={copy.finalCta.title} subtitle={copy.finalCta.subtitle} />
    </>
  );
}
