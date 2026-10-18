import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/images";
import { ADVISORS, BRAND, DUAL_WHEEL, FOUR_EMPHASES, TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "搭搭未来 DADAFUTURE：品牌孵化器 · B2B 工厂出海超级营销合伙人。创始人毒舌强（华南理工硕士，17 年实战营销专家），双轮驱动模型：IP 商业化 × 爆品共创。使命：助力优秀的人，成就想优秀的人；助力头部品牌，成就品类冠军。",
};

const VALUES = [
  {
    title: "使命 To 个人",
    desc: "助力优秀的人，成就想优秀的人。",
  },
  {
    title: "使命 To 品牌",
    desc: "助力头部品牌，成就品类冠军。",
  },
  {
    title: "增长模型",
    desc: "双轮驱动：IP 商业化 × 爆品共创——IP 达人 + 直播、IP 联盟 + 实体、IP 内容 + 私域；挖掘品类爆品机会、品销一体孵化。",
  },
];

export default function AboutPage() {
  const founder = TEAM[0];
  return (
    <>
      <PageHero
        title={`关于${BRAND.name}`}
        subtitle={`品牌孵化器 · ${BRAND.positioning}`}
        description={`${BRAND.slogan}。${BRAND.promise}——以离岸数字孵化服务制造企业品牌出海升级：不碰货、不垫资、无贸易差价，覆盖新科技、新材料、新能源、智能制造。`}
        image={img("professional Chinese business team meeting in modern office, strategic planning session, deep blue corporate style")}
      />

      {/* 品牌故事 / 使命 / 双轮驱动 */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                <h2 className="font-bold text-amber-700">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-sub">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[14px] bg-white p-4 ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DUAL_WHEEL.image}
                alt="搭搭未来双轮驱动模型"
                className="w-full rounded-[10px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-[14px] bg-brand-900 p-6 md:p-8">
              <p className="text-xs font-bold tracking-widest text-amber-400">品牌孵化引擎</p>
              <h3 className="mt-2 text-xl font-bold text-white">{DUAL_WHEEL.title}</h3>
              <p className="mt-2 text-sm text-brand-100">{DUAL_WHEEL.subtitle}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {DUAL_WHEEL.wheels.map((w) => (
                  <div key={w.name}>
                    <p className="font-bold text-amber-400">{w.name}</p>
                    <ul className="mt-2 space-y-1.5">
                      {w.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-brand-100">
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-leaf-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 四大强调完整呈现 */}
          <div className="mt-14 text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">品牌核心理念：四大强调</h2>
            <p className="mt-2 text-sm text-sub">实战出发，出海为本，爆品突围，品类制胜</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FOUR_EMPHASES.map((e, i) => (
              <div key={e.key} className="rounded-[14px] bg-brand-900 p-6">
                <p className="text-sm font-bold text-amber-400">0{i + 1} · {e.title}</p>
                <p className="mt-1 text-xs text-brand-200">{e.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-100">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创始人 */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-widest text-amber-700">创始人 / 总顾问</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
                {founder.name} · 资深商业战略专家
              </h2>
              <p className="mt-2 text-sm font-medium text-sub">
                华南理工硕士 · 17 年实战营销专家
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sub md:text-base">
                17 年实战沉淀，以体系化方法论驱动品牌从 0 到 1、从 1 到 N。为合作企业提供商业模式设计与市场增长的深度指导与赋能。
              </p>
              <div className="mt-6 space-y-3">
                {founder.tags.map((t) => (
                  <div key={t} className="flex items-center gap-2 rounded-[10px] bg-white px-4 py-3 text-sm font-medium text-brand-900 ring-1 ring-line">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-amber-600" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full rounded-[14px] object-cover shadow-[0_8px_24px_rgba(22,50,58,0.10)] ring-1 ring-line"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">核心团队</h2>
            <p className="mt-2 text-sm text-sub">ToB 工厂出海 · 累计 30+ 年经验 · 覆盖 9+ 平台</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-[14px] bg-white ring-1 ring-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold text-brand-900">{t.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-amber-700">{t.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-sub">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 顾问团队 */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 md:text-3xl">核心顾问团队</h2>
            <p className="mt-2 text-sm text-sub">四大顾问体系 · 全项目战略赋能</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADVISORS.map((a) => (
              <div key={a.name} className="rounded-[14px] bg-white p-6 ring-1 ring-line">
                <p className="font-bold text-brand-900">
                  {a.name}
                  <span className="ml-2 text-xs font-medium text-amber-700">{a.role}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-sub">{a.duty}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8">
            <h3 className="font-bold text-brand-900">生态实力</h3>
            <p className="mt-3 text-sm leading-relaxed text-sub">
              除 ToB 工厂出海外，搭搭未来还有两条实战验证过的业务赛道作为生态实力背书：大美丽 &amp; 大健康（直播带货，GMV 成交导向）、大家居赛道（短视频种草，询盘线索导向），共同构成立体的品牌孵化生态。
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
