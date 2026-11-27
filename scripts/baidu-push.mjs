/**
 * 百度主动推送（普通收录 API）：把 sitemap 中的 URL 推送给百度。
 * 用法：
 *   BAIDU_SITE=https://www.dadafuture.com BAIDU_TOKEN=xxxx npm run baidu-push
 *   BAIDU_SITE=... BAIDU_TOKEN=... node scripts/baidu-push.mjs https://www.dadafuture.com/ https://www.dadafuture.com/news
 * 说明：
 *   - BAIDU_SITE 必须是百度搜索资源平台里已添加且验证通过的站点，token 与站点一一对应
 *   - 推送的 URL 必须属于该站点，否则返回 not_same_site
 *   - 免费配额约 10 条/天，按需推送，避免浪费；带参数时只推指定 URL
 */
const SITE = process.env.BAIDU_SITE || "https://www.dadafuture.com";
const TOKEN = process.env.BAIDU_TOKEN;
const ARG_URLS = process.argv.slice(2);

async function main() {
  if (!TOKEN) {
    console.error("缺少 BAIDU_TOKEN，请先在百度搜索资源平台获取该站点的推送 token");
    process.exit(1);
  }

  let urls = ARG_URLS;
  if (!urls.length) {
    const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
    if (!sitemapRes.ok) throw new Error(`sitemap ${sitemapRes.status}`);
    const xml = await sitemapRes.text();
    urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  }
  urls = urls.filter((u) => u.startsWith(SITE));

  if (!urls.length) throw new Error("没有属于该站点的 URL");

  const res = await fetch(
    `http://data.zz.baidu.com/urls?site=${encodeURIComponent(SITE)}&token=${encodeURIComponent(TOKEN)}`,
    {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: urls.join("\n"),
    }
  );
  const text = await res.text();
  console.log(`百度推送 ${res.status}: ${text}`);
}

main().catch((err) => {
  console.error("百度推送失败:", err.message);
  process.exit(1);
});
