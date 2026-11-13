# 全站三语（简中 / 繁中·港 / 英文）设计方案

- 日期：2026-11-14
- 项目：搭搭未来官网（`website/`，Next.js 16.4.1 App Router）
- 状态：已确认，待实现

## 1. 目标与范围

为现有纯中文官网增加简体中文（默认）、繁体中文（香港）、英语三个语言版本。

范围：全站全量。

- 12 类页面：首页、解决方案列表、方案详情（4）、服务产品列表、服务详情（9）、案例中心、关于我们、培训赋能、新闻动态、联系我们、隐私政策、服务条款，外加 404 页
- 全站导航、页脚、悬浮联系、表单、按钮、空状态等 UI 文案
- 三组结构化数据（品牌、四大强调、核心数据、四阶段、服务、套餐、合作模式、方案、案例、团队、顾问、培训、沙龙、FAQ、新闻、资源包）
- 每页 metadata、OG、canonical、hreflang、JSON-LD、sitemap

不在范围：图片内嵌中文（Facebook 后台截图、沙龙海报属实证素材，保留原图）、`public/llms.txt` 三语化（列为收尾可选）。

## 2. 已确认决策

| 决策项 | 结论 |
| --- | --- |
| 翻译范围 | 全站全量 |
| URL 结构 | 简中根路径无前缀（`/about`），繁中 `/zh-HK/about`，英文 `/en/about` |
| slug | 三语共用现有 slug，不做本地化 |
| 译文来源 | AI 全量翻译 + 术语表 |
| 语言分发 | 根路径始终简中，不做 Accept-Language 自动跳转 |
| 英语变体 | en-US，配美国国旗 |
| 切换器形态 | 导航栏右侧下拉，移动端收进汉堡菜单 |
| 词条载体 | Next 原生路由机制 + 类型化 TS 词条（非 JSON，非 next-intl） |

## 3. 技术方案

### 3.1 路由与目录

```
website/
  proxy.ts                         # 语言前缀重写 / 规范路径 301
  app/
    layout.tsx                     # 删除，根布局下沉
    [lang]/
      layout.tsx                   # 唯一根布局：html lang、metadata、JSON-LD、Navbar/Footer
      page.tsx
      about/page.tsx
      cases/page.tsx
      contact/page.tsx
      news/page.tsx
      privacy/page.tsx
      services/page.tsx
      services/[slug]/page.tsx
      solutions/page.tsx
      solutions/[slug]/page.tsx
      terms/page.tsx
      training/page.tsx
      not-found.tsx                # 段内 404
    global-not-found.tsx           # 全局 404（开启 experimental.globalNotFound）
    sitemap.ts                     # 三语 URL + alternates.languages
    robots.ts                      # 不变
    api/contact/route.ts           # 不变
  lib/
    i18n/config.ts                 # Locale、LANGUAGES、hreflang 映射、路径工具
    content/
      types.ts                     # SiteContent 及全部子类型
      shared.ts                    # 与语言无关的 slug/order/icon/图片/联系方式
      index.ts                     # getContent()：next/root-params 读取 lang
      data.ts                      # 结构化数据三语 Record<Locale, ...>
      pages/                       # 逐页文案，每文件含 zh / zh-HK / en 三份
        home.ts services.ts service-detail.ts solutions.ts solution-detail.ts
        cases.ts about.ts training.ts news.ts contact.ts privacy.ts terms.ts not-found.ts
        common.ts                  # 导航、页脚、悬浮联系、通用按钮
  components/
    LanguageSwitcher.tsx           # 新增，client
    ...                            # 其余组件改为接收文案切片
```

### 3.2 语言配置

```ts
export const LOCALES = ["zh", "zh-HK", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "zh";

export const LANGUAGES: Record<Locale, {
  label: string;        // 简体中文 / 繁體中文 / English
  shortLabel: string;   // 简中 / 繁中 / EN
  htmlLang: string;     // zh-CN / zh-HK / en-US
  hreflang: string;     // zh-CN / zh-HK / en
  ogLocale: string;     // zh_CN / zh_HK / en_US
  flag: "cn" | "hk" | "us";
}>;
```

