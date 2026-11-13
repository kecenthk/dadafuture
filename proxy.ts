import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, hasLocale } from "@/lib/i18n/config";

/**
 * 语言前缀处理：
 * - 简中无可见前缀：内部重写到 /zh/*
 * - /zh/* 301 到无前缀路径
 * - /zh-HK、/en 原样放行
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === DEFAULT_LOCALE) {
    const rest = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(new URL(`${rest}${search}`, request.url), 301);
  }

  if (hasLocale(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
