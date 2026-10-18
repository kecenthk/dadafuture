"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

/** 右侧微信浮窗 + 返回顶部 */
export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-3 bottom-20 z-40 flex flex-col items-center gap-2 md:right-5 md:bottom-24">
      <div className="relative">
        {showTip && (
          <div className="absolute right-full top-1/2 mr-2 w-52 -translate-y-1/2 rounded-[10px] bg-white p-3 text-xs leading-relaxed text-ink shadow-[0_8px_24px_rgba(22,50,58,0.12)] ring-1 ring-line">
            <p className="font-semibold text-brand-800">微信咨询 · {BRAND.contactName}</p>
            <p className="mt-1 text-base font-bold tracking-wide text-amber-700">
              {BRAND.contactPhone}
            </p>
            <p className="mt-1 text-sub">微信同号，备注「出海方案」优先通过</p>
          </div>
        )}
        <button
          type="button"
          onClick={() => setShowTip(!showTip)}
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_8px_24px_rgba(0,128,144,0.28)] transition hover:bg-brand-800"
          aria-label="微信咨询"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <span className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 text-[10px] font-medium text-sub">
          微信咨询
        </span>
      </div>
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-white shadow-[0_4px_16px_rgba(22,50,58,0.2)] transition hover:bg-brand-800"
          aria-label="返回顶部"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
