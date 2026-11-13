/**
 * English structured data (mirrors lib/data.ts key by key)
 * Structure is enforced by `typeof zh` in index.ts
 */

import { img } from "@/lib/images";

/* ============================== Brand ============================== */

export const BRAND = {
  name: "DADAFUTURE",
  en: "DADAFUTURE",
  slogan: "Build together, build the future",
  positioning: "Super marketing partner for B2B factories going global",
  promise: "No one-off traffic — end-to-end growth only",
  contactName: "Shiyue",
  contactTitle: "Project Lead",
  contactPhone: "137 2672 4687",
  wechatQr: "/brand/wechat-qr.png",
  site: "www.dadafuture.com",
  icp: "DADAFUTURE × Yundian+ Co-Brand",
};

/** Four emphases (the core of our differentiation — order and wording must not change) */
export const FOUR_EMPHASES = [
  {
    key: "shizhan",
    title: "Emphasis on real execution",
    subtitle: "Methods, insight and execution delivered as one",
    desc: "We are not a training company — plenty of methods, nothing that lands. We are not a consultancy — plenty of insight, no path to execution. DADAFUTURE does the work ourselves and delivers methods, insight and execution to the client as one.",
  },
  {
    key: "chuhai",
    title: "Emphasis on going global + AI",
    subtitle: "Understand the export business first, then scale efficiency with AI",
    desc: "AI is only a tool. We are “going global + AI” — we understand the export business and its channels first, then use AI to multiply efficiency. We do not wrap AI concepts around global expansion.",
  },
  {
    key: "baopin",
    title: "Emphasis on hit products + traffic",
    subtitle: "Break through conversion first, then scale traffic",
    desc: "It is “hit products + traffic”, not “traffic + products”: validate the product and break through conversion with hit-product logic first, then scale traffic — instead of forcing products out with paid traffic.",
  },
  {
    key: "pinlei",
    title: "Emphasis on category upside",
    subtitle: "Ride channel momentum, break out with hit products",
    desc: "Find category upside inside channel upside — capture the category dividend, ride the channel, break out with a hit product, and turn the factory's product into the category champion.",
  },
];

export const CORE_STATS = [
  { value: 50, suffix: "+", label: "Incubated and signed IPs" },
  { value: 3, suffix: "B+", label: "Annual revenue" },
  { value: 50, suffix: "B+", label: "Revenue driven by hit-product co-creation" },
  { value: 1, suffix: "B+", label: "Record single-product result" },
];

/** Four-stage full funnel */
export const FOUR_STAGES = [
  {
    stage: "Foundation",
    name: "AI website build",
    desc: "Custom marketing website plus on-site SEO/GEO optimization — a solid foundation",
    services: ["hit-product", "website", "seo-geo"],
  },
  {
    stage: "Acquisition",
    name: "Precision paid media across platforms",
    desc: "Refined campaigns on nine platforms including Facebook / Google / TikTok for precise lead generation",
    services: ["ads", "social", "linkedin"],
  },
  {
    stage: "Conversion",
    name: "AARRR growth model",
    desc: "End-to-end conversion SOP from inbound inquiry to closed deal and repeat purchase, proven by a top sales team",
    services: ["b2b-growth", "live"],
  },
  {
    stage: "Review",
    name: "Data iteration",
    desc: "Weekly data sync plus monthly review, with AI continuously improving efficiency",
    services: ["ai-agent", "partnership"],
  },
];

