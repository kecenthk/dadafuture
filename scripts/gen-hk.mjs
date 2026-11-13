/**
 * 由简体中文源文件生成繁体中文（香港）文案。
 * 用法：node scripts/gen-hk.mjs
 */
import fs from "node:fs";
import path from "node:path";
import * as OpenCC from "opencc-js";

const root = process.cwd();
const convert = OpenCC.Converter({ from: "cn", to: "hk" });

const pairs = [
  ["lib/data.ts", "lib/content/data/hk.ts"],
  ["lib/cooperation.ts", "lib/content/cooperation/hk.ts"],
  ["lib/content/pages/zh/common.ts", "lib/content/pages/hk/common.ts"],
  ["lib/content/pages/zh/home.ts", "lib/content/pages/hk/home.ts"],
  ["lib/content/pages/zh/about.ts", "lib/content/pages/hk/about.ts"],
  ["lib/content/pages/zh/cases.ts", "lib/content/pages/hk/cases.ts"],
  ["lib/content/pages/zh/contact.ts", "lib/content/pages/hk/contact.ts"],
  ["lib/content/pages/zh/news.ts", "lib/content/pages/hk/news.ts"],
  ["lib/content/pages/zh/services.ts", "lib/content/pages/hk/services.ts"],
  ["lib/content/pages/zh/service-detail.ts", "lib/content/pages/hk/service-detail.ts"],
  ["lib/content/pages/zh/solutions.ts", "lib/content/pages/hk/solutions.ts"],
  ["lib/content/pages/zh/training.ts", "lib/content/pages/hk/training.ts"],
  ["lib/content/pages/zh/legal.ts", "lib/content/pages/hk/legal.ts"],
];

for (const [from, to] of pairs) {
  const srcPath = path.join(root, from);
  if (!fs.existsSync(srcPath)) {
    console.warn(`skip missing source: ${from}`);
    continue;
  }
  let text = fs.readFileSync(srcPath, "utf8");
  text = text.replace(/from "\.\/images"/g, 'from "@/lib/images"');
  text = convert(text);
  const header = "/* 本文件由 scripts/gen-hk.mjs 自动生成，请勿手改。 */\n\n";
  const outPath = path.join(root, to);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, header + text, "utf8");
  console.log(`generated ${to}`);
}
