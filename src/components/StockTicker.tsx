"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

type Variant = "paper" | "terminal";

export default function StockTicker({ variant = "paper" }: { variant?: Variant }) {
  const items = [...projects, ...projects]; // duplicate for seamless loop

  const isTerminal = variant === "terminal";

  return (
    <div
      className={cn(
        "w-full overflow-hidden font-mono text-[12px] tracking-wider border-y",
        isTerminal
          ? "bg-trade-bg text-trade-text border-trade-grid"
          : "bg-ink text-paper border-ink"
      )}
    >
      <motion.div
        className="flex whitespace-nowrap py-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {items.map((p, i) => {
          const trendColor = (() => {
            if (p.trend === "rising" || p.trend === "dev") return isTerminal ? "text-trade-up" : "text-emerald-300";
            if (p.trend === "stable") return isTerminal ? "text-trade-amber" : "text-amber-200";
            if (p.trend === "underperform") return isTerminal ? "text-trade-down" : "text-rose-300";
            return "text-ink-faded";
          })();
          const arrow = p.changePct > 0 ? "▲" : p.changePct < 0 ? "▼" : "▬";
          const sign = p.changePct > 0 ? "+" : "";
          return (
            <span key={`${p.ticker}-${i}`} className="px-6 inline-flex items-center gap-2">
              <span className={cn("font-bold", trendColor)}>${p.ticker}</span>
              <span className="opacity-90">
                {p.trend === "delisted" ? "DELISTED" : p.price.toFixed(2)}
              </span>
              {p.trend !== "delisted" && (
                <span className={cn(trendColor)}>
                  {arrow} {sign}
                  {p.changePct.toFixed(2)}%
                </span>
              )}
              <span className="opacity-30">·</span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
