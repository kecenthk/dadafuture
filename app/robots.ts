import type { MetadataRoute } from "next";

const SITE = "https://www.dadafuture.com";

/** 允许主流搜索引擎与 AI 爬虫抓取，并显式声明 AI 引擎（GEO）友好 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "Baiduspider",
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "Google-Extended",
          "CCBot",
          "PerplexityBot",
          "ClaudeBot",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