/* ============================== Nine services + partner ============================== */

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
    name: "Hit Product Co-Creation",
    short: "Uncover category hit-product opportunities, incubate product and sales as one, share risk and upside with the factory",
    icon: "Flame",
    heroImage: img(
      "best-selling consumer product on global e-commerce platform, dramatic studio lighting, premium product photography, export quality goods"
    ),
    slogan: "Validate the product with hit-product logic, break through conversion, then scale traffic",
    intro: [
      "Hit Product Co-Creation is one half of DADAFUTURE's dual-wheel model. We do not sell one-off traffic: we uncover category hit-product opportunities together with the factory, incubate product and sales as one, and turn the product into the representative of its category.",
      "The core logic is “hit product + traffic”: validate the product and break through conversion with hit-product logic first, then scale traffic — not forcing products out with traffic. We find category upside inside channel upside, ride the channel, and break out with a hit product.",
    ],
    highlights: [
      { title: "Category upside assessment", desc: "Find category upside inside channel upside, and judge category headroom and timing windows" },
      { title: "Hit-product opportunity mining", desc: "SKU-level product diagnosis to find the single item that can break through" },
      { title: "Product-sales incubation as one", desc: "Integrated incubation from product definition through content, media and conversion" },
      { title: "Hit-product formula battle map", desc: "A reusable hit-product methodology, distilled into the factory's own battle map" },
      { title: "Backed by ¥5B+ hit-product results", desc: "Hit-product co-creation has driven ¥5B+ in revenue, with a ¥100M+ single-product record" },
      { title: "IP business model research", desc: "Deconstruct IP monetization paths — IP commercialization × hit-product co-creation, two wheels driving" },
    ],
    deliverables: [
      "Category opportunity research and hit-product assessment report",
      "Full hit-product program (positioning / content / media / conversion)",
      "Hit-product formula battle map",
      "Monthly data review and iteration recommendations",
    ],
    featured: true,
    faqs: [
      { q: "Which products suit hit-product co-creation?", a: "Products with the capability or potential to become hits: the category still has upside headroom and the product can be built into a hit. We start with a SKU-level product diagnosis before deciding." },
      { q: "How is co-creation different from a standard agency retainer?", a: "Co-creation incubates product and sales as one with hit-product logic. We validate conversion first and then scale volume. We act as a partner to the factory, not as a one-off traffic vendor." },
    ],
  },
  {
    slug: "website",
    order: 2,
    name: "WordPress / Shopify Website Development",
    short: "AI + WordPress marketing websites with SEO/GEO built in — the foundation for going global",
    icon: "Globe",
    heroImage: img(
      "modern laptop showing elegant business website design on desk in bright office, web development workspace, professional"
    ),
    slogan: "Custom marketing website, 3 years of deployment and maintenance, your site as an inquiry engine",
    intro: [
      "An independent website is the digital foundation of a factory going global. DADAFUTURE builds custom AI + WordPress marketing websites on SEO/GEO standards from day one, so the website itself becomes an inquiry entry point.",
      "Custom WordPress build (8 custom pages), dedicated SiteGround / Hostinger servers, 3 years of deployment and maintenance plus CDN, SSL and domain, genuine Elementor Pro and the genuine Yundian+ theme.",
    ],
    highlights: [
      { title: "Responsive architecture", desc: "Mobile-first, Google AMP mobile site, page speed optimization" },
      { title: "109 languages", desc: "Multilingual architecture with 5 basic translation languages included" },
      { title: "Inquiry forms + CRM integration", desc: "Live chat and EDM integration, with leads flowing into the CRM automatically" },
      { title: "Bulk product import", desc: "Alibaba import supported, up to 50 products / documents uploaded" },
      { title: "Dedicated keyword pages", desc: "Dedicated keyword landing pages + IP blocking + automatic data optimization" },
      { title: "AI marketing system", desc: "Product import / AI copy expansion / Blog SEO content generation / multi-channel social sync" },
    ],
    deliverables: [
      "Marketing website with 8 custom pages",
      "3 years of server / CDN / SSL / domain / deployment and maintenance",
      "Full on-site SEO optimization + GA / GSC setup",
      "Social Pixel integration + Paypal / Stripe payment setup",
      "SEO keyword analysis sheet + full export workflow SOP pack",
    ],
    price: [
      { label: "Business · Website Edition", value: "¥44,800", note: "Custom marketing website + on-site SEO/GEO operations + 100 off-site content pieces per year" },
      { label: "Optional add-on: Google Ads management", value: "+¥19,800/yr", note: "List price ¥39,800/yr; ¥20,000 off when bundled with a custom website; ad spend excluded" },
    ],
    faqs: [
      { q: "What technology is used for the build?", a: "A custom AI + WordPress build with genuine Elementor Pro and the genuine Yundian+ theme on dedicated SiteGround / Hostinger servers, with 3 years of deployment and maintenance after delivery." },
      { q: "How far does multilingual support go?", a: "The system supports 109 languages. The package includes 5 basic translation languages, and more can be added for your target markets." },
    ],
  },
  {
    slug: "seo-geo",
    order: 3,
    name: "On-site + Off-site SEO/GEO Operations",
    short: "Google first-page keywords plus AI search visibility, with the performance guarantee written into the contract",
    icon: "Search",
    heroImage: img(
      "search engine analytics dashboard on computer screen showing ranking growth charts, modern office, data visualization"
    ),
    slogan: "SEO rankings + GEO generative engine optimization, a dual-engine performance guarantee",
    intro: [
      "Global lead generation is moving from “findable in search” to “answerable by AI”. DADAFUTURE runs Google SEO and GEO (generative engine optimization) together, so clients are found in Google Search as well as in Google AI Overview / AI Mode / Gemini / ChatGPT.",
      "On-site EEAT knowledge-base optimization + 100–200 off-site AI content pieces per year + a backlink matrix (same-industry DA10+ / authoritative platforms DA30-70 / sponsored article pages), with performance guaranteed against keyword targets.",
    ],
    highlights: [
      { title: "On-site EEAT optimization", desc: "Knowledge-base content architecture that builds industry authority signals" },
      { title: "Off-site content matrix", desc: "100–200 custom marketing pieces per year, AI-assisted production with human review" },
      { title: "Three-layer backlink matrix", desc: "Same-industry DA10+ / authoritative platforms DA30-70 / sponsored article backlink pages" },
      { title: "Dedicated GEO optimization", desc: "Brand structured Schema / FAQ data so content enters AI answers" },
      { title: "Performance guarantee", desc: "Keyword-target system: shortfalls are topped up as agreed, written into delivery standards" },
      { title: "Data dashboard", desc: "Rankings / indexing / backlinks / inquiries monitored across every dimension" },
    ],
    deliverables: [
      "SEO/GEO keyword strategy sheet",
      "100–200 off-site content pieces per year",
      "Three-layer backlink matrix build-out",
      "Monthly ranking and traffic monitoring report",
    ],
    price: [
      { label: "Qualified keyword quota", value: "100–300", note: "Cumulative across main site + subsites for SEO + GEO; initial results within 90 days" },
      { label: "Service term", value: "365 days", note: "Counted from keyword qualification; if GEO results fall short, SEO results make up the difference" },
    ],
    faqs: [
      { q: "What is GEO?", a: "GEO (generative engine optimization) places brand content into AI answers such as Google AI Overview / AI Mode, Gemini and ChatGPT — the next-generation search entry point." },
      { q: "How soon will we see results?", a: "Initial results within 90 days (the first batch of keywords reaching Google's first page), with a 365-day service term counted from keyword qualification." },
    ],
  },
  {
    slug: "ads",
    order: 4,
    name: "Paid Advertising (Nine Platforms)",
    short: "Refined media buying on nine platforms including Meta / Google / TikTok, with transparent pricing",
    icon: "Target",
    heroImage: img(
      "digital advertising campaign management on multiple screens, social media ad dashboards, professional marketing team office"
    ),
    slogan: "Refined campaigns on nine platforms, ad spend paid directly to the platforms, accounts managed in-house",
    intro: [
      "Refined campaigns across nine platforms — Meta / Facebook / Instagram / TikTok / Google / YouTube / LinkedIn / X / Pinterest — executed end to end, from keyword research and audience targeting to competitor ad analysis.",
      "Transparent pricing: ad spend is paid directly to the platforms and clients keep control of their accounts. We charge a 20% management fee on the amount topped up, and every yuan of ad spend is traceable.",
    ],
    highlights: [
      { title: "Nine-platform coverage", desc: "One-stop media buying on Meta / Google / TikTok / LinkedIn and more" },
      { title: "Transparent pricing", desc: "Ad spend paid directly to platforms, client-managed accounts, no hidden markup" },
      { title: "Refined operations", desc: "Keyword research, audience targeting, competitor ad analysis, A/B testing" },
      { title: "ROI management", desc: "Budget allocation and ROI target management with weekly data sync" },
      { title: "Recommended budgets", desc: "FB ads recommended at 5,000+/month, Google Ads at 10,000+/month" },
      { title: "Regular reviews", desc: "Weekly data sync plus monthly review, continuously refining the media mix" },
    ],
    deliverables: [
      "Media strategy and budget allocation plan",
      "Ad account setup and creative production",
      "Weekly data sync + monthly review reports",
      "Competitor ad monitoring and strategy iteration",
    ],
    price: [
      { label: "Management service fee", value: "20% of ad spend", note: "Clients top up ad spend directly with the platforms and manage their own accounts; FB recommended at 5,000+/month, Google Ads at 10,000+/month" },
      { label: "Google Ads management (add-on)", value: "¥19,800/yr", note: "List price ¥39,800/yr; ¥20,000 off when bundled with a custom website; ad spend excluded" },
    ],
    faqs: [
      { q: "How is ad spend charged?", a: "Ad spend is paid directly to the platforms and clients manage their own accounts. We charge a 20% management fee on the amount topped up, fully transparent throughout." },
      { q: "What starting budget do you recommend?", a: "We recommend 5,000+ CNY/month for Facebook ads and 10,000+ CNY/month for Google Ads, refined by category and market." },
    ],
  },
  {
    slug: "social",
    order: 5,
    name: "Content Operations & Social Matrix",
    short: "Douyin / WeChat Channels IP building plus overseas social matrices, with hit creatives and scripts that lift conversion",
    icon: "Share2",
    heroImage: img(
      "social media content creation studio, smartphone filming product video, ring light and camera equipment, professional livestream products"
    ),
    slogan: "Content that seeds demand + a social matrix that turns traffic into brand equity",
    intro: [
      "Content exists to drive conversion. DADAFUTURE builds IPs on Douyin / WeChat Channels, produces hit creative scripts, and plans and runs daily content for overseas social matrices on TikTok / YouTube / LinkedIn / Pinterest / X.",
      "Organic-first with paid amplification: prove the creative organically first, then scale with media — never blast money at traffic.",
    ],
    highlights: [
      { title: "IP building", desc: "Douyin / WeChat Channels IP positioning, persona building, hit scripts" },
      { title: "Overseas social matrix", desc: "TikTok / YouTube / LinkedIn / Pinterest / X account positioning and operations" },
      { title: "Hit creative assets", desc: "Video and graphic scripts — validate the creative, then scale with media" },
      { title: "Community management", desc: "Overseas social content planning and interaction management to strengthen account authority" },
      { title: "Content performance analysis", desc: "Content distribution analytics that guide topic selection and iteration" },
      { title: "Owned-audience linkage", desc: "A complete path from public-domain acquisition to private-domain conversion" },
    ],
    deliverables: [
      "Account positioning and content strategy",
      "Monthly content calendar and script library",
      "Daily social matrix operations",
      "Monthly content performance report",
    ],
    faqs: [
      { q: "Do you cover both domestic and overseas social media?", a: "Yes. Domestically we focus on Douyin / WeChat Channels; overseas we cover TikTok / YouTube / LinkedIn / Pinterest / X — single platform or a full matrix." },
    ],
  },
  {
    slug: "linkedin",
    order: 6,
    name: "LinkedIn Outbound Development",
    short: "Account security system + founder IP + precise prospect search, with one qualified inquiry as the completion standard",
    icon: "Linkedin",
    heroImage: img(
      "professional business networking on laptop, linkedin style interface, B2B sales outreach, modern office setting"
    ),
    slogan: "One real inquiry as the completion standard — outbound development that teaches your team to fish",
    intro: [
      "LinkedIn is the highest-quality outbound channel for B2B global growth. We provide end-to-end coaching covering account security, company page plus founder IP, precise prospect search and filtering, content strategy, high-visibility engagement, and first-response handling of inquiries.",
      "The completion standard is clear: one qualified inquiry, roughly 3 months of coaching, and a sales team that genuinely owns outbound development.",
    ],
    highlights: [
      { title: "Account security system", desc: "Account warming and ban-prevention strategy to protect a long-term asset" },
      { title: "Company page + founder IP", desc: "Dual-track build of company page and personal IP to establish professional trust" },
      { title: "Precise prospect search", desc: "Target accounts filtered precisely by industry / title / region" },
      { title: "Content strategy", desc: "High-visibility engagement content that brings prospects to you" },
      { title: "First-response handling", desc: "Inquiry response SOP and script library to lift conversion" },
      { title: "Inquiry-based completion", desc: "One qualified inquiry defines completion — results oriented" },
    ],
    deliverables: [
      "LinkedIn account security and setup plan",
      "Target prospect list and outreach scripts",
      "Content strategy and engagement SOP",
      "About 3 months of coaching until the first inquiry lands",
    ],
    price: [{ label: "LinkedIn enablement coaching", value: "¥29,800", note: "About 3 months, with one qualified inquiry as the completion standard" }],
    faqs: [
      { q: "What is the completion standard?", a: "One real qualified inquiry means completion. We deliver more than an account and a method — we coach until the result shows up." },
    ],
  },
  {
    slug: "live",
    order: 7,
    name: "2C Livestream Services",
    short: "Overseas Facebook / TikTok plus domestic Douyin / WeChat Channels / Xiaohongshu livestream operations",
    icon: "Radio",
    heroImage: img(
      "livestream studio with products on display, professional lighting and cameras, host presenting goods, e-commerce live streaming room"
    ),
    slogan: "The livestream crew behind a 12M+ CNY brand session in 3 hours",
    intro: [
      "Livestreaming is the fastest way to prove product and sales as one. Overseas we cover Facebook and TikTok livestreams; domestically we cover Douyin, WeChat Channels and Xiaohongshu, with four playbooks: Chinese goods going global, imports into China, Chinese goods on dual platforms, and high-ticket Chinese-style livestreams.",
      "Our crew has real results: a 12M+ CNY brand session for Ms. Dong in 3 hours; roundtable appearances at the VANPEARL gene capsule launch and the AIDEVI 528 Pink Gala.",
    ],
    highlights: [
      { title: "Overseas livestreams", desc: "Facebook-led with TikTok support, multi-language livestreams capturing overseas traffic" },
      { title: "Domestic livestreams", desc: "Douyin / WeChat Channels simulcast with Xiaohongshu seeding in support" },
      { title: "Chinese goods going global", desc: "Precise overseas traffic + cross-border livestream conversion + overseas private-domain repeat purchase" },
      { title: "Imports into China", desc: "Local Douyin livestreams + compliant import product explanation + short-video traffic" },
      { title: "High-ticket livestreams", desc: "New Chinese-style premium heritage apparel, premium supplements and other high-ticket session playbooks" },
      { title: "12M+ CNY session record", desc: "A 12M+ CNY brand session for Ms. Dong in 3 hours, proven in practice" },
    ],
    deliverables: [
      "Livestream room setup and product mix planning",
      "Livestream scripts and script library",
      "Traffic and private-domain handover plan",
      "Livestream data review and iteration",
    ],
    faqs: [
      { q: "Is livestreaming suitable for factories?", a: "Livestreaming is one of the fastest ways to validate hit-product logic. Prove the conversion model in the livestream room first, then scale validated products into shelf and channel sales." },
    ],
  },
  {
    slug: "b2b-growth",
    order: 8,
    name: "B2B Sales Conversion & Management",
    short: "End-to-end SOP from inbound inquiry to closed deal and repeat purchase + AI background checks + performance incentive system",
    icon: "TrendingUp",
    heroImage: img(
      "B2B sales team meeting with charts and customer pipeline dashboard on screen, professional business consulting office"
    ),
    slogan: "Five deliverables: lead tiering / SOP manual / script and asset library / performance incentives / AI tools",
    intro: [
      "Traffic is not orders. DADAFUTURE hands factories the AARRR end-to-end B2B conversion SOP refined over 17 years in the field: inquiry in — first response — diagnosis — quotation — nurture — close — repeat purchase, with standard actions at every step.",
      "AI empowers the sales process: AI background checks, lead scoring, multi-language first response; paired with a performance incentive system and hands-on coaching, the five deliverables get the team running on its own.",
    ],
    highlights: [
      { title: "End-to-end SOP", desc: "Standard actions across inquiry in — first response — diagnosis — quotation — nurture — close — repeat purchase" },
      { title: "AI background checks", desc: "Customer background research, lead scoring and multi-language first response" },
      { title: "2B private-domain workflow", desc: "Private-domain intake and nurture SOP that turns inquiries into orders" },
      { title: "Performance incentive system", desc: "Team incentives and assessment schemes that make the SOP stick" },
      { title: "Hands-on business coaching", desc: "Consultants coach and correct course until the team builds muscle memory" },
      { title: "Five deliverables", desc: "Lead tiering sheet / SOP manual / script and asset library / incentive plan / AI tool rollout checklist" },
    ],
    deliverables: [
      "Lead tiering sheet",
      "Sales conversion SOP manual",
      "Script and asset library",
      "Performance incentive plan",
      "AI tool rollout checklist",
    ],
    price: [{ label: "Top-sales business training & management", value: "¥29,800", note: "Includes AI-enabled sales processes and hands-on coaching, with the five deliverables" }],
    faqs: [
      { q: "What if the team does not use the SOP after delivery?", a: "It comes with hands-on coaching and a performance incentive plan. Consultants coach until the team builds muscle memory — we do not stop at handing over a manual." },
    ],
  },
  {
    slug: "ai-agent",
    order: 9,
    name: "Global Growth + AI Agents",
    short: "AI agents deployed across the global-growth workflow: websites, content, inquiry screening, private-domain automation",
    icon: "Bot",
    heroImage: img(
      "AI automation workflow in modern office, robot assistant concept with business dashboards, artificial intelligence technology interface"
    ),
    slogan: "AI is only a tool: understand the export business first, then scale efficiency with AI",
    intro: [
      "Our position is “going global + AI” — understand the export business and its channels first, then use AI to multiply efficiency. AI agents are not a gimmick; they are productivity embedded in the global-growth workflow: AI websites, AI content production at scale, AI inquiry screening and private-domain automation.",
      "It comes with the AI Agent Business Loop Bootcamp (offline), where we deconstruct our mature internal AI workflows so teams actually put them to work.",
    ],
    highlights: [
      { title: "AI website build", desc: "AI marketing system: product import / AI copy expansion / Blog SEO content generation" },
      { title: "AI content at scale", desc: "Short-video scripts, spoken-word copy and hit topics produced in bulk" },
      { title: "AI inquiry screening", desc: "Automated inquiry quality scoring and customer background checks" },
      { title: "Private-domain automation", desc: "AI efficiency workflows for refined private-domain operations" },
      { title: "AI keyword coverage", desc: "AI keyword deployment, inquiry screening and refined private-domain operations" },
      { title: "Bootcamp practice", desc: "AI Agent Business Loop Bootcamp, deconstructing mature workflows" },
    ],
    deliverables: [
      "AI agent rollout plan for the global-growth workflow",
      "AI website and content production system",
      "Inquiry screening and private-domain automation workflows",
      "AI Agent Business Loop Bootcamp (offline)",
    ],
    faqs: [
      { q: "How is this different from “AI + going global” companies?", a: "Different order, different root. We are “going global + AI”: our team understands the export business and channels, and AI is the tool that multiplies efficiency — not a concept used to package global expansion." },
    ],
  },
  {
    slug: "partnership",
    order: 10,
    name: "Super Partner Full-Service Program",
    short: "A 12-module deep engagement covering the full foundation — acquisition — conversion — review chain",
    icon: "Handshake",
    heroImage: img(
      "business partnership handshake in modern office, strategic cooperation meeting, export and global trade theme, professional team agreement"
    ),
    slogan: "From ¥150,000/yr: fully managed program + priority access to category co-creation, covering all modules",
    intro: [
      "Super Partner is DADAFUTURE's deepest form of cooperation: 12 modules covering the full “foundation — acquisition — conversion — review” chain, fully managed delivery plus priority access to category co-creation, forming an annual growth partnership with the factory.",
      "From ¥150,000/yr, covering all modules and customizable. Core modules include content/social, Facebook advertising, B2B website build and optimization, off-site SEO/GEO, omnichannel social operations, Google Ads, LinkedIn enablement coaching, and top-sales training and management; growth/user data, development planning and global-growth technical support are value-added services.",
    ],
    highlights: [
      { title: "Content / social direction", desc: "Industry topics, English copy, video and graphic scripts; 60 content pieces (under 60s) per year" },
      { title: "Facebook advertising", desc: "FB/Ins campaign execution, budget allocation, ROI management; 20% management fee on media budget (5,000+/month recommended)" },
      { title: "B2B website build and optimization", desc: "Website optimization, on-site SEO/GEO, ranking and traffic monitoring, multi-device adaptation, 3-year service term" },
      { title: "Off-site SEO / GEO", desc: "High-quality backlinks + custom marketing content + brand structured Schema/FAQ; 100 or 200 pieces per year" },
      { title: "Omnichannel social operations", desc: "TikTok / YouTube / LinkedIn / Pinterest / X account positioning and daily operations" },
      { title: "Google Ads", desc: "Keyword research, ad copy and creative, budget and bidding management, competitor analysis" },
      { title: "LinkedIn enablement coaching", desc: "Account security system, company page + founder IP, precise prospect search, inquiry response, about 3 months" },
      { title: "Top-sales training and management", desc: "AI-enabled sales processes, 2B private-domain full-process SOP, performance incentives, hands-on coaching" },
      { title: "Value-added services", desc: "Growth/user data direction, development planning/model analysis, global-growth technical support — free of charge" },
      { title: "Founder IP planning", desc: "Persona positioning, content planning and production, all-platform matrix operations | quoted on request" },
    ],
    deliverables: [
      "End-to-end growth plan (12 modules)",
      "Top-sales five-piece toolkit",
      "Quarterly data review and growth planning",
      "Founder IP full program (optional)",
    ],
    price: [{ label: "Super Partner", value: "From ¥150,000/yr", note: "Fully managed delivery + priority access to category co-creation, covering all modules and customizable; ad spend billed separately" }],
    faqs: [
      { q: "Which factories is this right for?", a: "Factories with products, capacity and export or cross-border experience that want to build an overseas brand systematically. We start with market research to assess product-market fit." },
      { q: "Is ad spend included in the total price?", a: "No. Clients top up ad spend directly with the platforms and manage their own accounts; we only charge a 20% management fee on the media budget, fully transparent." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

/* ============================== Pricing: two entry points, one path ============================== */

/** Guiding principle */
export const PRICING_PRINCIPLE = "Aligned thinking × hit-product strategy × AI systems × IP trust = category champion";

/** Entry one · Business editions (annual subscription; package price = sum of selected modules) */
export const PLANS = [
  {
    key: "build",
    name: "Business · Website Edition",
    price: "44,800",
    unit: "CNY/yr",
    tagline: "Build the foundation for going global in one move",
    features: [
      "Custom marketing website in 5 languages",
      "On-site SEO·GEO + AI knowledge base",
      "100 off-site AI content pieces per year",
      "3 years of deployment and maintenance + CDN + SSL + domain",
      "AI marketing system + full export workflow SOP pack",
    ],
  },
  {
    key: "promo",
    name: "Business · Growth Edition",
    price: "64,600",
    unit: "CNY/yr",
    tagline: "Website and promotion as one acquisition engine",
    hot: true,
    features: [
      "Custom marketing website in 5 languages",
      "On-site SEO·GEO + AI knowledge base",
      "100 off-site AI content pieces per year",
      "Omnichannel social operations + FB ad management",
      "Data analysis · Growth planning",
    ],
  },
  {
    key: "flag",
    name: "Business · Flagship Edition",
    price: "94,400",
    unit: "CNY/yr",
    tagline: "Full-funnel growth configuration",
    features: [
      "Custom marketing website in 5 languages",
      "On-site SEO·GEO + AI knowledge base",
      "200 off-site AI content pieces per year",
      "Omnichannel social operations + FB ad management",
      "Data analysis · Growth planning",
    ],
  },
];

/** Service matrix (Business edition modules at a glance) */
export const PLAN_MATRIX = [
  "Custom marketing website in 5 languages",
  "On-site SEO·GEO + AI knowledge base",
  "Off-site AI content: 100 / 100 / 200 pieces per year",
  "Omnichannel social operations",
  "FB ad management",
  "Data analysis · Growth planning",
];

/** Entry two · Co-creation L series (category champion path · project-based) */
export const L_SERIES = [
  {
    code: "L0",
    name: "Category Opportunity Diagnosis",
    price: "¥50,000",
    duration: "20 days",
    desc: "Deliver a Category Opportunity Report assessing category upside and hit-product feasibility",
  },
  {
    code: "L1",
    name: "Hit Product Co-Creation Validation",
    price: "¥300,000",
    duration: "90 days",
    desc: "Incubate product and sales as one to break through a single item, with committed process metrics",
  },
  {
    code: "L2",
    name: "Category Champion Coaching",
    price: "¥1,000,000",
    duration: "1 year",
    desc: "Four types of process metrics plus quarterly reviews, including over-performance bonuses",
  },
  {
    code: "L3",
    name: "Brand Co-Creation Partnership",
    price: "No service fee",
    duration: "Project-based",
    desc: "Aligned interests; case attribution and data citation rights written into the contract on day one",
  },
];

/** Other engagement models (monthly / per project) */
export const COOP_MODELS = [
  {
    name: "Incubation coaching",
    price: "¥30,000–50,000",
    unit: "/month",
    tagline: "On-site momentum, month by month",
    desc: "From product selection, content and media to conversion, we run the growth actions together with your team — paid monthly, with an adjustable pace.",
  },
  {
    name: "Corporate training",
    price: "¥20,000",
    unit: "/session (per project)",
    tagline: "Custom curriculum per project to close team capability gaps",
    desc: "Custom courses on global lead generation, hit-product building, AI tools and conversion SOP — one delivery, one reusable method.",
  },
  {
    name: "Joint operations",
    price: "Contact us for details",
    unit: "",
    tagline: "Deep alignment, shared growth and shared returns",
    desc: "Build B2B / B2C businesses together through joint operations, with investment, division of labor and revenue split designed per project.",
  },
];

/** Four cooperation guarantees */
export const COOP_GUARANTEES = [
  "Category exclusivity (during the engagement + 12 months after)",
  "Client data and accounts stay with the factory",
  "Paid monthly",
  "Two-way exit mechanism",
];

export const GUARANTEE = {
  title: "Performance guarantee (keyword-based targets)",
  note: "Cumulative keyword rankings across the main site and subsites meeting the target counts as satisfying the no-refund performance standard; if GEO results fall short, SEO results make up the difference. Initial results within 90 days (first batch of keywords reaching Google's first page); the service term runs 365 days from keyword qualification. Package price = sum of selected modules.",
  headers: ["Metric", "Website Edition", "Growth Edition", "Flagship Edition"],
  rows: [
    ["Google SEO keywords on page one", "≥30", "≥50", "≥100"],
    ["GEO results (AI Overview / AI Mode / Gemini / ChatGPT)", "≥30", "≥50", "≥100"],
    ["Google indexed pages", "≥1,000 pages", "≥2,000 pages", "≥3,000 pages"],
    ["Off-site backlinks (same industry / authoritative / sponsored)", "≥100", "≥200", "≥300"],
    ["Qualified keyword quota (main site + subsites, SEO+GEO)", "100", "200", "300"],
  ],
};

/* ============================== Four solution tracks ============================== */

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
    name: "Home & Building",
    scope: "Building materials / Home / Lighting / Machinery",
    icon: "Warehouse",
    heroImage: img(
      "modern ceramic tile factory production line, large industrial manufacturing facility, export quality building materials"
    ),
    intro: "Home & building is the ballast of China's manufacturing exports: building materials, home furnishings, lighting and machinery. With long product lines, high ticket sizes and long decision chains, it is the best fit for lead-driven playbooks built on short-video seeding plus precise inquiries.",
    painPoints: [
      "Severe product homogenization — competing only on price and trade shows, with thinning margins",
      "Both B2B distributors and C-end homeowners are needed, yet channel expansion stalls",
      "You have capacity and craftsmanship, but overseas customers simply cannot find you",
      "Poor inquiry quality — the sales team cannot follow up, and conversion stays low",
    ],
    opportunity: [
      "Eastern aesthetics + technology is becoming the differentiation dividend for home & building exports: new Chinese-style integrated door-and-wall systems, quiet spaces and high-end customization all have open positions worldwide",
      "Channel upside remains: home content supply on TikTok / YouTube is far from saturated, and short-video seeding costs are still in a trough",
      "Find category upside inside channel upside: pick the right subcategory and content launches far faster than traditional trade shows",
    ],
    playbook: [
      { title: "Ride the channel", desc: "Short-video seeding + precise inquiry capture, running B2B distributors and C-end homeowners in parallel" },
      { title: "Break out with a hit product", desc: "Pick 1-2 SKU-level items to break through, build the category flagship, then extend the line" },
      { title: "Incubate product and sales as one", desc: "Content, media, website and conversion SOP integrated, building the brand as one system" },
    ],
    cases: [
      { name: "Yinsike Quiet Pod", desc: "Soundproof pod products for indoor quiet scenarios — a home & building hit", data: "Hit-product incubation" },
      { name: "Jianshan Entrance Doors", desc: "High-end entrance doors with Eastern aesthetics, short-video seeding plus lead conversion, serving villa and premium residence owners", data: "B+C dual-track acquisition" },
      { name: "Chinese-style Door Panels", desc: "High-end Chinese-style door panels and home hardware, acquiring both B2B distributors and C-end homeowners", data: "Channel expansion" },
      { name: "Little Lily Full Program", desc: "Pioneer of the “owner-operator IP + light physical store” home studio model, city showcases for ToC and study-tour recruitment for ToB", data: "IP showcase" },
    ],
    services: ["hit-product", "website", "seo-geo", "social", "b2b-growth"],
  },
  {
    slug: "beauty",
    name: "Beauty & Personal Care",
    scope: "Beauty / Personal care / Packaging",
    icon: "Sparkles",
    heroImage: img(
      "beauty and personal care products manufacturing, cosmetics packaging line, premium skincare product photography, export quality"
    ),
    intro: "Beauty & personal care (beauty, personal care, packaging) is a repeat-purchase category: public-domain livestreams drive volume, public and private domains work together to move inventory, monetizing fast while building brand awareness.",
    painPoints: [
      "Good production lines but no brand — limited to OEM / ODM processing fees",
      "Overseas compliance and content expression are high barriers, so good products cannot tell a good story",
      "Traffic costs are rising, and blind media buying cannot build a conversion model",
    ],
    opportunity: [
      "Eastern aesthetics + technology: beauty devices and skincare are seeing rising global acceptance of “Eastern ingredients + made in China”",
      "Channel upside: beauty content on Facebook / TikTok remains a global traffic high ground, and multi-language livestreams keep acquisition costs manageable",
      "Find category upside inside channel upside: many subcategories with specific benefits still have open positions waiting for a hit product",
    ],
    playbook: [
      { title: "Ride the channel", desc: "Public-domain livestreams to build volume, public and private domains linked, multi-language livestreams capturing overseas traffic" },
      { title: "Break out with a hit product", desc: "Validate single items with hit-product logic, break through conversion, then scale traffic" },
      { title: "Compound repeat purchases", desc: "Overseas private-domain communities drive repeat purchase, turning a one-time sale into a long-term customer" },
    ],
    cases: [
      { name: "Ms. Dong Brand Session", desc: "Mid-to-high-end imported beauty and nutrition health market, local Douyin livestream", data: "12M+ in 3 hours" },
      { name: "Beauty Devices / Skincare", desc: "Eastern aesthetics + technology direction, beauty and personal care products going global", data: "Category incubation" },
      { name: "VANPEARL / AIDEVI", desc: "Roundtable at the gene capsule launch and the AIDEVI 528 Pink Gala", data: "Industry endorsement" },
    ],
    services: ["hit-product", "live", "ads", "social", "ai-agent"],
  },
  {
    slug: "health",
    name: "Health & Wellness",
    scope: "Supplements / Devices",
    icon: "HeartPulse",
    heroImage: img(
      "health supplements and premium gift boxes, traditional chinese nourishment products, elegant packaging, cross-border e-commerce photography"
    ),
    intro: "Health & wellness (supplements, devices) is a trust-driven category: traditional Chinese wellness + technology is becoming a new narrative in global health consumption, and premium nourishment gift boxes fit especially well with Chinese-market and gifting scenarios.",
    painPoints: [
      "High compliance barriers for supplement exports, with marketing claims easily crossing the line",
      "Trust takes a long time to build, making cold starts hard",
      "High-ticket products need both content and scenario education",
    ],
    opportunity: [
      "Traditional Chinese wellness + technology: nourishment and health categories have steady demand in Southeast Asia and Chinese communities worldwide",
      "Channel upside: Facebook Chinese-community groups + TikTok health content are the most efficient combination for reach right now",
      "Find category upside inside channel upside: premium nourishment gift boxes (fish maw, bird's nest) have high ticket sizes and steady repeat purchases in gifting scenarios",
    ],
    playbook: [
      { title: "Ride the channel", desc: "Precise overseas traffic + multi-language livestream handover + private-domain community repeat purchase" },
      { title: "Break out with a hit product", desc: "Break through the gifting scenario with a gift-box item and build category mindshare with the hit" },
      { title: "Compound trust assets", desc: "Brand story plus a compliant content system that turns trust into repeat purchase" },
    ],
    cases: [
      { name: "Hong Kong Qitai", desc: "Hong Kong Qitai of the Liby Group, 30 years of history — premium nourishment, a benchmark for health & wellness exports", data: "Health export benchmark" },
      { name: "Fish Maw Gift Boxes", desc: "Nourishment and health gift boxes for overseas Chinese gifting scenarios", data: "Hit-product incubation" },
      { name: "Supplements / Devices", desc: "Dual-track import and export playbook with compliant explanation + short-video traffic", data: "Dual-track acquisition" },
    ],
    services: ["hit-product", "live", "ads", "linkedin", "b2b-growth"],
  },
  {
    slug: "industry",
    name: "Industrial Upgrade",
    scope: "Tech going global / Digital globalization",
    icon: "Factory",
    heroImage: img(
      "export containers at port at dusk, global logistics and shipping, new energy vehicles cargo, modern international trade port"
    ),
    intro: "The industrial upgrade track serves new-tech, new-material, new-energy and smart-manufacturing companies: from new energy vehicles to industrial composite materials, turning the technical depth of “made in China” into a voice in global markets.",
    painPoints: [
      "Technology leads but the brand is silent — overseas customers only recognize low-price suppliers",
      "Long B2B decision chains and high ticket sizes make trade shows inefficient for acquisition",
      "No systematic method for offshore digital incubation, so going global is left to luck",
    ],
    opportunity: [
      "New energy vehicle exports (represented by Skyworth and GAC) have opened a brand window for China's high-end manufacturing",
      "Industrial new materials (ceramic + metal composite structural parts and more) are in short supply in overseas markets",
      "Find category upside inside channel upside: LinkedIn + Google precision acquisition remains a blue ocean for industrial goods",
    ],
    playbook: [
      { title: "Ride the channel", desc: "LinkedIn outbound development + Google SEO/GEO to reach overseas procurement decision-makers precisely" },
      { title: "Break out with a hit product", desc: "Build a category benchmark with a technology-driven hit and escape price competition" },
      { title: "Offshore digital incubation", desc: "No inventory, no advance funding, no trade margin — focused on long-term B2B value" },
    ],
    cases: [
      { name: "Xingwei Ceramic New Materials", desc: "Industrial “ceramic + metal” composite structural parts, manufacturing export, a new-material benchmark", data: "New-material exports" },
      { name: "Skyworth / GAC New Energy Vehicle Exports", desc: "Representatives of the new-tech track, globalization of Chinese auto brands", data: "Brand going global" },
      { name: "Smart Manufacturing Equipment", desc: "High-end manufacturing equipment exports, overseas channel rooting and brand upgrade", data: "Channel rooting" },
    ],
    services: ["website", "seo-geo", "linkedin", "ads", "partnership"],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}

/* ============================== Case center ============================== */

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
    industry: "New materials",
    client: "Xingwei Ceramic New Materials",
    clientType: "B2B manufacturer",
    data: "Ceramic + metal composite structural parts",
    result: "An industrial new-material manufacturer going global — a representative offshore digital incubation case",
    services: ["Website development", "SEO/GEO", "LinkedIn outbound"],
    image: img("industrial ceramic metal composite parts manufacturing, high-tech material factory, precision engineering"),
  },
  {
    id: "yinsike",
    track: ["home"],
    industry: "Home & building",
    client: "Yinsike Quiet Pod",
    clientType: "Home & building hit product",
    data: "Quiet-scenario hit product",
    result: "Soundproof pod products for indoor quiet scenarios, breaking through a subcategory with hit-product logic",
    services: ["Hit-product co-creation", "Content operations", "Website development"],
    image: img("modern acoustic soundproof pod booth in stylish office interior, premium furniture product, minimalist design"),
  },
  {
    id: "qitai",
    track: ["health"],
    industry: "Health & wellness",
    client: "Hong Kong Qitai",
    clientType: "Liby Group · 30 years of history",
    data: "Health export benchmark",
    result: "Premium nourishment exports — a representative of Chinese goods entering Southeast Asia and global markets",
    services: ["Facebook ads", "Cross-border livestreams", "Private-domain operations"],
    image: img("premium chinese nourishment gift boxes elegant packaging, luxury health supplement products, gold and red"),
  },
  {
    id: "ev",
    track: ["industry"],
    industry: "New tech",
    client: "Skyworth / GAC New Energy Vehicle Exports",
    clientType: "New energy vehicle brand",
    data: "Brand globalization",
    result: "A representative of the new-tech track and a landmark campaign for a Chinese auto brand going global",
    services: ["Overseas marketing", "Brand going global"],
    image: img("new energy electric vehicles at international port ready for export, modern car shipping terminal, china EV"),
  },
  {
    id: "dongtaitai",
    track: ["beauty"],
    industry: "Beauty & personal care",
    client: "Ms. Dong Brand Session",
    clientType: "Imported beauty / Health",
    data: "12M+ in 3 hours",
    result: "A benchmark session combining local Douyin livestream, compliant explanation and short-video traffic",
    services: ["2C livestream", "Douyin operations", "Short-video traffic"],
    image: img("professional e-commerce live streaming studio with cosmetics products, host presenting beauty products on camera"),
  },
  {
    id: "menghuozao",
    track: ["home"],
    industry: "Home & building",
    client: "Jiayan High-Flame Wok Burner",
    clientType: "Category champion",
    data: "Live-demo selling",
    result: "Category champion for high-flame wok burners, sold through real-scenario live-demo short videos for Chinese social kitchen settings",
    services: ["Hit-product co-creation", "Short-video selling"],
    image: img("powerful chinese commercial wok burner stove, commercial kitchen equipment, flame cooking demonstration"),
  },
  {
    id: "jianshan",
    track: ["home"],
    industry: "Home & building",
    client: "Jianshan Entrance Doors",
    clientType: "High-end entrance doors",
    data: "B+C dual-track acquisition",
    result: "Eastern-aesthetics high-end entrance doors, short-video seeding plus lead conversion, serving villa and premium residence owners",
    services: ["Content operations", "Private-domain conversion", "Partner recruitment"],
    image: img("luxury chinese style entrance door, premium villa front door design, eastern aesthetics architecture"),
  },
  {
    id: "menban",
    track: ["home"],
    industry: "Home & building",
    client: "Chinese-style Door Panels",
    clientType: "B2B distributors + C-end homeowners",
    data: "Dual-track acquisition",
    result: "High-end Chinese-style door panels and home hardware, with distributor recruitment and homeowner retail in parallel",
    services: ["Short-video seeding", "Precise inquiries"],
    image: img("chinese style wooden cabinet doors and hardware, traditional craftsmanship furniture details, premium interior"),
  },
  {
    id: "vanpearl",
    track: ["beauty"],
    industry: "Beauty & personal care",
    client: "VANPEARL / AIDEVI",
    clientType: "Industry launch event",
    data: "Industry endorsement",
    result: "Roundtable at the VANPEARL gene capsule launch and the AIDEVI 528 Pink Gala",
    services: ["IP building", "Livestream selling"],
    image: img("beauty product launch event stage with elegant lighting, skincare brand presentation, professional conference"),
  },
];

