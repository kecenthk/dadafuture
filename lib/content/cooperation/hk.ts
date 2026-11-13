/* 本文件由 scripts/gen-hk.mjs 自动生成，请勿手改。 */

/** Solutions 頁內容：五種合作方式 + 五步漏斗 + 三塊合作詳解 */

export type CooperationModel = {
  code: string;
  name: string;
  icon: string;
  fit: string;
  action: string;
  deliverables: string[];
  href: string;
  featured?: boolean;
};

export type BusinessCard = {
  name: string;
  icon: string;
  mode: string;
  value: string;
};

export type FunnelStep = { title: string; points: string[] };

export type JointCase = {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  detail: { label: string; value: string }[];
  highlight: { value: string; unit: string; note: string };
};

export type JointOperation = {
  subtitle: string;
  intro: string;
  split: { party: string; duty: string }[];
  problem: { title: string; body: string };
  solutionTitle: string;
  build: { title: string; logos: string[]; points: string[] }[];
  lines: { name: string; desc: string }[];
  cases: JointCase[];
  footnote: string;
  cta: { label: string; href: string };
};

export type IncubationStep = { title: string; goal: string; delivery: string };

export type TrainingTrack = {
  modes: { name: string; desc: string }[];
  modules: { title: string; points: string }[];
  deliverables: string[];
};

export const COOPERATION_MODELS: CooperationModel[] = [
  {
    code: "01",
    name: "超級合夥人",
    icon: "Handshake",
    fit: "已有穩定產品線，需要年度全案託管、把出海當長期業務做的企業",
    action: "按企業階段配置站點、內容、投放、主動開發和業務陪跑，覆蓋建站、推廣和銷售轉化",
    deliverables: ["12 模塊深度全案", "年度增長目標與排期", "月度復盤與迭代"],
    href: "/services/partnership",
    featured: true,
  },
  {
    code: "02",
    name: "工廠出海孵化",
    icon: "Factory",
    fit: "有產品和交付能力，正在搭建海外獲客體系、想先跑一輪試點的工廠",
    action: "從一個目標市場啓動試點，走完診斷、獲客基礎、渠道驗證到復盤移交",
    deliverables: ["市場與產品診斷", "試點站點", "渠道測試記錄", "下一階段計劃"],
    href: "#incubation",
  },
  {
    code: "03",
    name: "企業內訓陪跑",
    icon: "UserRound",
    fit: "希望內部團隊接手日常運營，而不是長期外包的企業",
    action: "用企業自己的產品、站點和銷售流程做實訓，定期點評、復盤並更新操作流程",
    deliverables: ["實操練習", "崗位分工", "SOP", "復盤模板"],
    href: "#training",
  },
  {
    code: "04",
    name: "聯合運營 B2B + B2C",
    icon: "Share2",
    fit: "有製造力與交付能力，但缺海外品牌與渠道的工廠",
    action: "雙方約定投入和分工，共同推進採購獲客與零售，共享品牌與產品資料",
    deliverables: ["B2B 詢盤與報價", "B2C 零售訂單", "按業務線復盤"],
    href: "#joint",
  },
  {
    code: "05",
    name: "爆款共創",
    icon: "Flame",
    fit: "有開發爆款的能力或潛質，所在品類仍有紅利空間",
    action: "調研目標市場與品類機會，和工廠一起篩選、驗證重點產品，推進產品和品牌共創",
    deliverables: ["L0 品類機會診斷", "L1 爆品共創驗證", "L2 品類冠軍陪跑"],
    href: "/services/hit-product",
  },
];

