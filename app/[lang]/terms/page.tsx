import type { Metadata } from "next";
import Link from "next/link";
import { currentLocale } from "@/lib/content";
import { getData } from "@/lib/content/data";
import { getPages } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/content/metadata";
import { localizePath } from "@/lib/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const copy = (await getPages()).terms;
  return pageMetadata({
    locale,
    path: "/terms",
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function TermsPage() {
  const locale = await currentLocale();
  const data = await getData();
  const copy = (await getPages()).terms;
  const { BRAND } = data;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-widest text-amber-700">{copy.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold text-brand-900 md:text-4xl">{copy.title}</h1>
        <p className="mt-2 text-sm text-sub">{copy.effective}</p>
        <p className="mt-6 text-sm leading-relaxed text-sub">
          {copy.introTemplate.replace("{name}", BRAND.name).replace("{en}", BRAND.en)}
        </p>

        <div className="mt-8 space-y-6">
          {copy.sections.map((s) => (
            <div key={s.title} className="rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
              <h2 className="font-bold text-brand-900">{s.title}</h2>
              <ul className="mt-3 space-y-2">
                {s.body.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-sub">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[14px] bg-brand-900 p-6 md:p-8">
          <h2 className="font-bold text-amber-400">{copy.contactTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-100">
            {copy.contactTemplate
              .replace("{name}", BRAND.contactName)
              .replace("{title}", BRAND.contactTitle)}
            <span className="ml-1 font-bold text-amber-400">{BRAND.contactPhone}</span>
            {copy.contactSuffix}
          </p>
        </div>

        <p className="mt-8 text-sm text-sub">
          {copy.otherPrefix}{" "}
          <Link
            href={localizePath("/privacy", locale)}
            className="font-medium text-brand-700 underline"
          >
            {copy.otherLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
