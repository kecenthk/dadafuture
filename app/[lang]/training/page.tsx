import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { img } from "@/lib/images";
import { currentLocale } from "@/lib/content";
import { getData } from "@/lib/content/data";
import { getPages } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/content/metadata";
import { localizePath } from "@/lib/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const copy = (await getPages()).training;
  return pageMetadata({
    locale,
    path: "/training",
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function TrainingPage() {
  const locale = await currentLocale();
  const data = await getData();
  const copy = (await getPages()).training;
  const { BRAND, SALON, SALON_PERKS, TRAININGS } = data;

  const infoItems = [
    { label: copy.salon.timeLabel, value: SALON.date, note: SALON.time },
    { label: copy.salon.placeLabel, value: SALON.venue, note: copy.salon.venueNote },
    { label: copy.salon.seatsLabel, value: SALON.seats, note: SALON.audience },
    {
      label: copy.salon.feeLabel,
      value: copy.salon.feeTemplate.replace("{price}", SALON.price),
      note: SALON.priceNote,
    },
  ];

  return (
    <>
      <PageHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        description={copy.hero.description}
        image={img(
          "business training workshop scene, professional speaker presenting to audience, modern seminar room, engaged participants",
        )}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {TRAININGS.map((t) => (
              <div
                key={t.name}
                className="rounded-[14px] bg-white p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
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
        <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest text-amber-700">
              {copy.salon.latestTemplate.replace("{edition}", SALON.edition)}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
              {copy.salon.title}
            </h2>
            <p className="mt-2 text-sm text-sub md:text-base">{copy.salon.desc}</p>
          </div>

          {/* 关键信息 */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {infoItems.map((item) => (
              <div key={item.label} className="rounded-[14px] bg-white p-5 ring-1 ring-line">
                <p className="text-xs font-bold tracking-widest text-amber-700">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-brand-900">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-sub">{item.note}</p>
              </div>
            ))}
          </div>

          {/* 第 2 期宣传图：一行三张 */}
          <div className="mx-auto mt-6 grid max-w-[1180px] grid-cols-3 gap-3 md:gap-5">
            {copy.salon.images.map((p) => (
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
              {copy.salon.speakersTitle}
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
              <h3 className="font-bold text-brand-900">{copy.salon.agendaTitle}</h3>
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
          <p className="mt-6 text-center text-sm font-medium text-brand-800">「{SALON.claim}」</p>

          {/* 到场即得 + 报名 */}
          <div className="mt-10 rounded-[14px] bg-brand-900 p-6 md:p-8">
            <h3 className="font-bold text-amber-400">{copy.salon.perksTitle}</h3>
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
                href={localizePath("/contact?type=salon", locale)}
                className="inline-flex w-max items-center gap-2 rounded-[10px] bg-amber-500 px-8 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
              >
                {copy.salon.signupCta} <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-100">
                {copy.salon.contactPrefix}
                <span className="font-bold text-amber-400">{BRAND.contactPhone}</span>
                {copy.salon.contactSuffix
                  .replace("{name}", BRAND.contactName)
                  .replace("{title}", BRAND.contactTitle)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 内容获客 & AI 提效专项培训 */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">
                {copy.modules.ai.title}
              </h2>
              <p className="mt-2 text-sm text-sub md:text-base">{copy.modules.ai.subtitle}</p>
            </div>
            <p className="text-xs font-medium tracking-wide text-sub">{copy.modules.ai.titleEn}</p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">
            <div className="space-y-4">
              {copy.modules.ai.photos.map((p) => (
                <figure key={p.src} className="overflow-hidden rounded-[14px] bg-white p-2 ring-1 ring-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full rounded-[10px] object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-2 py-2 text-center text-xs text-sub">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="space-y-6">
              {copy.modules.ai.items.map((item) => (
                <div key={item.no}>
                  <h3 className="font-bold text-amber-700">
                    {item.no} {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sub md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IP 主理人 · 轻实体培训 */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.modules.ip.title}</h2>
              <p className="mt-2 text-sm text-sub md:text-base">{copy.modules.ip.subtitle}</p>
            </div>
            <p className="text-xs font-medium tracking-wide text-sub">{copy.modules.ip.titleEn}</p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(0,460px)] lg:items-center">
            <div className="space-y-6">
              {copy.modules.ip.items.map((item) => (
                <div key={item.no}>
                  <h3 className="font-bold text-brand-900">
                    {item.no} {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sub md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              {copy.modules.ip.photos.map((p) => (
                <figure key={p.src} className="overflow-hidden rounded-[14px] bg-white p-2 ring-1 ring-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full rounded-[10px] object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-2 py-2 text-center text-xs text-sub">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
