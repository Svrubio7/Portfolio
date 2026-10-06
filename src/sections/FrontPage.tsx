"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Masthead from "@/components/Masthead";
import StockTicker from "@/components/StockTicker";
import { useTodayString } from "@/lib/useToday";
import { breadth, flagship, indexQuotes } from "@/data/projects";

export default function FrontPage() {
  const todayShort = useTodayString({
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const b = breadth();
  return (
    <section className="relative min-h-screen paper-texture">
      <Masthead />

      <StockTicker variant="paper" />

      <article className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16 flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-8">
        {/* Section labels above headline */}
        <div className="col-span-12 flex justify-between items-end">
          <p className="smcp text-[11px] text-tribune-red font-bold">
            ★ FRONT PAGE · TODAY&apos;S EDITION ★
          </p>
          <p className="smcp text-[11px] text-ink-soft hidden sm:block">
            PRICE: PAY ATTENTION
          </p>
        </div>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 font-display font-black text-ink headline-leading"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
        >
          Verdugo bets the book on Quetzal.
        </motion.h2>

        {/* Deck (subhead) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="col-span-12 font-headline italic text-ink-soft text-xl md:text-2xl leading-snug border-t-2 border-b-2 border-ink py-3"
        >
          Founder goes all-in on an AI social media autopilot for small businesses,
          takes an AI engineering seat at Vidalytics, and keeps filling client orders on
          the side. Markets respond favourably; analyst declines comment but “smiles
          knowingly.”
        </motion.p>

        {/* Byline */}
        <p className="col-span-12 smcp text-[12px] text-ink-soft -mt-4">
          BY THE EDITORIAL DESK · MADRID · <span suppressHydrationWarning>{todayShort}</span>
        </p>

        {/* Lead column with photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:col-span-7 grid grid-cols-1 gap-6"
        >
          {/* Photo with caption */}
          <figure className="relative">
            <div className="relative w-full aspect-square md:aspect-[5/4] bg-paper-deep border border-ink overflow-hidden max-w-[18rem] sm:max-w-none mx-auto md:mx-0">
              <Image
                src="/characters/casual.png"
                alt="The analyst at his desk"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-4"
                priority
              />
            </div>
            <figcaption className="mt-2 text-[12px] italic text-ink-soft border-l-2 border-ink pl-3">
              <strong className="not-italic smcp text-ink">PICTURED:</strong> The analyst
              at his desk. “I trust my own portfolio,” he said, sipping a coffee that was
              described by witnesses as “his fourth of the morning.”
            </figcaption>
          </figure>

          {/* Lead body */}
          <div className="font-body text-[17px] leading-[1.55] text-ink space-y-4">
            <p className="dropcap">
              MADRID — In a move that has surprised exactly nobody who knows him,
              22-year-old engineer Sergio Verdugo Rubio has made{" "}
              <strong>Quetzal ($QTZL)</strong> the largest position on{" "}
              <strong>The Verdugo Index ($SVR)</strong>. The startup, which he
              co-founded and engineers end to end, runs a small business&apos;s social
              media on autopilot: it researches, writes, makes the images and reels,
              schedules, publishes across six networks, and learns from what worked.
            </p>
            <p>
              Analysts with access to the repository count more than{" "}
              <strong>2,500 commits since June</strong>. The product is live at{" "}
              <a
                href="https://www.quetzaltech.es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition"
              >
                quetzaltech.es
              </a>
              , and Verdugo, asked to value it, offered only that it was{" "}
              <em>“worth more every week, because it learns.”</em>
            </p>
            <p>
              By day, Verdugo works as an <strong>AI Engineer at Vidalytics</strong>, a
              seat he describes as “learning a ton, every single week.” He also runs a
              small over-the-counter desk: websites and AI automations for clients
              including <strong>Chaparral Golf Club</strong>,{" "}
              <strong>Palacete 10</strong> and <strong>VAMOZ Marbella</strong>.
            </p>
            <p>
              Older holdings remain on the books, led by the live rental platform{" "}
              <strong>Casa del Sol ($CASA)</strong>. So do four delisted positions,
              among them <strong>$BRAINY</strong> and <strong>$DEGU</strong>, which
              Verdugo refuses to remove. “The losses are part of the track record,” he
              said.
            </p>
            <p className="text-ink-soft italic">
              Continued on §1 — BUSINESS &amp; MARKETS, page below ↓
            </p>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="md:col-span-5 space-y-6"
        >
          {/* MARKET PULSE box */}
          <div className="border-2 border-ink p-5 bg-paper-deep">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-2">
              ✦ MARKET PULSE ✦
            </p>
            <p className="font-display font-black text-ink text-3xl leading-none">
              $SVR{" "}
              <span className="text-trade-up" style={{ color: "#0a7a35" }}>
                ▲ {indexQuotes.changePct.toFixed(2)}%
              </span>
            </p>
            <p className="font-mono text-[12px] text-ink-soft mt-2 leading-relaxed">
              INDEX {indexQuotes.current.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              {" · "}OPEN {indexQuotes.open.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              {" · "}HIGH {indexQuotes.high.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              <br />
              VOLUME — {b.total} HOLDINGS · BREADTH — {b.advancing}/{b.total} ADVANCING
              <br />
              LEADER — ${flagship.ticker} ▲ +{flagship.changePct.toFixed(1)}%
            </p>
          </div>

          {/* INSIDE THIS EDITION */}
          <nav className="border-y-2 border-ink py-4">
            <p className="smcp text-[11px] font-bold text-tribune-red mb-3">
              INSIDE THIS EDITION
            </p>
            <ol className="font-headline text-ink space-y-2 text-[15px]">
              {[
                ["§1", "BUSINESS & MARKETS", "Quetzal & The Trading Floor"],
                ["§2", "SPORTS", "Football, Tennis & The Tarifa Years"],
                ["§3", "LIFESTYLE", "Madrid · Tarifa · Málaga"],
                ["§4", "PROFILE", "The Analyst, In His Own Words"],
                ["§5", "CLASSIFIEDS", "Open a Position"],
              ].map(([s, label, desc]) => (
                <li key={s} className="flex justify-between gap-3 border-b border-dotted border-ink/30 pb-2">
                  <span>
                    <span className="font-mono text-ink-soft mr-2">{s}</span>
                    <span className="font-bold smcp text-[13px] tracking-wider">{label}</span>
                    <span className="block text-ink-soft italic text-[14px] ml-7 -mt-0.5">
                      {desc}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </nav>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-tribune-red pl-4 py-2">
            <p className="font-display italic text-ink text-2xl leading-tight">
              “Information beats effort. Authenticity beats polish.”
            </p>
            <footer className="smcp text-[11px] text-ink-soft mt-2">
              — THE FOUNDING DOCTRINE OF <strong>QUETZAL</strong>
            </footer>
          </blockquote>

          {/* Below-the-fold teaser */}
          <div className="border border-ink p-4 bg-paper">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-1">
              ALSO IN TODAY&apos;S EDITION
            </p>
            <p className="font-headline text-[16px] leading-snug text-ink">
              Local man spotted carrying windsurf board in February.{" "}
              <span className="italic text-ink-soft">
                “He&apos;s from Málaga,” witnesses confirmed. — §3
              </span>
            </p>
          </div>
        </motion.aside>

        {/* Continue prompt at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="col-span-12 mt-6 flex flex-col items-center gap-2"
        >
          <p className="smcp text-[12px] text-ink-soft">SCROLL FOR §1 · BUSINESS &amp; MARKETS</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl text-ink"
          >
            ↓
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}
