import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "隐私政策｜信息收集 · Cookie 与第三方统计 · 数据使用与你的权利",
  description:
    "搭搭未来（DADAFUTURE）隐私政策：说明我们如何收集、使用、存储与保护你提交的企业与联系人信息，Cookie 与第三方统计工具的使用方式，信息共享与委托处理的边界，以及你查询、更正、删除个人信息的权利与联系方式。我们不会出售你的个人信息；如需行使上述权利，可通过页面联系方式与我们联系，我们将在合理期限内处理。",
};

const SECTIONS = [
  {
    title: "一、我们收集哪些信息",
    body: [
      "你主动提交的信息：通过官网表单、微信、电话或邮件提供的姓名、公司名称、职务、手机号、微信号、目标市场、产品信息与预算范围等。",
      "自动收集的信息：访问页面、来源渠道、设备与浏览器类型、IP 归属地等访问日志，用于统计流量与优化页面。",
    ],
  },
  {
    title: "二、信息的使用目的",
    body: [
      "回复你的咨询、提供出海方案与报价、安排诊断或沙龙席位；",
      "在你同意的前提下，推送与你业务相关的资料、活动与内容；",
      "改进官网内容与转化路径，做匿名化的统计分析；",
      "履行法律法规要求的义务。",
    ],
  },
  {
    title: "三、Cookie 与第三方工具",
    body: [
      "官网可能使用 Cookie 或类似技术记录访问偏好，并接入第三方统计（如网站分析工具）与广告平台像素，用于衡量投放效果。",
      "你可以通过浏览器设置拒绝或清除 Cookie；拒绝后部分功能可能受影响。",
    ],
  },
  {
    title: "四、信息的共享与委托处理",
    body: [
      "我们不会出售你的个人信息。",
      "仅在为你提供服务所必需时，与受委托的技术服务商（如建站服务器、邮件与 CRM 服务商）共享必要信息，并要求其按约定保护数据。",
      "法律法规要求或司法机关依法要求时，我们可能提供相关信息。",
    ],
  },
  {
    title: "五、存储与安全",
    body: [
      "信息存储于服务所需的服务器区域，保存期限为实现上述目的所必需的最短时间，法律另有规定的除外。",
      "我们采取访问控制、传输加密等措施保护信息，但互联网传输无法保证绝对安全。",
    ],
  },
  {
    title: "六、你的权利",
    body: [
      "你可以要求查询、更正、补充或删除你提交的个人信息，也可以撤回此前对营销推送的同意。",
      "如需行使上述权利，请通过文末联系方式与我们联系，我们将在合理期限内处理。",
    ],
  },
  {
    title: "七、未成年人保护",
    body: ["本站面向企业客户与决策人，不面向未成年人提供服务，也不会主动收集未成年人的个人信息。"],
  },
  {
    title: "八、政策更新",
    body: ["本政策可能随业务与法规变化更新，更新后在本页发布并标注生效日期。"],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-widest text-amber-700">法律条款</p>
        <h1 className="mt-2 text-3xl font-bold text-brand-900 md:text-4xl">隐私政策</h1>
        <p className="mt-2 text-sm text-sub">生效日期：2026 年 11 月 14 日</p>
        <p className="mt-6 text-sm leading-relaxed text-sub">
          {BRAND.name}（{BRAND.en}，以下简称「我们」）重视你的信息安全。本政策说明我们在你访问官网或与我们沟通时，如何收集、使用与保护你的信息。
        </p>

        <div className="mt-8 space-y-6">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
              <h2 className="font-bold text-brand-900">{s.title}</h2>
              <ul className="mt-3 space-y-2">
                {s.body.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-sub">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[14px] bg-brand-900 p-6 md:p-8">
          <h2 className="font-bold text-amber-400">九、联系我们</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-100">
            如对本政策或个人信息处理有疑问，请联系：{BRAND.contactName}（{BRAND.contactTitle}）
            <span className="ml-1 font-bold text-amber-400">{BRAND.contactPhone}</span>
            （微信同号）。
          </p>
        </div>

        <p className="mt-8 text-sm text-sub">
          另请阅读 <Link href="/terms" className="font-medium text-brand-700 underline">服务条款</Link>。
        </p>
      </div>
    </section>
  );
}
