"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { clientWork } from "@/data/projects";
import { cn } from "@/lib/cn";

/**
 * THE OTC DESK: work done for other companies (websites, internal tools,
 * AI automations), shown as a trade blotter of filled client orders.
 */
export default function ClientDesk() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-trade-bg text-trade-text border-t border-trade-grid overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,196,46,0.035) 0px, rgba(255,196,46,0.035) 1px, transparent 1px, transparent 44px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: framing */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <p className="font-mono text-[11px] text-trade-amber tracking-[0.3em] mb-3">
            ★ THE OTC DESK ★
          </p>
          <h2
            className="font-display font-black headline-leading"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Client <span className="text-trade-amber">mandates.</span>
          </h2>
          <p className="font-headline italic text-trade-muted text-lg md:text-xl mt-4 leading-snug max-w-[42ch]">
            Off-exchange work: websites, internal tools and AI automations I
            build for companies around Spain. They&apos;re not on the index, but
            every order here went out for a real client.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-px bg-trade-grid border border-trade-grid font-mono">
            {[
              ["ORDERS", String(clientWork.length)],
              ["FILLED", String(clientWork.length)],
              ["REGION", "ES"],
            ].map(([k, v]) => (
              <div key={k} className="bg-trade-panel px-3 py-3">
                <p className="text-[9.5px] text-trade-muted tracking-[0.2em]">{k}</p>
                <p className="text-xl text-trade-text mt-1">{v}</p>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right: the blotter */}
        <div className="lg:col-span-8">
          <div className="hidden sm:grid grid-cols-12 gap-3 px-4 pb-2 font-mono text-[10px] text-trade-muted tracking-[0.2em] border-b border-trade-grid">
            <span className="col-span-1">#</span>
            <span className="col-span-5">CLIENT</span>
            <span className="col-span-4">MANDATE</span>
            <span className="col-span-2 text-right">STATUS</span>
          </div>

          <ul>
            {clientWork.map((c, i) => {
              const isOpen = open === i;
              return (
                <motion.li
                  key={c.client}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={cn(
                    "border-b border-trade-grid transition-colors",
                    isOpen ? "bg-trade-panel" : "hover:bg-trade-panel/60"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full grid grid-cols-12 gap-3 items-center px-4 py-4 text-left min-h-[44px]"
                  >
                    <span className="col-span-2 sm:col-span-1 font-mono text-[11px] text-trade-muted">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <span className="col-span-10 sm:col-span-5">
                      <span className="block font-display font-bold text-[17px] leading-tight">
                        {c.client}
                      </span>
                      <span className="block font-mono text-[10.5px] text-trade-muted tracking-wider mt-0.5">
                        {c.where}
                      </span>
                    </span>
                    <span className="col-span-8 col-start-3 sm:col-start-auto sm:col-span-4 font-mono text-[11px] text-trade-amber tracking-wider">
                      {c.kind}
                    </span>
                    <span className="col-span-2 flex justify-end items-center gap-2">
                      <span className="font-mono text-[10px] text-trade-up border border-trade-up/50 px-1.5 py-0.5 tracking-wider">
                        FILLED
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="text-trade-muted text-lg leading-none hidden sm:inline"
                      >
                        +
                      </motion.span>
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 sm:pl-[calc(8.333%+1.75rem)] grid gap-3">
                      <p className="font-body text-[15px] text-trade-text leading-relaxed max-w-[65ch]">
                        {c.what}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] text-trade-text bg-trade-grid/50 border border-trade-grid px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
