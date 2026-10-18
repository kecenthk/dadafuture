import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import CaseTabs from "@/components/CaseTabs";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "案例中心",
  description:
    "搭搭未来实战案例数据墙：兴威陶瓷新材料、音思客静音仓、香港启泰大健康出海、创维/广汽新能源汽车出海、董太太品牌专场 3 小时 1200 万+、家宴猛火灶品类冠军等，按四大赛道查看。",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        title="案例中心"
        subtitle="每一张卡片背后，都是一套跑通的打法"
        description="按四大赛道筛选：大家居 / 大美丽 / 大健康 / 产业升级。案例统一呈现：行业、客户类型、核心数据、打法一句话、使用服务。"
        image={img("collage of export business success scenes, global trade and e-commerce achievements, professional photography")}
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <CaseTabs />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
