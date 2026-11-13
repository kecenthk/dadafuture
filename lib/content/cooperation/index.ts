import * as zh from "@/lib/cooperation";
import * as en from "./en";
import * as hk from "./hk";
import { currentLocale, type Localized, type Widen } from "@/lib/content";

export type CooperationContent = Widen<typeof zh>;

const datasets: Localized<CooperationContent> = {
  zh,
  "zh-HK": hk,
  en,
};

/** 读取当前语言的合作模式数据 */
export async function getCooperation(): Promise<CooperationContent> {
  return datasets[await currentLocale()];
}