/* ============================== Team and advisors ============================== */

export const TEAM = [
  {
    name: "Qiang (“Straight Talk” Qiang)",
    role: "Founder & Chief Advisor",
    bio: "Master's degree from South China University of Technology and a 17-year marketing practitioner. He drives brands from 0 to 1 and from 1 to N with systematic methodology, and gives partner companies deep guidance on business model design and market growth.",
    tags: ["Omnichannel evolution · Full-domain growth", "Global vision · Rooted in China", "Brand growth methodology"],
    image: "/team/qiang.jpg",
  },
  {
    name: "Cola (Cross-Border Cola)",
    role: "Co-founder & Head of Technology",
    bio: "Master's degree from South China University of Technology, former Tencent R&D engineer, with 10+ years of cross-border and e-commerce operations experience. He leads AI website builds and full-domain acquisition growth plans, focusing on “going global + AI”.",
    tags: ["Ex-Tencent R&D", "AI website builds", "Full-domain acquisition growth"],
    image: "/team/cola.png",
  },
  {
    name: "Shiyue",
    role: "Co-founder · Head of Operations",
    bio: "MBA from South China University of Technology with 20+ years of foreign trade experience. She specializes in private-domain operations and lead conversion, knows the full export workflow, and has trained foreign trade teams at more than ten companies with annual revenue in the hundreds of millions.",
    tags: ["20+ years in foreign trade", "Private-domain operations", "Foreign trade training"],
    image: "/team/shiyue.jpg",
  },
  {
    name: "Xue",
    role: "Operations & Content Partner",
    bio: "15 years of internet digital marketing experience and an expert in operating Facebook / Instagram / TikTok, specializing in paid advertising and content operations.",
    tags: ["15 years in digital marketing", "Multi-platform social operations", "Paid advertising"],
    image: "/team/xuejie.jpg",
  },
  {
    name: "Coco",
    role: "Top Sales Performer",
    bio: "Took a single noise-cancelling earplug from a few million to 150M+ CNY in annual sales, with products in more than a dozen countries and No.1 in its subcategory — a hidden champion and category champion.",
    tags: ["No.1 in subcategory", "150M+ CNY annual sales", "Products in a dozen+ countries"],
    image: "/team/coco.jpg",
  },
  {
    name: "Yiming",
    role: "Global Growth Advisor",
    bio: "He works on ToB factory global-growth strategy, overseas channel research and analysis, and hands-on project delivery, and is responsible for cross-border resource integration and localized overseas operations strategy.",
    tags: ["ToB factory exports", "Overseas channel research", "Localized operations"],
    image: "/team/yiming.png",
  },
];

