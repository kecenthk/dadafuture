import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { BRAND, FAQS } from "@/lib/data";

const SITE_URL = "https://www.dadafuture.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "工厂出海超级营销合伙人｜AI 独立站 + SEO/GEO + 九大平台投放｜搭搭未来 DADAFUTURE",
    template: "%s｜搭搭未来 DADAFUTURE",
  },
  description:
    "搭搭未来——工厂出海超级营销合伙人：不卖一次性流量，只做全链路增长。AI 营销型独立站、SEO/GEO 生成式引擎优化、Facebook/Google/TikTok 九大平台广告投放、爆款共创、B2B 转化 SOP 一体交付。50+ 签约 IP，50 亿+ 爆品共创带动的业绩。立即预约一次出海诊断。",
  keywords: [
    "工厂出海",
    "B2B 外贸独立站",
    "海外营销",
    "Facebook 投放",
    "Google SEO",
    "GEO 生成式引擎优化",
    "AI 建站",
    "外贸询盘",
    "品牌出海",
    "离岸数字孵化",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "搭搭未来 DADAFUTURE",
    title: "搭搭未来｜B2B 工厂出海超级营销合伙人",
    description: "一起搭、搭未来。不卖一次性流量，只做全链路增长。",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/brand/icon.png",
  },
  alternates: {
    canonical: "./",
  },
};

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "搭搭未来 DADAFUTURE",
    alternateName: "DADAFUTURE",
    url: SITE_URL,
    inLanguage: "zh-CN",
    publisher: { "@type": "Organization", name: "搭搭未来 DADAFUTURE", url: SITE_URL },
  };
}

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "搭搭未来 DADAFUTURE",
    url: SITE_URL,
    slogan: BRAND.slogan,
    description:
      "B2B 工厂出海超级营销合伙人：离岸数字孵化、AI 营销型独立站、SEO/GEO、九大平台广告投放、爆款共创、B2B 转化 SOP。",
    telephone: "+86-137-2672-4687",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: "十月",
        telephone: "+86-137-2672-4687",
        availableLanguage: ["zh-CN"],
      },
    ],
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
