import Link from "next/link";
import { getData } from "@/lib/content/data";
import { getCommonCopy } from "@/lib/content/pages";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default async function Footer({ locale }: { locale: Locale }) {
  const data = await getData();
  const copy = await getCommonCopy();
  const { BRAND, SOLUTIONS, SERVICES } = data;
  const c = copy.footer;
  const href = (path: string) => localizePath(path, locale);

  return (
    <footer className="bg-brand-900 text-white/[0.72]">
      <div className="mx-auto grid w-full max-w-8xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo.png"
              alt={copy.nav.logoAlt}
              className="h-9 w-9 rounded-[10px] object-contain"
            />
            <span className="text-lg font-bold text-white">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {BRAND.positioning}。{BRAND.slogan}——{BRAND.promise}。
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">{c.solutionsTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SOLUTIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={href(`/solutions/${s.slug}`)}
                  className="transition hover:text-amber-400"
                >
                  {c.solutionsLink.replace("{name}", s.name).replace("{scope}", s.scope)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">{c.servicesTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={href(`/services/${s.slug}`)} className="transition hover:text-amber-400">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">{c.contactTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              {c.contactPerson}：{BRAND.contactName} · {BRAND.contactTitle}
              <span className="ml-1 font-semibold text-white">{BRAND.contactPhone}</span>
            </li>
            <li>{c.wechatTip}</li>
            <li>
              <Link href={href("/contact")} className="font-semibold text-amber-400 transition hover:text-amber-500">
                {c.ctaLink}
              </Link>
            </li>
          </ul>
          <div className="mt-5">
            <div className="w-[104px] rounded-[10px] bg-white p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.wechatQr}
                alt={`${c.qrAlt}${BRAND.contactName}`}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-2 w-[104px] text-center text-[10px] leading-tight text-white/[0.55]">
              {c.qrCaption} · {BRAND.contactName}
            </p>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/[0.5]">
            {c.company}
            <br />
            {c.address}
          </p>
        </div>
      </div>
      <div className="border-t border-white/[0.12] bg-[#00323A] py-5 text-center text-xs text-white/[0.6]">
        <p>
          © 2026 {BRAND.name} {BRAND.en} · {BRAND.slogan} · {c.copyright}
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link href={href("/privacy")} className="transition hover:text-amber-400">{c.privacy}</Link>
          <Link href={href("/terms")} className="transition hover:text-amber-400">{c.terms}</Link>
          <span>{c.phoneLabel}：{BRAND.contactPhone}</span>
        </p>
      </div>
    </footer>
  );
}