/** Industry leads: one owner per track */
export const INDUSTRY_LEADS = [
  {
    industry: "Health & wellness",
    name: "Qiqi",
    role: "Industry Track Lead",
    desc: "Responsible for project delivery, client coordination and operational collaboration in the health & wellness track.",
    image: "/team/qiqi.png",
  },
  {
    industry: "Beauty & personal care",
    name: "Xiaofeng",
    role: "Co-founder · Industry Track Lead",
    desc: "Has incubated 30+ hit products worth over 100M CNY each and driven 5B+ CNY in transaction value; she leads hit-product incubation and GMV conversion in the beauty & personal care track.",
    image: "/team/xiaofeng.jpg",
  },
  {
    industry: "Home & building",
    name: "Dabing",
    role: "Industry Track Lead",
    desc: "Leads category playbooks and project delivery in the home & building track, driving inquiry leads with short-video seeding.",
    image: "/team/dabing.jpg",
  },
];

export const ADVISORS = [
  { name: "Lantian", role: "Operations Advisor", duty: "Livestream and short-video system building across all tracks, operations process standardization, execution supervision, team operations capability building" },
  { name: "Zhou Ping", role: "Business Advisor", duty: "Track business model design, profit model optimization, market trend assessment, cooperation model design and commercial negotiation" },
  { name: "Bibi", role: "Investment Advisor", duty: "Project investment risk assessment and control, equity partnership structure design, investment and financing resource matching, valuation assessment and compliance risk control" },
];

