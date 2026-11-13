import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { currentLocale } from "@/lib/content";
import { getData } from "@/lib/content/data";
import { getPages } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const copy = (await getPages()).contact;
  return pageMetadata({
    locale,
    path: "/contact",
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function ContactPage() {
  const data = await getData();
  const pages = await getPages();
  const copy = pages.contact;
  const { BRAND } = data;

  return (
    <>
      <PageHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        description={copy.hero.description}
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-[14px] bg-brand-900 p-6">
              <h2 className="font-bold text-amber-400">{copy.aside.contactTitle}</h2>
              <p className="mt-4 flex items-center gap-3 text-white">
                <Phone className="h-5 w-5 shrink-0 text-amber-600" />
                <span>
                  <span className="block text-xs text-brand-200">
                    {BRAND.contactName} · {BRAND.contactTitle}（{copy.aside.wechatRole}）
                  </span>
                  <span className="block text-xl font-black tracking-wide">{BRAND.contactPhone}</span>
                </span>
              </p>
              <p className="mt-4 flex items-center gap-3 text-white">
                <MessageCircle className="h-5 w-5 shrink-0 text-leaf-600" />
                <span className="text-sm text-brand-100">{copy.aside.wechatNote}</span>
              </p>
              <div className="mt-5 flex items-center gap-4 border-t border-white/20 pt-5">
                <div className="w-[104px] shrink-0 rounded-[10px] bg-white p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={BRAND.wechatQr}
                    alt={`${copy.aside.qrAlt}${BRAND.contactName}`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xs leading-relaxed text-brand-100">
                  {copy.aside.qrCaption}
                  <br />
                  {BRAND.contactName} · {BRAND.contactTitle}
                </p>
              </div>
            </div>
            <div className="rounded-[14px] bg-white p-6 ring-1 ring-line">
              <h2 className="font-bold text-brand-900">{copy.aside.servicesTitle}</h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-sub">
                {copy.aside.services.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[14px] bg-brand-50 p-6 ring-1 ring-line">
              <p className="text-xs leading-relaxed text-sub">
                {copy.aside.siteLabel}：{BRAND.site} ｜ {BRAND.icp}
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={null}>
              <ContactForm copy={pages.common.form} brand={BRAND} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
