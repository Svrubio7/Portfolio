"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Masthead from "@/components/Masthead";
import StockTicker from "@/components/StockTicker";

export default function FrontPage() {
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
          Verdugo opens portfolio to public after years of speculation.
        </motion.h2>

        {/* Deck (subhead) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="col-span-12 font-headline italic text-ink-soft text-xl md:text-2xl leading-snug border-t-2 border-b-2 border-ink py-3"
        >
          ML engineer goes live with diversified holdings — bullish on study tech, bearish
          on government efficiency. Markets respond favourably; analyst declines comment
          but “smiles knowingly.”
        </motion.p>

        {/* Byline */}
        <p className="col-span-12 smcp text-[12px] text-ink-soft -mt-4">
          BY THE EDITORIAL DESK · MADRID · <span suppressHydrationWarning>{new Date().toLocaleDateString("en-GB").toUpperCase()}</span>
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
              MADRID — In an unexpected move that has shocked exactly nobody who knows
              him, 21-year-old machine learning engineer Sergio Verdugo Rubio today opened
              his project portfolio to public viewing. The site, valued by Verdugo himself
              at <em>“somewhere between zero and priceless,”</em> was promptly listed on
              what he calls <strong>The Verdugo Index ($SVR)</strong>.
            </p>
            <p>
              A bachelor&apos;s student in Computer Science and Artificial Intelligence at
              IE University Madrid, Verdugo&apos;s holdings span <strong>ten distinct
              positions</strong> across study tech, sports analytics, real estate, and
              what he describes as “one or two regrettable bets I refuse to delete from
              the books.”
            </p>
            <p>
              Headline holdings include <strong>Brainy Buddy ($BRAINY)</strong>, an AI
              study planner he built from zero to production;{" "}
              <strong>Casa del Sol Holidays ($CASA)</strong>, a live short-term rental
              platform serving real customers; and <strong>SocialMedia AI ($SOCIAL)</strong>,
              an unfinished SaaS he describes as “one of my biggest projects, currently
              aging like a fine wine.”
            </p>
            <p>
              Not every position is a winner. Two assets — <strong>$DEGU</strong> (a
              government corruption tracker that drew real traffic before hosting bills
              proved unsustainable) and <strong>$ETERNAL</strong> (a privacy-first memory
              vault) — are listed as DELISTED. Verdugo refuses to remove them. “The losses
              are part of the track record,” he said.
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
              $SVR <span className="text-trade-up" style={{ color: "#0a7a35" }}>▲ 8.42%</span>
            </p>
            <p className="font-mono text-[12px] text-ink-soft mt-2 leading-relaxed">
              INDEX 1,247.83 · OPEN 1,150.32 · HIGH 1,289.40
              <br />
              VOLUME — 10 HOLDINGS · BREADTH — 6/10 ADVANCING
            </p>
          </div>

          {/* INSIDE THIS EDITION */}
          <nav className="border-y-2 border-ink py-4">
            <p className="smcp text-[11px] font-bold text-tribune-red mb-3">
              INSIDE THIS EDITION
            </p>
            <ol className="font-headline text-ink space-y-2 text-[15px]">
              {[
                ["§1", "BUSINESS & MARKETS", "The Trading Floor"],
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
              “I eat my own cooking. I trust my portfolio with my own money.”
            </p>
            <footer className="smcp text-[11px] text-ink-soft mt-2">
              — VERDUGO, ON HIS PERSONAL TOOL <strong>FINANCEHUB</strong>
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
