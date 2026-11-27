/**
 * 每日自动提交：百度主动推送（限量）+ IndexNow（仅新增/更新）
 * 幂等：已推送过的 URL 记录在 STATE_PATH，不会重复消耗百度配额。
 * 环境变量：BAIDU_SITE / BAIDU_TOKEN / DAILY_LIMIT（默认 10）/ STATE_PATH
 */
import fs from "node:fs";
import path from "node:path";

const SITE = process.env.BAIDU_SITE || "https://www.dadafuture.com";
const TOKEN = process.env.BAIDU_TOKEN || "";
const DAILY_LIMIT = Number(process.env.DAILY_LIMIT || 10);
const STATE_PATH = process.env.STATE_PATH || "/var/lib/dadafuture/submitted.json";
const INDEXNOW_KEY = "a7f3c9e1b5d84f62a0c7e9d1b3f5a7c9";

const now = () => new Date().toISOString();
const log = (...args) => console.log(`[${now()}]`, ...args);

function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch {
    return { baidu: {}, indexnow: {} };
  }
}

function writeState(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

async function fetchSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map((m) => ({
      loc: (m[1].match(/<loc>(.*?)<\/loc>/) || [])[1],
      lastmod: (m[1].match(/<lastmod>(.*?)<\/lastmod>/) || [])[1] || "",
    }))
    .filter((u) => u.loc);
}

function changedSince(recordedAt, lastmod) {
  if (!recordedAt) return true;
  if (!lastmod) return false;
  return new Date(lastmod) > new Date(recordedAt);
}

async function pushBaidu(state, urls) {
  if (!TOKEN) {
    log("跳过百度：未配置 BAIDU_TOKEN");
    return;
  }
  const pending = urls
    .filter((u) => changedSince(state.baidu[u.loc], u.lastmod))
    .slice(0, DAILY_LIMIT);
  if (!pending.length) {
    log("百度：没有待推送 URL");
    return;
  }
  const res = await fetch(
    `http://data.zz.baidu.com/urls?site=${SITE}&token=${encodeURIComponent(TOKEN)}`,
    {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: pending.map((u) => u.loc).join("\n"),
    }
  );
  const text = await res.text();
  log(`百度推送 ${res.status}: ${text}`);
  if (!res.ok) return;

  const result = JSON.parse(text);
  const failed = new Set(result.not_same_site || []);
  for (const u of pending) {
    if (!failed.has(u.loc)) state.baidu[u.loc] = now();
  }
}

async function pushIndexNow(state, urls) {
  const pending = urls
    .filter((u) => changedSince(state.indexnow[u.loc], u.lastmod))
    .map((u) => u.loc);
  if (!pending.length) {
    log("IndexNow：没有新增或更新的 URL");
    return;
  }
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList: pending,
    }),
  });
  log(`IndexNow ${res.status} ${res.statusText} — ${pending.length} urls`);
  if (res.ok) for (const loc of pending) state.indexnow[loc] = now();
}

async function main() {
  const state = readState();
  const urls = await fetchSitemap();
  log(`sitemap: ${urls.length} urls`);
  await pushBaidu(state, urls);
  writeState(state);
  await pushIndexNow(state, urls);
  writeState(state);
}

main().catch((err) => {
  log("失败:", err.message);
  process.exit(1);
});
