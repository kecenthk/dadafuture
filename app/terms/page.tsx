import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "服务条款｜服务范围 · 费用结算方式 · 知识产权归属 · 免责与责任限制",
  description:
    "搭搭未来（DADAFUTURE）服务条款：说明独立站建设、SEO/GEO 运营、广告投放、爆款共创与培训沙龙的服务范围、费用与结算方式、知识产权归属、保密义务、效果与责任限制、第三方平台规则以及争议解决方式。页面展示价格为参考价，最终以合作协议约定为准；广告费由客户直充平台，代理服务费另行约定。",
};

const SECTIONS = [
  {
    title: "一、服务说明",
    body: [
      "本站展示的服务包括但不限于：AI 建站（WordPress / Shopify 独立站）、站内与站外 SEO/GEO 运营、九大平台广告投放、内容与社媒运营、B2B 业务转化培训、爆款共创与联合运营、线下沙龙与内训。",
      "具体服务范围、交付物、周期与验收标准以双方签署的合作协议为准；本站内容为服务介绍，不构成合同条款。",
    ],
  },
  {
    title: "二、费用与结算",
    body: [
      "页面展示的价格为参考价，最终以合作协议约定为准。",
      "广告投放的广告费由你直充平台并由你自主管理账户，代理服务费另行约定；不含第三方平台或工具的自有费用。",
      "按项目计费的服务，通常按阶段付款；按月计费的服务，按自然月预付。",
    ],
  },
  {
    title: "三、你的责任与义务",
    body: [
      "你应提供真实、合法、完整的企业与产品资料，并保证对所提供的素材（图片、视频、文案、商标）拥有合法权利。",
      "你应配合完成必要的资料确认与验收反馈，并对自有平台账号的安全负责。",
    ],
  },
  {
    title: "四、知识产权",
    body: [
      "服务过程中为你定制的网站设计、页面文案、内容与素材，除另有约定外，在款项结清后归你所有。",
      "我们使用的通用方法论、模板、工具与底层技术（含既有代码库与主题）仍归我们或相应权利人所有。",
      "未经许可，任何一方不得将对方的商标、品牌素材用于本合作之外的用途。",
    ],
  },
  {
    title: "五、保密",
    body: [
      "双方对合作中获知的对方商业信息、客户数据与未公开方案负有保密义务，未经对方书面同意不得对外披露，法律另有规定的除外。",
    ],
  },
  {
    title: "六、效果与责任限制",
    body: [
      "搜索排名、流量与询盘结果受平台算法、市场竞争与产品因素影响，除协议中明确约定的达标条款外，我们不对具体排名或成交结果作保证。",
      "因第三方平台规则变更、账号受限、不可抗力导致的服务中断或延迟，我们不承担由此产生的间接损失。",
    ],
  },
  {
    title: "七、第三方平台",
    body: [
      "服务可能涉及 Google、Meta、TikTok、LinkedIn、Shopify、WordPress 等第三方平台，其账号规则、审核与收费由平台方决定，你应遵守相应平台政策。",
    ],
  },
  {
    title: "八、变更与终止",
    body: [
      "合作协议的变更、中止与终止，按协议约定执行；协议终止后，双方应完成费用结算与资料交接。",
    ],
  },
  {
    title: "九、适用法律与争议解决",
    body: [
      "本条款适用中华人民共和国法律。因合作产生的争议，双方应友好协商；协商不成，提交我们所在地有管辖权的人民法院处理。",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-widest text-amber-700">法律条款</p>
        <h1 className="mt-2 text-3xl font-bold text-brand-900 md:text-4xl">服务条款</h1>
        <p className="mt-2 text-sm text-sub">生效日期：2026 年 11 月 14 日</p>
        <p className="mt-6 text-sm leading-relaxed text-sub">
          本条款适用于你浏览 {BRAND.name}（{BRAND.en}）官网及与我们开展合作的相关事项。使用本站即表示你已阅读并同意以下内容。
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
          <h2 className="font-bold text-amber-400">十、联系方式</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-100">
            如对本条款有疑问，请联系：{BRAND.contactName}（{BRAND.contactTitle}）
            <span className="ml-1 font-bold text-amber-400">{BRAND.contactPhone}</span>
            （微信同号）。
          </p>
        </div>

        <p className="mt-8 text-sm text-sub">
          另请阅读 <Link href="/privacy" className="font-medium text-brand-700 underline">隐私政策</Link>。
        </p>
      </div>
    </section>
  );
}
