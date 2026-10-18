import type { MetadataRoute } from "next";
import { SERVICES, SOLUTIONS } from "@/lib/data";

const BASE = "https://www.dadafuture.com";
const LAST_MODIFIED = "2026-10-16";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/solutions", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/cases", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/training", priority: 0.8 },
    { path: "/news", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
  ].map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: p.priority,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionPages = SOLUTIONS.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...solutionPages];
}
