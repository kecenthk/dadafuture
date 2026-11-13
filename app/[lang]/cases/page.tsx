import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import CaseTabs from "@/components/CaseTabs";
import { img } from "@/lib/images";
import { currentLocale } from "@/lib/content";
import { getData } from "@/lib/content/data";
import { getPages } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const copy = (await getPages()).cases;
  return pageMetadata({
    locale,
    path: "/cases",
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function CasesPage() {
  const locale = await currentLocale();
  const data = await getData();
  const copy = (await getPages()).cases;
  const tracks = data.SOLUTIONS.map((s) => ({ slug: s.slug, name: s.name }));

  return (
    <>
      <PageHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        description={copy.hero.description}
        image={img(
          "collage of export business success scenes, global trade and e-commerce achievements, professional photography"
        )}
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">{copy.section.title}</h2>
          <p className="mt-2 text-sm text-sub">{copy.section.subtitle}</p>
          <div className="mt-8">
            <CaseTabs cases={data.CASES} tracks={tracks} copy={copy.tabs} locale={locale} />
          </div>
        </div>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
