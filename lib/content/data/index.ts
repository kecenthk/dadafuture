import * as zh from "@/lib/data";
import * as en from "./en";
import * as hk from "./hk";
import { currentLocale, type Localized, type Widen } from "@/lib/content";

export type DataContent = Widen<typeof zh>;

const datasets: Localized<DataContent> = {
  zh,
  "zh-HK": hk,
  en,
};

/** 读取当前语言的结构化数据 */
export async function getData(): Promise<DataContent> {
  return datasets[await currentLocale()];
}
