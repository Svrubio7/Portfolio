"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/data/projects";
import MiniChart from "./MiniChart";
import { cn } from "@/lib/cn";

const trendBadge: Record<string, string> = {
  rising: "▲ RISING",
  dev: "◆ DEV",
  stable: "▬ STABLE",
  underperform: "▼ UNDER",
  delisted: "✕ DELISTED",
};

const trendColor: Record<string, string> = {
  rising: "text-trade-up",
  dev: "text-blue-400",
  stable: "text-trade-amber",
  underperform: "text-trade-down",
  delisted: "text-trade-muted",
};

export default function StockCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const tc = trendColor[project.trend];

  return (
    <>
      <motion.button
        layout
        type="button"
        onClick={() => setExpanded(true)}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className={cn(
          "group relative text-left bg-trade-panel border border-trade-grid hover:border-trade-amber/60 transition-colors p-4 flex flex-col gap-3",
          project.trend === "delisted" && "opacity-75"
        )}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className={cn("font-mono font-bold text-lg", tc)}>
              ${project.ticker}
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className={cn(
                "font-mono text-[10px] tracking-wider px-1.5 py-0.5 border",
                tc,
                "border-current"
              )}
            >
              {trendBadge[project.trend]}
            </span>
            {project.privateRepo && (
              <span className="font-mono text-[9px] text-trade-muted tracking-wider">
                🔒 PRIVATE
              </span>
            )}
          </div>
        </div>

        {/* Name + tagline */}
        <div>
          <p className="font-display font-bold text-trade-text text-base leading-tight">
            {project.name}
          </p>
          <p className="font-headline italic text-trade-muted text-[12.5px] leading-snug mt-0.5">
            {project.oneLiner}
          </p>
        </div>

        {/* Mini chart */}
        <div className="-mx-1 mt-auto">
          <MiniChart trend={project.trend} ticker={project.ticker} />
        </div>

        {/* Price + change row */}
        <div className="flex items-center justify-between font-mono text-[12px] border-t border-trade-grid pt-2.5">
          <div>
            <p className="text-trade-muted text-[10px] tracking-wider">PRICE</p>
            <p className="text-trade-text text-base">
              {project.trend === "delisted" ? "—" : project.price.toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-trade-muted text-[10px] tracking-wider">CHG</p>
            <p className={cn("text-base", tc)}>
              {project.trend === "delisted"
                ? "DELISTED"
                : `${project.changePct > 0 ? "+" : ""}${project.changePct.toFixed(1)}%`}
            </p>
          </div>
        </div>

        {/* Hover hint */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-trade-amber/0 group-hover:bg-trade-amber/40 transition-colors" />
      </motion.button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-trade-panel border border-trade-grid max-w-2xl w-full p-6 md:p-8 my-12"
            >
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Close"
                className="absolute top-3 right-3 text-trade-muted hover:text-trade-text transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="flex items-baseline gap-3 flex-wrap">
                <span className={cn("font-mono font-bold text-3xl", tc)}>
                  ${project.ticker}
                </span>
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-wider px-2 py-0.5 border",
                    tc,
                    "border-current"
                  )}
                >
                  {trendBadge[project.trend]}
                </span>
                <span className="ml-auto font-mono text-[11px] text-trade-muted">
                  {project.sector}
                </span>
              </div>

              <h2 className="font-display font-bold text-trade-text text-2xl md:text-3xl mt-2">
                {project.name}
              </h2>
              <p className="font-headline italic text-trade-amber text-base mt-1">
                {project.oneLiner}
              </p>

              <div className="my-6">
                <MiniChart
                  trend={project.trend}
                  ticker={project.ticker}
                  height={120}
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[11px] border-y border-trade-grid py-3">
                {[
                  ["PRICE", project.trend === "delisted" ? "—" : project.price.toFixed(2)],
                  [
                    "CHG",
                    project.trend === "delisted"
                      ? "DELISTED"
                      : `${project.changePct > 0 ? "+" : ""}${project.changePct.toFixed(1)}%`,
                  ],
                  ["MKT CAP", project.marketCap],
                  ["VOLUME", project.volume],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-trade-muted text-[10px] tracking-wider">
                      {label}
                    </p>
                    <p className={cn("mt-0.5", label === "CHG" ? tc : "text-trade-text")}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-trade-text font-body text-[15px] leading-relaxed mt-5">
                {project.description}
              </p>

              {project.story && (
                <p className="text-trade-amber/90 font-headline italic text-[14px] mt-4 border-l-2 border-trade-amber/40 pl-3">
                  {project.story}
                </p>
              )}

              <div className="mt-5">
                <p className="text-trade-muted text-[10px] tracking-wider mb-2 font-mono">
                  HIGHLIGHT
                </p>
                <p className="text-trade-text font-body text-[14px]">
                  {project.highlight}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-trade-muted text-[10px] tracking-wider mb-2 font-mono">
                  STACK
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-trade-text bg-trade-grid/50 border border-trade-grid px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-trade-up/15 border border-trade-up/60 text-trade-up px-4 py-2 font-mono text-[12px] hover:bg-trade-up hover:text-trade-bg transition-colors"
                  >
                    OPEN LIVE SITE ↗
                  </a>
                )}
                {project.github &&
                  (project.privateRepo ? (
                    <span
                      className="inline-flex items-center gap-2 bg-trade-grid/30 border border-trade-grid text-trade-muted px-4 py-2 font-mono text-[12px] cursor-not-allowed select-none"
                      title="Source code is private — happy to walk through it on request"
                    >
                      🔒 PRIVATE REPO
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-trade-grid/30 border border-trade-grid text-trade-text px-4 py-2 font-mono text-[12px] hover:bg-trade-text hover:text-trade-bg transition-colors"
                    >
                      GITHUB ↗
                    </a>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