export const BUSINESS_CARDS: BusinessCard[] = [
  {
    name: "爆款共創",
    icon: "Sparkles",
    mode: "調研目標市場與品類機會，和工廠一起篩選、驗證重點產品。",
    value: "用市場反饋明確產品賣點、目標買家與後續投入方向。",
  },
  {
    name: "獨立站建設",
    icon: "Globe",
    mode: "用 WordPress 搭建外貿詢盤站，按零售需求選配 Shopify。",
    value: "讓買家查看產品、產能和案例，提交採購詢盤或下單。",
  },
  {
    name: "海外推廣與轉化",
    icon: "Radio",
    mode: "組合 SEO/GEO、Google Ads、Facebook 推廣、海外社媒運營和 LinkedIn 主動開發。",
    value: "把渠道流量接入詢盤、報價和銷售跟進，並按實際反饋優化。",
  },
  {
    name: "企業 AI 與實戰培訓",
    icon: "Bot",
    mode: "結合企業流程部署 AI 智能體，並提供企業 AI 專項培訓。",
    value: "支持團隊把 AI 用於建站、內容運營、客户背調和詢盤處理。",
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  { title: "市場與產品", points: ["品類機會診斷", "主推產品驗證"] },
  { title: "獨立站建設", points: ["品牌與產品展示", "表單或下單流程"] },
  { title: "內容與搜索", points: ["SEO / GEO", "內容與社媒運營"] },
  { title: "海外獲客", points: ["Google Ads / Facebook 推廣", "LinkedIn 主動開發"] },
  { title: "銷售轉化", points: ["詢盤篩選與跟進", "報價與業務復盤"] },
];

/** 聯合運營所用平台的正式 logo（public/platforms/） */
export const PLATFORM_LOGOS: Record<string, { name: string; src: string }> = {
  wordpress: { name: "WordPress", src: "/platforms/wordpress.svg" },
  shopify: { name: "Shopify", src: "/platforms/shopify.svg" },
  facebook: { name: "Facebook", src: "/platforms/facebook.svg" },
  instagram: { name: "Instagram", src: "/platforms/instagram.svg" },
  linkedin: { name: "LinkedIn", src: "/platforms/linkedin.svg" },
  googleads: { name: "Google Ads", src: "/platforms/googleads.svg" },
  youtube: { name: "YouTube", src: "/platforms/youtube.svg" },
  tiktok: { name: "TikTok", src: "/platforms/tiktok.svg" },
};

export const JOINT_OPERATION: JointOperation = {
  subtitle: "B2B + B2C 雙站聯動",
  intro: "共享品牌與產品資料，分別管理 B2B 採購詢盤和 B2C 零售訂單。",
  split: [
    { party: "合作方", duty: "負責供貨、交付及售後" },
    { party: "搭搭未來", duty: "負責約定範圍內的建站、內容、推廣和渠道運營" },
  ],
  problem: {
    title: "工廠有製造力，品牌與渠道仍需建設",
    body: "工廠擅長生產和履約，海外品牌運營與渠道建設需要專人推進。B2B 採購和 B2C 零售的客户、成交和售後流程各有不同。",
  },
  solutionTitle: "雙站共建，產銷一體化",
  build: [
    { title: "獨立站建設", logos: ["wordpress", "shopify"], points: ["品牌官網", "產品展示與詢盤表單"] },
    {
      title: "社媒運營",
      logos: ["facebook", "instagram", "linkedin", "youtube", "tiktok"],
      points: ["採購商觸達", "視頻與圖文內容"],
    },
    { title: "廣告優化", logos: ["googleads", "facebook"], points: ["搜索廣告", "Facebook 推廣"] },
    { title: "B2B 詢盤轉化", logos: ["linkedin"], points: ["採購商與經銷商開發", "詢盤跟進與報價"] },
    { title: "B2C 零售運營", logos: ["shopify"], points: ["商品頁與在線下單", "訂單履約與售後"] },
  ],
  lines: [
    {
      name: "B2B 獨立站定製",
      desc: "以外貿獨立站 WordPress 方案承接詢盤，結合主動開發與廣告觸達採購商，跟進報價和訂單。",
    },
    {
      name: "B2C 獨立站運營",
      desc: "運營 Shopify 獨立站，優化商品頁、廣告投放、訂單履約與售後流程。",
    },
  ],
  cases: [
    {
      title: "佛山記紹門窗",
      subtitle: "Foshan Jishao Doors And Windows · 鋁合金門窗製造",
      image: "/cases/foshan-jishao-doors.png",
      tags: ["裝修行業", "鋁合金門窗", "Facebook 廣告代投"],
      detail: [
        { label: "投放地區", value: "中東 · 東南亞 · 歐洲 · 美國" },
        { label: "合作方式", value: "Facebook 廣告代投，按線索成本持續優化投放" },
      ],
      highlight: { value: "10–20", unit: "元/條", note: "平均線索成本（客户實測口徑）" },
    },
    {
      title: "廣州俊粵 · 防噪音耳塞",
      subtitle: "大家居 · 細分品類冠軍 · 億級規模",
      image: "/cases/guangzhou-junyue-earplugs.png",
      tags: ["爆品共創", "品類冠軍", "海外市場"],
      detail: [
        {
          label: "路徑",
          value: "一個品類幹 13 年，靠爆品邏輯打穿海外市場，從代工利潤做到品類話語權",
        },
        { label: "增長", value: "2025 年單品年銷量，對比 2013 年的 100 萬副" },
      ],
      highlight: { value: "近 2 億", unit: "副/年", note: "2025 年單品年銷量" },
    },
  ],
  footnote:
    "賬户歸屬、費用分擔、淨利潤分配、結算週期與退出交接由雙方在項目合同中約定。",
  cta: { label: "諮詢聯合運營", href: "/contact" },
};

export const INCUBATION_STEPS: IncubationStep[] = [
  {
    title: "市場與產品診斷",
    goal: "調研買家、競品和採購場景，結合產能、交期和利潤篩選首批主推產品",
    delivery: "目標市場、買家畫像、產品賣點和優先級清單",
  },
  {
    title: "搭建獲客基礎",
    goal: "搭建或優化外貿獨立站，完善產品頁、案例、詢盤表單與轉化追蹤",
    delivery: "試點頁面、詢盤流程和首批內容",
  },
  {
    title: "驗證首輪渠道",
    goal: "按買家特點選擇 SEO/GEO、Google Ads、Facebook 或 LinkedIn 主動開發",
    delivery: "渠道測試記錄、詢盤質量分析和銷售反饋",
  },
  {
    title: "復盤與移交",
    goal: "複核渠道成本、詢盤質量和供貨反饋，決定調整市場、產品或投入",
    delivery: "復盤報告、操作清單和下一階段計劃",
  },
];

export const TRAINING_TRACK: TrainingTrack = {
  modes: [
    {
      name: "企業內訓",
      desc: "圍繞企業實際問題組織實操，課堂完成產品定位、頁面、推廣或跟進任務。",
    },
    {
      name: "項目陪跑",
      desc: "團隊按分工執行真實任務，搭搭未來定期點評、復盤並更新操作流程。",
    },
  ],
  modules: [
    { title: "市場與產品", points: "買家畫像、主推產品與賣點" },
    { title: "站點與 AI 內容", points: "產品頁與案例、AI 內容審核、SEO/GEO" },
    { title: "海外推廣", points: "Google Ads、Facebook、LinkedIn 主動開發" },
    { title: "詢盤與銷售", points: "線索判斷和報價、客户跟進與記錄" },
    { title: "團隊與復盤", points: "崗位分工和權限、執行檢查與迭代" },
  ],
  deliverables: ["實操成果", "崗位分工", "SOP", "檢查清單", "復盤模板"],
};
