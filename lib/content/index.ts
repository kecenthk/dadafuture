import { lang } from "next/root-params";
import { DEFAULT_LOCALE, hasLocale, type Locale } from "@/lib/i18n/config";

export type Localized<T> = Record<Locale, T>;

/** 把字面量类型放宽为一般类型，便于三语结构对齐 */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : T extends (...args: never[]) => unknown
          ? T
          : T extends object
            ? { [K in keyof T]: Widen<T[K]> }
            : T;

/** 读取当前请求的语言（仅服务端组件 / 服务端工具可用） */
export async function currentLocale(): Promise<Locale> {
  const value = await lang();
  return hasLocale(value) ? value : DEFAULT_LOCALE;
}

/** 按当前语言从三语字典中取值 */
export async function pick<T>(dict: Localized<T>): Promise<T> {
  return dict[await currentLocale()];
}
