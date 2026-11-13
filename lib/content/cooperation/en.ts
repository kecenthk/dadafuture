/**
 * English cooperation content: five engagement models + five-step funnel + three detailed tracks
 */

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
    name: "Super Partner",
    icon: "Handshake",
    fit: "Companies with a stable product line that need an annual, fully managed program and treat going global as a long-term business",
    action: "Configure website, content, media, outbound development and hands-on sales coaching around the company's stage, covering website build, promotion and sales conversion",
    deliverables: ["12-module deep program", "Annual growth targets and schedule", "Monthly review and iteration"],
    href: "/services/partnership",
    featured: true,
  },
  {
    code: "02",
    name: "Factory Global Incubation",
    icon: "Factory",
    fit: "Factories with products and delivery capability that are building an overseas acquisition system and want a first pilot round",
    action: "Launch a pilot from one target market, running diagnosis, acquisition foundations, channel validation and a review with handover",
    deliverables: ["Market and product diagnosis", "Pilot website", "Channel test records", "Next-phase plan"],
    href: "#incubation",
  },
  {
    code: "03",
    name: "Corporate Training & Coaching",
    icon: "UserRound",
    fit: "Companies that want their in-house team to take over daily operations rather than outsource long term",
    action: "Train on the company's own products, website and sales process, with regular feedback, reviews and updated operating procedures",
    deliverables: ["Hands-on exercises", "Role assignments", "SOP", "Review templates"],
    href: "#training",
  },
  {
    code: "04",
    name: "Joint B2B + B2C Operations",
    icon: "Share2",
    fit: "Factories with manufacturing and delivery capability but without overseas brands and channels",
    action: "Both parties agree on investment and division of labor, jointly drive procurement acquisition and retail, and share brand and product materials",
    deliverables: ["B2B inquiries and quotations", "B2C retail orders", "Review by business line"],
    href: "#joint",
  },
  {
    code: "05",
    name: "Hit Product Co-Creation",
    icon: "Flame",
    fit: "Companies with the capability or potential to develop a hit in a category that still has upside headroom",
    action: "Research the target market and category opportunities, screen and validate priority products with the factory, and drive product and brand co-creation",
    deliverables: ["L0 Category opportunity diagnosis", "L1 Hit product co-creation validation", "L2 Category champion coaching"],
    href: "/services/hit-product",
  },
];

