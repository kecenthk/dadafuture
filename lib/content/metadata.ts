import type { Metadata } from "next";
import {
  LANGUAGES,
  languageAlternates,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";

/** 生成带 canonical / hreflang / OG 的页面 metadata */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonical = localizePath(path, locale);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: LANGUAGES[locale].ogLocale,
      siteName:
        locale === "en" ? "DADAFUTURE" : locale === "zh-HK" ? "搭搭未來 DADAFUTURE" : "搭搭未来 DADAFUTURE",
      title,
      description,
      url: canonical,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