/* ============================== Dual-wheel growth model ============================== */

export const DUAL_WHEEL = {
  image: "/brand/dual-wheel-model.jpg",
  title: "Dual-wheel growth model",
  subtitle: "Brand incubation engine: IP commercialization × hit-product co-creation",
  wheels: [
    {
      name: "IP commercialization",
      items: ["IP talent + livestream", "IP alliance + physical stores", "IP content + private domain"],
    },
    {
      name: "Hit-product co-creation",
      items: ["Uncover category hit-product opportunities", "Research IP business models", "Deconstruct IP monetization paths"],
    },
  ],
  tracks: ["Beauty & personal care", "Health & wellness", "Home & building"],
};

/* ============================== Training and enablement ============================== */

export const TRAININGS = [
  {
    icon: "UserRound",
    name: "“Owner-operator IP + light physical store” training",
    desc: "Built on the Little Lily benchmark model, this replicates the light-asset IP owner-operator plus home light-store business model: personal IP business positioning, persona building, track selection; online traffic plus offline micro-store closed loop; short-video and livestream acquisition, private-domain retention and high-ticket conversion across the full chain.",
    points: ["Practitioners teaching practice", "Study visits to benchmark accounts / studios / livestream rooms", "Replicating the light-asset IP business model"],
  },
  {
    icon: "Bot",
    name: "Enterprise AI application training",
    desc: "AI for short-video scripts, spoken-word copy and hit topics at scale; AI editing, digital humans and visual assets for efficiency; AI keyword deployment, inquiry screening and refined private-domain operations. Practice guides practice.",
    points: ["AI Agent Business Loop Bootcamp (offline)", "Deconstructing mature internal AI workflows", "Going global + AI — AI is a tool, not a gimmick"],
  },
  {
    icon: "Coffee",
    name: "“Going global + AI” offline practice salon",
    desc: "A half-day, six-part hands-on salon. Session 2 on November 19 (Thursday) 13:00–17:30, ¥1980 per person, only 20 seats, open to B2B decision-makers only. Includes a tool kit and one 1v1 diagnosis after the session.",
    points: ["Seeing is believing through study visits", "Registration: form → review → payment to lock a seat", "Closed-door format · we deconstruct the bottleneck you bring"],
  },
];

