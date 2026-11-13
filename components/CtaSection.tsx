import Link from "next/link";
import { currentLocale } from "@/lib/content";
import { getData } from "@/lib/content/data";
import { getCommonCopy } from "@/lib/content/pages";
import { localizePath, type Locale } from "@/lib/i18n/config";

/** 全站统一 CTA */
export default async function CtaSection({
  locale: localeProp,
  title,
  subtitle,
  primaryHref = "/contact",
  secondaryHref = "/contact?type=resource",
}: {
  locale?: Locale;
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  const locale = localeProp ?? (await currentLocale());
  const data = await getData();
  const copy = (await getCommonCopy()).cta;
  const BRAND = data.BRAND;

  return (
    <section className="bg-brand-900 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1040px] px-5 text-center sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title ?? copy.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 md:text-lg">
          {subtitle ?? copy.subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={localizePath(primaryHref, locale)}
            className="w-full rounded-[10px] bg-amber-500 px-7 py-3.5 text-base font-semibold text-brand-900 transition hover:bg-amber-400 sm:w-auto"
          >
            {copy.primary}
          </Link>
          <Link
            href={localizePath(secondaryHref, locale)}
            className="w-full rounded-[10px] border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            {copy.secondary}
          </Link>
        </div>
        <p className="mt-5 text-xs text-brand-200">
          {copy.contactNote}：{BRAND.contactName} · {BRAND.contactTitle} {BRAND.contactPhone}
          {copy.wechatSuffix}
        </p>
      </div>
    </section>
  );
}
