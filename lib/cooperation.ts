/** Solutions 页内容：五种合作方式 + 五步漏斗 + 三块合作详解 */

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
    name: "超级合伙人",
    icon: "Handshake",
    fit: "已有稳定产品线，需要年度全案托管、把出海当长期业务做的企业",
    action: "按企业阶段配置站点、内容、投放、主动开发和业务陪跑，覆盖建站、推广和销售转化",
    deliverables: ["12 模块深度全案", "年度增长目标与排期", "月度复盘与迭代"],
    href: "/services/partnership",
    featured: true,
  },
  {
    code: "02",
    name: "工厂出海孵化",
    icon: "Factory",
    fit: "有产品和交付能力，正在搭建海外获客体系、想先跑一轮试点的工厂",
    action: "从一个目标市场启动试点，走完诊断、获客基础、渠道验证到复盘移交",
    deliverables: ["市场与产品诊断", "试点站点", "渠道测试记录", "下一阶段计划"],
    href: "#incubation",
  },
  {
    code: "03",
    name: "企业内训陪跑",
    icon: "UserRound",
    fit: "希望内部团队接手日常运营，而不是长期外包的企业",
    action: "用企业自己的产品、站点和销售流程做实训，定期点评、复盘并更新操作流程",
    deliverables: ["实操练习", "岗位分工", "SOP", "复盘模板"],
    href: "#training",
  },
  {
    code: "04",
    name: "联合运营 B2B + B2C",
    icon: "Share2",
    fit: "有制造力与交付能力，但缺海外品牌与渠道的工厂",
    action: "双方约定投入和分工，共同推进采购获客与零售，共享品牌与产品资料",
    deliverables: ["B2B 询盘与报价", "B2C 零售订单", "按业务线复盘"],
    href: "#joint",
  },
  {
    code: "05",
    name: "爆款共创",
    icon: "Flame",
    fit: "有开发爆款的能力或潜质，所在品类仍有红利空间",
    action: "调研目标市场与品类机会，和工厂一起筛选、验证重点产品，推进产品和品牌共创",
    deliverables: ["L0 品类机会诊断", "L1 爆品共创验证", "L2 品类冠军陪跑"],
    href: "/services/hit-product",
  },
];

