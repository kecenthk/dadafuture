/* 本文件由 scripts/gen-hk.mjs 自动生成，请勿手改。 */

import { img } from "@/lib/images";

/* ============================== 品牌 ============================== */

export const BRAND = {
  name: "搭搭未來",
  en: "DADAFUTURE",
  slogan: "一起搭、搭未來",
  positioning: "B2B 工廠出海超級營銷合夥人",
  promise: "不賣一次性流量，只做全鏈路增長",
  contactName: "十月",
  contactTitle: "項目負責",
  contactPhone: "137 2672 4687",
  wechatQr: "/brand/wechat-qr.png",
  site: "www.dadafuture.com",
  icp: "搭搭未來 × 雲店+ 聯合品牌",
};

/** 四大強調（全站差異化核心，順序與口徑嚴禁改動） */
export const FOUR_EMPHASES = [
  {
    key: "shizhan",
    title: "強調實戰",
    subtitle: "方法、認知、落地一體交付",
    desc: "不是培訓——有方法，落不了地；不是諮詢——有認知，沒落地方法。搭搭未來自己下場實戰，把方法、認知、落地一體交付給客户。",
  },
  {
    key: "chuhai",
    title: "強調出海 + AI",
    subtitle: "先懂出海生意，再用 AI 放大效率",
    desc: "AI 只是工具。我們是「出海 + AI」——先懂出海生意與渠道，再用 AI 放大效率，不是拿 AI 概念包裝出海。",
  },
  {
    key: "baopin",
    title: "強調爆品 + 流量",
    subtitle: "先打穿轉化，再放大流量",
    desc: "是「爆品 + 流量」，不是「流量 + 產品」——先用爆品邏輯驗證產品、打穿轉化，再放大流量，而不是拿流量硬推產品。",
  },
  {
    key: "pinlei",
    title: "強調品類紅利",
    subtitle: "靠渠道起勢，用爆品突圍",
    desc: "在渠道紅利中找品類紅利——抓品類紅利，靠渠道起勢，用爆品突圍，把工廠的產品變成品類的冠軍。",
  },
];

export const CORE_STATS = [
  { value: 50, suffix: "+", label: "孵化簽約 IP" },
  { value: 3, suffix: "億+", label: "年營業額" },
  { value: 50, suffix: "億+", label: "爆品共創帶動的業績" },
  { value: 1, suffix: "億+", label: "單品超級戰績" },
];

/** 四階段全鏈路 */
export const FOUR_STAGES = [
  {
    stage: "基建期",
    name: "AI 建站",
    desc: "營銷型獨立站定製 + 站內 SEO/GEO 雙優化，把地基打牢",
    services: ["hit-product", "website", "seo-geo"],
  },
  {
    stage: "獲客期",
    name: "多平台精準投放",
    desc: "Facebook / Google / TikTok 等九大平台精細化投放，精準獲客",
    services: ["ads", "social", "linkedin"],
  },
  {
    stage: "轉化期",
    name: "AARRR 增長模型",
    desc: "詢盤進線到成交復購的全鏈路轉化 SOP，銷冠團隊打法",
    services: ["b2b-growth", "live"],
  },
  {
    stage: "復盤期",
    name: "數據迭代",
    desc: "周度數據同步 + 月度復盤，AI 提效持續優化",
    services: ["ai-agent", "partnership"],
  },
];

/* ============================== 九大服務 + 合夥人 ============================== */