/** Latest salon (session 2) */
export const SALON = {
  edition: "Session 2",
  date: "November 19, Thursday",
  time: "13:00–17:30 (check-in at 12:30)",
  venue: "DADAFUTURE · Aesthetics Space",
  seats: "Only 20 seats",
  price: "1980",
  priceNote: "Includes a tool kit and one 1v1 diagnosis within 30 days after the session",
  audience: "Open to B2B company owners and decision-makers only",
  speakers: [
    {
      no: "01",
      tag: "Methodology",
      name: "Xiaofeng",
      role: "Co-founder of DADAFUTURE",
      topic: "Hit-product methodology",
      metrics: ["30+ hit products incubated past 100M CNY", "5B+ CNY in driven transaction value"],
      desc: "How to choose a hit product, make it content-ready and keep trial-and-error costs to a minimum — one method, applied both ways.",
      quote: "A hit product isn't luck. It's a method you can reuse.",
    },
    {
      no: "02",
      tag: "Practitioner",
      name: "Coco · Zhou Jing",
      role: "Hidden champion · Category champion",
      topic: "The 100M-CNY path to a subcategory championship",
      metrics: ["150M+ CNY annual sales", "A dozen+ countries · No.1 in subcategory"],
      desc: "From a few million to 150M+: product selection, patents, channels and trade-show cadence — how one small earplug held the category's top spot.",
      quote: "Take one small thing and make it No.1 in its category.",
    },
    {
      no: "03",
      tag: "AI in practice",
      name: "Chen Zhen",
      role: "Dozens of million-view cases · Producing content at scale with AI",
      topic: "30 minutes, one hands-on Codex walkthrough",
      metrics: ["1M+ views on a single top video", "6× per-person output"],
      desc: "From one video a week to one a day — running the whole pipeline live, from topic selection to final cut to automatic publishing.",
      quote: "Content isn't inspiration. It's a pipeline you can run.",
    },
  ],
  agenda: [
    { time: "12:30", title: "Check-in · Materials pickup", who: "Event team" },
    { time: "13:00", title: "Space tour 1F→4F", who: "Qiqi" },
    { time: "13:30", title: "Opening · DADAFUTURE dual wheels", who: "Dabing" },
    { time: "13:40", title: "① Hit-product methodology", who: "Xiaofeng" },
    { time: "14:20", title: "② The path to 100M", who: "Coco" },
    { time: "15:00", title: "Tea break 10′", who: "Event team" },
    { time: "15:10", title: "③ Making videos with Codex", who: "Chen Zhen" },
    { time: "15:40", title: "Overseas online acquisition · Service offering", who: "Shiyue" },
    { time: "15:55", title: "Open networking · Q&A", who: "All three speakers" },
    { time: "16:25", title: "Interviews with 3 target clients", who: "Event team" },
    { time: "16:40", title: "Group photo", who: "Everyone" },
    { time: "16:45", title: "One-on-one · Private conversations (ends 17:30)", who: "All three speakers" },
  ],
  values: [
    { title: "Closed-door", desc: "Open to B2B company owners and decision-makers only — no public lecture on site." },
    { title: "Deconstructed live", desc: "Each company brings one real bottleneck, and the speakers deconstruct it on the spot." },
    { title: "Take it back to use", desc: "A tool kit plus one 1v1 diagnosis within 30 days after the session, ready to apply immediately." },
  ],
  claim: "Come with your company's real bottleneck and leave with it deconstructed.",
};

