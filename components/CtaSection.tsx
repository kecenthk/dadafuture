import Link from "next/link";
import { BRAND } from "@/lib/data";

/** 全站统一 CTA */
export default function CtaSection({
  title = "和搭搭未来一起，把工厂的产品打成出海的爆品",
  subtitle = "免费获取出海方案：先做市场调研，评估产品与市场的契合度，再谈合作。",
  primary = { text: "免费获取出海方案", href: "/contact" },
  secondary = { text: "领取外贸资料包", href: "/contact?type=resource" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { text: string; href: string };
  secondary?: { text: string; href: string };
}) {
  return (
    <section className="bg-brand-900 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1040px] px-5 text-center sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 md:text-lg">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="w-full rounded-[10px] bg-amber-500 px-7 py-3.5 text-base font-semibold text-brand-900 transition hover:bg-amber-400 sm:w-auto"
          >
            {primary.text}
          </Link>
          <Link
            href={secondary.href}
            className="w-full rounded-[10px] border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            {secondary.text}
          </Link>
        </div>
        <p className="mt-5 text-xs text-brand-200">
          业务联系：{BRAND.contactName} · {BRAND.contactTitle} {BRAND.contactPhone}（微信同号）
        </p>
      </div>
    </section>
  );
}
