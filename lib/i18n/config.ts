/**
 * 全站语言配置与路径工具（纯函数，服务端 / 客户端均可引用）
 */

export const LOCALES = ["zh", "zh-HK", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh";

export type LanguageMeta = {
  /** 语言选择器中的完整名称 */
  label: string;
  /** 移动端 / 空间受限时的短名称 */
  shortLabel: string;
  /** <html lang> 使用的 BCP 47 标记 */
  htmlLang: string;
  /** hreflang 使用的值 */
  hreflang: string;
  /** Open Graph og:locale */
  ogLocale: string;
  /** 国旗标识 */
  flag: "cn" | "hk" | "us";
};

export const LANGUAGES: Record<Locale, LanguageMeta> = {
  zh: {
    label: "简体中文",
    shortLabel: "简中",
    htmlLang: "zh-CN",
    hreflang: "zh-CN",
    ogLocale: "zh_CN",
    flag: "cn",
  },
  "zh-HK": {
    label: "繁體中文",
    shortLabel: "繁中",
    htmlLang: "zh-HK",
    hreflang: "zh-HK",
    ogLocale: "zh_HK",
    flag: "hk",
  },
  en: {
    label: "English",
    shortLabel: "EN",
    htmlLang: "en-US",
    hreflang: "en",
    ogLocale: "en_US",
    flag: "us",
  },
};

/** 是否为受支持的语言 */
export function hasLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** 去掉语言前缀，返回站内规范路径（简中无前缀） */
export function stripLocale(pathname: string): string {
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  const segments = pathname.split("/");
  const first = segments[1];
  if (first === "zh") {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  if (hasLocale(first)) {
    const rest = pathname.slice(first.length + 1);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

/** 为路径加上目标语言前缀（简中返回原路径） */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** 当前路径是否处于指定语言下 */
export function pathHasLocale(pathname: string): boolean {
  const first = pathname.split("/")[1];
  return first === "zh" || hasLocale(first);
}

/** 语言切换器需要的路径映射 */
export function alternatePaths(pathname: string): Record<Locale, string> {
  const clean = stripLocale(pathname);
  return {
    zh: localizePath(clean, "zh"),
    "zh-HK": localizePath(clean, "zh-HK"),
    en: localizePath(clean, "en"),
  };
}

/** hreflang 备用链接（含 x-default） */
export function languageAlternates(pathname: string): Record<string, string> {
  const paths = alternatePaths(pathname);
  return {
    "zh-CN": paths.zh,
    "zh-HK": paths["zh-HK"],
    en: paths.en,
    "x-default": paths.zh,
  };
}
