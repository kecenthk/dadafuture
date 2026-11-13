import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/images";
import { currentLocale } from "@/lib/content";
import { getData } from "@/lib/content/data";
import { getPages } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const copy = (await getPages()).about;
  return pageMetadata({
    locale,
    path: "/about",
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function AboutPage() {
  const locale = await currentLocale();
  const data = await getData();
  const copy = (await getPages()).about;
  const { BRAND, TEAM, FOUR_EMPHASES, INDUSTRY_LEADS, ADVISORS, DUAL_WHEEL } = data;

  const founder = TEAM[0];
  const coreTeam = [
    ...TEAM.filter((t) => t.name === BRAND.contactName),
    ...TEAM.filter((t) => t.name !== BRAND.contactName && t.name !== founder.name),
  ];

  return (
    <>
      <PageHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        description={copy.hero.description}
        image={img(
          "professional Chinese business team meeting in modern office, strategic planning session, deep blue corporate style"
        )}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {copy.values.map((v) => (
              <div key={v.title} className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                <h2 className="font-bold text-amber-700">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-sub">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[14px] bg-white p-4 ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DUAL_WHEEL.image}
                alt={copy.dualWheel.imageAlt}
                className="w-full rounded-[10px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-[14px] bg-brand-900 p-6 md:p-8">
              <p className="text-xs font-bold tracking-widest text-amber-400">
                {copy.dualWheel.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">{DUAL_WHEEL.title}</h3>
              <p className="mt-2 text-sm text-brand-100">{DUAL_WHEEL.subtitle}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {DUAL_WHEEL.wheels.map((w) => (
                  <div key={w.name}>
                    <p className="font-bold text-amber-400">{w.name}</p>
                    <ul className="mt-2 space-y-1.5">
                      {w.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-brand-100">
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-leaf-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.emphasis.title}</h2>
            <p className="mt-2 text-sm text-sub">{copy.emphasis.subtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FOUR_EMPHASES.map((e, i) => (
              <div key={e.key} className="rounded-[14px] bg-brand-900 p-6">
                <p className="text-sm font-bold text-amber-400">
                  0{i + 1} · {e.title}
                </p>
                <p className="mt-1 text-xs text-brand-200">{e.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-100">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-widest text-amber-700">{copy.founder.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
                {founder.name}
                {copy.founder.titleSuffix}
              </h2>
              <p className="mt-2 text-sm font-medium text-sub">{copy.founder.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-sub md:text-base">{copy.founder.desc}</p>
              <div className="mt-6 space-y-3">
                {copy.founder.points.map((s) => (
                  <div key={s.no} className="rounded-[10px] bg-white px-4 py-3.5 ring-1 ring-line">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-black text-amber-600">{s.no}</span>
                      <div>
                        <p className="text-sm font-bold text-brand-900">{s.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-sub">{s.desc}</p>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-sub opacity-60">{s.en}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={founder.image}
              alt={founder.name}
              className="mx-auto aspect-square w-full max-w-[330px] rounded-[14px] object-cover object-top shadow-[0_8px_24px_rgba(22,50,58,0.10)] ring-1 ring-line md:max-w-[380px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.industry.title}</h2>
            <p className="mt-2 text-sm text-sub">{copy.industry.subtitle}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {INDUSTRY_LEADS.map((l) => (
              <div
                key={l.name}
                className="w-full max-w-[340px] overflow-hidden rounded-[14px] bg-white ring-1 ring-line"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.image}
                  alt={l.name}
                  className="aspect-square w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-xs font-bold tracking-widest text-amber-700">{l.industry}</p>
                  <h3 className="mt-1 font-bold text-brand-900">{l.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-sub">{l.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-sub">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.team.title}</h2>
            <p className="mt-2 text-sm text-sub">{copy.team.subtitle}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {coreTeam.map((t) => (
              <div
                key={t.name}
                className="w-full max-w-[340px] overflow-hidden rounded-[14px] bg-white ring-1 ring-line sm:w-[calc(50%-0.625rem)] lg:w-[calc(20%-1rem)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="aspect-square w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-bold text-brand-900">{t.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-amber-700">{t.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-sub">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.advisors.title}</h2>
            <p className="mt-2 text-sm text-sub">{copy.advisors.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((a) => (
              <div key={a.name} className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                <p className="font-bold text-brand-900">
                  {a.name}
                  <span className="ml-2 text-xs font-medium text-amber-700">{a.role}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-sub">{a.duty}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
            <h3 className="font-bold text-brand-900">{copy.eco.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sub">{copy.eco.desc}</p>
          </div>
        </div>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
