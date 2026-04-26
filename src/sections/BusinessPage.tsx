"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ContinuedMarker from "@/components/ContinuedMarker";
import Scorecard from "@/components/Scorecard";

export default function BusinessPage() {
  return (
    <section className="relative min-h-screen paper-texture">
      <PageHeader page="§1" section="BUSINESS & MARKETS" pageNumber={2} />

      <article className="mx-auto max-w-[1200px] px-6 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Section badge */}
        <div className="col-span-12 flex justify-between items-end">
          <p className="smcp text-[11px] text-tribune-red font-bold">
            §1 · BUSINESS &amp; MARKETS
          </p>
          <p className="smcp text-[11px] text-ink-soft hidden sm:block">
            CLOSING REPORT — TODAY&apos;S SESSION
          </p>
        </div>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 font-display font-black text-ink headline-leading"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
        >
          Mixed Signals Across the Verdugo Book.
        </motion.h2>

        {/* Deck */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="col-span-12 font-headline italic text-ink-soft text-lg md:text-xl leading-snug border-t-2 border-b-2 border-ink py-3"
        >
          Study tech and short-term rentals lead the index higher; government
          efficiency tracker delisted under cost pressure. Two assets quietly removed
          from the board.
        </motion.p>

        {/* Byline */}
        <p className="col-span-12 smcp text-[12px] text-ink-soft -mt-4">
          BY THE MARKETS DESK · MADRID
        </p>

        {/* Main article column */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-7 grid grid-cols-1 gap-6"
        >
          {/* Photo */}
          <figure className="relative">
            <div className="relative w-full aspect-[16/10] bg-paper-deep border border-ink overflow-hidden">
              <Image
                src="/characters/analyst.png"
                alt="The analyst reviewing his book"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="mt-2 text-[12px] italic text-ink-soft border-l-2 border-ink pl-3">
              <strong className="not-italic smcp text-ink">PICTURED:</strong> Verdugo
              reviews the day&apos;s closing prints. The tablet, sources confirm,
              displays his own holdings.
            </figcaption>
          </figure>

          {/* Body */}
          <div className="font-body text-[17px] leading-[1.55] text-ink space-y-4 col-rule">
            <p className="dropcap">
              The <strong>Verdugo Index ($SVR)</strong> closed up <strong>8.42%</strong>{" "}
              on the day, propelled by gains in study tech and short-term rentals
              while two former darlings — <strong>$DEGU</strong> and{" "}
              <strong>$ETERNAL</strong> — were quietly removed from the board.
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Top Movers
            </h3>
            <p>
              Leading the rally was <strong>Brainy Buddy ($BRAINY, +24.6%)</strong>,
              an AI-powered study planner now live at{" "}
              <a
                href="https://brainy-buddy.com"
                className="underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition"
              >
                brainy-buddy.com
              </a>
              . Built from prototype to production, the platform combines a
              deterministic 15-minute slot scheduler with an LLM tool-calling assistant
              — a structure analysts have privately described as &ldquo;rare for a
              one-engineer shop.&rdquo;
            </p>
            <p>
              Verdugo recently shipped an LTI 1.3 multi-tenant extension targeting
              European universities, making the system fully GDPR and AI-Act
              compliant; <em>student names, notably, never enter the language model
              prompt.</em>
            </p>
            <p>
              <strong>Casa del Sol Holidays ($CASA, +18.4%)</strong>, a Django + Vue
              short-term rental platform serving real customers at{" "}
              <a
                href="https://casadelsolholidays.es"
                className="underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition"
              >
                casadelsolholidays.es
              </a>
              , contributed steadily. &ldquo;Boring revenue,&rdquo; Verdugo is reported
              to have said, &ldquo;is the best kind.&rdquo;
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Dev-Phase Watch
            </h3>
            <p>
              Two positions remain under construction. <strong>SocialMedia AI
              ($SOCIAL, +12.7%)</strong> — a SaaS for video pattern analysis, automated
              editing, and multi-platform publishing — is the most ambitious unfinished
              asset on the book. Verdugo describes it as &ldquo;one of my biggest
              projects, currently aging like a fine wine.&rdquo;{" "}
              <strong>FinanceHub ($FINHUB, +7.8%)</strong>, his personal
              market-analysis cockpit, is the tool he trades from when he isn&apos;t
              building portfolios for other people.
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Academic Bench
            </h3>
            <p>
              Two academic deliverables — <strong>ProScout ($PSCOUT)</strong>, a
              football scouting model with multi-output XGBoost and SHAP, and{" "}
              <strong>Tennis-Match-Length ($TENNIS)</strong>, a 68,803-match
              game-prediction model — closed flat. Both shipped clean. Both did their
              job.
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Troubled Assets
            </h3>
            <p>
              Not every position is a winner. <strong>PremierBot ($PREMIER,
              −8.4%)</strong> — Verdugo&apos;s earlier attempt at predicting Premier
              League statistics — is kept on the book &ldquo;for the lessons.&rdquo;
              It was the predecessor of ProScout.
            </p>
            <p>
              <strong>$DEGU</strong>, a government corruption tracker that drew real
              traffic, was delisted when hosting bills became unsustainable.{" "}
              <strong>$ETERNAL</strong>, a privacy-first memory vault with
              zero-knowledge encryption, was paused for the same reason. Verdugo
              refuses to delete them. <em>&ldquo;The losses are part of the track
              record,&rdquo;</em> he said.
            </p>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-5 space-y-6"
        >
          <Scorecard />

          {/* Pull quote */}
          <blockquote className="border-l-4 border-tribune-red pl-4 py-2 bg-paper-deep/40 p-4">
            <p className="font-display italic text-ink text-2xl leading-tight">
              &ldquo;The losses are part of the track record. I refuse to delete them.&rdquo;
            </p>
            <footer className="smcp text-[11px] text-ink-soft mt-2">
              — VERDUGO, ON KEEPING $DEGU AND $ETERNAL ON THE BOARD
            </footer>
          </blockquote>

          {/* Sector breakdown */}
          <div className="border border-ink p-4 bg-paper">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-3">
              SECTOR BREAKDOWN
            </p>
            <div className="space-y-2 font-mono text-[12px] text-ink">
              {[
                { name: "TECH SAAS", weight: 35, color: "bg-emerald-700" },
                { name: "PERSONAL TOOLS", weight: 20, color: "bg-blue-700" },
                { name: "ACADEMIC ML", weight: 25, color: "bg-amber-700" },
                { name: "DELISTED LEGACY", weight: 20, color: "bg-rose-800" },
              ].map((s) => (
                <div key={s.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span>{s.name}</span>
                    <span>{s.weight}%</span>
                  </div>
                  <div className="h-1.5 bg-paper-deep">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.weight}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${s.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editor's note */}
          <div className="border-t-2 border-ink pt-3">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-1">
              EDITOR&apos;S NOTE
            </p>
            <p className="font-headline italic text-ink-soft text-[14px] leading-snug">
              The interactive trading floor — where readers may inspect every position
              in detail — opens later in this edition.
            </p>
          </div>
        </motion.aside>
      </article>

      <ContinuedMarker next="§2 · SPORTS & LIFESTYLE" />
    </section>
  );
}
