import { img } from "./images";

/* ============================== 品牌 ============================== */

export const BRAND = {
  name: "搭搭未来",
  en: "DADAFUTURE",
  slogan: "一起搭、搭未来",
  positioning: "B2B 工厂出海超级营销合伙人",
  promise: "不卖一次性流量，只做全链路增长",
  contactName: "十月",
  contactTitle: "项目负责",
  contactPhone: "137 2672 4687",
  wechatQr: "/brand/wechat-qr.png",
  site: "www.dadafuture.com",
  icp: "搭搭未来 × 云店+ 联合品牌",
};

/** 四大强调（全站差异化核心，顺序与口径严禁改动） */
export const FOUR_EMPHASES = [
  {
    key: "shizhan",
    title: "强调实战",
    subtitle: "方法、认知、落地一体交付",
    desc: "不是培训——有方法，落不了地；不是咨询——有认知，没落地方法。搭搭未来自己下场实战，把方法、认知、落地一体交付给客户。",
  },
  {
    key: "chuhai",
    title: "强调出海 + AI",
    subtitle: "先懂出海生意，再用 AI 放大效率",
    desc: "AI 只是工具。我们是「出海 + AI」——先懂出海生意与渠道，再用 AI 放大效率，不是拿 AI 概念包装出海。",
  },
  {
    key: "baopin",
    title: "强调爆品 + 流量",
    subtitle: "先打穿转化，再放大流量",
    desc: "是「爆品 + 流量」，不是「流量 + 产品」——先用爆品逻辑验证产品、打穿转化，再放大流量，而不是拿流量硬推产品。",
  },
  {
    key: "pinlei",
    title: "强调品类红利",
    subtitle: "靠渠道起势，用爆品突围",
    desc: "在渠道红利中找品类红利——抓品类红利，靠渠道起势，用爆品突围，把工厂的产品变成品类的冠军。",
  },
];

export const CORE_STATS = [
  { value: 50, suffix: "+", label: "孵化签约 IP" },
  { value: 3, suffix: "亿+", label: "年营业额" },
  { value: 50, suffix: "亿+", label: "爆品共创带动的业绩" },
  { value: 1, suffix: "亿+", label: "单品超级战绩" },
];

/** 四阶段全链路 */
export const FOUR_STAGES = [
  {
    stage: "基建期",
    name: "AI 建站",
    desc: "营销型独立站定制 + 站内 SEO/GEO 双优化，把地基打牢",
    services: ["hit-product", "website", "seo-geo"],
  },
  {
    stage: "获客期",
    name: "多平台精准投放",
    desc: "Facebook / Google / TikTok 等九大平台精细化投放，精准获客",
    services: ["ads", "social", "linkedin"],
  },
  {
    stage: "转化期",
    name: "AARRR 增长模型",
    desc: "询盘进线到成交复购的全链路转化 SOP，销冠团队打法",
    services: ["b2b-growth", "live"],
  },
  {
    stage: "复盘期",
    name: "数据迭代",
    desc: "周度数据同步 + 月度复盘，AI 提效持续优化",
    services: ["ai-agent", "partnership"],
  },
];

