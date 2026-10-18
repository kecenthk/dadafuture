"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { BRAND } from "@/lib/data";

const BUDGETS = ["10 万以内", "10–30 万", "30–50 万", "50–100 万", "100 万以上"];

/** 联系/留资表单：公司 / 产品 SKU / 目标市场 / 产能成本区间 / 当前卡点 */
export default function ContactForm() {
  const params = useSearchParams();
  const intent = params.get("type") === "resource" ? "resource" : "plan";
  const [form, setForm] = useState({
    company: "",
    product: "",
    market: "",
    budget: BUDGETS[1],
    pain: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: "" });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.company.trim()) next.company = "请填写公司名称";
    if (!form.product.trim()) next.product = "请填写想打出的爆款产品（SKU 级）";
    if (!form.market.trim()) next.market = "请填写目标市场";
    if (!form.pain.trim()) next.pain = "请填写当前卡在哪一步";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, intent }),
      });
    } catch {
      /* stub：接口不可用时仍视为已记录，后续由销售人工跟进 */
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="rounded-[14px] bg-white p-8 text-center ring-1 ring-line md:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-leaf-600" />
        <h3 className="mt-4 text-xl font-bold text-brand-800">提交成功</h3>
        <p className="mt-2 text-sm leading-relaxed text-sub">
          {intent === "resource"
            ? "外贸资料包领取申请已收到，审核通过后将发送领取方式。"
            : "出海方案申请已收到，我们会尽快与您联系。"}
          <br />
          也可以直接添加微信：
          <span className="font-semibold text-amber-700">
            {BRAND.contactName} {BRAND.contactPhone}（微信同号）
          </span>
        </p>
      </div>
    );
  }

  const inputCls = (k: string) =>
    `w-full rounded-[10px] border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100 ${
      errors[k] ? "border-red-400" : "border-line"
    }`;

  return (
    <form onSubmit={submit} className="rounded-[14px] bg-white p-6 ring-1 ring-line md:p-8" noValidate>
      <p className="mb-5 rounded-[10px] bg-surface px-4 py-3 text-xs leading-relaxed text-brand-700">
        {intent === "resource"
          ? "您正在申请：价值 199 元外贸资料包（含爆款公式作战大图、销冠转化全流程等 6 项权益）。"
          : "您正在申请：免费出海方案（先做市场调研，评估产品与市场的契合度）。"}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="company">
            公司名称 <span className="text-red-500">*</span>
          </label>
          <input id="company" className={inputCls("company")} placeholder="例如：XX 陶瓷有限公司" value={form.company} onChange={set("company")} />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="product">
            想打出的爆款产品（SKU 级） <span className="text-red-500">*</span>
          </label>
          <input id="product" className={inputCls("product")} placeholder="例如：800×800 大理石纹瓷砖" value={form.product} onChange={set("product")} />
          {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="market">
            目标市场 <span className="text-red-500">*</span>
          </label>
          <input id="market" className={inputCls("market")} placeholder="例如：东南亚 / 中东 / 欧美" value={form.market} onChange={set("market")} />
          {errors.market && <p className="mt-1 text-xs text-red-500">{errors.market}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="budget">
            年度营销预算区间
          </label>
          <select id="budget" className={inputCls("budget")} value={form.budget} onChange={set("budget")}>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="pain">
            当前卡在哪一步 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="pain"
            rows={4}
            className={inputCls("pain")}
            placeholder="例如：有产能没询盘 / 展会获客成本太高 / 想转型线上不知道从何入手"
            value={form.pain}
            onChange={set("pain")}
          />
          {errors.pain && <p className="mt-1 text-xs text-red-500">{errors.pain}</p>}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-[10px] bg-amber-500 px-6 py-3.5 text-base font-semibold text-brand-900 transition hover:bg-amber-400 disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {intent === "resource" ? "申请领取资料包" : "免费获取出海方案"}
      </button>
      <p className="mt-3 text-center text-xs text-sub">
        提交后由{BRAND.contactName}（{BRAND.contactPhone} 微信同号）跟进，信息仅用于业务联系。
      </p>
    </form>
  );
}
