# 市场调研栏目 设计文档

- 日期：2026-11-27
- 状态：待评审
- 方案：A —— 静态报告 + 清单驱动索引页

## 1. 背景与目标

搭搭未来已积累多份面向工厂/品类的出海调研报告（HTML 单文件）。这些报告目前只能私下发给客户，缺少一个可公开分享、可搜索、可按类型浏览的对外入口。

目标：

1. 在官网新增「市场调研」栏目，对外发布脱敏后的行业品类报告。
2. 提供聚合入口 `/{locale}/research`，支持关键词搜索与按类型/品类/区域筛选，可直接把链接发给客户查看。
3. 支持后续持续新增报告：放文件 + 登记一条元数据即可上线。
4. 首期收录 8 份已上传报告，全部完成脱敏。

## 2. 非目标

- 不改造报告内部样式、图表与交互，报告保持独立单文件原貌。
- 不做站内 iframe 阅读页（后续如需，可基于本设计的元数据扩展 `/{locale}/research/[slug]`）。
- 不做后台 CMS 与上传界面（新增报告走代码提交）。
- 不做英文/繁体报告正文（栏目仅中文；繁中、英文访问统一跳转 `/research`）。
- 不做报告点赞、下载统计、权限控制。

## 3. 信息架构与路由

| 路由 | 说明 |
| --- | --- |
| `/research` | 聚合索引页：搜索 + 筛选 + 卡片列表 |
| `/research/<slug>.html` | 单份报告静态文件（`public/research/`），新标签打开 |
| `/zh-HK/research`、`/en/research` | 服务端重定向到 `/research` |

导航：中文主导航在「案例」与「关于」之间插入「市场调研」；繁中/英文导航不插入该项。页脚「快速链接」区同步增加。

## 4. 数据模型

`lib/research/reports.ts` 为唯一数据源，导出：

```ts
export type ResearchKind = "市场进入" | "增长方案" | "渠道研究" | "品类调研" | "出海诊断";

export type ResearchReport = {
  slug: string;          // 文件名，亦是 URL：/research/{slug}.html
  title: string;         // 脱敏后标题
  summary: string;       // 60-90 字摘要，索引卡片展示
  kind: ResearchKind;    // 类型（筛选维度 1）
  category: string;      // 品类（筛选维度 2），如「家居寝具」
  regions: string[];     // 区域（筛选维度 3），如 ["北美"]
  tags: string[];        // 辅助搜索标签，如 ["SEO/GEO", "Amazon"]
  publishedAt: string;   // YYYY-MM-DD
  highlights: string[];  // 3 条要点，卡片展开时展示
};

export const REPORTS: ResearchReport[] = [ ... ];
export const REPORT_KINDS: ResearchKind[] = [ ... ];
export const REPORT_CATEGORIES: string[] = [ ... ];
export const REPORT_REGIONS: string[] = [ ... ];
```

新增报告流程：脱敏 HTML 放入 `public/research/<slug>.html` → 在 `REPORTS` 追加一条 → 提交发布。

## 5. 首期报告登记表

| slug | 脱敏标题 | 类型 | 品类 | 区域 | 日期 |
| --- | --- | --- | --- | --- | --- |
| `mattress-factory-overseas` | 手工床垫工厂出海调研 | 出海诊断 | 家居寝具 | 全球 | 2026-11-13 |
| `metaphysics-cultural-products` | 玄学 × 文化消费品国内市场调研 | 品类调研 | 文化消费 | 国内 | 2026-11-15 |
| `agarwood-incense` | 沉香线香出海调研与增长方案 | 市场进入 | 香氛香道 | 北美 | 2026-11-17 |
| `pet-bathtub` | 宠物浴缸 B2B 出海调研 | 市场进入 | 宠物用品 | 北美 | 2026-11-17 |
| `ceiling-fan-light` | 智能风扇灯出海调研与官网成交方案 | 增长方案 | 照明电工 | 北美、欧洲 | 2026-11-16 |
| `tcm-food-therapy` | 中医药食同源出海调研与招商方案 | 市场进入 | 中医药与大健康 | 北美 | 2026-11-16 |
| `badminton-gear` | 羽毛球装备出海调研与增长方案 | 增长方案 | 体育用品 | 东南亚 | 2026-11-15 |
| `africa-project-channel` | 东非与西非工程渠道进入研究（全屋定制 × 门窗） | 渠道研究 | 家居建材 | 非洲 | 2026-11-07 |

摘要与要点在实现时从各报告首屏与结论段提炼，控制在卡片两行内。

## 6. 脱敏规则

每份报告逐项处理，处理完必须通过关键词自检。

必须移除或替换：

