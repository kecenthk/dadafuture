/** 市场调研栏目：报告元数据（唯一数据源） */

export type ResearchKind = "市场进入" | "增长方案" | "渠道研究" | "品类调研" | "出海诊断";

export type ResearchReport = {
  slug: string;
  title: string;
  summary: string;
  kind: ResearchKind;
  category: string;
  regions: string[];
  tags: string[];
  publishedAt: string;
  highlights: string[];
};

export const REPORTS: ResearchReport[] = [
  {
    slug: "mattress-factory-overseas",
    title: "手工床垫工厂出海调研",
    summary:
      "面向手工床垫工厂的出海调研清单：覆盖资质与产能、产品规格、目标市场优先级、社媒资产与获客卡点，把资料缺口转成可执行方案。",
    kind: "出海诊断",
    category: "家居寝具",
    regions: ["全球"],
    tags: ["床垫", "出海诊断", "独立站"],
    publishedAt: "2026-11-13",
    highlights: ["目标市场分层", "产品规格清单", "获客卡点诊断"],
  },
  {
    slug: "metaphysics-cultural-products",
    title: "玄学 × 文化消费品国内市场调研",
    summary:
      "基于六大平台抽样与 12 家品牌对标，拆解玄学文化消费品的品类、价格带与平台分工，指出 150–400 元中段真空，并给出工艺、寓意、送礼三条路径。",
    kind: "品类调研",
    category: "文化消费",
    regions: ["国内"],
    tags: ["玄学", "文化消费品", "选品"],
    publishedAt: "2026-11-15",
    highlights: ["中段价格真空", "12 家品牌对标", "工艺 · 寓意 · 送礼"],
  },
  {
    slug: "agarwood-incense",
    title: "沉香线香出海调研与增长方案",
    summary:
      "扫描全球八区域机会，判断北美为 P0 主战场，拆解 CITES 与关税合规、五类买家与私标打法，给出首年增长节奏。",
    kind: "市场进入",
    category: "香氛香道",
    regions: ["北美", "全球"],
    tags: ["沉香", "线香", "合规"],
    publishedAt: "2026-11-17",
    highlights: ["北美优先 P0", "CITES 合规包", "私标客户开发"],
  },
  {
    slug: "pet-bathtub",
    title: "宠物浴缸 B2B 出海调研",
    summary:
      "全球宠物美容浴缸市场 2025 年约 4.86 亿美元，不锈钢占近六成。报告给出八区域分层、买家地图与北美优先路径，主张以设计型亚克力避开价格战。",
    kind: "市场进入",
    category: "宠物用品",
    regions: ["北美", "全球"],
    tags: ["宠物浴缸", "B2B", "亚克力"],
    publishedAt: "2026-11-17",
    highlights: ["亚克力差异定位", "北美经销商优先", "认证文档补齐"],
  },
  {
    slug: "ceiling-fan-light",
    title: "智能风扇灯出海调研与官网成交方案",
    summary:
      "全球风扇灯大盘约 157 亿美元、年复合增速 5.2%。报告判断西欧与北欧可凭既有 CE 立即开打，北美需先补 ETL/UL；核心是用认证、打样与售后确定性搭建可验证的官网成交路径。",
    kind: "增长方案",
    category: "照明电工",
    regions: ["欧洲", "北美"],
    tags: ["风扇灯", "官网成交", "认证"],
    publishedAt: "2026-11-16",
    highlights: ["西欧北欧先行", "认证证据包成交", "四条产品线分打"],
  },
  {
    slug: "tcm-food-therapy",
    title: "中医药食同源出海调研与招商方案",
    summary:
      "中医药食同源全球市场持续增长，报告扫描八大区域后收敛到东南亚，主张先店后货：先用灸疗馆样板建立信任，再以 52 款货盘分级招商，避开原料出口的量增价跌。",
    kind: "市场进入",
    category: "中医药与大健康",
    regions: ["东南亚", "全球"],
    tags: ["药食同源", "招商", "东南亚"],
    publishedAt: "2026-11-16",
    highlights: ["东南亚为首站", "先店后货招商", "52 款货盘分级"],
  },
  {
    slug: "badminton-gear",
    title: "羽毛球装备出海调研与增长方案",
    summary:
      "全球羽毛球装备 2025 年约 32 亿美元、年复合增速 6.2%，亚太是增长重心。报告以东南亚为第一战场，用英文官网承接加盟与俱乐部线索，自营 DTC 与区域加盟双引擎分 SKU 运营。",
    kind: "增长方案",
    category: "体育用品",
    regions: ["东南亚", "全球"],
    tags: ["羽毛球", "加盟", "DTC"],
    publishedAt: "2026-11-15",
    highlights: ["东南亚第一战场", "DTC 与加盟双引擎", "俱乐部渠道切入"],
  },
  {
    slug: "africa-project-channel",
    title: "东非与西非工程渠道进入研究（全屋定制 × 门窗）",
    summary:
      "东非与西非住房缺口巨大，但整柜成品出口的关税窗口正在收窄。报告建议东非先做根据地、西非做规模，以 KD 散件加本地加工安装进入工程与开发商渠道，并用样板项目撬动首年订单。",
    kind: "渠道研究",
    category: "家居建材",
    regions: ["非洲"],
    tags: ["工程渠道", "KD 散件", "全屋定制"],
    publishedAt: "2026-11-07",
    highlights: ["东非先行西非放量", "KD 散件本地组装", "样板工程撬订单"],
  },
];

export const REPORT_KINDS: ResearchKind[] = ["市场进入", "增长方案", "渠道研究", "品类调研", "出海诊断"];

export const REPORT_CATEGORIES = Array.from(new Set(REPORTS.map((r) => r.category)));

export const REPORT_REGIONS = Array.from(new Set(REPORTS.flatMap((r) => r.regions)));

export function reportHref(slug: string) {
  return `/research/${slug}.html`;
}
