/**
 * 培训赋能
 */

export const trainingCopy = {
  meta: {
    title: "出海 + AI 实战沙龙｜企业 AI 内训 · 主理人 IP 训练营 · 培训赋能",
    description:
      "搭搭未来赋能体系：「主理人 IP + 轻实体」培训、企业 AI 应用专项培训、「出海 + AI」线下实战沙龙（第 2 期 11 月 19 日 13:00–17:30，¥1980/人，仅 20 席，含 30 天 1 次 1v1 诊断）。以实战指导实战，以游学眼见为实，只讲正在跑的打法。",
  },
  hero: {
    title: "培训赋能",
    subtitle: "以实战指导实战 · 以游学眼见为实",
    description:
      "赋能体系与训练营：把搭搭未来在 50 亿+ 爆品实战中验证过的方法，沉淀给合作企业与合作伙伴。",
  },
  modules: {
    ai: {
      title: "AI 内容获客 & AI 提效专项培训",
      titleEn: "AI Content & Efficiency Training",
      subtitle: "AI 赋能内容生产、全域获客效率升级",
      items: [
        {
          no: "01",
          title: "核心定位",
          desc: "AI 赋能内容生产、全域获客效率升级，助力品类创新、美学力、场景力快速互联网放大。",
        },
        {
          no: "02",
          title: "培训方向",
          desc: "AI 批量短视频脚本生成、口播文案、爆款选题；AI 画面剪辑、AI 数字人、AI 视觉素材提效；AI 精准关键词布局、AI 询盘筛选、AI 私域精细化运营。",
        },
        {
          no: "03",
          title: "价值落地",
          desc: "大幅降低内容成本、提升日更产能、放大产品与 IP 全网获客量级。",
        },
        {
          no: "04",
          title: "授课逻辑",
          desc: "内部成熟 AI 工具流实战拆解、手把手复刻落地。",
        },
      ],
      photos: [
        {
          src: "/training/ai-training.jpg",
          alt: "AI Agent 商业闭环训练营线下课合影",
          caption: "AI Agent 商业闭环训练营 · 线下课",
        },
      ],
    },
    ip: {
      title: "IP 主理人 · 轻实体培训",
      titleEn: "IP Owner · Light-asset Training",
      subtitle: "线上线下结合商业模式 · 以实战指导实战",
      items: [
        {
          no: "01",
          title: "核心定位",
          desc: "依托小 Lily 标杆模型，复制轻资产 IP 主理人 + 家居轻实体商业模式。",
        },
        {
          no: "02",
          title: "培训方向",
          desc: "个人 IP 商业定位、人设搭建、赛道选择；线上流量 + 线下小实体双向闭环；短视频 & 直播获客、私域留存、高客单转化全链路。",
        },
        {
          no: "03",
          title: "授课逻辑",
          desc: "实战人讲实战课，内部标杆 IP、操盘手实战分享，输出可复制落地打法。",
        },
        {
          no: "04",
          title: "游学模块",
          desc: "标杆账号、标杆轻实体工作室、标杆直播间实地参访。",
        },
      ],
      photos: [
        {
          src: "/training/ip-training.jpg",
          alt: "IP 主理人 · 轻实体培训合影",
          caption: "IP 主理人 · 轻实体培训 · 合影",
        },
      ],
    },
  },
  salon: {
    latestTemplate: "最新一期 · {edition}",
    title: "「出海 + AI」线下实战沙龙",
    desc: "只讲自己正在跑的打法，不讲行业趋势 —— 三位主讲，20 席闭门",
    timeLabel: "时间",
    placeLabel: "地点",
    seatsLabel: "席位",
    feeLabel: "费用",
    feeTemplate: "¥{price}/人",
    venueNote: "签到后统一引导入场",
    images: [
      { src: "/salon/salon-2-invite.png", alt: "第 2 期「出海 + AI」实战沙龙诚邀" },
      { src: "/salon/salon-2-speakers.png", alt: "第 2 期主讲阵容" },
      { src: "/salon/salon-2-recap.png", alt: "往期沙龙现场" },
    ],
    speakersTitle: "三位主讲 · 只讲自己正在跑的打法",
    agendaTitle: "当天流程",
    perksTitle: "到场即得（价值 199 元外贸资料包 · 6 项）",
    signupCta: "报名 / 咨询沙龙席位",
    contactPrefix: "报名 / 咨询：",
    contactSuffix: "（{name} · {title}，微信同号）",
  },
};

export type TrainingCopy = typeof trainingCopy;
