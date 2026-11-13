import type { Metadata } from "next";
import { lang } from "next/root-params";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { getData } from "@/lib/content/data";
import { getCommonCopy } from "@/lib/content/pages";
import { DEFAULT_LOCALE, LANGUAGES, LOCALES, hasLocale, type Locale } from "@/lib/i18n/config";

const SITE_URL = "https://www.dadafuture.com";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

async function currentLocale(): Promise<Locale> {
  const value = await lang();
  return hasLocale(value) ? value : DEFAULT_LOCALE;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const meta = LANGUAGES[locale];
  const data = await getData();
  const site = (await getCommonCopy()).site;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: site.defaultTitle,
      template: site.titleTemplate,
    },
    description: data.BRAND.promise,
    keywords: site.keywords,
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      siteName: site.siteName,
      title: site.ogTitle,
      description: data.BRAND.promise,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/brand/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: "/brand/icon.png",
    },
    alternates: {
      canonical: locale === DEFAULT_LOCALE ? "/" : `/${locale}`,
      languages: {
        "zh-CN": "/",
        "zh-HK": "/zh-HK",
        en: "/en",
        "x-default": "/",
      },
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await currentLocale();
  const meta = LANGUAGES[locale];
  const data = await getData();
  const copy = await getCommonCopy();

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: copy.site.siteName,
    alternateName: "DADAFUTURE",
    url: SITE_URL,
    inLanguage: meta.hreflang,
    publisher: { "@type": "Organization", name: copy.site.siteName, url: SITE_URL },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: copy.site.siteName,
    url: SITE_URL,
    slogan: data.BRAND.slogan,
    description: `${data.BRAND.positioning} — ${data.BRAND.promise}`,
    telephone: "+86-137-2672-4687",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: data.BRAND.contactName,
        telephone: "+86-137-2672-4687",
        availableLanguage: [meta.hreflang],
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <html lang={meta.htmlLang} className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Navbar locale={locale} copy={copy.nav} brand={data.BRAND} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <FloatingContact copy={copy.floating} brand={data.BRAND} />
      </body>
    </html>
  );
}
