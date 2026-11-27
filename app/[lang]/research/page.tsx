import type { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ResearchIndex from "@/components/ResearchIndex";
import { currentLocale } from "@/lib/content";
import { pageMetadata } from "@/lib/content/metadata";
import { researchCopy as copy } from "@/lib/content/pages/zh/research";
import { localizePath } from "@/lib/i18n/config";
import { REPORTS, REPORT_CATEGORIES, REPORT_KINDS, REPORT_REGIONS, reportHref } from "@/lib/research/reports";

const SITE = "https://www.dadafuture.com";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    locale: "zh",
    path: "/research",
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function ResearchPage() {
  const locale = await currentLocale();
  if (locale !== "zh") permanentRedirect("/research");

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.meta.title,
    numberOfItems: REPORTS.length,
    itemListElement: REPORTS.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.title,
      url: `${SITE}${reportHref(r.slug)}`,
    })),
  };

  return (
    <>
      <PageHero title={copy.hero.title} subtitle={copy.hero.subtitle} description={copy.hero.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
          <ResearchIndex
            reports={REPORTS}
            copy={copy}
            kinds={REPORT_KINDS}
            categories={REPORT_CATEGORIES}
            regions={REPORT_REGIONS}
          />

          <div className="mt-10 rounded-[14px] bg-brand-50 p-6 ring-1 ring-line sm:p-8">
            <h2 className="font-bold text-brand-900">{copy.note.title}</h2>
            <p className="mt-2 max-w-[760px] text-sm leading-relaxed text-sub">{copy.note.desc}</p>
            <Link
              href={localizePath("/contact?type=plan", locale)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
            >
              {copy.note.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