/* ============================== 九大服务 + 合伙人 ============================== */

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
    name: "爆款共创",
    short: "挖掘品类爆品机会，品销一体孵化，与工厂共担共赢",
    icon: "Flame",
    heroImage: img(
      "best-selling consumer product on global e-commerce platform, dramatic studio lighting, premium product photography, export quality goods"
    ),
    slogan: "先用爆品逻辑验证产品、打穿转化，再放大流量",
    intro: [
      "搭搭未来双轮驱动模型的一半：爆品共创。我们不卖一次性流量，而是与工厂一起挖掘品类爆品机会，品销一体孵化，把产品打成品类的代表。",
      "核心逻辑是「爆品 + 流量」：先用爆品逻辑验证产品、打穿转化，再放大流量；不是拿流量硬推产品。在渠道红利中找品类红利，靠渠道起势，用爆品突围。",
    ],
    highlights: [
      { title: "品类红利研判", desc: "在渠道红利中找品类红利，判断品类空间与窗口期" },
      { title: "爆品机会挖掘", desc: "SKU 级产品诊断，找到可打穿的单品" },
      { title: "品销一体孵化", desc: "从产品定义到内容、投放、转化的一体化孵化" },
      { title: "爆款公式作战大图", desc: "可复用的爆款方法论，沉淀为工厂自己的作战地图" },
      { title: "50 亿+ 爆品实战背书", desc: "爆品共创带动业绩 50 亿+，单品超级战绩 1 亿+" },
      { title: "IP 商业模式研究", desc: "拆解 IP 变现路径，IP 商业化 × 爆品共创双轮驱动" },
    ],
    deliverables: [
      "品类机会调研与爆品研判报告",
      "爆品打造全案（产品定位 / 内容 / 投放 / 转化）",
      "爆款公式作战大图",
      "月度数据复盘与迭代建议",
    ],
    featured: true,
    faqs: [
      { q: "什么产品适合做爆款共创？", a: "具备开发爆款的能力或潜质：所在品类有红利空间、产品可打造为爆品。我们会先做 SKU 级产品诊断再判断。" },
      { q: "共创和普通代运营有什么区别？", a: "共创是以爆品逻辑做品销一体孵化，我们先验证转化再打放量，和工厂是合伙人关系，不是一次性流量买卖。" },
    ],
  },
  {
    slug: "website",
    order: 2,
    name: "WordPress / Shopify 独立站建站",
    short: "AI + WordPress 营销型独立站，SEO/GEO 双优化的出海地基",
    icon: "Globe",
    heroImage: img(
      "modern laptop showing elegant business website design on desk in bright office, web development workspace, professional"
    ),
    slogan: "营销型独立站定制，3 年部署维护，官网即获客引擎",
    intro: [
      "独立站是工厂出海的数字地基。搭搭未来提供 AI + WordPress 营销型独立站定制，建站之初就按 SEO/GEO 双优化标准搭建，让官网本身成为询盘入口。",
      "WordPress 定制建站（8 个定制页面）、SiteGround / Hostinger 独立服务器、3 年部署维护 + CDN + SSL + 域名、Elementor Pro 正版 + Yundian+ 正版主题。",
    ],
    highlights: [
      { title: "响应式架构", desc: "移动端优先，Google AMP 移动站，网页速度优化" },
      { title: "109 种语言", desc: "多语言架构，赠送基本 5 种翻译语言" },
      { title: "询盘表单 + CRM 对接", desc: "实时聊天、EDM 邮件营销对接，线索自动进 CRM" },
      { title: "产品批量导入", desc: "支持 Alibaba 导入，产品 / 资料上传 ≤50 条" },
      { title: "关键词独立页面", desc: "关键词独立页面 + IP 屏蔽 + 数据自动优化" },
      { title: "AI 营销系统", desc: "产品导入 / AI 扩写 / Blog SEO 内容生成 / 社媒多渠道同步" },
    ],
    deliverables: [
      "8 个定制页面营销型独立站",
      "3 年服务器 / CDN / SSL / 域名 / 部署维护",
      "站内 SEO 全面优化 + GA / GSC 绑定",
      "社媒 Pixel 整合 + Paypal / Stripe 支付接入",
      "SEO 关键词分析表 + 外贸全流程 SOP 资料包",
    ],
    price: [
      { label: "商务·建站版", value: "44,800 元", note: "营销型独立站定制 + 站内 SEO/GEO 运营 + 站外内容营销 100 篇/年" },
      { label: "可选增配：Google Ads 投放运营", value: "+19,800 元/年", note: "原价 39,800 元/年，搭建定制官网优惠 2 万；不含广告费" },
    ],
    faqs: [
      { q: "建站用什么技术？", a: "AI + WordPress 定制建站，Elementor Pro 正版 + Yundian+ 正版主题，SiteGround / Hostinger 独立服务器，交付后 3 年部署维护。" },
      { q: "网站多语言支持到什么程度？", a: "系统支持 109 种语言，套餐赠送基本 5 种翻译语言，可按目标市场扩展。" },
    ],
  },
  {
    slug: "seo-geo",
    order: 3,
    name: "站内 + 站外 SEO/GEO 运营",
    short: "Google 首页关键词 + AI 搜索可见，效果保证写进合同",
    icon: "Search",
    heroImage: img(
      "search engine analytics dashboard on computer screen showing ranking growth charts, modern office, data visualization"
    ),
    slogan: "SEO 排名 + GEO 生成式引擎优化，双引擎效果保证",
    intro: [
      "出海获客正在从「搜得到」走向「AI 答得出」。搭搭未来同时做 Google SEO 与 GEO（生成式引擎优化），让客户在 Google 搜索和 Google AI Overview / AI Mode / Gemini / ChatGPT 里都能被找到。",
      "站内 EEAT 知识库优化 + 站外 100–200 篇/年 AI 内容 + 外链矩阵（同行业 DA10+ / 权威平台 DA30-70 / 软文页），效果按关键词达标制保证。",
    ],
    highlights: [
      { title: "站内 EEAT 优化", desc: "知识库化内容架构，建立行业权威信号" },
      { title: "站外内容矩阵", desc: "100–200 篇/年定制营销内容，AI 批量生产 + 人工把关" },
      { title: "三层外链矩阵", desc: "同行业 DA10+ / 权威平台 DA30-70 / 软文外链页" },
      { title: "GEO 专项优化", desc: "品牌结构化 Schema / FAQ 数据，进入 AI 答案" },
      { title: "效果保证", desc: "关键词达标制：不达标按约定补充，写进交付标准" },
      { title: "数据看板", desc: "排名 / 收录 / 外链 / 询盘全维度监测报告" },
    ],
    deliverables: [
      "SEO/GEO 关键词策略表",
      "站外内容 100–200 篇/年",
      "三层外链矩阵建设",
      "月度排名流量监测报告",
    ],
    price: [
      { label: "达标关键词口径", value: "100–300 个", note: "主站 + 子站 SEO + GEO 累计达标；90 天达成初步效果" },
      { label: "服务期", value: "365 天", note: "自关键词达标起算；GEO 结果不达标时用 SEO 结果补充" },
    ],
    faqs: [
      { q: "GEO 是什么？", a: "GEO（生成式引擎优化）让品牌内容进入 Google AI Overview / AI Mode、Gemini、ChatGPT 等 AI 答案，是搜索的下一代入口。" },
      { q: "多久能看到效果？", a: "90 天达成初步效果（首批关键词进入 Google 首页），服务期自关键词达标起算 365 天。" },
    ],
  },
  {
    slug: "ads",
    order: 4,
    name: "广告投放（九大平台）",
    short: "Meta / Google / TikTok 等九大平台精细化代投，收费透明",
    icon: "Target",
    heroImage: img(
      "digital advertising campaign management on multiple screens, social media ad dashboards, professional marketing team office"
    ),
    slogan: "九大平台精细化投放，广告费直充平台，账户自主管理",
    intro: [
      "覆盖 Meta / Facebook / Instagram / TikTok / Google / YouTube / LinkedIn / X / Pinterest 九大平台的精细化投放，从关键词调研、受众定向到竞品广告分析，全案执行。",
      "收费透明：广告费直充平台，客户自主管理账户，我们只按充值金额收 20% 运营服务费，每一分广告费去向可查。",
    ],
    highlights: [
      { title: "九大平台覆盖", desc: "Meta / Google / TikTok / LinkedIn 等一站式代投" },
      { title: "收费透明", desc: "广告费直充平台、客户自主管理账户，无隐藏差价" },
      { title: "精细化运营", desc: "关键词调研、受众定向、竞品广告分析、A/B 测试" },
      { title: "ROI 管理", desc: "预算分配与 ROI 目标管理，周度数据同步" },
      { title: "建议预算", desc: "FB 广告建议 5,000+/月，Google Ads 建议 10,000+/月" },
      { title: "定期复盘", desc: "周度数据同步 + 月度复盘，持续优化投放结构" },
    ],
    deliverables: [
      "投放策略与预算分配方案",
      "广告账户搭建与素材制作",
      "周度数据同步 + 月度复盘报告",
      "竞品广告监测与策略迭代",
    ],
    price: [
      { label: "运营服务费", value: "按充值 20%", note: "广告费客户直充平台、自主管理账户；FB 建议预算 5,000+/月，Google Ads 建议 10,000+/月" },
      { label: "Google Ads 投放运营（增配）", value: "19,800 元/年", note: "原价 39,800 元/年，搭建定制官网优惠 2 万；不含广告费" },
    ],
    faqs: [
      { q: "广告费怎么收？", a: "广告费直充平台，客户自主管理账户；我们按充值金额收 20% 运营服务费，全程透明。" },
      { q: "建议多少预算起投？", a: "Facebook 广告建议 5,000 元+/月，Google Ads 建议 10,000 元+/月，具体按品类与市场测算。" },
    ],
  },
  {
    slug: "social",
    order: 5,
    name: "内容运营与社媒矩阵",
    short: "抖音 / 视频号 IP 打造 + 海外社媒矩阵，爆款素材脚本提升转化",
    icon: "Share2",
    heroImage: img(
      "social media content creation studio, smartphone filming product video, ring light and camera equipment, professional livestream products"
    ),
    slogan: "内容种草 + 社媒矩阵，把流量沉淀为品牌资产",
    intro: [
      "内容为转化服务。搭搭未来提供抖音 / 视频号 IP 打造、爆款素材脚本生产，以及 TikTok / YouTube / LinkedIn / Pinterest / X 海外社媒矩阵的内容规划与日常运营。",
      "自然流为主、投放为辅：先把内容打爆验证素材，再用投放放大，避免拿钱硬砸流量。",
    ],
    highlights: [
      { title: "IP 打造", desc: "抖音 / 视频号 IP 定位、人设搭建、爆款脚本" },
      { title: "海外社媒矩阵", desc: "TikTok / YouTube / LinkedIn / Pinterest / X 账号定位与运营" },
      { title: "爆款素材", desc: "视频图文脚本，先验证素材再用投放放大" },
      { title: "互动管理", desc: "海外社媒内容规划与互动管理，提升账号权重" },
      { title: "传播数据分析", desc: "内容传播数据分析，指导选题与迭代" },
      { title: "私域联动", desc: "公域获客 + 私域转化完整链路" },
    ],
    deliverables: [
      "账号定位与内容策略",
      "月度内容日历与脚本库",
      "社媒矩阵日常运营",
      "内容传播数据月报",
    ],
    faqs: [
      { q: "国内和海外社媒都做吗？", a: "都做。国内以抖音 / 视频号为主，海外覆盖 TikTok / YouTube / LinkedIn / Pinterest / X，可单平台也可矩阵。" },
    ],
  },
  {
    slug: "linkedin",
    order: 6,
    name: "LinkedIn 主动开发",
    short: "账号安全体系 + 老板 IP + 精准客户搜索，跑通询盘为结项",
    icon: "Linkedin",
    heroImage: img(
      "professional business networking on laptop, linkedin style interface, B2B sales outreach, modern office setting"
    ),
    slogan: "跑通 1 个真实询盘为结项口径，授人以渔的主动开发",
    intro: [
      "LinkedIn 是 B2B 出海最高质量的主动开发渠道。我们提供账号安全体系、企业主页 + 老板 IP、精准客户搜索筛选、内容策略、高曝光互动与询盘首轮响应的全流程陪跑。",
      "结项口径清晰：跑通 1 个询盘为结项标准，约 3 个月陪跑，让业务团队真正掌握主动开发能力。",
    ],
    highlights: [
      { title: "账号安全体系", desc: "养号与防封策略，保障长期资产安全" },
      { title: "企业主页 + 老板 IP", desc: "公司页与个人 IP 双线建设，建立专业信任" },
      { title: "精准客户搜索", desc: "按行业 / 职位 / 地区精准搜索筛选目标客户" },
      { title: "内容策略", desc: "高曝光互动内容策略，让客户主动上门" },
      { title: "询盘首轮响应", desc: "询盘响应 SOP 与话术库，提高转化率" },
      { title: "以询盘为结项", desc: "跑通 1 个询盘为结项口径，结果导向" },
    ],
    deliverables: [
      "LinkedIn 账号安全与搭建方案",
      "目标客户搜索清单与开发话术",
      "内容策略与互动 SOP",
      "约 3 个月陪跑至跑通询盘",
    ],
    price: [{ label: "LinkedIn 赋能陪跑", value: "29,800 元", note: "约 3 个月，跑通 1 个询盘为结项口径" }],
    faqs: [
      { q: "结项标准是什么？", a: "跑通 1 个真实询盘即为结项。我们不止交付账号和方法，更陪跑到出结果。" },
    ],
  },
  {
    slug: "live",
    order: 7,
    name: "2C 直播服务",
    short: "海外 Facebook / TikTok + 国内抖音 / 视频号 / 小红书直播代运营",
    icon: "Radio",
    heroImage: img(
      "livestream studio with products on display, professional lighting and cameras, host presenting goods, e-commerce live streaming room"
    ),
    slogan: "董太太品牌专场 3 小时 1200 万+ 的直播实战班底",
    intro: [
      "直播是最直接的品销一体验证场。海外覆盖 Facebook、TikTok 直播，国内覆盖抖音、视频号、小红书，四条打法线：国货出海、进口国内、国货双平台、高客单国风直播。",
      "班底有实战战绩：董太太品牌专场 3 小时 1200 万+；亮相 VANPEARL 基因胶囊新品发布会圆桌、AIDEVI 528 粉色盛典。",
    ],
    highlights: [
      { title: "海外直播", desc: "Facebook 为主、TikTok 为辅，多语种直播承接海外流量" },
      { title: "国内直播", desc: "抖音 / 视频号双平台同步，小红书种草联动" },
      { title: "国货出海", desc: "海外精准流量投放 + 跨境直播转化 + 海外私域复购" },
      { title: "进口国内", desc: "抖音本土直播 + 进口产品合规讲解 + 短视频引流" },
      { title: "高客单直播", desc: "新中式高端非遗服饰、滋补品等高客单专场打法" },
      { title: "1200 万+ 专场战绩", desc: "董太太品牌专场 3 小时 1200 万+ 实战验证" },
    ],
    deliverables: [
      "直播间搭建与货盘策划",
      "直播脚本与话术库",
      "投放引流与私域承接方案",
      "直播数据复盘与迭代",
    ],
    faqs: [
      { q: "工厂适合做直播吗？", a: "直播是爆品逻辑最快的验证方式之一。先用直播间打穿转化模型，再把验证过的品放大到货架与渠道。" },
    ],
  },
  {
    slug: "b2b-growth",
    order: 8,
    name: "B2B 业务转化与管理",
    short: "询盘进线到成交复购的全链路 SOP + AI 背调 + 绩效激励体系",
    icon: "TrendingUp",
    heroImage: img(
      "B2B sales team meeting with charts and customer pipeline dashboard on screen, professional business consulting office"
    ),
    slogan: "线索分层 / SOP 手册 / 话术素材库 / 绩效激励 / AI 工具五件套交付",
    intro: [
      "流量不等于订单。搭搭未来把 17 年实战沉淀的 AARRR 全链路 B2B 转化 SOP 交付给工厂：询盘进线—首响—诊断—报价—培育—成交—复购，每一步都有标准动作。",
      "AI 赋能业务流程：AI 背调、线索打分、多语言首响；配套绩效激励体系与业务陪跑，交付五件套让团队自己转起来。",
    ],
    highlights: [
      { title: "全链路 SOP", desc: "询盘进线—首响—诊断—报价—培育—成交—复购标准动作" },
      { title: "AI 背调", desc: "客户背景调查、线索打分、多语言首响提效" },
      { title: "2B 私域全流程", desc: "私域承接与培育 SOP，把询盘变订单" },
      { title: "绩效激励体系", desc: "团队激励与考核方案，让 SOP 真正落地" },
      { title: "业务陪跑", desc: "顾问陪跑纠偏，直到团队形成肌肉记忆" },
      { title: "五件套交付", desc: "线索分层表 / SOP 手册 / 话术素材库 / 绩效激励方案 / AI 工具落地清单" },
    ],
    deliverables: [
      "线索分层表",
      "业务转化 SOP 手册",
      "话术素材库",
      "绩效激励方案",
      "AI 工具落地清单",
    ],
    price: [{ label: "销冠业务培训与管理", value: "29,800 元", note: "含 AI 赋能业务流程与业务陪跑，交付五件套" }],
    faqs: [
      { q: "SOP 交付后团队不会用怎么办？", a: "配套业务陪跑与绩效激励方案，顾问带跑到团队形成肌肉记忆，不是交完手册就结束。" },
    ],
  },
  {
    slug: "ai-agent",
    order: 9,
    name: "出海 + AI 智能体",
    short: "出海业务流 AI Agent 落地：建站、内容、询盘筛选、私域自动化",
    icon: "Bot",
    heroImage: img(
      "AI automation workflow in modern office, robot assistant concept with business dashboards, artificial intelligence technology interface"
    ),
    slogan: "AI 只是工具：先懂出海生意，再用 AI 放大效率",
    intro: [
      "我们的口径是「出海 + AI」——先懂出海生意与渠道，再用 AI 放大效率。AI Agent 不是噱头，是落到出海业务流里的生产力：AI 建站、AI 内容批量生产、AI 询盘筛选、私域自动化。",
      "配套 AI Agent 商业闭环训练营（线下课），用内部成熟 AI 工具流做实战拆解，让团队真正用起来。",
    ],
    highlights: [
      { title: "AI 建站", desc: "AI 营销系统：产品导入 / AI 扩写 / Blog SEO 内容生成" },
      { title: "AI 内容批量生产", desc: "短视频脚本、口播文案、爆款选题批量产出" },
      { title: "AI 询盘筛选", desc: "询盘质量打分与客户背调自动化" },
      { title: "私域自动化", desc: "私域精细化运营的 AI 提效工具流" },
      { title: "AI 关键词布局", desc: "AI 关键词布局、询盘筛选、私域精细化运营" },
      { title: "训练营实战", desc: "AI Agent 商业闭环训练营，成熟工具流拆解" },
    ],
    deliverables: [
      "出海业务流 AI Agent 落地方案",
      "AI 建站与内容生产系统",
      "询盘筛选与私域自动化工具流",
      "AI Agent 商业闭环训练营（线下课）",
    ],
    faqs: [
      { q: "和「AI + 出海」公司有什么区别？", a: "顺序不同、根不同。我们是「出海 + AI」：团队本身懂出海生意与渠道，AI 是用来放大效率的工具，不是用 AI 概念做包装。" },
    ],
  },
  {
    slug: "partnership",
    order: 10,
    name: "超级合伙人全案",
    short: "12 模块深度合作全案，覆盖基建—获客—转化—复盘全链路",
    icon: "Handshake",
    heroImage: img(
      "business partnership handshake in modern office, strategic cooperation meeting, export and global trade theme, professional team agreement"
    ),
    slogan: "150,000 元起/年：全案托管 + 品类共创优先对接，适用全部模块",
    intro: [
      "超级合伙人是搭搭未来最深度的合作模式：12 个模块覆盖「基建—获客—转化—复盘」全链路，全案托管 + 品类共创优先对接，与工厂形成年度增长共同体。",
      "150,000 元起/年，适用全部模块，可定制。包含内容/社媒、Facebook 投放、B2B 官网搭建与优化、站外 SEO/GEO、全渠道社媒运营、Google Ads、LinkedIn 赋能陪跑、销冠业务培训与管理等核心模块，增长/用户数据、发展规划、出海技术支持为增值服务。",
    ],
    highlights: [
      { title: "内容 / 社媒方向", desc: "行业选题、英文文案、视频图文脚本；全年 60 条（60s 以内）内容" },
      { title: "Facebook 投放", desc: "FB/Ins 投放执行、预算分配、ROI 管理；按投放预算收 20% 运营服务费（建议 5,000+/月）" },
      { title: "B2B 官网搭建与优化", desc: "官网优化、站内 SEO/GEO、排名流量监测、多终端适配，3 年服务期" },
      { title: "站外 SEO / GEO", desc: "高质量外链 + 定制营销内容 + 品牌结构化 Schema/FAQ；100 篇或 200 篇/年" },
      { title: "全渠道社媒运营", desc: "TikTok / YouTube / LinkedIn / Pinterest / X 账号定位与日常运营" },
      { title: "Google Ads 投放", desc: "关键词调研、广告文案素材、预算出价管理、竞品分析" },
      { title: "LinkedIn 赋能陪跑", desc: "账号安全体系、企业主页 + 老板 IP、精准客户搜索、询盘响应，约 3 个月" },
      { title: "销冠业务培训与管理", desc: "AI 赋能业务流程、2B 私域全流程 SOP、绩效激励、业务陪跑" },
      { title: "增值服务", desc: "增长/用户数据方向、发展规划/模式分析、出海技术支持——免费增值" },
      { title: "老板 IP 策划", desc: "人设定位、内容策划制作、全平台矩阵运营｜面议" },
    ],
    deliverables: [
      "全链路增长方案（12 模块）",
      "销冠业务五件套",
      "季度数据复盘与增长规划",
      "老板 IP 全案（可选）",
    ],
    price: [{ label: "超级合伙人", value: "150,000 元起/年", note: "全案托管 + 品类共创优先对接，适用全部模块，可定制；广告费另计" }],
    faqs: [
      { q: "适合什么样的工厂？", a: "有产品、有产能、有出口或跨境经验，希望系统性做品牌出海的工厂。我们先做市场调研评估产品与市场的契合度。" },
      { q: "广告费包含在总价里吗？", a: "不包含。广告费客户直充平台、自主管理账户，我们只按投放预算收 20% 运营服务费，全程透明。" },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

/* ============================== 报价体系：两个入口，一条路径 ============================== */

/** 总纲 */
export const PRICING_PRINCIPLE = "认知同频 × 爆品战略 × AI 系统 × IP 信任 ＝ 细分品类冠军";

/** 入口一 · 商务版（年订阅制，套餐价＝所选模块累加） */
export const PLANS = [
  {
    key: "build",
    name: "商务·建站版",
    price: "44,800",
    unit: "元/年",
    tagline: "把出海地基一次打牢",
    features: [
      "营销型独立站 5 语种定制",
      "站内 SEO·GEO + AI 知识库",
      "站外 AI 内容 100 篇/年",
      "3 年部署维护 + CDN + SSL + 域名",
      "AI 营销系统 + 外贸全流程 SOP 资料包",
    ],
  },
  {
    key: "promo",
    name: "商务·推广版",
    price: "64,600",
    unit: "元/年",
    tagline: "建站 + 推广一体化获客",
    hot: true,
    features: [
      "营销型独立站 5 语种定制",
      "站内 SEO·GEO + AI 知识库",
      "站外 AI 内容 100 篇/年",
      "全渠道社媒运营 + FB 投放运营",
      "数据分析 · 增长规划",
    ],
  },
  {
    key: "flag",
    name: "商务·旗舰版",
    price: "94,400",
    unit: "元/年",
    tagline: "全链路增长配置",
    features: [
      "营销型独立站 5 语种定制",
      "站内 SEO·GEO + AI 知识库",
      "站外 AI 内容 200 篇/年",
      "全渠道社媒运营 + FB 投放运营",
      "数据分析 · 增长规划",
    ],
  },
];

/** 服务矩阵（商务版模块一览） */
export const PLAN_MATRIX = [
  "营销型独立站 5 语种定制",
  "站内 SEO·GEO + AI 知识库",
  "站外 AI 内容 100·100·200 篇/年",
  "全渠道社媒运营",
  "FB 投放运营",
  "数据分析 · 增长规划",
];

/** 入口二 · 共创 L 系列（品类冠军路径 · 项目制） */
export const L_SERIES = [
  {
    code: "L0",
    name: "品类机会诊断",
    price: "5 万",
    duration: "20 天",
    desc: "交付《品类机会报告》，判断品类红利空间与爆品可行性",
  },
  {
    code: "L1",
    name: "爆品共创验证",
    price: "30 万",
    duration: "90 天",
    desc: "品销一体孵化打穿单品，承诺过程指标",
  },
  {
    code: "L2",
    name: "品类冠军陪跑",
    price: "100 万",
    duration: "一年",
    desc: "四类过程指标 + 季度复盘，含超额奖励",
  },
  {
    code: "L3",
    name: "品牌共创合伙",
    price: "不收服务费",
    duration: "项目制",
    desc: "利益绑定；案例署名与数据引用授权第一天写进合同",
  },
];

/** 其他合作方式（按月 / 按项目计费） */
export const COOP_MODELS = [
  {
    name: "孵化陪跑",
    price: "3–5 万",
    unit: "/月",
    tagline: "驻场式推进，按月陪跑",
    desc: "从选品、内容、投放到转化，与企业团队一起把增长动作跑起来，按月付费、节奏可调。",
  },
  {
    name: "企业内训",
    price: "2 万",
    unit: "/次（按项目）",
    tagline: "按项目定制课程，补齐团队能力",
    desc: "围绕出海获客、爆品打造、AI 工具与转化 SOP 定制课程，一次交付一套可复用的方法。",
  },
  {
    name: "联合运营",
    price: "详情咨询",
    unit: "",
    tagline: "深度绑定，共建增长与收益",
    desc: "以联合运营方式共建 B2B / B2C 业务，投入、分工与分账按项目单独设计。",
  },
];

/** 合作保障四条款 */
export const COOP_GUARANTEES = [
  "细分赛道排他（合作期 + 结束后 12 个月）",
  "客户数据与账户归工厂",
  "按月付费",
  "双向退出机制",
];

export const GUARANTEE = {
  title: "效果保证（关键词达标制）",
  note: "主站 + 子站累计关键词排名达标即视为满足达标不退费标准；GEO 结果不达标时用 SEO 结果补充。90 天达成初步效果（首批关键词进入 Google 首页），服务期自关键词达标起算 365 天。套餐价 = 所选模块累加。",
  headers: ["效果指标", "建站版", "推广版", "旗舰版"],
  rows: [
    ["Google SEO 关键词首页排名", "≥30 个", "≥50 个", "≥100 个"],
    ["GEO 结果（AI Overview / AI Mode / Gemini / ChatGPT）", "≥30 个", "≥50 个", "≥100 个"],
    ["Google 收录页面", "≥1000 页", "≥2000 页", "≥3000 页"],
    ["站外外链（同行业 / 权威平台 / 软文）", "≥100 条", "≥200 条", "≥300 条"],
    ["达标关键词口径（主站 + 子站 SEO+GEO）", "100 个", "200 个", "300 个"],
  ],
};

/* ============================== 解决方案四大赛道 ============================== */

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
    scope: "建材 / 家居 / 照明 / 机械",
    icon: "Warehouse",
    heroImage: img(
      "modern ceramic tile factory production line, large industrial manufacturing facility, export quality building materials"
    ),
    intro: "大家居是中国制造出海的压舱石品类：建材、家居、照明、机械。产品线长、客单高、决策链长，最适合「短视频种草 + 精准询盘」的线索驱动打法。",
    painPoints: [
      "产品同质化严重，只会拼价格、拼展会，利润越来越薄",
      "B 端经销商和 C 端业主两头都需要，渠道拓展乏力",
      "有产能有工艺，但海外客户根本搜不到你",
      "询盘质量差，业务团队跟不动、转化率低",
    ],
    opportunity: [
      "东方美学 + 科技正在成为大家居出海的差异化红利：新中式门墙一体、静音空间、高端定制在全球市场都有空位",
      "渠道红利仍在：TikTok / YouTube 上的家居内容供给远未饱和，短视频种草成本仍处洼地",
      "在渠道红利中找品类红利：选对细分品类，用内容起势的速度远超传统展会",
    ],
    playbook: [
      { title: "靠渠道起势", desc: "短视频种草 + 精准询盘留资，B 端经销商与 C 端业主双线并行" },
      { title: "用爆品突围", desc: "选定 1-2 个 SKU 级单品打穿，做出品类代表作再扩品" },
      { title: "品销一体孵化", desc: "内容、投放、独立站、转化 SOP 一体化，品销一体沉淀品牌" },
    ],
    cases: [
      { name: "音思客静音仓", desc: "隔音舱产品，室内静音场景应用，大家居爆品代表", data: "爆品孵化" },
      { name: "见山入户门", desc: "高端入户门，东方美学，短视频种草 + 线索转化，服务别墅与高端住宅业主", data: "B+C 双线获客" },
      { name: "中式门板", desc: "高端中式门板、中式家居五金，B 端经销商 + C 端业主双线获客", data: "渠道拓展" },
      { name: "小 Lily 全案样板", desc: "「主理人 IP + 轻实体」家居工作室开创者，ToC 做城市样板 + ToB 做游学招商", data: "IP 样板" },
    ],
    services: ["hit-product", "website", "seo-geo", "social", "b2b-growth"],
  },
  {
    slug: "beauty",
    name: "大美丽",
    scope: "美妆 / 个护 / 包装",
    icon: "Sparkles",
    heroImage: img(
      "beauty and personal care products manufacturing, cosmetics packaging line, premium skincare product photography, export quality"
    ),
    intro: "大美丽赛道（美妆、个护、包装）是复购型品类，公域直播起量、公私域联动动销，短平快变现的同时沉淀品牌声量。",
    painPoints: [
      "有优质产线但缺品牌，只能做 OEM / ODM 赚加工费",
      "海外合规与内容表达门槛高，好产品讲不出好故事",
      "流量成本上涨，盲目投放烧不出转化模型",
    ],
    opportunity: [
      "东方美学 + 科技：美容仪器、护肤品在全球市场对「东方成分 + 中国制造」的接受度持续走高",
      "渠道红利：Facebook / TikTok 美妆内容仍是全球流量高地，多语种直播承接成本可控",
      "在渠道红利中找品类红利：细分功效品类仍有大量空位等待爆品",
    ],
    playbook: [
      { title: "靠渠道起势", desc: "公域直播起量、公私域联动，多语种直播承接海外流量" },
      { title: "用爆品突围", desc: "用爆品逻辑验证单品、打穿转化，再放大流量" },
      { title: "私域复购沉淀", desc: "海外私域社群复购，把一次成交变长期客户" },
    ],
    cases: [
      { name: "董太太品牌专场", desc: "进口美妆与营养大健康中高端市场，抖音本土直播", data: "3 小时 1200 万+" },
      { name: "美容仪器 / 护肤品", desc: "东方美学 + 科技方向，美容个护产品出海", data: "品类孵化" },
      { name: "VANPEARL / AIDEVI", desc: "亮相基因胶囊新品发布会圆桌、AIDEVI 528 粉色盛典", data: "行业背书" },
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
    intro: "大健康（保健品、器械）是信任驱动型品类：中医养生 + 科技正在成为全球健康消费的新叙事，高端滋补礼盒尤其契合华人市场与礼品场景。",
    painPoints: [
      "保健品出海合规门槛高，宣传口径容易踩线",
      "信任建立周期长，冷启动难",
      "高客单产品需要内容与场景的双重教育",
    ],
    opportunity: [
      "中医养生 + 科技：滋补健康品类在东南亚及全球华人市场有稳定刚需",
      "渠道红利：Facebook 华人社群 + TikTok 健康内容是当前最高效的触达组合",
      "在渠道红利中找品类红利：高端滋补礼盒（花胶、燕窝类）礼品场景客单高、复购稳",
    ],
    playbook: [
      { title: "靠渠道起势", desc: "海外精准流量投放 + 多语种直播承接 + 私域社群复购" },
      { title: "用爆品突围", desc: "礼盒单品打穿礼品场景，用爆品建立品类心智" },
      { title: "信任资产沉淀", desc: "品牌故事 + 合规内容体系，把信任变成复购" },
    ],
    cases: [
      { name: "香港启泰", desc: "30 年历史的立白集团 · 香港启泰，高端滋补，大健康出海标杆", data: "大健康出海标杆" },
      { name: "花胶礼盒", desc: "滋补健康礼盒，海外华人市场礼品场景", data: "爆品孵化" },
      { name: "保健品 / 器械", desc: "合规讲解 + 短视频引流的进口与出海双线打法", data: "双线获客" },
    ],
    services: ["hit-product", "live", "ads", "linkedin", "b2b-growth"],
  },
  {
    slug: "industry",
    name: "产业升级",
    scope: "科技出海 / 数字化全球化",
    icon: "Factory",
    heroImage: img(
      "export containers at port at dusk, global logistics and shipping, new energy vehicles cargo, modern international trade port"
    ),
    intro: "产业升级赛道面向新科技、新材料、新能源、智能制造企业：从新能源汽车到工业复合新材料，把「中国制造」的技术含量变成全球市场的话语权。",
    painPoints: [
      "技术领先但品牌失声，海外客户只认低价供应商",
      "B2B 决策链长、客单高，传统展会获客效率低",
      "缺少离岸数字孵化的系统方法，出海靠碰运气",
    ],
    opportunity: [
      "新能源汽车出海（创维、广汽为代表）打开了中国高端制造的品牌窗口",
      "工业新材料（陶瓷 + 金属复合结构件等）在海外市场供不应求",
      "在渠道红利中找品类红利：LinkedIn + Google 精准获客仍是工业品蓝海",
    ],
    playbook: [
      { title: "靠渠道起势", desc: "LinkedIn 主动开发 + Google SEO/GEO，精准触达海外采购决策人" },
      { title: "用爆品突围", desc: "以技术型爆品建立品类标杆，摆脱低价竞争" },
      { title: "离岸数字孵化", desc: "不碰货、不垫资、无贸易差价，聚焦 B 端长期价值" },
    ],
    cases: [
      { name: "兴威陶瓷新材料", desc: "工业「陶瓷 + 金属」复合结构件，制造企业出海，新材料代表", data: "新材料出海" },
      { name: "创维 / 广汽新能源汽车出海", desc: "新科技赛道代表，中国汽车品牌全球化", data: "品牌出海" },
      { name: "智能制造装备", desc: "高端制造装备出海，海外渠道扎根与品牌升级", data: "渠道扎根" },
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
    client: "兴威陶瓷新材料",
    clientType: "B2B 制造企业",
    data: "陶瓷 + 金属复合结构件",
    result: "工业新材料制造企业出海，离岸数字孵化代表案例",
    services: ["独立站建站", "SEO/GEO", "LinkedIn 开发"],
    image: img("industrial ceramic metal composite parts manufacturing, high-tech material factory, precision engineering"),
  },
  {
    id: "yinsike",
    track: ["home"],
    industry: "大家居",
    client: "音思客静音仓",
    clientType: "大家居爆品",
    data: "静音场景爆品",
    result: "隔音舱产品室内静音场景应用，爆品逻辑打穿细分品类",
    services: ["爆款共创", "内容运营", "独立站建站"],
    image: img("modern acoustic soundproof pod booth in stylish office interior, premium furniture product, minimalist design"),
  },
  {
    id: "qitai",
    track: ["health"],
    industry: "大健康",
    client: "香港启泰",
    clientType: "立白集团旗下 · 30 年历史",
    data: "大健康出海标杆",
    result: "高端滋补品出海，国货出海东南亚及全球市场代表",
    services: ["Facebook 投放", "跨境直播", "私域运营"],
    image: img("premium chinese nourishment gift boxes elegant packaging, luxury health supplement products, gold and red"),
  },
  {
    id: "ev",
    track: ["industry"],
    industry: "新科技",
    client: "创维 / 广汽新能源汽车出海",
    clientType: "新能源汽车品牌",
    data: "品牌全球化",
    result: "新科技赛道代表，中国汽车品牌走向全球的标志性战役",
    services: ["海外营销", "品牌出海"],
    image: img("new energy electric vehicles at international port ready for export, modern car shipping terminal, china EV"),
  },
  {
    id: "dongtaitai",
    track: ["beauty"],
    industry: "大美丽",
    client: "董太太品牌专场",
    clientType: "进口美妆 / 大健康",
    data: "3 小时 1200 万+",
    result: "抖音本土直播 + 合规讲解 + 短视频引流的标杆专场",
    services: ["2C 直播", "抖音运营", "短视频引流"],
    image: img("professional e-commerce live streaming studio with cosmetics products, host presenting beauty products on camera"),
  },
  {
    id: "menghuozao",
    track: ["home"],
    industry: "大家居",
    client: "家宴猛火灶",
    clientType: "品类冠军",
    data: "实景实测带货",
    result: "家宴猛火灶品类冠军，实景实测短视频带货，中式社交厨房场景",
    services: ["爆款共创", "短视频带货"],
    image: img("powerful chinese commercial wok burner stove, commercial kitchen equipment, flame cooking demonstration"),
  },
  {
    id: "jianshan",
    track: ["home"],
    industry: "大家居",
    client: "见山入户门",
    clientType: "高端入户门",
    data: "B+C 双线获客",
    result: "东方美学高端入户门，短视频种草 + 线索转化，服务别墅与高端住宅业主",
    services: ["内容运营", "私域转化", "招商"],
    image: img("luxury chinese style entrance door, premium villa front door design, eastern aesthetics architecture"),
  },
  {
    id: "menban",
    track: ["home"],
    industry: "大家居",
    client: "中式门板",
    clientType: "B 端经销商 + C 端业主",
    data: "双线获客",
    result: "高端中式门板与中式家居五金，经销商招商与业主零售并行",
    services: ["短视频种草", "精准询盘"],
    image: img("chinese style wooden cabinet doors and hardware, traditional craftsmanship furniture details, premium interior"),
  },
  {
    id: "vanpearl",
    track: ["beauty"],
    industry: "大美丽",
    client: "VANPEARL / AIDEVI",
    clientType: "行业发布会",
    data: "行业背书",
    result: "亮相 VANPEARL 基因胶囊新品发布会圆桌、AIDEVI 528 粉色盛典",
    services: ["IP 打造", "直播带货"],
    image: img("beauty product launch event stage with elegant lighting, skincare brand presentation, professional conference"),
  },
];

/* ============================== 团队与顾问 ============================== */

export const TEAM = [
  {
    name: "毒舌强（强哥）",
    role: "创始人 & 总顾问",
    bio: "华南理工硕士，17 年实战营销专家。以体系化方法论驱动品牌从 0 到 1、从 1 到 N，为合作企业提供商业模式设计与市场增长的深度指导与赋能。",
    tags: ["全渠道演进 · 全域增长", "全球视野 · 立足中国", "品牌增长方法论"],
    image: "/team/qiang.jpg",
  },
  {
    name: "搞跨境的可乐哥",
    role: "联合创始人 & 技术负责人",
    bio: "华南理工硕士，前腾讯研发，10+ 年跨境与电商运营经验。负责 AI 建站与全域获客增长方案，专注「出海 + AI」。",
    tags: ["前腾讯研发", "AI 建站", "全域获客增长"],
    image: "/team/cola.png",
  },
  {
    name: "十月",
    role: "联合创始人 · 运营负责人",
    bio: "华南理工 MBA，20+ 年外贸经验。擅长私域运营与获客转化，熟悉外贸全链路，是十余家数亿规模企业的外贸培训老师。",
    tags: ["20+ 年外贸", "私域运营", "外贸培训"],
    image: "/team/shiyue.jpg",
  },
  {
    name: "雪姐",
    role: "运营与内容合伙人",
    bio: "15 年互联网数字营销经验，Facebook / Instagram / TikTok 多社媒平台运营专家，擅长广告投放与内容运营。",
    tags: ["15 年数字营销", "多社媒运营", "广告投放"],
    image: "/team/xuejie.jpg",
  },
  {
    name: "Coco",
    role: "业务销冠",
    bio: "一个降噪耳塞从几百万起步做到 1.5 亿+/年销售额，产品遍布十几个国家，细分品类 No.1——隐形冠军 / 品类冠军。",
    tags: ["细分品类 No.1", "1.5 亿+/年销售额", "产品遍布十几个国家"],
    image: "/team/coco.jpg",
  },
  {
    name: "一鸣",
    role: "出海顾问",
    bio: "ToB 工厂出海战略规划、海外市场渠道调研分析、出海项目落地陪跑，负责跨境业务资源对接整合与海外本土化运营策略输出。",
    tags: ["ToB 工厂出海", "海外渠道调研", "本土化运营"],
    image: "/team/yiming.png",
  },
];

/** 行业方向负责人：一赛道一负责人 */
export const INDUSTRY_LEADS = [
  {
    industry: "大健康",
    name: "琦琦",
    role: "行业方向负责人",
    desc: "负责大健康赛道的项目落地、客户对接与运营协同。",
    image: "/team/qiqi.png",
  },
  {
    industry: "大美丽",
    name: "小凤",
    role: "联合创始人 · 行业方向负责人",
    desc: "30+ 孵化过亿爆品、带动 50 亿+ 交易额，负责大美丽赛道的爆品孵化与 GMV 成交。",
    image: "/team/xiaofeng.jpg",
  },
  {
    industry: "大家居",
    name: "大兵",
    role: "行业方向负责人",
    desc: "负责大家居赛道的品类打法与项目落地，以短视频种草驱动询盘线索。",
    image: "/team/dabing.jpg",
  },
];

export const ADVISORS = [
  { name: "蓝天", role: "运营顾问", duty: "全赛道直播短视频体系搭建、运营流程标准化、落地执行督导、团队运营能力赋能" },
  { name: "周平", role: "商业顾问", duty: "赛道商业模式梳理设计、盈利模型优化、市场趋势研判、合作模式设计与商务谈判" },
  { name: "毕毕", role: "投资顾问", duty: "项目投资风险评估管控、股权合作架构设计、投融资资源对接、估值研判与合规风控" },
];

/* ============================== 双轮驱动模型 ============================== */

export const DUAL_WHEEL = {
  image: "/brand/dual-wheel-model.jpg",
  title: "双轮驱动增长模型",
  subtitle: "品牌孵化引擎：IP 商业化 × 爆品共创",
  wheels: [
    {
      name: "IP 商业化",
      items: ["IP 达人 + 直播", "IP 联盟 + 实体", "IP 内容 + 私域"],
    },
    {
      name: "爆品共创",
      items: ["品类红利研判", "爆品机会挖掘", "品销一体孵化"],
    },
  ],
  tracks: ["大家居", "大美丽", "大健康", "产业升级"],
};

/* ============================== 培训赋能 ============================== */

export const TRAININGS = [
  {
    icon: "Coffee",
    name: "「出海 + AI」线下实战沙龙",
    desc: "半天六段实战沙龙，第 2 期 11 月 19 日（周四）13:00–17:30，¥1980/人，仅 20 席，只对 B 端决策人开放。含工具包 + 课后 1 次 1v1 诊断。",
    points: ["以游学眼见为实", "报名流程：填表 → 审核 → 缴费锁席", "闭门制 · 现场对着你的卡点拆"],
  },
  {
    icon: "Bot",
    name: "企业 AI 应用专项培训",
    desc: "AI 批量短视频脚本、口播文案、爆款选题；AI 剪辑、数字人、视觉素材提效；AI 关键词布局、询盘筛选、私域精细化运营。以实战指导实战。",
    points: ["AI Agent 商业闭环训练营（线下课）", "内部成熟 AI 工具流实战拆解", "出海 + AI，AI 是工具不是噱头"],
  },
  {
    icon: "UserRound",
    name: "「主理人 IP + 轻实体」培训",
    desc: "依托小 Lily 标杆模型，复制轻资产 IP 主理人 + 家居轻实体商业模式：个人 IP 商业定位、人设搭建、赛道选择；线上流量 + 线下小实体双向闭环；短视频 & 直播获客、私域留存、高客单转化全链路。",
    points: ["实战人讲实战课", "标杆账号 / 工作室 / 直播间游学参访", "轻资产 IP 商业模式复制"],
  },
];

/** 最新一期沙龙（第 2 期） */
export const SALON = {
  edition: "第 2 期",
  date: "11 月 19 日 周四",
  time: "13:00–17:30（12:30 签到）",
  venue: "搭搭未来 · 美学馆",
  seats: "仅 20 席",
  price: "1980",
  priceNote: "含工具包 + 课后 30 天内 1 次 1v1 诊断",
  audience: "只对 B 端企业老板与决策人开放",
  speakers: [
    {
      no: "01",
      tag: "方法论",
      name: "小凤",
      role: "搭搭未来联合创始人",
      topic: "爆品方法论",
      metrics: ["30+ 孵化过亿爆品", "50 亿+ 带动交易额"],
      desc: "爆品怎么选、怎么内容化、怎么把试错成本压到最低，一套方法，双向迁移。",
      quote: "爆品不是运气，是一套可以复用的方法。",
    },
    {
      no: "02",
      tag: "实战",
      name: "Coco · 周婧",
      role: "隐形冠军 · 品类冠军",
      topic: "细分品类冠军的亿级路径",
      metrics: ["1.5 亿+/年 销售额", "十几个国家 · 细分品类 No.1"],
      desc: "从几百万做到 1.5 亿+：选品、专利、渠道与展会节奏，一个小耳塞怎么守住品类第一。",
      quote: "把一个小东西，做成一个品类的第一名。",
    },
    {
      no: "03",
      tag: "AI 实操",
      name: "陈桢",
      role: "几十条百万播放案例 · 用 AI 量产内容",
      topic: "30 分钟，一套 Codex 实操",
      metrics: ["100 万+ 单条最高播放", "单人产能提升 6 倍"],
      desc: "一周一条变一天一条，现场把这条流水线跑一遍——从选题到成片再到自动发布。",
      quote: "内容不是灵感，是一条能跑起来的流水线。",
    },
  ],
  agenda: [
    { time: "12:30", title: "签到 · 领资料", who: "会务" },
    { time: "13:00", title: "空间参观 1F→4F", who: "琦琦" },
    { time: "13:30", title: "开场 · 搭搭双轮", who: "大兵" },
    { time: "13:40", title: "① 爆品方法论", who: "小凤" },
    { time: "14:20", title: "② 亿级之路", who: "Coco" },
    { time: "15:00", title: "茶歇 10′", who: "会务" },
    { time: "15:10", title: "③ Codex 做视频", who: "陈桢" },
    { time: "15:40", title: "出海线上获客 · 服务内容", who: "十月" },
    { time: "15:55", title: "自由交流 · 答疑", who: "三位主讲" },
    { time: "16:25", title: "采访 3 位目标客户", who: "会务" },
    { time: "16:40", title: "合影", who: "全体" },
    { time: "16:45", title: "一对一 · 私下交流（17:30 收）", who: "三位主讲" },
  ],
  values: [
    { title: "闭门制", desc: "只对 B 端企业老板与决策人开放，现场不做公开课。" },
    { title: "当场拆", desc: "每家带 1 个真实卡点，讲师现场对着你的卡点拆。" },
    { title: "带走用", desc: "工具包 + 课后 30 天内一次 1v1 诊断，回去就能落地。" },
  ],
  claim: "不是来听课，是带着自己公司的卡点来被拆。",
};

export const SALON_PERKS = [
  "出海案例学习",
  "爆款公式作战大图",
  "销冠业务转化实战全流程",
  "LinkedIn 主动开发基础流程",
  "AI 主图生成与详情页实操",
  "WorkBuddy 定制专属外贸工作台",
];

/* ============================== FAQ（全站） ============================== */

export const FAQS = [
  {
    q: "你们和培训公司、咨询公司有什么区别？",
    a: "不是培训——有方法，落不了地；不是咨询——有认知，没落地方法。搭搭未来自己下场实战，方法、认知、落地一体交付。我们自己就有 50+ 签约 IP、3 亿+ 年营业额在跑的业务，交付的是验证过的打法。",
  },
  {
    q: "你们的口径是「AI + 出海」吗？",
    a: "不是。我们的口径是「出海 + AI」——AI 只是工具。团队先懂出海生意与渠道，再用 AI 放大效率，不是拿 AI 概念包装出海。",
  },
  {
    q: "多久能看到效果？",
    a: "商务版标准：90 天达成初步效果（首批关键词进入 Google 首页），服务期自关键词达标起算 365 天。投放类服务周度同步数据，月度复盘迭代。",
  },
  {
    q: "广告费怎么收取？",
    a: "广告费直充平台，客户自主管理账户，全程透明；我们只按充值金额收 20% 运营服务费。Facebook 广告建议预算 5,000+/月，Google Ads 建议 10,000+/月。",
  },
  {
    q: "SEO/GEO 效果不达标怎么办？",
    a: "按关键词达标制保证：主站 + 子站累计关键词排名达标即视为满足标准；GEO 结果不达标时用 SEO 结果补充，写入交付约定。",
  },
  {
    q: "什么样的工厂适合合作？",
    a: "有产品、有产能、有出口或跨境经验的制造工厂，所在品类有红利空间、产品可打造为爆品。理想型是 2B 服务 + 2C 打爆款双线并行；至少满足其中一项即可进入服务转化。",
  },
  {
    q: "合作方式有哪几种？怎么选？",
    a: "五种：超级合伙人全案、工厂出海孵化、企业内训陪跑、联合运营 B2B + B2C、爆款共创。按产品、目标市场与团队能力选择——先约一次诊断，再确定合作方式与推进范围。",
  },
  {
    q: "合作流程是怎样的？",
    a: "先诊断产品与目标市场，明确主推产品、目标市场与现有短板；再约定建设范围、获客渠道与验收口径；随后按四阶段推进：基建期 → 获客期 → 转化期 → 复盘期，阶段复盘、持续迭代。",
  },
  {
    q: "培训与线下沙龙适合谁？怎么报名？",
    a: "面向 B 端企业老板与决策人。「出海 + AI」线下实战沙龙第 2 期于 11 月 19 日（周四）13:00–17:30 举办，¥1980/人，仅 20 席；报名流程：填表 → 审核 → 缴费锁席，含工具包与课后 1 次 1v1 诊断。",
  },
  {
    q: "你们会碰货、垫资或赚贸易差价吗？",
    a: "不会。我们不碰货、不垫资、无贸易差价，只收服务费与全案费用；广告费直充平台，客户自主管理账户，全程透明。",
  },
];

/* ============================== 资料包 ============================== */

export const RESOURCE_PACK = {
  title: "价值 199 元外贸资料包",
  subtitle: "源自「出海 + AI」线下沙龙参会权益，工厂出海实战工具合集",
  items: SALON_PERKS,
};

/* ============================== 新闻占位 ============================== */

export const NEWS = [
  {
    date: "2026-10",
    title: "「出海 + AI」线下实战沙龙第 2 期招募中",
    desc: "11 月 19 日（周四）13:00–17:30，¥1980/人，仅 20 席，含工具包与课后 1 次 1v1 诊断。",
  },
  {
    date: "2026-09",
    title: "搭搭未来 × 云店+ 联合官网全新上线",
    desc: "B2B 工厂出海超级营销合伙人阵地焕新，服务矩阵与效果保证全公开。",
  },
  {
    date: "2026-09",
    title: "兴威陶瓷新材料出海案例：新材料的离岸数字孵化",
    desc: "工业「陶瓷 + 金属」复合结构件如何通过 SEO/GEO + LinkedIn 精准获客打开海外市场。",
  },
];
