"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { localizePath, stripLocale, type Locale } from "@/lib/i18n/config";
import type { CommonCopy } from "@/lib/content/pages/zh/common";
import type { DataContent } from "@/lib/content/data";

type NavCopy = CommonCopy["nav"];
type Brand = DataContent["BRAND"];

export default function Navbar({
  locale,
  copy,
  brand,
}: {
  locale: Locale;
  copy: NavCopy;
  brand: Brand;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cleanPath = stripLocale(pathname || "/");
  const href = (path: string) => localizePath(path, locale);

  const isActive = (path: string) =>
    path === "/" ? cleanPath === "/" : cleanPath === path || cleanPath.startsWith(`${path}/`);

  const NAV = [
    { href: "/", label: copy.home },
    { href: "/solutions", label: copy.solutions },
    { href: "/services", label: copy.services },
    { href: "/cases", label: copy.cases },
    { href: "/about", label: copy.about },
    { href: "/training", label: copy.training },
    { href: "/news", label: copy.news },
  ];

  const SOLUTION_MENU = copy.solutionMenu.map((s) => ({
    ...s,
    href: `/solutions/${s.slug}`,
  }));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
        scrolled || open ? "border-line shadow-[0_1px_2px_rgba(22,50,58,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10">
        <Link
          href={href("/")}
          className="flex shrink-0 items-center gap-2.5"
          aria-label={copy.ariaHome}
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo.png"
            alt={copy.logoAlt}
            className="h-9 w-9 rounded-[10px] object-contain"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-ink">{brand.name}</span>
            <span className="block text-[10px] tracking-widest text-sub">
              {brand.en} · {copy.brandSub}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.ariaMain}>
          {NAV.map((item) =>
            item.href === "/solutions" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={href(item.href)}
                  className={`flex items-center gap-1 whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "border-brand-600 text-brand-600"
                      : "border-transparent text-ink hover:border-brand-200 hover:text-brand-600"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    aria-hidden
                  />
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-[14px] border border-line bg-white p-3 shadow-[0_12px_32px_rgba(0,61,69,0.12)]">
                    {SOLUTION_MENU.map((s) => (
                      <Link
                        key={s.href}
                        href={href(s.href)}
                        className="rounded-[10px] px-3 py-2.5 transition hover:bg-brand-50"
                      >
                        <span className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-sm font-bold text-brand-900">{s.name}</span>
                          <span className="text-[11px] text-sub">{s.scope}</span>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-sub">
                          {s.position}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href={href("/solutions")}
                      className="col-span-2 mt-1 flex items-center justify-between rounded-[10px] bg-brand-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
                    >
                      <span>{copy.solutionsOverview}</span>
                      <span className="text-xs font-medium text-amber-400">{copy.coopHint}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={href(item.href)}
                className={`whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "border-brand-600 text-brand-600"
                    : "border-transparent text-ink hover:border-brand-200 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href={href("/contact")}
            className="ml-3 whitespace-nowrap rounded-[10px] bg-amber-500 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
          >
            {copy.cta}
          </Link>
          <LanguageSwitcher locale={locale} label={copy.langSwitchLabel} />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${brand.contactPhone.replace(/\s/g, "")}`}
            className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-brand-700"
            aria-label={copy.ariaPhone}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-ink"
            aria-label={open ? copy.ariaClose : copy.ariaOpen}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 pb-4 sm:px-8 lg:hidden" aria-label={copy.ariaMobile}>
          <div className="flex flex-col gap-1 pt-3">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={href(item.href)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-[10px] px-3 py-2.5 text-sm font-medium ${
                    isActive(item.href)
                      ? "bg-brand-100 text-brand-600"
                      : "text-ink hover:bg-surface"
                  }`}
                >
                  {item.label}
                </Link>
                {item.href === "/solutions" && (
                  <div className="mb-1 flex flex-col gap-0.5 pl-3">
                    {SOLUTION_MENU.map((s) => (
                      <Link
                        key={s.href}
                        href={href(s.href)}
                        onClick={() => setOpen(false)}
                        className="rounded-[10px] px-3 py-2 transition hover:bg-surface"
                      >
                        <span className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-[13px] font-semibold text-brand-900">{s.name}</span>
                          <span className="text-[11px] text-sub">{s.scope}</span>
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-sub">
                          {s.position}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={href("/contact")}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-[10px] bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-brand-900"
            >
              {copy.cta}
            </Link>
          </div>
          <LanguageSwitcher locale={locale} label={copy.langSwitchLabel} variant="mobile" />
        </nav>
      )}
    </header>
  );
}
