"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BRAND } from "@/lib/data";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/solutions", label: "解决方案" },
  { href: "/services", label: "服务产品" },
  { href: "/cases", label: "案例中心" },
  { href: "/about", label: "关于我们" },
  { href: "/training", label: "培训赋能" },
  { href: "/news", label: "新闻动态" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
        scrolled || open ? "border-line shadow-[0_1px_2px_rgba(22,50,58,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="搭搭未来首页" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo.png"
            alt="搭搭未来 DADAFUTURE 品牌标识"
            className="h-9 w-9 rounded-[10px] object-contain"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-ink">{BRAND.name}</span>
            <span className="block text-[10px] tracking-widest text-sub">
              {BRAND.en} · 一起搭、搭未来
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 px-3 py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? "border-brand-600 text-brand-600"
                  : "border-transparent text-ink hover:border-brand-200 hover:text-brand-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-[10px] bg-amber-500 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
          >
            免费获取出海方案
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${BRAND.contactPhone.replace(/\s/g, "")}`}
            className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-brand-700"
            aria-label="拨打电话"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-ink"
            aria-label={open ? "关闭菜单" : "打开菜单"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 pb-4 sm:px-8 lg:hidden" aria-label="移动端导航">
          <div className="flex flex-col gap-1 pt-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-[10px] px-3 py-2.5 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brand-100 text-brand-600"
                    : "text-ink hover:bg-surface"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-[10px] bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-brand-900"
            >
              免费获取出海方案
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
