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

      <article className="mx-auto max-w-[1200px] px-4 sm:px-6 pb-10 flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-8">
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
          Quetzal Leads the Verdugo Book Higher.
        </motion.h2>

        {/* Deck */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="col-span-12 font-headline italic text-ink-soft text-lg md:text-xl leading-snug border-t-2 border-b-2 border-ink py-3"
        >
          Founder position surges on a six-network autopilot; SocialMedia AI absorbed
          into the flagship; client desk fills orders across the Costa del Sol. Four
          delisted assets stay on the board out of principle.
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
              The <strong>Verdugo Index ($SVR)</strong> closed up <strong>13.2%</strong>{" "}
              on the day, carried almost entirely by its founder position.{" "}
              <strong>Quetzal ($QTZL, +41.2%)</strong>, an AI social media autopilot
              for small businesses, now carries the largest weight on the book.
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              The Flagship
            </h3>
            <p>
              Quetzal connects to a business&apos;s Instagram, Facebook, LinkedIn,
              TikTok, X and YouTube, learns the brand once, and then runs the whole
              loop: trend research, platform-native copy, images, carousels and reels,
              safety checks, scheduling, publishing, and learning from the results.
              It is live at{" "}
              <a href="https://www.quetzaltech.es" target="_blank" rel="noopener noreferrer" className="underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition">
                quetzaltech.es
              </a>
              .
            </p>
            <p>
              Verdugo, who co-founded the company and is its engineer and architect,
              built the reels pipeline so that a reasoning model plans an edit decision
              list and Remotion renders it, with <em>no model ever touching the pixels
              directly</em>. The engine improves through contextual bandits trained only
              on each account&apos;s own consented metrics, and the system is designed
              to fail closed. Analysts called the commit history, more than 2,500
              entries since June, &ldquo;frankly alarming.&rdquo;
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Mergers &amp; Acquisitions
            </h3>
            <p>
              <strong>SocialMedia AI ($SOCIAL)</strong>, the video pattern-analysis SaaS
              once described as &ldquo;one of my biggest projects,&rdquo; has been folded
              into $QTZL. Its research into what makes a video perform became the
              starting point for Quetzal.
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              The OTC Desk
            </h3>
            <p>
              Away from the exchange, Verdugo has been filling client orders: a
              five-language site and admin for <strong>Chaparral Golf Club</strong>, a
              corporate-housing site for the heritage villa <strong>Palacete 10</strong>,
              an AI blog studio that researches and drafts articles for{" "}
              <strong>VAMOZ Marbella</strong>, and a rebuild that made{" "}
              <strong>La Montada</strong>&apos;s homepage twelve times lighter.
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Steady Earner
            </h3>
            <p>
              <strong>Casa del Sol Holidays ($CASA)</strong>, a Django + Vue rental
              platform serving real customers at{" "}
              <a href="https://casadelsolholidays.es" className="underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition">
                casadelsolholidays.es
              </a>
              , held its ground. &ldquo;Boring revenue,&rdquo; Verdugo is reported to
              have said, &ldquo;is the best kind.&rdquo;
            </p>

            <h3 className="font-display font-black text-ink text-xl pt-2 smcp">
              Dev-Phase Watch
            </h3>
            <p>
              <strong>Jarvis 2.0 ($JARVIS, +9.6%)</strong>, a voice-first personal agent
              that does real work on your computer and phones you when it needs a
              decision, is in late development with roughly 3,350 automated tests.{" "}
              <strong>FinanceHub ($FINHUB)</strong>, his personal market-analysis
              cockpit, remains the tool he trades from.
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
              Two more positions left the board this year, both still kept on the
              books: <strong>Brainy Buddy ($BRAINY)</strong>, an AI study
              planner he took from zero to production, and <strong>Alcanza
              ($ALCNZ)</strong>, a scholarship matcher for Spanish students. They join{" "}
              <strong>$DEGU</strong>, a government corruption tracker that drew real
              traffic before hosting bills became unsustainable, and{" "}
              <strong>$ETERNAL</strong>, a privacy-first memory vault paused for the same
              reason. Verdugo refuses to delete any of them. <em>&ldquo;The losses are
              part of the track record,&rdquo;</em> he said.
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
              — VERDUGO, ON KEEPING HIS DELISTED POSITIONS ON THE BOARD
            </footer>
          </blockquote>

          {/* Sector breakdown */}
          <div className="border border-ink p-4 bg-paper">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-3">
              SECTOR BREAKDOWN
            </p>
            <div className="space-y-2 font-mono text-[12px] text-ink">
              {[
                { name: "FLAGSHIP · $QTZL", weight: 40, color: "bg-emerald-800" },
                { name: "TECH SAAS", weight: 20, color: "bg-emerald-600" },
                { name: "PERSONAL TOOLS", weight: 12, color: "bg-blue-700" },
                { name: "ACADEMIC ML", weight: 16, color: "bg-amber-700" },
                { name: "DELISTED LEGACY", weight: 12, color: "bg-rose-800" },
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
