/**
 * IndexNow 主动推送：把 sitemap 中的 URL 提交给 Bing / Yandex 等支持 IndexNow 的引擎。
 * 用法：npm run indexnow
 * 注意：需域名 www.dadafuture.com 已解析并可通过 HTTPS 访问（IndexNow 会回源校验 key 文件）。
 */
const SITE = "https://www.dadafuture.com";
const KEY = "a7f3c9e1b5d84f62a0c7e9d1b3f5a7c9";

async function main() {
  const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
  if (!sitemapRes.ok) throw new Error(`sitemap ${sitemapRes.status}`);
  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) throw new Error("no urls in sitemap");

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "www.dadafuture.com",
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList,
    }),
  });
  console.log(`IndexNow ${res.status} ${res.statusText} — submitted ${urlList.length} urls`);
}

main().catch((err) => {
  console.error("IndexNow failed:", err.message);
  process.exit(1);
});
