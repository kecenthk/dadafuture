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
              业务联系：{BRAND.contactName} · {BRAND.contactTitle}
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
            <div className="w-[104px] rounded-[10px] bg-white p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.wechatQr}
                alt={`微信二维码 · 扫码联系${BRAND.contactName}`}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-2 w-[104px] text-center text-[10px] leading-tight text-white/[0.55]">
              微信扫码 · {BRAND.contactName}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.12] bg-[#00323A] py-5 text-center text-xs text-white/[0.6]">
        <p>
          © 2026 {BRAND.name} {BRAND.en} · {BRAND.slogan} ·
          工厂出海 / 外贸独立站 / SEO / GEO / 海外营销
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link href="/privacy" className="transition hover:text-amber-400">隐私政策</Link>
          <Link href="/terms" className="transition hover:text-amber-400">服务条款</Link>
          <span>业务联系：{BRAND.contactPhone}</span>
        </p>
      </div>
    </footer>
  );
}