路径工具：

- `stripLocale(pathname): string` — 去掉 `/zh-HK`、`/en` 前缀，`/zh` 也视作无前缀
- `localizePath(path, locale): string` — `zh` 返回原路径，其他拼前缀
- `hasLocale(value): value is Locale`

### 3.3 proxy.ts

- matcher 排除：`_next/static`、`_next/image`、`api`、`sitemap.xml`、`robots.txt`、`llms.txt`、带扩展名的静态文件
- `/zh-HK`、`/en` 开头 → 放行
- `/zh` 或 `/zh/*` → 301 到去掉前缀的规范路径（保留 query）
- 其余路径 → `NextResponse.rewrite(new URL('/zh' + pathname, request.url))`，地址栏不变
- 不做语言检测跳转

### 3.4 静态生成

- `app/[lang]/layout.tsx` 导出 `generateStaticParams()` 返回 `LOCALES.map((lang) => ({ lang }))`
- `app/[lang]/layout.tsx` 导出 `dynamicParams = false`，未知语言 404
- 详情页 `generateStaticParams` 返回 `locale × slug` 笛卡尔积
- `html lang` 使用 `LANGUAGES[lang].htmlLang`

### 3.5 内容层

原则：单一事实源、三语结构强一致、服务端读取不加大客户端包。

- `types.ts` 定义全部内容形状；`shared.ts` 保存 slug、顺序、图标名、图片 URL、电话/微信/站点等非文案字段
- `content/data.ts`：`Record<Locale, DataCopy>`，与 shared 在 `index.ts` 内按 slug 合并，组成 `SiteContent`
- `content/pages/*.ts`：每个文件导出 `{ zh, "zh-HK", en }` 同类型对象，缺字段/缺语言编译报错
- `getContent()`：`const lang = await lang()`（`next/root-params`）→ 校验 → 返回合并后的 `SiteContent`；仅服务端可调用
- 服务端组件直接 `await getContent()`；客户端组件由父级传入所需切片：
  - Navbar：`nav`、`brand`、`solutionsMenu`
  - ContactForm：`contactForm`
  - FaqAccordion：`items`
  - CaseTabs / CaseCarousel：`labels`、`cases`
  - FloatingContact：`floating`
  - CountUp：仅数值，无需文案
- 数字把数值放 shared，单位/量词放文案：中文 `50+ / 3亿+`，英文 `50+ / $500M+` 等本地化表达
- 收尾删除 `lib/data.ts`、`lib/cooperation.ts`，避免双源；`lib/images.ts` 保留

### 3.6 语言切换器

- 桌面：导航栏右侧按钮显示当前语言 + 下拉三项；移动端在汉堡菜单底部横向三项
- 国旗用内联 SVG（中国旗 / 香港区旗 / 美国旗），不用 emoji（Windows 不渲染区域旗帜）
- 国旗与语言名并排；当前项打勾并带 `aria-current="true"`；按钮 `aria-label="切换语言 / Change language"`
- 切换：`stripLocale(usePathname())` → `localizePath(target, locale)` → `Link` 预取 + 关闭菜单，保留 query

### 3.7 SEO

- 每页 `generateMetadata({ params })`：按语言输出 title、description、keywords、OG（type/locale/siteName/title/description）、`alternates.canonical`
- `alternates.languages` 固定输出 `zh-CN`、`zh-HK`、`en`、`x-default`（简中）
- `app/[lang]/layout.tsx` 输出 WebSite、Organization、FAQPage 三组 JSON-LD，`inLanguage` 与 FAQ 内容随语言
- `app/sitemap.ts`：静态页 10 + 服务 9 + 方案 4，每条路径 × 3 语言，附 `alternates.languages`
- 简中 URL 不变，仅内部 rewrite，不产生 SEO 损失

### 3.8 样式

