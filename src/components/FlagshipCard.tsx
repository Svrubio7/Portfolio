"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { flagship as q } from "@/data/projects";
import MiniChart from "./MiniChart";

/** The loop Quetzal runs on its own, drawn as a ring of stages. */
const LOOP = ["RESEARCH", "WRITE", "MAKE", "CHECK", "SCHEDULE", "PUBLISH", "LEARN"];

const PILLARS = [
  {
    k: "VIDEO",
    v: "A reasoning model plans the edit decision list; Remotion renders it. No model touches the pixels.",
  },
  {
    k: "LEARNING",
    v: "Contextual bandits trained only on consented first-party metrics from each account.",
  },
  {
    k: "SAFETY",
    v: "Fails closed with typed errors, de-AI linting on every caption, and a human approval queue.",
  },
  {
    k: "TENANCY",
    v: "Row-level security in Postgres, app-level tenant checks, and OAuth tokens stored in Supabase Vault.",
  },
];

export default function FlagshipCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden border border-trade-up/50 bg-trade-panel mb-6"
      style={{
        boxShadow: "0 0 0 1px rgba(0,255,135,0.08), 0 30px 80px -30px rgba(0,255,135,0.25)",
      }}
    >
      {/* Emerald glow, Quetzal's brand colour */}
      <div
        className="absolute -top-1/3 -right-1/4 w-[70%] h-[140%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,111,79,0.35) 0%, transparent 65%)",
        }}
      />

      {/* Header strip */}
      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-trade-grid px-5 sm:px-7 py-2.5 font-mono text-[10px] tracking-[0.25em]">
        <span className="text-trade-amber">★ FLAGSHIP HOLDING ★</span>
        <span className="text-trade-muted">FOUNDER POSITION · LARGEST WEIGHT ON THE BOOK</span>
        <span className="ml-auto flex items-center gap-2 text-trade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-trade-up animate-pulse" />
          {q.status}
        </span>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 sm:px-7 py-7">
        {/* Left: identity + pitch */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-white overflow-hidden">
              <Image src={q.logo!} alt="Quetzal logo" fill sizes="64px" className="object-contain p-2" />
            </div>
            <div>
              <p className="font-mono font-bold text-trade-up text-2xl sm:text-3xl leading-none">
                ${q.ticker}
              </p>
              <p className="font-mono text-[11px] text-trade-muted tracking-wider mt-1">
                {q.price.toFixed(2)}{" "}
                <span className="text-trade-up">▲ +{q.changePct.toFixed(1)}%</span>
              </p>
            </div>
          </div>

          <div>
            <h3
              className="font-display font-black text-trade-text headline-leading"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
            >
              {q.name}
            </h3>
            <p className="font-headline italic text-trade-amber text-xl sm:text-2xl mt-1">
              {q.oneLiner}
            </p>
          </div>

          <p className="font-body text-trade-text text-[16px] leading-[1.65] max-w-[62ch]">
            {q.description}
          </p>
          <p className="font-headline italic text-trade-muted text-[15px] leading-snug border-l-2 border-trade-up/50 pl-3 max-w-[62ch]">
            {q.story}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-trade-grid border border-trade-grid">
            {q.stats!.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="bg-trade-panel px-3 py-3"
              >
                <p className="font-mono text-[9.5px] text-trade-muted tracking-[0.2em]">{s.label}</p>
                <p className="font-mono text-trade-text text-lg mt-1 leading-tight">{s.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={q.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-trade-up text-trade-bg px-5 py-3 font-mono text-[12px] tracking-wider font-bold hover:bg-trade-text transition-colors min-h-[44px]"
            >
              VISIT QUETZALTECH.ES ↗
            </a>
            <span
              className="inline-flex items-center gap-2 border border-trade-grid text-trade-muted px-4 py-3 font-mono text-[12px] select-none min-h-[44px]"
              title="Source code is private. Happy to walk through it on request."
            >
              🔒 PRIVATE REPO
            </span>
          </div>
        </div>

        {/* Right: the loop + chart + pillars */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="border border-trade-grid bg-trade-bg/60 p-4">
            <p className="font-mono text-[10px] text-trade-muted tracking-[0.25em] mb-3">
              THE AUTOPILOT LOOP
            </p>
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[11px]">
              {LOOP.map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <motion.span
                    initial={{ opacity: 0.35 }}
                    animate={{
                      opacity: [0.35, 1, 0.35],
                      borderColor: [
                        "rgba(31,33,38,1)",
                        "rgba(0,255,135,0.8)",
                        "rgba(31,33,38,1)",
                      ],
                    }}
                    transition={{
                      duration: LOOP.length * 0.5,
                      times: [0, 0.5 / LOOP.length, 1 / LOOP.length],
                      delay: i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 0,
                    }}
                    className="border px-2 py-1 text-trade-text"
                  >
                    {step}
                  </motion.span>
                  <span className="text-trade-muted">{i === LOOP.length - 1 ? "↺" : "→"}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 -mx-1">
              <MiniChart trend="rising" ticker={q.ticker} height={90} />
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.k}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="border-l-2 border-trade-up/60 pl-3"
              >
                <p className="font-mono text-[10px] text-trade-up tracking-[0.25em]">{p.k}</p>
                <p className="font-body text-[13px] text-trade-muted leading-snug mt-1">{p.v}</p>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {q.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] text-trade-text bg-trade-grid/50 border border-trade-grid px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