1. 客户/工厂名称：标题、正文、图表标题、页脚署名中的品牌名，改为品类表述（如「某手工床垫工厂」「某照明品牌」）。
2. 官网与客户域名：`href` 与可见文本中的客户官网、独立站、店铺链接，改为 `#` 或删除整段。
3. 联系方式：电话（`tel:`）、邮箱（`mailto:`）、微信/企业微信、二维码图片、WhatsApp/`wa.me`、地址。
4. 可反查到客户的唯一标识：公司英文名、商标、专利号中的申请人信息、店铺 ID。

保留：

- 行业/品类数据、图表、竞品（竞品是公开信息，可保留）。
- 搭搭未来的出品署名与品牌视觉（我方品牌）。
- 报告的独立 HTML 结构与交互脚本。

自检清单（每份执行）：

```powershell
Select-String -Path public/research/<slug>.html -Pattern 'WindWing|百宁|威臣|己善|漯河|tel:|mailto:|wa.me|二维码|微信'
```

结果必须为 0 命中；再人工浏览一遍标题、首屏、页脚三处。

## 7. 索引页结构与交互

页面自上而下：

1. 页头：栏目标题「市场调研」+ 一句说明（「工厂出海与品类增长的公开研究，按类型、品类、区域快速查找」）+ 报告总数。
2. 筛选区：搜索框（占位「搜索品类、区域或关键词」）、类型 chips（单选可重置）、品类 chips、区域 chips；chips 支持多选，选中态与结果计数联动。
3. 结果区：`共 N 份报告`；卡片两列（≥1024px）/单列（移动端）。
4. 卡片内容：标题、摘要（2 行截断）、类型/品类/区域标签、日期、「查看报告 →」。
5. 空结果态：提示「没有匹配的报告，试试换个关键词」+ 重置按钮。

交互实现：纯客户端组件（`"use client"`），状态为 `query + kinds + categories + regions`；`useMemo` 计算过滤结果；搜索匹配 title/summary/category/regions/tags，大小写不敏感、支持中文子串。默认按 `publishedAt` 倒序。

报告链接：`<a href={"/research/" + slug + ".html"} target="_blank" rel="noopener noreferrer">`，直接静态访问，不经过 Next 路由。

## 8. SEO 与分发

- `/research` 输出独立 metadata：title「市场调研｜工厂出海与品类增长研究报告｜搭搭未来」、description 覆盖类型与首期规模。
- 页面内输出 `ItemList` JSON-LD，每项含标题、日期、URL。
- `sitemap.ts` 增加 `/research` 与 8 个 `/research/<slug>.html`。
- `public/llms.txt` 增加「市场调研」小节，列出栏目 URL 与报告清单。
- 客户分享：`https://<域名>/zh/research` 为聚合入口，单份报告可直发 `/research/<slug>.html`。

## 9. 代码组织

```
app/[lang]/research/page.tsx          索引页（服务端壳 + metadata + JSON-LD）
components/ResearchIndex.tsx          客户端筛选/搜索/卡片组件
lib/research/reports.ts               报告元数据与筛选常量
public/research/*.html                8 份脱敏报告
lib/content/pages/zh/{common,research}.ts   文案（繁中/英文 common 增加 research 标签以通过类型约束）
```

文案沿用现有 `lib/content/pages/*` 模式；仅中文需要完整栏目文案，繁中/英文只需 `nav.research` 键用于类型对齐（导航不渲染该入口）。

## 10. 实施步骤

1. 建立 `public/research/`，逐份脱敏并重命名（8 份），跑关键词自检。
2. 编写 `lib/research/reports.ts`，录入登记表与摘要/要点。
3. 实现 `ResearchIndex` 与索引页，接入导航、页脚、sitemap、llms.txt。
4. 本地 `tsc` + `lint` + 生产 `build`。
5. 发布到正式服务器并按验收标准验证。

## 11. 验收标准

1. `/research` 返回 200，展示 8 份报告；`/en/research`、`/zh-HK/research` 301/308 到 `/research`。
2. 搜索「床垫」「北美」「增长方案」均返回正确子集；清空条件恢复 8 份。
3. 类型、品类、区域 chips 可组合筛选，计数准确，空结果有提示与重置。
4. 8 个 `/research/<slug>.html` 全部 200，打开后无客户名、官网、电话、微信、二维码、地址。
5. 移动端 375px 下无横向滚动，卡片单列，筛选区可横向滑动。
6. 中文导航出现「市场调研」，英文/繁中导航不出现；sitemap 含新 URL。
7. `tsc --noEmit`、`npm run lint`、`npm run build` 全部通过。

## 12. 风险与对策

- **脱敏遗漏**：以关键词自检 + 人工三处瀏览为准，上线后再抽查一遍。
- **报告体积大**（单份 ~1MB）：静态直链，不进首屏，不影响索引页性能。
- **后续报告增多**：索引纯前端过滤，50 份以内无性能问题；超过再考虑分页。
- **多语言跳转体验**：`/en/research` 直接重定向，避免出现半英半中的页面。