- `globals.css` 增加 `:lang(zh-HK)` 字体栈：`"PingFang HK", "Microsoft JhengHei", "Noto Sans TC"`
- 英文文案复检点：导航项与 CTA（加 `whitespace-nowrap` 或放宽容器）、核心数据卡、服务卡片标题、表格、价格区

## 4. 译文口径与术语表

- 繁中：香港书面语，用「聯絡、查詢、客製化、獨立站、優化、數據」，避免台湾地区用词（如「資訊」「網路」）
- 英文：美式拼写，B2B 外贸语境；H1/H2 用 Title Case，正文句首大写
- 品牌名三语统一为「搭搭未来 DADAFUTURE」，不做字形替换，避免商标歧义

| 简中 | 繁中（港） | 英文 |
| --- | --- | --- |
| 工厂出海 | 工廠出海 | Going global for factories |
| 超级营销合伙人 | 超級營銷合夥人 | Super Marketing Partner |
| 独立站 | 獨立站 | Independent website |
| 询盘 | 查詢 / 詢盤 | Inquiry |
| 爆品 | 爆品 | Hero product |
| 爆款共创 | 爆款共創 | Hero Product Co-creation |
| 投放 | 投放 | Paid media / Advertising |
| 转化 | 轉化 | Conversion |
| 复购 | 回購 | Repurchase |
| 全链路增长 | 全鏈路增長 | Full-funnel growth |
| SEO/GEO | SEO/GEO | SEO/GEO |
| 离岸数字孵化 | 離岸數字孵化 | Offshore digital incubation |
| 交付 | 交付 | Deliverables |
| 私域 | 私域 | Owned audience |
| 案例中心 | 案例中心 | Case Studies |
| 培训赋能 | 培訓賦能 | Training & Enablement |
| 新闻动态 | 新聞動態 | News |
| 关于我们 | 關於我們 | About Us |
| 免费获取出海方案 | 免費獲取出海方案 | Get a Free Global Growth Plan |
| 预约出海诊断 | 預約出海診斷 | Book a Global Growth Audit |

法律页：英文与繁中版本页首加声明「本译本仅供参考，如中英文版本存在歧义，以简体中文版本为准。/ This translation is for reference only. In case of discrepancy, the Simplified Chinese version prevails. / 本譯本僅供參考⋯⋯」

## 5. 实施顺序

1. 骨架：`lib/i18n/config.ts`、`proxy.ts`、`app/[lang]/layout.tsx`、`global-not-found`、`next.config.ts` 开关、sitemap
2. 内容层：`types.ts`、`shared.ts`、`data.ts`（三语）、`pages/common.ts`
3. 首页垂直切片：页面迁移 + 三语文案 + metadata/hreflang + 切换器，构建验证
4. 其余静态页：solutions、services、cases、about、training、news、contact、privacy、terms
5. 详情页：9 服务 + 4 方案
6. 客户端组件文案接入（Navbar、ContactForm、FaqAccordion、CaseTabs、CaseCarousel、FloatingContact）
7. 字体与英文长度适配
8. 验收：build、lint、三语巡检、hreflang/sitemap 校验

## 6. 验收标准

- `npm run build`、`npm run lint` 通过，三语路由全部静态产出
- 12 类页面 × 3 语逐页可访问且无中文残留（品牌名、专有名词除外）
- 切换器保持当前路径与查询参数；`/zh/*` 301；`/xx/*` 404；三语 404 页正常
- hreflang 三语互指 + x-default；sitemap 含三语；OG、JSON-LD 随语言变化
- 桌面下拉与移动菜单的国旗 SVG 渲染正常
- 英文版无布局溢出、无按钮折行错位

## 7. 风险

- `cacheComponents` + `partialPrefetching` 与 proxy rewrite 的兼容性需在首页切片阶段先验证，失败则退回 `/` 显式 301 到 `/zh` 的备选方案
- 翻译体量大，分批落地，每批独立构建
- 英文长度导致固定尺寸容器溢出，需要逐页复检
