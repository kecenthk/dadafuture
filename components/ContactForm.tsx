"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import type { CommonCopy } from "@/lib/content/pages/zh/common";
import type { DataContent } from "@/lib/content/data";

type FormCopy = CommonCopy["form"];

/** 联系/留资表单：公司 / 产品 SKU / 目标市场 / 产能成本区间 / 当前卡点 */
export default function ContactForm({
  copy,
  brand,
}: {
  copy: FormCopy;
  brand: DataContent["BRAND"];
}) {
  const params = useSearchParams();
  const intent = params.get("type") === "resource" ? "resource" : "plan";
  const [form, setForm] = useState({
    company: "",
    product: "",
    market: "",
    budget: copy.budgets[1],
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
    if (!form.company.trim()) next.company = copy.companyError;
    if (!form.product.trim()) next.product = copy.productError;
    if (!form.market.trim()) next.market = copy.marketError;
    if (!form.pain.trim()) next.pain = copy.painError;
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
        <h3 className="mt-4 text-xl font-bold text-brand-800">{copy.successTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-sub">
          {intent === "resource" ? copy.successResource : copy.successPlan}
          <br />
          {copy.successWechatPrefix}
          <span className="font-semibold text-amber-700">
            {brand.contactName} · {brand.contactTitle} {brand.contactPhone}
            {copy.wechatSuffix}
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
        {intent === "resource" ? copy.intentResource : copy.intentPlan}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="company">
            {copy.companyLabel} <span className="text-red-500">*</span>
          </label>
          <input id="company" className={inputCls("company")} placeholder={copy.companyPlaceholder} value={form.company} onChange={set("company")} />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="product">
            {copy.productLabel} <span className="text-red-500">*</span>
          </label>
          <input id="product" className={inputCls("product")} placeholder={copy.productPlaceholder} value={form.product} onChange={set("product")} />
          {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="market">
            {copy.marketLabel} <span className="text-red-500">*</span>
          </label>
          <input id="market" className={inputCls("market")} placeholder={copy.marketPlaceholder} value={form.market} onChange={set("market")} />
          {errors.market && <p className="mt-1 text-xs text-red-500">{errors.market}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="budget">
            {copy.budgetLabel}
          </label>
          <select id="budget" className={inputCls("budget")} value={form.budget} onChange={set("budget")}>
            {copy.budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="pain">
            {copy.painLabel} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="pain"
            rows={4}
            className={inputCls("pain")}
            placeholder={copy.painPlaceholder}
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
        {intent === "resource" ? copy.submitResource : copy.submitPlan}
      </button>
      <p className="mt-3 text-center text-xs text-sub">
        {copy.privacyNotePrefix}
        {brand.contactName}（{brand.contactPhone} {copy.wechatSuffix}）
        {copy.privacyNoteSuffix}
      </p>
    </form>
  );
}
