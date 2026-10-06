"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects, indexQuotes, breadth, type Project } from "@/data/projects";
import StockTicker from "@/components/StockTicker";
import StockCard from "@/components/StockCard";
import FlagshipCard from "@/components/FlagshipCard";
import { cn } from "@/lib/cn";

const SECTORS = [
  { id: "ALL", label: "ALL HOLDINGS" },
  { id: "TECH", label: "TECH" },
  { id: "PERSONAL", label: "PERSONAL" },
  { id: "ACADEMIC", label: "ACADEMIC" },
  { id: "DELISTED", label: "DELISTED" },
] as const;

type SectorId = (typeof SECTORS)[number]["id"];

export default function TradingFloor() {
  const [sector, setSector] = useState<SectorId>("ALL");

  const inSector = (p: Project) => sector === "ALL" || p.sector === sector;
  const filtered: Project[] = projects.filter((p) => !p.flagship && inSector(p));
  const showFlagship = projects.some((p) => p.flagship && inSector(p));
  const b = breadth();

  return (
    <section className="relative min-h-screen bg-trade-bg text-trade-text">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top ticker */}
      <StockTicker variant="terminal" />

      {/* Hero */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] text-trade-amber tracking-[0.3em] mb-3"
        >
          ★ TRADING FLOOR · LIVE · <span suppressHydrationWarning>{new Date().toLocaleTimeString("en-GB").slice(0, 5)} CET</span> ★
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="font-mono text-[11px] text-trade-amber tracking-[0.25em] mb-2">
              ✦ A PORTFOLIO OF PROJECTS, TRADED AS STOCKS ✦
            </p>
            <h1
              className="font-display font-black text-trade-text headline-leading"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
            >
              <span className="text-trade-up">$SVR</span> Holdings
            </h1>
            <p className="font-body text-trade-muted text-lg mt-3 max-w-[48ch]">
              Every ticker below is a <strong className="text-trade-text">project I&apos;ve built</strong>.
              The biggest position is <strong className="text-trade-up">$QTZL</strong>, the
              startup I co-founded. The rest are live and growing, shipped clean,
              merged into something bigger, or delisted when the hosting bills
              came due. Click any ticker to read the full case study.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="border border-trade-grid bg-trade-panel p-5">
              <div className="flex items-baseline justify-between">
                <p className="text-trade-muted font-mono text-[10px] tracking-[0.2em]">
                  $SVR · INDEX
                </p>
                <p className="text-trade-muted font-mono text-[10px]">
                  {b.total} HOLDINGS
                </p>
              </div>
              <div className="flex items-baseline gap-3 mt-2">
                <p className="font-mono text-trade-up text-4xl font-bold">
                  ▲ {indexQuotes.changePct}%
                </p>
                <p className="font-mono text-2xl text-trade-text">
                  {indexQuotes.current.toFixed(2)}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 font-mono text-[10px]">
                <div>
                  <p className="text-trade-muted tracking-wider">OPEN</p>
                  <p className="text-trade-text">{indexQuotes.open}</p>
                </div>
                <div>
                  <p className="text-trade-muted tracking-wider">HIGH</p>
                  <p className="text-trade-text">{indexQuotes.high}</p>
                </div>
                <div>
                  <p className="text-trade-muted tracking-wider">LOW</p>
                  <p className="text-trade-text">{indexQuotes.low}</p>
                </div>
              </div>
              <p className="font-mono text-[10px] text-trade-muted mt-3 pt-3 border-t border-trade-grid">
                BREADTH — {b.advancing} ADVANCING / {b.stable} STABLE / {b.underperform} UNDERPERFORM
                / {b.acquired} MERGED / {b.delisted} DELISTED
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sector toggle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-2 border-y border-trade-grid py-3"
        >
          <p className="font-mono text-[10px] text-trade-muted tracking-[0.2em] mr-2 self-center">
            FILTER:
          </p>
          {SECTORS.map((s) => (
            <button
              type="button"
              key={s.id}
              onClick={() => setSector(s.id)}
              className={cn(
                "font-mono text-[11px] tracking-wider px-3 py-1 border transition-colors",
                sector === s.id
                  ? "bg-trade-amber text-trade-bg border-trade-amber"
                  : "border-trade-grid text-trade-muted hover:text-trade-text hover:border-trade-text"
              )}
            >
              {s.label} ·{" "}
              {s.id === "ALL"
                ? projects.length
                : projects.filter((p) => p.sector === s.id).length}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        {showFlagship && <FlagshipCard />}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5"
        >
          {filtered.map((p, i) => (
            <StockCard key={p.ticker} project={p} index={i} />
          ))}
        </motion.div>

        {/* Footer scroll-down hint */}
        <div className="mt-20 text-center">
          <p className="font-mono text-[11px] text-trade-muted tracking-[0.2em]">
            ↓ NEXT · THE OTC DESK: CLIENT MANDATES ↓
          </p>
        </div>
      </div>
    </section>
  );
}