export const BUSINESS_CARDS: BusinessCard[] = [
  {
    name: "爆款共创",
    icon: "Sparkles",
    mode: "调研目标市场与品类机会，和工厂一起筛选、验证重点产品。",
    value: "用市场反馈明确产品卖点、目标买家与后续投入方向。",
  },
  {
    name: "独立站建设",
    icon: "Globe",
    mode: "用 WordPress 搭建外贸询盘站，按零售需求选配 Shopify。",
    value: "让买家查看产品、产能和案例，提交采购询盘或下单。",
  },
  {
    name: "海外推广与转化",
    icon: "Radio",
    mode: "组合 SEO/GEO、Google Ads、Facebook 推广、海外社媒运营和 LinkedIn 主动开发。",
    value: "把渠道流量接入询盘、报价和销售跟进，并按实际反馈优化。",
  },
  {
    name: "企业 AI 与实战培训",
    icon: "Bot",
    mode: "结合企业流程部署 AI 智能体，并提供企业 AI 专项培训。",
    value: "支持团队把 AI 用于建站、内容运营、客户背调和询盘处理。",
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  { title: "市场与产品", points: ["品类机会诊断", "主推产品验证"] },
  { title: "独立站建设", points: ["品牌与产品展示", "表单或下单流程"] },
  { title: "内容与搜索", points: ["SEO / GEO", "内容与社媒运营"] },
  { title: "海外获客", points: ["Google Ads / Facebook 推广", "LinkedIn 主动开发"] },
  { title: "销售转化", points: ["询盘筛选与跟进", "报价与业务复盘"] },
];

/** 联合运营所用平台的正式 logo（public/platforms/） */
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
  subtitle: "B2B + B2C 双站联动",
  intro: "共享品牌与产品资料，分别管理 B2B 采购询盘和 B2C 零售订单。",
  split: [
    { party: "合作方", duty: "负责供货、交付及售后" },
    { party: "搭搭未来", duty: "负责约定范围内的建站、内容、推广和渠道运营" },
  ],
  problem: {
    title: "工厂有制造力，品牌与渠道仍需建设",
    body: "工厂擅长生产和履约，海外品牌运营与渠道建设需要专人推进。B2B 采购和 B2C 零售的客户、成交和售后流程各有不同。",
  },
  solutionTitle: "双站共建，产销一体化",
  build: [
    { title: "独立站建设", logos: ["wordpress", "shopify"], points: ["品牌官网", "产品展示与询盘表单"] },
    {
      title: "社媒运营",
      logos: ["facebook", "instagram", "linkedin", "youtube", "tiktok"],
      points: ["采购商触达", "视频与图文内容"],
    },
    { title: "广告优化", logos: ["googleads", "facebook"], points: ["搜索广告", "Facebook 推广"] },
    { title: "B2B 询盘转化", logos: ["linkedin"], points: ["采购商与经销商开发", "询盘跟进与报价"] },
    { title: "B2C 零售运营", logos: ["shopify"], points: ["商品页与在线下单", "订单履约与售后"] },
  ],
  lines: [
    {
      name: "B2B 独立站定制",
      desc: "以外贸独立站 WordPress 方案承接询盘，结合主动开发与广告触达采购商，跟进报价和订单。",
    },
    {
      name: "B2C 独立站运营",
      desc: "运营 Shopify 独立站，优化商品页、广告投放、订单履约与售后流程。",
    },
  ],
  cases: [
    {
      title: "佛山记绍门窗",
      subtitle: "Foshan Jishao Doors And Windows · 铝合金门窗制造",
      image: "/cases/foshan-jishao-doors.png",
      tags: ["装修行业", "铝合金门窗", "Facebook 广告代投"],
      detail: [
        { label: "投放地区", value: "中东 · 东南亚 · 欧洲 · 美国" },
        { label: "合作方式", value: "Facebook 广告代投，按线索成本持续优化投放" },
      ],
      highlight: { value: "10–20", unit: "元/条", note: "平均线索成本（客户实测口径）" },
    },
    {
      title: "广州俊粤 · 防噪音耳塞",
      subtitle: "大家居 · 细分品类冠军 · 亿级规模",
      image: "/cases/guangzhou-junyue-earplugs.png",
      tags: ["爆品共创", "品类冠军", "海外市场"],
      detail: [
        {
          label: "路径",
          value: "一个品类干 13 年，靠爆品逻辑打穿海外市场，从代工利润做到品类话语权",
        },
        { label: "增长", value: "2025 年单品年销量，对比 2013 年的 100 万副" },
      ],
      highlight: { value: "近 2 亿", unit: "副/年", note: "2025 年单品年销量" },
    },
  ],
  footnote:
    "账户归属、费用分担、净利润分配、结算周期与退出交接由双方在项目合同中约定。",
  cta: { label: "咨询联合运营", href: "/contact" },
};

export const INCUBATION_STEPS: IncubationStep[] = [
  {
    title: "市场与产品诊断",
    goal: "调研买家、竞品和采购场景，结合产能、交期和利润筛选首批主推产品",
    delivery: "目标市场、买家画像、产品卖点和优先级清单",
  },
  {
    title: "搭建获客基础",
    goal: "搭建或优化外贸独立站，完善产品页、案例、询盘表单与转化追踪",
    delivery: "试点页面、询盘流程和首批内容",
  },
  {
    title: "验证首轮渠道",
    goal: "按买家特点选择 SEO/GEO、Google Ads、Facebook 或 LinkedIn 主动开发",
    delivery: "渠道测试记录、询盘质量分析和销售反馈",
  },
  {
    title: "复盘与移交",
    goal: "复核渠道成本、询盘质量和供货反馈，决定调整市场、产品或投入",
    delivery: "复盘报告、操作清单和下一阶段计划",
  },
];

export const TRAINING_TRACK: TrainingTrack = {
  modes: [
    {
      name: "企业内训",
      desc: "围绕企业实际问题组织实操，课堂完成产品定位、页面、推广或跟进任务。",
    },
    {
      name: "项目陪跑",
      desc: "团队按分工执行真实任务，搭搭未来定期点评、复盘并更新操作流程。",
    },
  ],
  modules: [
    { title: "市场与产品", points: "买家画像、主推产品与卖点" },
    { title: "站点与 AI 内容", points: "产品页与案例、AI 内容审核、SEO/GEO" },
    { title: "海外推广", points: "Google Ads、Facebook、LinkedIn 主动开发" },
    { title: "询盘与销售", points: "线索判断和报价、客户跟进与记录" },
    { title: "团队与复盘", points: "岗位分工和权限、执行检查与迭代" },
  ],
  deliverables: ["实操成果", "岗位分工", "SOP", "检查清单", "复盘模板"],
};
