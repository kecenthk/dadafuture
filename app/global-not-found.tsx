import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "页面不存在 · Page Not Found｜搭搭未来 DADAFUTURE",
};

/** 全局 404：未匹配任何路由时使用，绕过根布局 */
export default function GlobalNotFound() {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col items-center justify-center bg-white px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-brand-600">404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink">页面不存在</h1>
        <p className="mt-2 text-base font-medium text-sub">Page not found · 頁面不存在</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-sub">
          您访问的页面可能已移动或删除。您也可以选择其他语言版本。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-[10px] bg-amber-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-amber-400"
          >
            返回首页
          </Link>
          <Link
            href="/zh-HK"
            className="rounded-[10px] border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-200"
          >
            繁體中文
          </Link>
          <Link
            href="/en"
            className="rounded-[10px] border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-200"
          >
            English
          </Link>
        </div>
      </body>
    </html>
  );
}
