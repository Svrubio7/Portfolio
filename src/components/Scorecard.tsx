"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

const trendLabel: Record<string, string> = {
  rising: "▲",
  dev: "◆",
  stable: "▬",
  underperform: "▼",
  delisted: "✕",
};

const trendColor: Record<string, string> = {
  rising: "text-emerald-700",
  dev: "text-blue-700",
  stable: "text-amber-700",
  underperform: "text-rose-700",
  delisted: "text-ink-faded line-through",
};

export default function Scorecard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="border-2 border-ink bg-paper p-4"
    >
      <div className="flex justify-between items-baseline border-b-2 border-ink pb-2 mb-3">
        <p className="smcp text-[11px] text-tribune-red font-bold">TODAY&apos;S SCORECARD</p>
        <p className="font-mono text-[10px] text-ink-soft">CLOSING PRINT</p>
      </div>
      <table className="w-full font-mono text-[12px]">
        <thead>
          <tr className="text-ink-soft border-b border-ink/30">
            <th className="text-left py-1 font-normal">SYM</th>
            <th className="text-right py-1 font-normal">PRICE</th>
            <th className="text-right py-1 font-normal">CHG</th>
            <th className="text-center py-1 font-normal w-6"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <motion.tr
              key={p.ticker}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="border-b border-ink/10"
            >
              <td className={cn("py-1 font-bold", trendColor[p.trend])}>
                ${p.ticker}
              </td>
              <td className={cn("text-right py-1", trendColor[p.trend])}>
                {p.trend === "delisted" ? "—" : p.price.toFixed(2)}
              </td>
              <td className={cn("text-right py-1", trendColor[p.trend])}>
                {p.trend === "delisted"
                  ? "DLST"
                  : `${p.changePct > 0 ? "+" : ""}${p.changePct.toFixed(1)}%`}
              </td>
              <td className={cn("text-center py-1", trendColor[p.trend])}>
                {trendLabel[p.trend]}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <p className="font-mono text-[10px] text-ink-soft mt-3 italic">
        ▲ rising · ◆ dev · ▬ stable · ▼ underperform · ✕ delisted
      </p>
    </motion.div>
  );
}
