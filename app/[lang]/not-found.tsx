import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { currentLocale } from "@/lib/content";
import { getCommonCopy } from "@/lib/content/pages";
import { localizePath } from "@/lib/i18n/config";

export default async function NotFound() {
  const locale = await currentLocale();
  const copy = (await getCommonCopy()).notFound;
  const href = (path: string) => localizePath(path, locale);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-xs font-bold tracking-widest text-amber-700">404</p>
          <h1 className="mt-2 text-3xl font-bold text-brand-900 md:text-4xl">{copy.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-sub md:text-base">{copy.desc}</p>

          <form
            action="https://www.google.com/search"
            method="get"
            target="_blank"
            className="mx-auto mt-6 flex max-w-[520px] gap-2"
          >
            <label htmlFor="site-search" className="sr-only">
              {copy.searchLabel}
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder={copy.searchPlaceholder}
              className="h-12 w-full rounded-[10px] bg-white px-4 text-sm text-ink ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-600"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[10px] bg-brand-900 px-5 text-sm font-semibold text-amber-400 transition hover:bg-brand-800"
            >
              <Search className="h-4 w-4" />
              {copy.searchButton}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={href("/")}
              className="inline-flex items-center gap-2 rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
            >
              {copy.home} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={href("/contact")}
              className="inline-flex items-center gap-2 rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-brand-900 ring-1 ring-line transition hover:bg-brand-50"
            >
              {copy.contact}
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[960px]">
          <h2 className="text-center text-sm font-bold tracking-widest text-amber-700">
            {copy.hotTitle}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.hotLinks.map((l) => (
              <Link
                key={l.href}
                href={href(l.href)}
                className="rounded-[14px] bg-white p-5 ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,128,144,0.12)]"
              >
                <p className="flex items-center justify-between font-bold text-brand-900">
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-amber-600" />
                </p>
                <p className="mt-1 text-xs leading-relaxed text-sub">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
