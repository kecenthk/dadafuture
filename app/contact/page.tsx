import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系搭搭未来：刘女士 185 0208 8258（微信同号）。免费获取出海方案、领取价值 199 元外贸资料包、报名「出海 + AI」线下实战沙龙。表单字段：公司 / 爆款产品 SKU / 目标市场 / 年度预算 / 当前卡点。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="先评估，再合作——免费获取出海方案"
        description="填写表单（公司 / 想打出的爆款产品 SKU 级 / 目标市场 / 年度预算 / 当前卡在哪一步），销售可直接跟进，保证线索质量。"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-[14px] bg-brand-900 p-6">
              <h2 className="font-bold text-amber-400">业务联系</h2>
              <p className="mt-4 flex items-center gap-3 text-white">
                <Phone className="h-5 w-5 shrink-0 text-amber-600" />
                <span>
                  <span className="block text-xs text-brand-200">{BRAND.contactName}（微信同号）</span>
                  <span className="block text-xl font-black tracking-wide">{BRAND.contactPhone}</span>
                </span>
              </p>
              <p className="mt-4 flex items-center gap-3 text-white">
                <MessageCircle className="h-5 w-5 shrink-0 text-leaf-600" />
                <span className="text-sm text-brand-100">添加微信请备注「出海方案」优先通过</span>
              </p>
            </div>
            <div className="rounded-[14px] bg-white p-6 ring-1 ring-line">
              <h2 className="font-bold text-brand-900">我们能为您做什么</h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-sub">
                <li>· 出海方案：先做市场调研，评估产品与市场的契合度</li>
                <li>· 资料包：价值 199 元外贸实战工具合集</li>
                <li>· 沙龙席位：「出海 + AI」线下实战沙龙报名</li>
                <li>· 免费诊断：关键词 / 网站初步诊断建议</li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-brand-50 p-6 ring-1 ring-line">
              <p className="text-xs leading-relaxed text-sub">
                官网：{BRAND.site} ｜ {BRAND.icp}
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