export const BUSINESS_CARDS: BusinessCard[] = [
  {
    name: "Hit product co-creation",
    icon: "Sparkles",
    mode: "Research target markets and category opportunities, and screen and validate priority products together with the factory.",
    value: "Clarify selling points, target buyers and follow-up investment with real market feedback.",
  },
  {
    name: "Independent website build",
    icon: "Globe",
    mode: "Build an export inquiry site on WordPress, with Shopify configured for retail needs.",
    value: "Let buyers review products, capacity and cases, then submit a procurement inquiry or place an order.",
  },
  {
    name: "Overseas promotion and conversion",
    icon: "Radio",
    mode: "Combine SEO/GEO, Google Ads, Facebook promotion, overseas social operations and LinkedIn outbound development.",
    value: "Route channel traffic into inquiries, quotations and sales follow-up, and optimize against real feedback.",
  },
  {
    name: "Enterprise AI and practice training",
    icon: "Bot",
    mode: "Deploy AI agents around company processes and provide dedicated enterprise AI training.",
    value: "Help the team apply AI to website building, content operations, customer background checks and inquiry handling.",
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  { title: "Market and product", points: ["Category opportunity diagnosis", "Priority product validation"] },
  { title: "Independent website build", points: ["Brand and product showcase", "Form or ordering flow"] },
  { title: "Content and search", points: ["SEO / GEO", "Content and social operations"] },
  { title: "Overseas acquisition", points: ["Google Ads / Facebook promotion", "LinkedIn outbound development"] },
  { title: "Sales conversion", points: ["Inquiry screening and follow-up", "Quotation and business review"] },
];

/** Official platform logos used by joint operations (public/platforms/) */
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
  subtitle: "B2B + B2C dual-site linkage",
  intro: "Share brand and product materials, and manage B2B procurement inquiries and B2C retail orders separately.",
  split: [
    { party: "Partner", duty: "Responsible for supply, delivery and after-sales" },
    { party: "DADAFUTURE", duty: "Responsible for website build, content, promotion and channel operations within the agreed scope" },
  ],
  problem: {
    title: "The factory has manufacturing strength, but brand and channels still need building",
    body: "Factories excel at production and fulfillment, while overseas brand operations and channel building need dedicated people to drive them. B2B procurement and B2C retail differ in their customers, closing process and after-sales flow.",
  },
  solutionTitle: "Build both sites together, integrate production and sales",
  build: [
    { title: "Independent website build", logos: ["wordpress", "shopify"], points: ["Brand website", "Product showcase and inquiry forms"] },
    {
      title: "Social operations",
      logos: ["facebook", "instagram", "linkedin", "youtube", "tiktok"],
      points: ["Reaching procurement buyers", "Video and graphic content"],
    },
    { title: "Advertising optimization", logos: ["googleads", "facebook"], points: ["Search ads", "Facebook promotion"] },
    { title: "B2B inquiry conversion", logos: ["linkedin"], points: ["Buyer and distributor development", "Inquiry follow-up and quotation"] },
    { title: "B2C retail operations", logos: ["shopify"], points: ["Product pages and online ordering", "Order fulfillment and after-sales"] },
  ],
  lines: [
    {
      name: "B2B independent website",
      desc: "Capture inquiries with a WordPress export website, combine outbound development and advertising to reach buyers, and follow up on quotations and orders.",
    },
    {
      name: "B2C independent website",
      desc: "Run a Shopify store and optimize product pages, advertising, order fulfillment and after-sales processes.",
    },
  ],
  cases: [
    {
      title: "Foshan Jishao Doors And Windows",
      subtitle: "Foshan Jishao Doors And Windows · Aluminum door and window manufacturing",
      image: "/cases/foshan-jishao-doors.png",
      tags: ["Renovation industry", "Aluminum doors and windows", "Facebook ad management"],
      detail: [
        { label: "Target regions", value: "Middle East · Southeast Asia · Europe · United States" },
        { label: "Engagement", value: "Facebook ad management, continuously optimizing against cost per lead" },
      ],
      highlight: { value: "10–20", unit: "CNY/lead", note: "Average cost per lead (client-measured)" },
    },
    {
      title: "Guangzhou Junyue · Noise-reduction Earplugs",
      subtitle: "Home & building · Subcategory champion · 100M-CNY scale",
      image: "/cases/guangzhou-junyue-earplugs.png",
      tags: ["Hit-product co-creation", "Category champion", "Overseas markets"],
      detail: [
        {
          label: "Path",
          value: "Thirteen years in one category, breaking into overseas markets with hit-product logic and moving from OEM margins to category influence",
        },
        { label: "Growth", value: "2025 annual unit sales versus 1 million pairs in 2013" },
      ],
      highlight: { value: "Nearly 200M", unit: "pairs/year", note: "2025 annual unit sales" },
    },
  ],
  footnote:
    "Account ownership, cost sharing, net profit distribution, settlement cycle and exit handover are agreed by both parties in the project contract.",
  cta: { label: "Ask about joint operations", href: "/contact" },
};

export const INCUBATION_STEPS: IncubationStep[] = [
  {
    title: "Market and product diagnosis",
    goal: "Research buyers, competitors and procurement scenarios, and shortlist the first priority products based on capacity, lead time and margin",
    delivery: "Target markets, buyer profiles, product selling points and a priority list",
  },
  {
    title: "Build acquisition foundations",
    goal: "Build or optimize the export website and complete product pages, cases, inquiry forms and conversion tracking",
    delivery: "Pilot pages, inquiry flow and the first batch of content",
  },
  {
    title: "Validate the first channels",
    goal: "Choose SEO/GEO, Google Ads, Facebook or LinkedIn outbound development based on buyer characteristics",
    delivery: "Channel test records, inquiry quality analysis and sales feedback",
  },
  {
    title: "Review and handover",
    goal: "Review channel costs, inquiry quality and supply feedback, then decide whether to adjust market, product or investment",
    delivery: "Review report, operations checklist and next-phase plan",
  },
];

export const TRAINING_TRACK: TrainingTrack = {
  modes: [
    {
      name: "Corporate training",
      desc: "Hands-on sessions organized around the company's real problems, completing product positioning, page, promotion or follow-up tasks in class.",
    },
    {
      name: "Project coaching",
      desc: "The team executes real tasks by role, while DADAFUTURE gives regular feedback, reviews and updates operating procedures.",
    },
  ],
  modules: [
    { title: "Market and product", points: "Buyer profiles, priority products and selling points" },
    { title: "Website and AI content", points: "Product pages and cases, AI content review, SEO/GEO" },
    { title: "Overseas promotion", points: "Google Ads, Facebook, LinkedIn outbound development" },
    { title: "Inquiries and sales", points: "Lead qualification and quotation, customer follow-up and records" },
    { title: "Team and review", points: "Role assignments and permissions, execution checks and iteration" },
  ],
  deliverables: ["Hands-on outputs", "Role assignments", "SOP", "Checklists", "Review templates"],
};
