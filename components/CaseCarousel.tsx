"use client";

import { useEffect, useState } from "react";
import type { JointCase } from "@/lib/cooperation";

const INTERVAL = 5000;
const DURATION = 700;

/** 案例轮播：一个案例一行，自动循环切换 */
export default function CaseCarousel({ cases }: { cases: JointCase[] }) {
  const count = cases.length;
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);

  // 自动播放：多复制一张首图，播完无缝回到起点
  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => setIndex((v) => v + 1), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, count]);

  useEffect(() => {
    if (index !== count) return;
    const id = window.setTimeout(() => {
      setAnimated(false);
      setIndex(0);
    }, DURATION);
    return () => window.clearTimeout(id);
  }, [index, count]);

  useEffect(() => {
    if (animated) return;
    const raf = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  if (count === 0) return null;

  const slides = count > 1 ? [...cases, cases[0]] : cases;
  const active = index % count;

  return (
    <div>
      <div
        className="overflow-hidden rounded-[14px] ring-1 ring-line"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`flex ${animated ? "transition-transform ease-out" : ""}`}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transitionDuration: `${DURATION}ms`,
          }}
        >
          {slides.map((c, i) => (
            <article key={`${c.title}-${i}`} className="w-full shrink-0">
              <div className="grid md:grid-cols-[240px_1fr]">
                <div className="flex items-center justify-center p-5 md:p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`${c.title} · ${c.subtitle}`}
                    className="h-auto max-h-64 w-auto max-w-full rounded-[10px] object-contain ring-1 ring-line md:max-h-[300px]"
                  />
                </div>
                <div className="flex flex-col bg-white p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 ring-1 ring-brand-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-brand-900 md:text-2xl">{c.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-sub">{c.subtitle}</p>

                  <dl className="mt-4 flex-1 space-y-3 border-t border-line pt-4">
                    {c.detail.map((d) => (
                      <div key={d.label} className="grid gap-1 sm:grid-cols-[76px_1fr] sm:gap-2">
                        <dt className="text-xs font-bold text-amber-700">{d.label}</dt>
                        <dd className="text-sm leading-relaxed text-sub">{d.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex items-end gap-2 rounded-[10px] bg-brand-900 px-5 py-4 text-white">
                    <span className="text-2xl font-black leading-none text-amber-400 md:text-3xl">
                      {c.highlight.value}
                    </span>
                    <span className="text-sm font-bold text-amber-400">{c.highlight.unit}</span>
                    <span className="ml-auto text-right text-xs leading-relaxed text-brand-100">
                      {c.highlight.note}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {cases.map((c, i) => (
            <button
              key={c.title}
              type="button"
              aria-label={`查看案例：${c.title}`}
              aria-current={active === i}
              onClick={() => {
                setAnimated(true);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? "w-8 bg-brand-900" : "w-4 bg-line hover:bg-brand-400"
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-bold tracking-wide text-sub">
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
