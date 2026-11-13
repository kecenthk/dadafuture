import type { MetadataRoute } from "next";
import { SERVICES, SOLUTIONS } from "@/lib/data";
import { LOCALES, localizePath } from "@/lib/i18n/config";

const BASE = "https://www.dadafuture.com";
const LAST_MODIFIED = "2026-11-14";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

function withLanguages(entry: Entry): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale === "zh" ? "zh-CN" : locale] = `${BASE}${localizePath(entry.path, locale)}`;
  }
  languages["x-default"] = `${BASE}${entry.path}`;

  return {
    url: `${BASE}${entry.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/cases", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/training", priority: 0.8, changeFrequency: "monthly" },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
    ...SERVICES.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...SOLUTIONS.map((s) => ({
      path: `/solutions/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  return entries.flatMap((entry) => [
    withLanguages(entry),
    ...LOCALES.filter((locale) => locale !== "zh").map((locale) => ({
      ...withLanguages(entry),
      url: `${BASE}${localizePath(entry.path, locale)}`,
    })),
  ]);
}