export type Service = {
  slug: string;
  order: number;
  name: string;
  short: string;
  icon: string;
  heroImage: string;
  slogan: string;
  intro: string[];
  highlights: { title: string; desc: string }[];
  deliverables: string[];
  price?: { label: string; value: string; note?: string }[];
  featured?: boolean;
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "hit-product",
    order: 1,
    name: "爆款共創",
    short: "挖掘品類爆品機會，品銷一體孵化，與工廠共擔共贏",
    icon: "Flame",
    heroImage: img(
      "best-selling consumer product on global e-commerce platform, dramatic studio lighting, premium product photography, export quality goods"
    ),
    slogan: "先用爆品邏輯驗證產品、打穿轉化，再放大流量",
    intro: [
      "搭搭未來雙輪驅動模型的一半：爆品共創。我們不賣一次性流量，而是與工廠一起挖掘品類爆品機會，品銷一體孵化，把產品打成品類的代表。",
      "核心邏輯是「爆品 + 流量」：先用爆品邏輯驗證產品、打穿轉化，再放大流量；不是拿流量硬推產品。在渠道紅利中找品類紅利，靠渠道起勢，用爆品突圍。",
    ],
    highlights: [
      { title: "品類紅利研判", desc: "在渠道紅利中找品類紅利，判斷品類空間與窗口期" },
      { title: "爆品機會挖掘", desc: "SKU 級產品診斷，找到可打穿的單品" },
      { title: "品銷一體孵化", desc: "從產品定義到內容、投放、轉化的一體化孵化" },
      { title: "爆款公式作戰大圖", desc: "可複用的爆款方法論，沉澱為工廠自己的作戰地圖" },
      { title: "50 億+ 爆品實戰背書", desc: "爆品共創帶動業績 50 億+，單品超級戰績 1 億+" },
      { title: "IP 商業模式研究", desc: "拆解 IP 變現路徑，IP 商業化 × 爆品共創雙輪驅動" },
    ],
    deliverables: [
      "品類機會調研與爆品研判報告",
      "爆品打造全案（產品定位 / 內容 / 投放 / 轉化）",
      "爆款公式作戰大圖",
      "月度數據復盤與迭代建議",
    ],
    featured: true,
    faqs: [
      { q: "什麼產品適合做爆款共創？", a: "具備開發爆款的能力或潛質：所在品類有紅利空間、產品可打造為爆品。我們會先做 SKU 級產品診斷再判斷。" },
      { q: "共創和普通代運營有什麼區別？", a: "共創是以爆品邏輯做品銷一體孵化，我們先驗證轉化再打放量，和工廠是合夥人關係，不是一次性流量買賣。" },
    ],
  },
  {
    slug: "website",
    order: 2,
    name: "WordPress / Shopify 獨立站建站",
    short: "AI + WordPress 營銷型獨立站，SEO/GEO 雙優化的出海地基",
    icon: "Globe",
    heroImage: img(
      "modern laptop showing elegant business website design on desk in bright office, web development workspace, professional"
    ),
    slogan: "營銷型獨立站定製，3 年部署維護，官網即獲客引擎",
    intro: [
      "獨立站是工廠出海的數字地基。搭搭未來提供 AI + WordPress 營銷型獨立站定製，建站之初就按 SEO/GEO 雙優化標準搭建，讓官網本身成為詢盤入口。",
      "WordPress 定製建站（8 個定製頁面）、SiteGround / Hostinger 獨立服務器、3 年部署維護 + CDN + SSL + 域名、Elementor Pro 正版 + Yundian+ 正版主題。",
    ],
    highlights: [
      { title: "響應式架構", desc: "移動端優先，Google AMP 移動站，網頁速度優化" },
      { title: "109 種語言", desc: "多語言架構，贈送基本 5 種翻譯語言" },
      { title: "詢盤表單 + CRM 對接", desc: "實時聊天、EDM 郵件營銷對接，線索自動進 CRM" },
      { title: "產品批量導入", desc: "支持 Alibaba 導入，產品 / 資料上傳 ≤50 條" },
      { title: "關鍵詞獨立頁面", desc: "關鍵詞獨立頁面 + IP 屏蔽 + 數據自動優化" },
      { title: "AI 營銷系統", desc: "產品導入 / AI 擴寫 / Blog SEO 內容生成 / 社媒多渠道同步" },
    ],
    deliverables: [
      "8 個定製頁面營銷型獨立站",
      "3 年服務器 / CDN / SSL / 域名 / 部署維護",
      "站內 SEO 全面優化 + GA / GSC 綁定",
      "社媒 Pixel 整合 + Paypal / Stripe 支付接入",
      "SEO 關鍵詞分析表 + 外貿全流程 SOP 資料包",
    ],
    price: [
      { label: "商務·建站版", value: "44,800 元", note: "營銷型獨立站定製 + 站內 SEO/GEO 運營 + 站外內容營銷 100 篇/年" },
      { label: "可選增配：Google Ads 投放運營", value: "+19,800 元/年", note: "原價 39,800 元/年，搭建定製官網優惠 2 萬；不含廣告費" },
    ],
    faqs: [
      { q: "建站用什麼技術？", a: "AI + WordPress 定製建站，Elementor Pro 正版 + Yundian+ 正版主題，SiteGround / Hostinger 獨立服務器，交付後 3 年部署維護。" },
      { q: "網站多語言支持到什麼程度？", a: "系統支持 109 種語言，套餐贈送基本 5 種翻譯語言，可按目標市場擴展。" },
    ],
  },
  {
    slug: "seo-geo",
    order: 3,
    name: "站內 + 站外 SEO/GEO 運營",
    short: "Google 首頁關鍵詞 + AI 搜索可見，效果保證寫進合同",
    icon: "Search",
    heroImage: img(
      "search engine analytics dashboard on computer screen showing ranking growth charts, modern office, data visualization"
    ),
    slogan: "SEO 排名 + GEO 生成式引擎優化，雙引擎效果保證",
    intro: [
      "出海獲客正在從「搜得到」走向「AI 答得出」。搭搭未來同時做 Google SEO 與 GEO（生成式引擎優化），讓客户在 Google 搜索和 Google AI Overview / AI Mode / Gemini / ChatGPT 裏都能被找到。",
      "站內 EEAT 知識庫優化 + 站外 100–200 篇/年 AI 內容 + 外鏈矩陣（同行業 DA10+ / 權威平台 DA30-70 / 軟文頁），效果按關鍵詞達標制保證。",
    ],
    highlights: [
      { title: "站內 EEAT 優化", desc: "知識庫化內容架構，建立行業權威信號" },
      { title: "站外內容矩陣", desc: "100–200 篇/年定製營銷內容，AI 批量生產 + 人工把關" },
      { title: "三層外鏈矩陣", desc: "同行業 DA10+ / 權威平台 DA30-70 / 軟文外鏈頁" },
      { title: "GEO 專項優化", desc: "品牌結構化 Schema / FAQ 數據，進入 AI 答案" },
      { title: "效果保證", desc: "關鍵詞達標制：不達標按約定補充，寫進交付標準" },
      { title: "數據看板", desc: "排名 / 收錄 / 外鏈 / 詢盤全維度監測報告" },
    ],
    deliverables: [
      "SEO/GEO 關鍵詞策略表",
      "站外內容 100–200 篇/年",
      "三層外鏈矩陣建設",
      "月度排名流量監測報告",
    ],
    price: [
      { label: "達標關鍵詞口徑", value: "100–300 個", note: "主站 + 子站 SEO + GEO 累計達標；90 天達成初步效果" },
      { label: "服務期", value: "365 天", note: "自關鍵詞達標起算；GEO 結果不達標時用 SEO 結果補充" },
    ],
    faqs: [
      { q: "GEO 是什麼？", a: "GEO（生成式引擎優化）讓品牌內容進入 Google AI Overview / AI Mode、Gemini、ChatGPT 等 AI 答案，是搜索的下一代入口。" },
      { q: "多久能看到效果？", a: "90 天達成初步效果（首批關鍵詞進入 Google 首頁），服務期自關鍵詞達標起算 365 天。" },
    ],
  },
  {
    slug: "ads",
    order: 4,
    name: "廣告投放（九大平台）",
    short: "Meta / Google / TikTok 等九大平台精細化代投，收費透明",
    icon: "Target",
    heroImage: img(
      "digital advertising campaign management on multiple screens, social media ad dashboards, professional marketing team office"
    ),
    slogan: "九大平台精細化投放，廣告費直充平台，賬户自主管理",
    intro: [
      "覆蓋 Meta / Facebook / Instagram / TikTok / Google / YouTube / LinkedIn / X / Pinterest 九大平台的精細化投放，從關鍵詞調研、受眾定向到競品廣告分析，全案執行。",
      "收費透明：廣告費直充平台，客户自主管理賬户，我們只按充值金額收 20% 運營服務費，每一分廣告費去向可查。",
    ],
    highlights: [
      { title: "九大平台覆蓋", desc: "Meta / Google / TikTok / LinkedIn 等一站式代投" },
      { title: "收費透明", desc: "廣告費直充平台、客户自主管理賬户，無隱藏差價" },
      { title: "精細化運營", desc: "關鍵詞調研、受眾定向、競品廣告分析、A/B 測試" },
      { title: "ROI 管理", desc: "預算分配與 ROI 目標管理，周度數據同步" },
      { title: "建議預算", desc: "FB 廣告建議 5,000+/月，Google Ads 建議 10,000+/月" },
      { title: "定期復盤", desc: "周度數據同步 + 月度復盤，持續優化投放結構" },
    ],
    deliverables: [
      "投放策略與預算分配方案",
      "廣告賬户搭建與素材製作",
      "周度數據同步 + 月度復盤報告",
      "競品廣告監測與策略迭代",
    ],
    price: [
      { label: "運營服務費", value: "按充值 20%", note: "廣告費客户直充平台、自主管理賬户；FB 建議預算 5,000+/月，Google Ads 建議 10,000+/月" },
      { label: "Google Ads 投放運營（增配）", value: "19,800 元/年", note: "原價 39,800 元/年，搭建定製官網優惠 2 萬；不含廣告費" },
    ],
    faqs: [
      { q: "廣告費怎麼收？", a: "廣告費直充平台，客户自主管理賬户；我們按充值金額收 20% 運營服務費，全程透明。" },
      { q: "建議多少預算起投？", a: "Facebook 廣告建議 5,000 元+/月，Google Ads 建議 10,000 元+/月，具體按品類與市場測算。" },
    ],
  },
  {
    slug: "social",
    order: 5,
    name: "內容運營與社媒矩陣",
    short: "抖音 / 視頻號 IP 打造 + 海外社媒矩陣，爆款素材腳本提升轉化",
    icon: "Share2",
    heroImage: img(
      "social media content creation studio, smartphone filming product video, ring light and camera equipment, professional livestream products"
    ),
    slogan: "內容種草 + 社媒矩陣，把流量沉澱為品牌資產",
    intro: [
      "內容為轉化服務。搭搭未來提供抖音 / 視頻號 IP 打造、爆款素材腳本生產，以及 TikTok / YouTube / LinkedIn / Pinterest / X 海外社媒矩陣的內容規劃與日常運營。",
      "自然流為主、投放為輔：先把內容打爆驗證素材，再用投放放大，避免拿錢硬砸流量。",
    ],
    highlights: [
      { title: "IP 打造", desc: "抖音 / 視頻號 IP 定位、人設搭建、爆款腳本" },
      { title: "海外社媒矩陣", desc: "TikTok / YouTube / LinkedIn / Pinterest / X 賬號定位與運營" },
      { title: "爆款素材", desc: "視頻圖文腳本，先驗證素材再用投放放大" },
      { title: "互動管理", desc: "海外社媒內容規劃與互動管理，提升賬號權重" },
      { title: "傳播數據分析", desc: "內容傳播數據分析，指導選題與迭代" },
      { title: "私域聯動", desc: "公域獲客 + 私域轉化完整鏈路" },
    ],
    deliverables: [
      "賬號定位與內容策略",
      "月度內容日曆與腳本庫",
      "社媒矩陣日常運營",
      "內容傳播數據月報",
    ],
    faqs: [
      { q: "國內和海外社媒都做嗎？", a: "都做。國內以抖音 / 視頻號為主，海外覆蓋 TikTok / YouTube / LinkedIn / Pinterest / X，可單平台也可矩陣。" },
    ],
  },
  {
    slug: "linkedin",
    order: 6,
    name: "LinkedIn 主動開發",
    short: "賬號安全體系 + 老闆 IP + 精準客户搜索，跑通詢盤為結項",
    icon: "Linkedin",
    heroImage: img(
      "professional business networking on laptop, linkedin style interface, B2B sales outreach, modern office setting"
    ),
    slogan: "跑通 1 個真實詢盤為結項口徑，授人以漁的主動開發",
    intro: [
      "LinkedIn 是 B2B 出海最高質量的主動開發渠道。我們提供賬號安全體系、企業主頁 + 老闆 IP、精準客户搜索篩選、內容策略、高曝光互動與詢盤首輪響應的全流程陪跑。",
      "結項口徑清晰：跑通 1 個詢盤為結項標準，約 3 個月陪跑，讓業務團隊真正掌握主動開發能力。",
    ],
    highlights: [
      { title: "賬號安全體系", desc: "養號與防封策略，保障長期資產安全" },
      { title: "企業主頁 + 老闆 IP", desc: "公司頁與個人 IP 雙線建設，建立專業信任" },
      { title: "精準客户搜索", desc: "按行業 / 職位 / 地區精準搜索篩選目標客户" },
      { title: "內容策略", desc: "高曝光互動內容策略，讓客户主動上門" },
      { title: "詢盤首輪響應", desc: "詢盤響應 SOP 與話術庫，提高轉化率" },
      { title: "以詢盤為結項", desc: "跑通 1 個詢盤為結項口徑，結果導向" },
    ],
    deliverables: [
      "LinkedIn 賬號安全與搭建方案",
      "目標客户搜索清單與開發話術",
      "內容策略與互動 SOP",
      "約 3 個月陪跑至跑通詢盤",
    ],
    price: [{ label: "LinkedIn 賦能陪跑", value: "29,800 元", note: "約 3 個月，跑通 1 個詢盤為結項口徑" }],
    faqs: [
      { q: "結項標準是什麼？", a: "跑通 1 個真實詢盤即為結項。我們不止交付賬號和方法，更陪跑到出結果。" },
    ],
  },
  {
    slug: "live",
    order: 7,
    name: "2C 直播服務",
    short: "海外 Facebook / TikTok + 國內抖音 / 視頻號 / 小紅書直播代運營",
    icon: "Radio",
    heroImage: img(
      "livestream studio with products on display, professional lighting and cameras, host presenting goods, e-commerce live streaming room"
    ),
    slogan: "董太太品牌專場 3 小時 1200 萬+ 的直播實戰班底",
    intro: [
      "直播是最直接的品銷一體驗證場。海外覆蓋 Facebook、TikTok 直播，國內覆蓋抖音、視頻號、小紅書，四條打法線：國貨出海、進口國內、國貨雙平台、高客單國風直播。",
      "班底有實戰戰績：董太太品牌專場 3 小時 1200 萬+；亮相 VANPEARL 基因膠囊新品發佈會圓桌、AIDEVI 528 粉色盛典。",
    ],
    highlights: [
      { title: "海外直播", desc: "Facebook 為主、TikTok 為輔，多語種直播承接海外流量" },
      { title: "國內直播", desc: "抖音 / 視頻號雙平台同步，小紅書種草聯動" },
      { title: "國貨出海", desc: "海外精準流量投放 + 跨境直播轉化 + 海外私域復購" },
      { title: "進口國內", desc: "抖音本土直播 + 進口產品合規講解 + 短視頻引流" },
      { title: "高客單直播", desc: "新中式高端非遺服飾、滋補品等高客單專場打法" },
      { title: "1200 萬+ 專場戰績", desc: "董太太品牌專場 3 小時 1200 萬+ 實戰驗證" },
    ],
    deliverables: [
      "直播間搭建與貨盤策劃",
      "直播腳本與話術庫",
      "投放引流與私域承接方案",
      "直播數據復盤與迭代",
    ],
    faqs: [
      { q: "工廠適合做直播嗎？", a: "直播是爆品邏輯最快的驗證方式之一。先用直播間打穿轉化模型，再把驗證過的品放大到貨架與渠道。" },
    ],
  },
  {
    slug: "b2b-growth",
    order: 8,
    name: "B2B 業務轉化與管理",
    short: "詢盤進線到成交復購的全鏈路 SOP + AI 背調 + 績效激勵體系",
    icon: "TrendingUp",
    heroImage: img(
      "B2B sales team meeting with charts and customer pipeline dashboard on screen, professional business consulting office"
    ),
    slogan: "線索分層 / SOP 手冊 / 話術素材庫 / 績效激勵 / AI 工具五件套交付",
    intro: [
      "流量不等於訂單。搭搭未來把 17 年實戰沉澱的 AARRR 全鏈路 B2B 轉化 SOP 交付給工廠：詢盤進線—首響—診斷—報價—培育—成交—復購，每一步都有標準動作。",
      "AI 賦能業務流程：AI 背調、線索打分、多語言首響；配套績效激勵體系與業務陪跑，交付五件套讓團隊自己轉起來。",
    ],
    highlights: [
      { title: "全鏈路 SOP", desc: "詢盤進線—首響—診斷—報價—培育—成交—復購標準動作" },
      { title: "AI 背調", desc: "客户背景調查、線索打分、多語言首響提效" },
      { title: "2B 私域全流程", desc: "私域承接與培育 SOP，把詢盤變訂單" },
      { title: "績效激勵體系", desc: "團隊激勵與考核方案，讓 SOP 真正落地" },
      { title: "業務陪跑", desc: "顧問陪跑糾偏，直到團隊形成肌肉記憶" },
      { title: "五件套交付", desc: "線索分層表 / SOP 手冊 / 話術素材庫 / 績效激勵方案 / AI 工具落地清單" },
    ],
    deliverables: [
      "線索分層表",
      "業務轉化 SOP 手冊",
      "話術素材庫",
      "績效激勵方案",
      "AI 工具落地清單",
    ],
    price: [{ label: "銷冠業務培訓與管理", value: "29,800 元", note: "含 AI 賦能業務流程與業務陪跑，交付五件套" }],
    faqs: [
      { q: "SOP 交付後團隊不會用怎麼辦？", a: "配套業務陪跑與績效激勵方案，顧問帶跑到團隊形成肌肉記憶，不是交完手冊就結束。" },
    ],
  },
  {
    slug: "ai-agent",
    order: 9,
    name: "出海 + AI 智能體",
    short: "出海業務流 AI Agent 落地：建站、內容、詢盤篩選、私域自動化",
    icon: "Bot",
    heroImage: img(
      "AI automation workflow in modern office, robot assistant concept with business dashboards, artificial intelligence technology interface"
    ),
    slogan: "AI 只是工具：先懂出海生意，再用 AI 放大效率",
    intro: [
      "我們的口徑是「出海 + AI」——先懂出海生意與渠道，再用 AI 放大效率。AI Agent 不是噱頭，是落到出海業務流裏的生產力：AI 建站、AI 內容批量生產、AI 詢盤篩選、私域自動化。",
      "配套 AI Agent 商業閉環訓練營（線下課），用內部成熟 AI 工具流做實戰拆解，讓團隊真正用起來。",
    ],
    highlights: [
      { title: "AI 建站", desc: "AI 營銷系統：產品導入 / AI 擴寫 / Blog SEO 內容生成" },
      { title: "AI 內容批量生產", desc: "短視頻腳本、口播文案、爆款選題批量產出" },
      { title: "AI 詢盤篩選", desc: "詢盤質量打分與客户背調自動化" },
      { title: "私域自動化", desc: "私域精細化運營的 AI 提效工具流" },
      { title: "AI 關鍵詞佈局", desc: "AI 關鍵詞佈局、詢盤篩選、私域精細化運營" },
      { title: "訓練營實戰", desc: "AI Agent 商業閉環訓練營，成熟工具流拆解" },
    ],
    deliverables: [
      "出海業務流 AI Agent 落地方案",
      "AI 建站與內容生產系統",
      "詢盤篩選與私域自動化工具流",
      "AI Agent 商業閉環訓練營（線下課）",
    ],
    faqs: [
      { q: "和「AI + 出海」公司有什麼區別？", a: "順序不同、根不同。我們是「出海 + AI」：團隊本身懂出海生意與渠道，AI 是用來放大效率的工具，不是用 AI 概念做包裝。" },
    ],
  },
  {
    slug: "partnership",
    order: 10,
    name: "超級合夥人全案",
    short: "12 模塊深度合作全案，覆蓋基建—獲客—轉化—復盤全鏈路",
    icon: "Handshake",
    heroImage: img(
      "business partnership handshake in modern office, strategic cooperation meeting, export and global trade theme, professional team agreement"
    ),
    slogan: "150,000 元起/年：全案託管 + 品類共創優先對接，適用全部模塊",
    intro: [
      "超級合夥人是搭搭未來最深度的合作模式：12 個模塊覆蓋「基建—獲客—轉化—復盤」全鏈路，全案託管 + 品類共創優先對接，與工廠形成年度增長共同體。",
      "150,000 元起/年，適用全部模塊，可定製。包含內容/社媒、Facebook 投放、B2B 官網搭建與優化、站外 SEO/GEO、全渠道社媒運營、Google Ads、LinkedIn 賦能陪跑、銷冠業務培訓與管理等核心模塊，增長/用户數據、發展規劃、出海技術支持為增值服務。",
    ],
    highlights: [
      { title: "內容 / 社媒方向", desc: "行業選題、英文文案、視頻圖文腳本；全年 60 條（60s 以內）內容" },
      { title: "Facebook 投放", desc: "FB/Ins 投放執行、預算分配、ROI 管理；按投放預算收 20% 運營服務費（建議 5,000+/月）" },
      { title: "B2B 官網搭建與優化", desc: "官網優化、站內 SEO/GEO、排名流量監測、多終端適配，3 年服務期" },
      { title: "站外 SEO / GEO", desc: "高質量外鏈 + 定製營銷內容 + 品牌結構化 Schema/FAQ；100 篇或 200 篇/年" },
      { title: "全渠道社媒運營", desc: "TikTok / YouTube / LinkedIn / Pinterest / X 賬號定位與日常運營" },
      { title: "Google Ads 投放", desc: "關鍵詞調研、廣告文案素材、預算出價管理、競品分析" },
      { title: "LinkedIn 賦能陪跑", desc: "賬號安全體系、企業主頁 + 老闆 IP、精準客户搜索、詢盤響應，約 3 個月" },
      { title: "銷冠業務培訓與管理", desc: "AI 賦能業務流程、2B 私域全流程 SOP、績效激勵、業務陪跑" },
      { title: "增值服務", desc: "增長/用户數據方向、發展規劃/模式分析、出海技術支持——免費增值" },
      { title: "老闆 IP 策劃", desc: "人設定位、內容策劃製作、全平台矩陣運營｜面議" },
    ],
    deliverables: [
      "全鏈路增長方案（12 模塊）",
      "銷冠業務五件套",
      "季度數據復盤與增長規劃",
      "老闆 IP 全案（可選）",
    ],
    price: [{ label: "超級合夥人", value: "150,000 元起/年", note: "全案託管 + 品類共創優先對接，適用全部模塊，可定製；廣告費另計" }],
    faqs: [
      { q: "適合什麼樣的工廠？", a: "有產品、有產能、有出口或跨境經驗，希望系統性做品牌出海的工廠。我們先做市場調研評估產品與市場的契合度。" },
      { q: "廣告費包含在總價裏嗎？", a: "不包含。廣告費客户直充平台、自主管理賬户，我們只按投放預算收 20% 運營服務費，全程透明。" },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

/* ============================== 報價體系：兩個入口，一條路徑 ============================== */

/** 總綱 */
export const PRICING_PRINCIPLE = "認知同頻 × 爆品戰略 × AI 系統 × IP 信任 ＝ 細分品類冠軍";

/** 入口一 · 商務版（年訂閲制，套餐價＝所選模塊累加） */
export const PLANS = [
  {
    key: "build",
    name: "商務·建站版",
    price: "44,800",
    unit: "元/年",
    tagline: "把出海地基一次打牢",
    features: [
      "營銷型獨立站 5 語種定製",
      "站內 SEO·GEO + AI 知識庫",
      "站外 AI 內容 100 篇/年",
      "3 年部署維護 + CDN + SSL + 域名",
      "AI 營銷系統 + 外貿全流程 SOP 資料包",
    ],
  },
  {
    key: "promo",
    name: "商務·推廣版",
    price: "64,600",
    unit: "元/年",
    tagline: "建站 + 推廣一體化獲客",
    hot: true,
    features: [
      "營銷型獨立站 5 語種定製",
      "站內 SEO·GEO + AI 知識庫",
      "站外 AI 內容 100 篇/年",
      "全渠道社媒運營 + FB 投放運營",
      "數據分析 · 增長規劃",
    ],
  },
  {
    key: "flag",
    name: "商務·旗艦版",
    price: "94,400",
    unit: "元/年",
    tagline: "全鏈路增長配置",
    features: [
      "營銷型獨立站 5 語種定製",
      "站內 SEO·GEO + AI 知識庫",
      "站外 AI 內容 200 篇/年",
      "全渠道社媒運營 + FB 投放運營",
      "數據分析 · 增長規劃",
    ],
  },
];

/** 服務矩陣（商務版模塊一覽） */
export const PLAN_MATRIX = [
  "營銷型獨立站 5 語種定製",
  "站內 SEO·GEO + AI 知識庫",
  "站外 AI 內容 100·100·200 篇/年",
  "全渠道社媒運營",
  "FB 投放運營",
  "數據分析 · 增長規劃",
];

/** 入口二 · 共創 L 系列（品類冠軍路徑 · 項目制） */
export const L_SERIES = [
  {
    code: "L0",
    name: "品類機會診斷",
    price: "5 萬",
    duration: "20 天",
    desc: "交付《品類機會報告》，判斷品類紅利空間與爆品可行性",
  },
  {
    code: "L1",
    name: "爆品共創驗證",
    price: "30 萬",
    duration: "90 天",
    desc: "品銷一體孵化打穿單品，承諾過程指標",
  },
  {
    code: "L2",
    name: "品類冠軍陪跑",
    price: "100 萬",
    duration: "一年",
    desc: "四類過程指標 + 季度復盤，含超額獎勵",
  },
  {
    code: "L3",
    name: "品牌共創合夥",
    price: "不收服務費",
    duration: "項目制",
    desc: "利益綁定；案例署名與數據引用授權第一天寫進合同",
  },
];

/** 其他合作方式（按月 / 按項目計費） */
export const COOP_MODELS = [
  {
    name: "孵化陪跑",
    price: "3–5 萬",
    unit: "/月",
    tagline: "駐場式推進，按月陪跑",
    desc: "從選品、內容、投放到轉化，與企業團隊一起把增長動作跑起來，按月付費、節奏可調。",
  },
  {
    name: "企業內訓",
    price: "2 萬",
    unit: "/次（按項目）",
    tagline: "按項目定製課程，補齊團隊能力",
    desc: "圍繞出海獲客、爆品打造、AI 工具與轉化 SOP 定製課程，一次交付一套可複用的方法。",
  },
  {
    name: "聯合運營",
    price: "詳情諮詢",
    unit: "",
    tagline: "深度綁定，共建增長與收益",
    desc: "以聯合運營方式共建 B2B / B2C 業務，投入、分工與分賬按項目單獨設計。",
  },
];

/** 合作保障四條款 */
export const COOP_GUARANTEES = [
  "細分賽道排他（合作期 + 結束後 12 個月）",
  "客户數據與賬户歸工廠",
  "按月付費",
  "雙向退出機制",
];

export const GUARANTEE = {
  title: "效果保證（關鍵詞達標制）",
  note: "主站 + 子站累計關鍵詞排名達標即視為滿足達標不退費標準；GEO 結果不達標時用 SEO 結果補充。90 天達成初步效果（首批關鍵詞進入 Google 首頁），服務期自關鍵詞達標起算 365 天。套餐價 = 所選模塊累加。",
  headers: ["效果指標", "建站版", "推廣版", "旗艦版"],
  rows: [
    ["Google SEO 關鍵詞首頁排名", "≥30 個", "≥50 個", "≥100 個"],
    ["GEO 結果（AI Overview / AI Mode / Gemini / ChatGPT）", "≥30 個", "≥50 個", "≥100 個"],
    ["Google 收錄頁面", "≥1000 頁", "≥2000 頁", "≥3000 頁"],
    ["站外外鏈（同行業 / 權威平台 / 軟文）", "≥100 條", "≥200 條", "≥300 條"],
    ["達標關鍵詞口徑（主站 + 子站 SEO+GEO）", "100 個", "200 個", "300 個"],
  ],
};

/* ============================== 解決方案四大賽道 ============================== */

export type Solution = {
  slug: string;
  name: string;
  scope: string;
  icon: string;
  heroImage: string;
  intro: string;
  painPoints: string[];
  opportunity: string[];
  playbook: { title: string; desc: string }[];
  cases: { name: string; desc: string; data: string }[];
  services: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "home",
    name: "大家居",
    scope: "建材 / 家居 / 照明 / 機械",
    icon: "Warehouse",
    heroImage: img(
      "modern ceramic tile factory production line, large industrial manufacturing facility, export quality building materials"
    ),
    intro: "大家居是中國製造出海的壓艙石品類：建材、家居、照明、機械。產品線長、客單高、決策鏈長，最適合「短視頻種草 + 精準詢盤」的線索驅動打法。",
    painPoints: [
      "產品同質化嚴重，只會拼價格、拼展會，利潤越來越薄",
      "B 端經銷商和 C 端業主兩頭都需要，渠道拓展乏力",
      "有產能有工藝，但海外客户根本搜不到你",
      "詢盤質量差，業務團隊跟不動、轉化率低",
    ],
    opportunity: [
      "東方美學 + 科技正在成為大家居出海的差異化紅利：新中式門牆一體、靜音空間、高端定製在全球市場都有空位",
      "渠道紅利仍在：TikTok / YouTube 上的家居內容供給遠未飽和，短視頻種草成本仍處窪地",
      "在渠道紅利中找品類紅利：選對細分品類，用內容起勢的速度遠超傳統展會",
    ],
    playbook: [
      { title: "靠渠道起勢", desc: "短視頻種草 + 精準詢盤留資，B 端經銷商與 C 端業主雙線並行" },
      { title: "用爆品突圍", desc: "選定 1-2 個 SKU 級單品打穿，做出品類代表作再擴品" },
      { title: "品銷一體孵化", desc: "內容、投放、獨立站、轉化 SOP 一體化，品銷一體沉澱品牌" },
    ],
    cases: [
      { name: "音思客靜音倉", desc: "隔音艙產品，室內靜音場景應用，大家居爆品代表", data: "爆品孵化" },
      { name: "見山入户門", desc: "高端入户門，東方美學，短視頻種草 + 線索轉化，服務別墅與高端住宅業主", data: "B+C 雙線獲客" },
      { name: "中式門板", desc: "高端中式門板、中式家居五金，B 端經銷商 + C 端業主雙線獲客", data: "渠道拓展" },
      { name: "小 Lily 全案樣板", desc: "「主理人 IP + 輕實體」家居工作室開創者，ToC 做城市樣板 + ToB 做遊學招商", data: "IP 樣板" },
    ],
    services: ["hit-product", "website", "seo-geo", "social", "b2b-growth"],
  },
  {
    slug: "beauty",
    name: "大美麗",
    scope: "美妝 / 個護 / 包裝",
    icon: "Sparkles",
    heroImage: img(
      "beauty and personal care products manufacturing, cosmetics packaging line, premium skincare product photography, export quality"
    ),
    intro: "大美麗賽道（美妝、個護、包裝）是復購型品類，公域直播起量、公私域聯動動銷，短平快變現的同時沉澱品牌聲量。",
    painPoints: [
      "有優質產線但缺品牌，只能做 OEM / ODM 賺加工費",
      "海外合規與內容表達門檻高，好產品講不出好故事",
      "流量成本上漲，盲目投放燒不出轉化模型",
    ],
    opportunity: [
      "東方美學 + 科技：美容儀器、護膚品在全球市場對「東方成分 + 中國製造」的接受度持續走高",
      "渠道紅利：Facebook / TikTok 美妝內容仍是全球流量高地，多語種直播承接成本可控",
      "在渠道紅利中找品類紅利：細分功效品類仍有大量空位等待爆品",
    ],
    playbook: [
      { title: "靠渠道起勢", desc: "公域直播起量、公私域聯動，多語種直播承接海外流量" },
      { title: "用爆品突圍", desc: "用爆品邏輯驗證單品、打穿轉化，再放大流量" },
      { title: "私域復購沉澱", desc: "海外私域社羣復購，把一次成交變長期客户" },
    ],
    cases: [
      { name: "董太太品牌專場", desc: "進口美妝與營養大健康中高端市場，抖音本土直播", data: "3 小時 1200 萬+" },
      { name: "美容儀器 / 護膚品", desc: "東方美學 + 科技方向，美容個護產品出海", data: "品類孵化" },
      { name: "VANPEARL / AIDEVI", desc: "亮相基因膠囊新品發佈會圓桌、AIDEVI 528 粉色盛典", data: "行業背書" },
    ],
    services: ["hit-product", "live", "ads", "social", "ai-agent"],
  },
  {
    slug: "health",
    name: "大健康",
    scope: "保健品 / 器械",
    icon: "HeartPulse",
    heroImage: img(
      "health supplements and premium gift boxes, traditional chinese nourishment products, elegant packaging, cross-border e-commerce photography"
    ),
    intro: "大健康（保健品、器械）是信任驅動型品類：中醫養生 + 科技正在成為全球健康消費的新敍事，高端滋補禮盒尤其契合華人市場與禮品場景。",
    painPoints: [
      "保健品出海合規門檻高，宣傳口徑容易踩線",
      "信任建立週期長，冷啓動難",
      "高客單產品需要內容與場景的雙重教育",
    ],
    opportunity: [
      "中醫養生 + 科技：滋補健康品類在東南亞及全球華人市場有穩定剛需",
      "渠道紅利：Facebook 華人社羣 + TikTok 健康內容是當前最高效的觸達組合",
      "在渠道紅利中找品類紅利：高端滋補禮盒（花膠、燕窩類）禮品場景客單高、復購穩",
    ],
    playbook: [
      { title: "靠渠道起勢", desc: "海外精準流量投放 + 多語種直播承接 + 私域社羣復購" },
      { title: "用爆品突圍", desc: "禮盒單品打穿禮品場景，用爆品建立品類心智" },
      { title: "信任資產沉澱", desc: "品牌故事 + 合規內容體系，把信任變成復購" },
    ],
    cases: [
      { name: "香港啓泰", desc: "30 年曆史的立白集團 · 香港啓泰，高端滋補，大健康出海標杆", data: "大健康出海標杆" },
      { name: "花膠禮盒", desc: "滋補健康禮盒，海外華人市場禮品場景", data: "爆品孵化" },
      { name: "保健品 / 器械", desc: "合規講解 + 短視頻引流的進口與出海雙線打法", data: "雙線獲客" },
    ],
    services: ["hit-product", "live", "ads", "linkedin", "b2b-growth"],
  },
  {
    slug: "industry",
    name: "產業升級",
    scope: "科技出海 / 數字化全球化",
    icon: "Factory",
    heroImage: img(
      "export containers at port at dusk, global logistics and shipping, new energy vehicles cargo, modern international trade port"
    ),
    intro: "產業升級賽道面向新科技、新材料、新能源、智能製造企業：從新能源汽車到工業複合新材料，把「中國製造」的技術含量變成全球市場的話語權。",
    painPoints: [
      "技術領先但品牌失聲，海外客户只認低價供應商",
      "B2B 決策鏈長、客單高，傳統展會獲客效率低",
      "缺少離岸數字孵化的系統方法，出海靠碰運氣",
    ],
    opportunity: [
      "新能源汽車出海（創維、廣汽為代表）打開了中國高端製造的品牌窗口",
      "工業新材料（陶瓷 + 金屬複合結構件等）在海外市場供不應求",
      "在渠道紅利中找品類紅利：LinkedIn + Google 精準獲客仍是工業品藍海",
    ],
    playbook: [
      { title: "靠渠道起勢", desc: "LinkedIn 主動開發 + Google SEO/GEO，精準觸達海外採購決策人" },
      { title: "用爆品突圍", desc: "以技術型爆品建立品類標杆，擺脱低價競爭" },
      { title: "離岸數字孵化", desc: "不碰貨、不墊資、無貿易差價，聚焦 B 端長期價值" },
    ],
    cases: [
      { name: "興威陶瓷新材料", desc: "工業「陶瓷 + 金屬」複合結構件，製造企業出海，新材料代表", data: "新材料出海" },
      { name: "創維 / 廣汽新能源汽車出海", desc: "新科技賽道代表，中國汽車品牌全球化", data: "品牌出海" },
      { name: "智能製造裝備", desc: "高端製造裝備出海，海外渠道紮根與品牌升級", data: "渠道紮根" },
    ],
    services: ["website", "seo-geo", "linkedin", "ads", "partnership"],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}

/* ============================== 案例中心 ============================== */

export type CaseItem = {
  id: string;
  track: string[];
  industry: string;
  client: string;
  clientType: string;
  data: string;
  result: string;
  services: string[];
  image: string;
};

export const CASES: CaseItem[] = [
  {
    id: "xingwei",
    track: ["industry"],
    industry: "新材料",
    client: "興威陶瓷新材料",
    clientType: "B2B 製造企業",
    data: "陶瓷 + 金屬複合結構件",
    result: "工業新材料製造企業出海，離岸數字孵化代表案例",
    services: ["獨立站建站", "SEO/GEO", "LinkedIn 開發"],
    image: img("industrial ceramic metal composite parts manufacturing, high-tech material factory, precision engineering"),
  },
  {
    id: "yinsike",
    track: ["home"],
    industry: "大家居",
    client: "音思客靜音倉",
    clientType: "大家居爆品",
    data: "靜音場景爆品",
    result: "隔音艙產品室內靜音場景應用，爆品邏輯打穿細分品類",
    services: ["爆款共創", "內容運營", "獨立站建站"],
    image: img("modern acoustic soundproof pod booth in stylish office interior, premium furniture product, minimalist design"),
  },
  {
    id: "qitai",
    track: ["health"],
    industry: "大健康",
    client: "香港啓泰",
    clientType: "立白集團旗下 · 30 年曆史",
    data: "大健康出海標杆",
    result: "高端滋補品出海，國貨出海東南亞及全球市場代表",
    services: ["Facebook 投放", "跨境直播", "私域運營"],
    image: img("premium chinese nourishment gift boxes elegant packaging, luxury health supplement products, gold and red"),
  },
  {
    id: "ev",
    track: ["industry"],
    industry: "新科技",
    client: "創維 / 廣汽新能源汽車出海",
    clientType: "新能源汽車品牌",
    data: "品牌全球化",
    result: "新科技賽道代表，中國汽車品牌走向全球的標誌性戰役",
    services: ["海外營銷", "品牌出海"],
    image: img("new energy electric vehicles at international port ready for export, modern car shipping terminal, china EV"),
  },
  {
    id: "dongtaitai",
    track: ["beauty"],
    industry: "大美麗",
    client: "董太太品牌專場",
    clientType: "進口美妝 / 大健康",
    data: "3 小時 1200 萬+",
    result: "抖音本土直播 + 合規講解 + 短視頻引流的標杆專場",
    services: ["2C 直播", "抖音運營", "短視頻引流"],
    image: img("professional e-commerce live streaming studio with cosmetics products, host presenting beauty products on camera"),
  },
  {
    id: "menghuozao",
    track: ["home"],
    industry: "大家居",
    client: "家宴猛火灶",
    clientType: "品類冠軍",
    data: "實景實測帶貨",
    result: "家宴猛火灶品類冠軍，實景實測短視頻帶貨，中式社交廚房場景",
    services: ["爆款共創", "短視頻帶貨"],
    image: img("powerful chinese commercial wok burner stove, commercial kitchen equipment, flame cooking demonstration"),
  },
  {
    id: "jianshan",
    track: ["home"],
    industry: "大家居",
    client: "見山入户門",
    clientType: "高端入户門",
    data: "B+C 雙線獲客",
    result: "東方美學高端入户門，短視頻種草 + 線索轉化，服務別墅與高端住宅業主",
    services: ["內容運營", "私域轉化", "招商"],
    image: img("luxury chinese style entrance door, premium villa front door design, eastern aesthetics architecture"),
  },
  {
    id: "menban",
    track: ["home"],
    industry: "大家居",
    client: "中式門板",
    clientType: "B 端經銷商 + C 端業主",
    data: "雙線獲客",
    result: "高端中式門板與中式家居五金，經銷商招商與業主零售並行",
    services: ["短視頻種草", "精準詢盤"],
    image: img("chinese style wooden cabinet doors and hardware, traditional craftsmanship furniture details, premium interior"),
  },
  {
    id: "vanpearl",
    track: ["beauty"],
    industry: "大美麗",
    client: "VANPEARL / AIDEVI",
    clientType: "行業發佈會",
    data: "行業背書",
    result: "亮相 VANPEARL 基因膠囊新品發佈會圓桌、AIDEVI 528 粉色盛典",
    services: ["IP 打造", "直播帶貨"],
    image: img("beauty product launch event stage with elegant lighting, skincare brand presentation, professional conference"),
  },
];

/* ============================== 團隊與顧問 ============================== */

export const TEAM = [
  {
    name: "毒舌強（強哥）",
    role: "創始人 & 總顧問",
    bio: "華南理工碩士，17 年實戰營銷專家。以體系化方法論驅動品牌從 0 到 1、從 1 到 N，為合作企業提供商業模式設計與市場增長的深度指導與賦能。",
    tags: ["全渠道演進 · 全域增長", "全球視野 · 立足中國", "品牌增長方法論"],
    image: "/team/qiang.jpg",
  },
  {
    name: "搞跨境的可樂哥",
    role: "聯合創始人 & 技術負責人",
    bio: "華南理工碩士，前騰訊研發，10+ 年跨境與電商運營經驗。負責 AI 建站與全域獲客增長方案，專注「出海 + AI」。",
    tags: ["前騰訊研發", "AI 建站", "全域獲客增長"],
    image: "/team/cola.png",
  },
  {
    name: "十月",
    role: "聯合創始人 · 運營負責人",
    bio: "華南理工 MBA，20+ 年外貿經驗。擅長私域運營與獲客轉化，熟悉外貿全鏈路，是十餘家數億規模企業的外貿培訓老師。",
    tags: ["20+ 年外貿", "私域運營", "外貿培訓"],
    image: "/team/shiyue.jpg",
  },
  {
    name: "雪姐",
    role: "運營與內容合夥人",
    bio: "15 年互聯網數字營銷經驗，Facebook / Instagram / TikTok 多社媒平台運營專家，擅長廣告投放與內容運營。",
    tags: ["15 年數字營銷", "多社媒運營", "廣告投放"],
    image: "/team/xuejie.jpg",
  },
  {
    name: "Coco",
    role: "業務銷冠",
    bio: "一個降噪耳塞從幾百萬起步做到 1.5 億+/年銷售額，產品遍佈十幾個國家，細分品類 No.1——隱形冠軍 / 品類冠軍。",
    tags: ["細分品類 No.1", "1.5 億+/年銷售額", "產品遍佈十幾個國家"],
    image: "/team/coco.jpg",
  },
  {
    name: "一鳴",
    role: "出海顧問",
    bio: "ToB 工廠出海戰略規劃、海外市場渠道調研分析、出海項目落地陪跑，負責跨境業務資源對接整合與海外本土化運營策略輸出。",
    tags: ["ToB 工廠出海", "海外渠道調研", "本土化運營"],
    image: "/team/yiming.png",
  },
];

/** 行業方向負責人：一賽道一負責人 */
export const INDUSTRY_LEADS = [
  {
    industry: "大健康",
    name: "琦琦",
    role: "行業方向負責人",
    desc: "負責大健康賽道的項目落地、客户對接與運營協同。",
    image: "/team/qiqi.png",
  },
  {
    industry: "大美麗",
    name: "小鳳",
    role: "聯合創始人 · 行業方向負責人",
    desc: "30+ 孵化過億爆品、帶動 50 億+ 交易額，負責大美麗賽道的爆品孵化與 GMV 成交。",
    image: "/team/xiaofeng.jpg",
  },
  {
    industry: "大家居",
    name: "大兵",
    role: "行業方向負責人",
    desc: "負責大家居賽道的品類打法與項目落地，以短視頻種草驅動詢盤線索。",
    image: "/team/dabing.jpg",
  },
];

export const ADVISORS = [
  { name: "藍天", role: "運營顧問", duty: "全賽道直播短視頻體系搭建、運營流程標準化、落地執行督導、團隊運營能力賦能" },
  { name: "周平", role: "商業顧問", duty: "賽道商業模式梳理設計、盈利模型優化、市場趨勢研判、合作模式設計與商務談判" },
  { name: "畢畢", role: "投資顧問", duty: "項目投資風險評估管控、股權合作架構設計、投融資資源對接、估值研判與合規風控" },
];

/* ============================== 雙輪驅動模型 ============================== */

export const DUAL_WHEEL = {
  image: "/brand/dual-wheel-model.jpg",
  title: "雙輪驅動增長模型",
  subtitle: "品牌孵化引擎：IP 商業化 × 爆品共創",
  wheels: [
    {
      name: "IP 商業化",
      items: ["IP 達人 + 直播", "IP 聯盟 + 實體", "IP 內容 + 私域"],
    },
    {
      name: "爆品共創",
      items: ["品類紅利研判", "爆品機會挖掘", "品銷一體孵化"],
    },
  ],
  tracks: ["大家居", "大美麗", "大健康", "產業升級"],
};

/* ============================== 培訓賦能 ============================== */

export const TRAININGS = [
  {
    icon: "Coffee",
    name: "「出海 + AI」線下實戰沙龍",
    desc: "半天六段實戰沙龍，第 2 期 11 月 19 日（週四）13:00–17:30，¥1980/人，僅 20 席，只對 B 端決策人開放。含工具包 + 課後 1 次 1v1 診斷。",
    points: ["以遊學眼見為實", "報名流程：填表 → 審核 → 繳費鎖席", "閉門制 · 現場對着你的卡點拆"],
  },
  {
    icon: "Bot",
    name: "企業 AI 應用專項培訓",
    desc: "AI 批量短視頻腳本、口播文案、爆款選題；AI 剪輯、數字人、視覺素材提效；AI 關鍵詞佈局、詢盤篩選、私域精細化運營。以實戰指導實戰。",
    points: ["AI Agent 商業閉環訓練營（線下課）", "內部成熟 AI 工具流實戰拆解", "出海 + AI，AI 是工具不是噱頭"],
  },
  {
    icon: "UserRound",
    name: "「主理人 IP + 輕實體」培訓",
    desc: "依託小 Lily 標杆模型，複製輕資產 IP 主理人 + 家居輕實體商業模式：個人 IP 商業定位、人設搭建、賽道選擇；線上流量 + 線下小實體雙向閉環；短視頻 & 直播獲客、私域留存、高客單轉化全鏈路。",
    points: ["實戰人講實戰課", "標杆賬號 / 工作室 / 直播間遊學參訪", "輕資產 IP 商業模式複製"],
  },
];

/** 最新一期沙龍（第 2 期） */
export const SALON = {
  edition: "第 2 期",
  date: "11 月 19 日 週四",
  time: "13:00–17:30（12:30 簽到）",
  venue: "搭搭未來 · 美學館",
  seats: "僅 20 席",
  price: "1980",
  priceNote: "含工具包 + 課後 30 天內 1 次 1v1 診斷",
  audience: "只對 B 端企業老闆與決策人開放",
  speakers: [
    {
      no: "01",
      tag: "方法論",
      name: "小鳳",
      role: "搭搭未來聯合創始人",
      topic: "爆品方法論",
      metrics: ["30+ 孵化過億爆品", "50 億+ 帶動交易額"],
      desc: "爆品怎麼選、怎麼內容化、怎麼把試錯成本壓到最低，一套方法，雙向遷移。",
      quote: "爆品不是運氣，是一套可以複用的方法。",
    },
    {
      no: "02",
      tag: "實戰",
      name: "Coco · 周婧",
      role: "隱形冠軍 · 品類冠軍",
      topic: "細分品類冠軍的億級路徑",
      metrics: ["1.5 億+/年 銷售額", "十幾個國家 · 細分品類 No.1"],
      desc: "從幾百萬做到 1.5 億+：選品、專利、渠道與展會節奏，一個小耳塞怎麼守住品類第一。",
      quote: "把一個小東西，做成一個品類的第一名。",
    },
    {
      no: "03",
      tag: "AI 實操",
      name: "陳楨",
      role: "幾十條百萬播放案例 · 用 AI 量產內容",
      topic: "30 分鐘，一套 Codex 實操",
      metrics: ["100 萬+ 單條最高播放", "單人產能提升 6 倍"],
      desc: "一週一條變一天一條，現場把這條流水線跑一遍——從選題到成片再到自動發佈。",
      quote: "內容不是靈感，是一條能跑起來的流水線。",
    },
  ],
  agenda: [
    { time: "12:30", title: "簽到 · 領資料", who: "會務" },
    { time: "13:00", title: "空間參觀 1F→4F", who: "琦琦" },
    { time: "13:30", title: "開場 · 搭搭雙輪", who: "大兵" },
    { time: "13:40", title: "① 爆品方法論", who: "小鳳" },
    { time: "14:20", title: "② 億級之路", who: "Coco" },
    { time: "15:00", title: "茶歇 10′", who: "會務" },
    { time: "15:10", title: "③ Codex 做視頻", who: "陳楨" },
    { time: "15:40", title: "出海線上獲客 · 服務內容", who: "十月" },
    { time: "15:55", title: "自由交流 · 答疑", who: "三位主講" },
    { time: "16:25", title: "採訪 3 位目標客户", who: "會務" },
    { time: "16:40", title: "合影", who: "全體" },
    { time: "16:45", title: "一對一 · 私下交流（17:30 收）", who: "三位主講" },
  ],
  values: [
    { title: "閉門制", desc: "只對 B 端企業老闆與決策人開放，現場不做公開課。" },
    { title: "當場拆", desc: "每家帶 1 個真實卡點，講師現場對着你的卡點拆。" },
    { title: "帶走用", desc: "工具包 + 課後 30 天內一次 1v1 診斷，回去就能落地。" },
  ],
  claim: "不是來聽課，是帶着自己公司的卡點來被拆。",
};

export const SALON_PERKS = [
  "出海案例學習",
  "爆款公式作戰大圖",
  "銷冠業務轉化實戰全流程",
  "LinkedIn 主動開發基礎流程",
  "AI 主圖生成與詳情頁實操",
  "WorkBuddy 定製專屬外貿工作台",
];

/* ============================== FAQ（全站） ============================== */

export const FAQS = [
  {
    q: "你們和培訓公司、諮詢公司有什麼區別？",
    a: "不是培訓——有方法，落不了地；不是諮詢——有認知，沒落地方法。搭搭未來自己下場實戰，方法、認知、落地一體交付。我們自己就有 50+ 簽約 IP、3 億+ 年營業額在跑的業務，交付的是驗證過的打法。",
  },
  {
    q: "你們的口徑是「AI + 出海」嗎？",
    a: "不是。我們的口徑是「出海 + AI」——AI 只是工具。團隊先懂出海生意與渠道，再用 AI 放大效率，不是拿 AI 概念包裝出海。",
  },
  {
    q: "多久能看到效果？",
    a: "商務版標準：90 天達成初步效果（首批關鍵詞進入 Google 首頁），服務期自關鍵詞達標起算 365 天。投放類服務周度同步數據，月度復盤迭代。",
  },
  {
    q: "廣告費怎麼收取？",
    a: "廣告費直充平台，客户自主管理賬户，全程透明；我們只按充值金額收 20% 運營服務費。Facebook 廣告建議預算 5,000+/月，Google Ads 建議 10,000+/月。",
  },
  {
    q: "SEO/GEO 效果不達標怎麼辦？",
    a: "按關鍵詞達標制保證：主站 + 子站累計關鍵詞排名達標即視為滿足標準；GEO 結果不達標時用 SEO 結果補充，寫入交付約定。",
  },
  {
    q: "什麼樣的工廠適合合作？",
    a: "有產品、有產能、有出口或跨境經驗的製造工廠，所在品類有紅利空間、產品可打造為爆品。理想型是 2B 服務 + 2C 打爆款雙線並行；至少滿足其中一項即可進入服務轉化。",
  },
  {
    q: "合作方式有哪幾種？怎麼選？",
    a: "五種：超級合夥人全案、工廠出海孵化、企業內訓陪跑、聯合運營 B2B + B2C、爆款共創。按產品、目標市場與團隊能力選擇——先約一次診斷，再確定合作方式與推進範圍。",
  },
  {
    q: "合作流程是怎樣的？",
    a: "先診斷產品與目標市場，明確主推產品、目標市場與現有短板；再約定建設範圍、獲客渠道與驗收口徑；隨後按四階段推進：基建期 → 獲客期 → 轉化期 → 復盤期，階段復盤、持續迭代。",
  },
  {
    q: "培訓與線下沙龍適合誰？怎麼報名？",
    a: "面向 B 端企業老闆與決策人。「出海 + AI」線下實戰沙龍第 2 期於 11 月 19 日（週四）13:00–17:30 舉辦，¥1980/人，僅 20 席；報名流程：填表 → 審核 → 繳費鎖席，含工具包與課後 1 次 1v1 診斷。",
  },
  {
    q: "你們會碰貨、墊資或賺貿易差價嗎？",
    a: "不會。我們不碰貨、不墊資、無貿易差價，只收服務費與全案費用；廣告費直充平台，客户自主管理賬户，全程透明。",
  },
];

/* ============================== 資料包 ============================== */

export const RESOURCE_PACK = {
  title: "價值 199 元外貿資料包",
  subtitle: "源自「出海 + AI」線下沙龍參會權益，工廠出海實戰工具合集",
  items: SALON_PERKS,
};

/* ============================== 新聞佔位 ============================== */

export const NEWS = [
  {
    date: "2026-10",
    title: "「出海 + AI」線下實戰沙龍第 2 期招募中",
    desc: "11 月 19 日（週四）13:00–17:30，¥1980/人，僅 20 席，含工具包與課後 1 次 1v1 診斷。",
  },
  {
    date: "2026-09",
    title: "搭搭未來 × 雲店+ 聯合官網全新上線",
    desc: "B2B 工廠出海超級營銷合夥人陣地煥新，服務矩陣與效果保證全公開。",
  },
  {
    date: "2026-09",
    title: "興威陶瓷新材料出海案例：新材料的離岸數字孵化",
    desc: "工業「陶瓷 + 金屬」複合結構件如何通過 SEO/GEO + LinkedIn 精準獲客打開海外市場。",
  },
];
