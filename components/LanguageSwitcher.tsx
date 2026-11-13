"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import {
  LANGUAGES,
  LOCALES,
  localizePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n/config";

function FlagCn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#DE2910" />
      <g fill="#FFDE00">
        <path d="M6 2.6l.9 2.7 2.8.02-2.25 1.66.83 2.7L6 8.03 3.72 9.68l.83-2.7L2.3 5.32l2.8-.02z" />
        <path d="M10.6 1.9l.42 1.3 1.36.01-1.09.8.4 1.3-1.09-.8-1.1.8.4-1.3-1.08-.8 1.35-.01z" />
        <path d="M12.1 4.6l.42 1.3 1.36.01-1.09.8.4 1.3-1.09-.8-1.1.8.4-1.3-1.08-.8 1.35-.01z" />
        <path d="M12.1 8l.42 1.3 1.36.01-1.09.8.4 1.3-1.09-.8-1.1.8.4-1.3-1.08-.8 1.35-.01z" />
        <path d="M10.6 11.1l.42 1.3 1.36.01-1.09.8.4 1.3-1.09-.8-1.1.8.4-1.3-1.08-.8 1.35-.01z" />
      </g>
    </svg>
  );
}

function FlagHk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#DE2910" />
      <g transform="translate(15 10)" fill="#fff">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-3.1"
            rx="1.55"
            ry="3.1"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="1.1" fill="#DE2910" />
      </g>
    </svg>
  );
}

function FlagUs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * (20 / 13)} width="30" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="13" height={(20 / 13) * 7} fill="#3C3B6E" />
      <g fill="#fff">
        {[1.4, 3.9, 6.4, 8.9, 11.4].map((x) =>
          [1.3, 3.4, 5.5, 7.6].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" />
          ))
        )}
      </g>
    </svg>
  );
}

const FLAGS: Record<Locale, (p: { className?: string }) => JSX.Element> = {
  zh: FlagCn,
  "zh-HK": FlagHk,
  en: FlagUs,
};

export default function LanguageSwitcher({
  locale,
  label,
  variant = "desktop",
}: {
  locale: Locale;
  label: string;
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const go = (target: Locale) => {
    const clean = stripLocale(pathname || "/");
    const href = localizePath(clean, target);
    const search = typeof window === "undefined" ? "" : window.location.search;
    setOpen(false);
    router.push(`${href}${search}`);
  };

  const CurrentFlag = FLAGS[locale];

  if (variant === "mobile") {
    return (
      <div className="mt-3 border-t border-line pt-3">
        <p className="px-3 text-[11px] font-medium text-sub">{label}</p>
        <div className="mt-2 grid grid-cols-3 gap-1.5 px-3">
          {LOCALES.map((l) => {
            const Flag = FLAGS[l];
            const active = l === locale;
            return (
              <button
                key={l}
                type="button"
                onClick={() => go(l)}
                aria-current={active ? "true" : undefined}
                className={`flex items-center justify-center gap-1.5 rounded-[10px] border px-2 py-2 text-xs font-medium transition ${
                  active
                    ? "border-brand-600 bg-brand-50 text-brand-700"
                    : "border-line text-ink"
                }`}
              >
                <Flag className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/10" />
                {LANGUAGES[l].shortLabel}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative ml-2" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={label}
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-[10px] border border-line px-2.5 py-2 text-xs font-medium text-ink transition hover:border-brand-200 hover:text-brand-700"
      >
        <CurrentFlag className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/10" />
        <span className="whitespace-nowrap">{LANGUAGES[locale].shortLabel}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-[12px] border border-line bg-white p-1 shadow-[0_12px_32px_rgba(0,61,69,0.12)]">
          {LOCALES.map((l) => {
            const Flag = FLAGS[l];
            const active = l === locale;
            return (
              <button
                key={l}
                type="button"
                onClick={() => go(l)}
                aria-current={active ? "true" : undefined}
                className={`flex w-full items-center gap-2 rounded-[8px] px-2.5 py-2 text-left text-xs transition hover:bg-brand-50 ${
                  active ? "font-semibold text-brand-700" : "text-ink"
                }`}
              >
                <Flag className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/10" />
                <span className="flex-1 whitespace-nowrap">{LANGUAGES[l].label}</span>
                {active && <Check className="h-3.5 w-3.5 text-brand-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
