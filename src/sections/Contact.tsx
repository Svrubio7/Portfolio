"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sverdugorub@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section className="relative min-h-screen bg-trade-bg text-trade-text overflow-hidden flex flex-col">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 py-24 flex-1 flex flex-col justify-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] text-trade-amber tracking-[0.3em] mb-3"
        >
          ✦ CLOSING BELL · OPEN A POSITION ✦
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black headline-leading"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
        >
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline italic text-trade-muted text-xl md:text-2xl mt-4 max-w-[55ch] leading-snug"
        >
          Recruiter, founder, fellow engineer, or just curious — every position
          on the Verdugo Index is open to a chat.
        </motion.p>

        {/* Contact grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Email — primary */}
          <div className="border border-trade-grid bg-trade-panel p-6 flex flex-col">
            <p className="font-mono text-[10px] text-trade-amber tracking-[0.3em]">
              ★ PRIMARY · BUY ORDER ★
            </p>
            <p className="font-display font-bold text-trade-text text-2xl mt-2">
              Email me
            </p>
            <p className="font-mono text-trade-up text-lg mt-1 break-all">
              sverdugorub@gmail.com
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="mailto:sverdugorub@gmail.com"
                className="inline-flex items-center gap-2 bg-trade-up/15 border border-trade-up/60 text-trade-up px-4 py-2 font-mono text-[12px] hover:bg-trade-up hover:text-trade-bg transition-colors"
              >
                OPEN MAIL ↗
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 border border-trade-grid text-trade-text px-4 py-2 font-mono text-[12px] hover:border-trade-text transition-colors"
              >
                {copied ? "✓ COPIED" : "COPY"}
              </button>
            </div>
          </div>

          {/* GitHub */}
          <div className="border border-trade-grid bg-trade-panel p-6 flex flex-col">
            <p className="font-mono text-[10px] text-trade-muted tracking-[0.3em]">
              CODE · PUBLIC FILINGS
            </p>
            <p className="font-display font-bold text-trade-text text-2xl mt-2">
              GitHub
            </p>
            <p className="font-mono text-trade-text text-lg mt-1">
              github.com/Svrubio7
            </p>
            <a
              href="https://github.com/Svrubio7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 border border-trade-grid text-trade-text px-4 py-2 font-mono text-[12px] hover:border-trade-text hover:bg-trade-grid/50 transition-colors w-max"
            >
              VIEW REPOS ↗
            </a>
          </div>

          {/* LinkedIn */}
          <div className="border border-trade-grid bg-trade-panel p-6 flex flex-col">
            <p className="font-mono text-[10px] text-trade-muted tracking-[0.3em]">
              NETWORK · ANALYST RELATIONS
            </p>
            <p className="font-display font-bold text-trade-text text-2xl mt-2">
              LinkedIn
            </p>
            <p className="font-mono text-trade-text text-[14px] mt-1">
              /in/sergio-verdugo-rubio
            </p>
            <a
              href="https://www.linkedin.com/in/sergio-verdugo-rubio-b54575210/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 border border-trade-grid text-trade-text px-4 py-2 font-mono text-[12px] hover:border-trade-text hover:bg-trade-grid/50 transition-colors w-max"
            >
              CONNECT ↗
            </a>
          </div>

          {/* CV */}
          <div className="border border-trade-grid bg-trade-panel p-6 flex flex-col">
            <p className="font-mono text-[10px] text-trade-muted tracking-[0.3em]">
              PROSPECTUS · 1 PAGE PDF
            </p>
            <p className="font-display font-bold text-trade-text text-2xl mt-2">
              Download CV
            </p>
            <p className="font-mono text-trade-muted text-[14px] mt-1">
              The full prospectus, properly formatted, no surprises.
            </p>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 border border-trade-amber text-trade-amber px-4 py-2 font-mono text-[12px] hover:bg-trade-amber hover:text-trade-bg transition-colors w-max"
            >
              GET PDF ↗
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 border-t border-trade-grid pt-6 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-trade-muted"
        >
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sergio Verdugo Rubio · Madrid · Málaga · Tarifa
          </p>
          <p className="flex items-center gap-3">
            <span>$SVR · ▲ 8.42%</span>
            <span>·</span>
            <span>BUILT WITH NEXT.JS + FRAMER MOTION</span>
            <span>·</span>
            <span className="text-trade-up">MARKET CLOSED</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