export const SALON_PERKS = [
  "Global growth case studies",
  "Hit-product formula battle map",
  "Top-sales conversion full-process practice",
  "LinkedIn outbound development fundamentals",
  "AI hero image generation and product page practice",
  "Custom WorkBuddy export workspace",
];

/* ============================== FAQ (site-wide) ============================== */

export const FAQS = [
  {
    q: "How are you different from training companies and consultancies?",
    a: "We are not a training company — plenty of methods, nothing that lands. We are not a consultancy — plenty of insight, no path to execution. DADAFUTURE does the work ourselves and delivers methods, insight and execution as one. We run our own business with 50+ signed IPs and 3B+ CNY in annual revenue, so what we deliver are proven playbooks.",
  },
  {
    q: "Is your position “AI + going global”?",
    a: "No. Our position is “going global + AI” — AI is only a tool. The team understands the export business and channels first, then uses AI to multiply efficiency. We do not wrap AI concepts around global expansion.",
  },
  {
    q: "How soon will we see results?",
    a: "Business edition standard: initial results within 90 days (the first batch of keywords reaching Google's first page), with a 365-day service term counted from keyword qualification. For media services we sync data weekly and review and iterate monthly.",
  },
  {
    q: "How is ad spend charged?",
    a: "Ad spend is paid directly to the platforms and clients manage their own accounts, fully transparent. We only charge a 20% management fee on the amount topped up. Facebook ads are recommended at 5,000+/month and Google Ads at 10,000+/month.",
  },
  {
    q: "What happens if SEO/GEO targets are not met?",
    a: "We guarantee against keyword targets: cumulative keyword rankings across the main site and subsites meeting the target counts as meeting the standard; if GEO results fall short, SEO results make up the difference, as written into the delivery agreement.",
  },
  {
    q: "Which factories are a good fit?",
    a: "Manufacturing factories with products, capacity and export or cross-border experience, where the category still has upside headroom and the product can be built into a hit. The ideal profile runs 2B services and 2C hit products in parallel; meeting at least one of them is enough to start the engagement.",
  },
];

/* ============================== Resource pack ============================== */

export const RESOURCE_PACK = {
  title: "Export resource pack worth ¥199",
  subtitle: "From the “going global + AI” offline salon attendee benefits — a collection of hands-on tools for factories going global",
  items: SALON_PERKS,
};

/* ============================== News placeholders ============================== */

export const NEWS = [
  {
    date: "2026-10",
    title: "“Going global + AI” offline practice salon, session 2 — now enrolling",
    desc: "November 19 (Thursday) 13:00–17:30, ¥1980 per person, only 20 seats, including a tool kit and one 1v1 diagnosis after the session.",
  },
  {
    date: "2026-09",
    title: "DADAFUTURE × Yundian+ joint website goes live",
    desc: "A refreshed home for the B2B factory global-growth super marketing partner, with the full service matrix and performance guarantee made public.",
  },
  {
    date: "2026-09",
    title: "Xingwei Ceramic New Materials case: offshore digital incubation for new materials",
    desc: "How industrial “ceramic + metal” composite structural parts opened overseas markets through SEO/GEO plus LinkedIn precision acquisition.",
  },
];
