import Link from "next/link";
import { BRAND, SERVICES, SOLUTIONS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white/[0.72]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo.png"
              alt="搭搭未来 DADAFUTURE 品牌标识"
              className="h-9 w-9 rounded-[10px] object-contain"
            />
            <span className="text-lg font-bold text-white">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {BRAND.positioning}。{BRAND.slogan}——{BRAND.promise}。
          </p>
          <p className="mt-3 text-xs text-white/[0.5]">{BRAND.icp}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">四大赛道</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SOLUTIONS.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="transition hover:text-amber-400">
                  {s.name}出海（{s.scope}）
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">核心服务</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-amber-400">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">联系我们</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              业务联系：{BRAND.contactName}
              <span className="ml-1 font-semibold text-white">{BRAND.contactPhone}</span>
            </li>
            <li>微信同号，备注「出海方案」优先通过</li>
            <li>
              <Link href="/contact" className="font-semibold text-amber-400 transition hover:text-amber-500">
                免费获取出海方案 →
              </Link>
            </li>
          </ul>
          <div className="mt-5">
            <div className="flex h-[104px] w-[104px] flex-col items-center justify-center gap-1 rounded-[10px] border border-dashed border-white/30 px-2 text-center text-[10px] leading-tight text-white/[0.55]">
              <span className="text-xs font-semibold text-white">微信二维码</span>
              <span>扫码联系 {BRAND.contactName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.12] bg-[#00323A] py-5 text-center text-xs text-white/[0.6]">
        © 2026 {BRAND.name} {BRAND.en} · {BRAND.slogan} ·
        工厂出海 / B2B 外贸独立站 / SEO / GEO / 海外营销
      </div>
    </footer>
  );
}
