"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ContinuedMarker from "@/components/ContinuedMarker";

export default function SportsPage() {
  return (
    <section className="relative min-h-screen paper-texture">
      <PageHeader page="§2" section="SPORTS & LIFESTYLE" pageNumber={3} />

      <article className="mx-auto max-w-[1200px] px-4 sm:px-6 pb-10 flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-8">
        <div className="col-span-12 flex justify-between items-end">
          <p className="smcp text-[11px] text-tribune-red font-bold">
            §2 · SPORTS &amp; LIFESTYLE
          </p>
          <p className="smcp text-[11px] text-ink-soft hidden sm:block">
            FEATURE — WEEKEND EDITION
          </p>
        </div>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 font-display font-black text-ink headline-leading"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          Verdugo Declares Football the Love, Tennis the Discipline, Tarifa the
          Religion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 font-headline italic text-ink-soft text-lg md:text-xl leading-snug border-t-2 border-b-2 border-ink py-3"
        >
          An athletic profile of the analyst — from Málaga sun to Madrid courts
          to the wind-blown Strait of Gibraltar. Three sports, one common
          thread: long obsessions, quietly maintained.
        </motion.p>

        <p className="col-span-12 smcp text-[12px] text-ink-soft -mt-4">
          BY THE LIFESTYLE DESK · MÁLAGA / TARIFA / MADRID
        </p>

        {/* Triptych of character photos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              src: "/characters/footballer.png",
              caption: "ON THE PITCH",
              sub: "Lifelong fan, Spain national team",
            },
            {
              src: "/characters/tennis.png",
              caption: "ON THE COURT",
              sub: "Tennis at a high level since childhood",
            },
            {
              src: "/characters/windsurfer.png",
              caption: "ON THE WATER",
              sub: "Two summers as an instructor in Tarifa",
            },
          ].map((p) => (
            <figure key={p.caption} className="relative">
              <div className="relative w-full aspect-square bg-paper-deep border-2 border-ink overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-contain p-3"
                />
              </div>
              <figcaption className="mt-2 text-center">
                <p className="smcp text-[11px] text-tribune-red font-bold">
                  {p.caption}
                </p>
                <p className="font-headline italic text-ink-soft text-[13px]">
                  {p.sub}
                </p>
              </figcaption>
            </figure>
          ))}
        </motion.div>

        {/* Body — 3 sport sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-8 grid grid-cols-1 gap-6"
        >
          <div className="font-body text-[17px] leading-[1.55] text-ink space-y-4">
            <p className="dropcap">
              ATHLETIC fluency, friends say, is what gives the analyst his
              edge. Verdugo, who grew up in Málaga and now studies in Madrid,
              has spent more weekends on a pitch, a baseline, or a board than
              most ML engineers spend in front of a monitor. He insists this
              is unrelated. Colleagues are not so sure.
            </p>

            <h3 className="font-display font-black text-ink text-2xl pt-3 smcp tracking-wide">
              ⚽ The Football Years
            </h3>
            <p>
              First sport, longest love. Verdugo is a lifelong football fan in
              the way that only Spaniards born under the right shade of sun can
              be. He follows match days with the kind of devotion that puts
              calendar reminders to shame; he has, on at least one
              well-documented occasion, optimised his university schedule
              around fixtures.
            </p>
            <p>
              The obsession leaks productively into work. <em>ProScout</em>{" "}
              ($PSCOUT) and <em>PremierBot</em> ($PREMIER) — both ML projects
              listed on the Verdugo Index — are direct outputs of an analyst
              who could not stop asking, &ldquo;but <em>statistically</em>,
              who should this team have signed?&rdquo;
            </p>

            <h3 className="font-display font-black text-ink text-2xl pt-3 smcp tracking-wide">
              🎾 The Tennis Discipline
            </h3>
            <p>
              Where football is the heart, tennis is the temperament. Verdugo
              has played tennis at a high level since childhood — long enough
              that the rhythm of footwork, racket prep, and between-point
              ritual has become, in his own words, &ldquo;the quietest part of
              the day.&rdquo;
            </p>
            <p>
              The discipline shows up in his code: the bachelor&apos;s thesis,{" "}
              <strong>Tennis-Match-Length</strong> ($TENNIS), is a
              68,803-match dataset and a point-level Monte Carlo simulator
              dressed up as a final-year project. It exists because someone
              who has spent years on a baseline cannot, in good conscience,
              let the question &ldquo;how long is this match going to
              take?&rdquo; remain unanswered.
            </p>

            <h3 className="font-display font-black text-ink text-2xl pt-3 smcp tracking-wide">
              🌊 The Tarifa Religion
            </h3>
            <p>
              For two consecutive summers, the analyst was not an analyst at
              all. He was a windsurf instructor in <strong>Tarifa</strong>,
              the southernmost municipality of mainland Spain — a town
              defined less by its size than by the relentless Levante and
              Poniente winds that shape its coastline.
            </p>
            <p>
              Sources close to Verdugo say he speaks of Tarifa with the
              vocabulary of a believer rather than a tourist. The board, the
              sail, and the chop of the Strait of Gibraltar are, for him, the
              place where the noise stops. &ldquo;You cannot think about
              gradient descent on a wave,&rdquo; he is reported to have said.
              Analysts believe this is the point.
            </p>

            <p className="text-ink-soft italic pt-2">
              Continued on §3 — PROFILE &amp; CLASSIFIEDS ↓
            </p>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:col-span-4 space-y-6"
        >
          {/* Stat block — sports résumé */}
          <div className="border-2 border-ink p-5 bg-paper-deep">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-3">
              ATHLETIC RÉSUMÉ
            </p>
            <dl className="font-mono text-[12px] text-ink space-y-2 leading-relaxed">
              {[
                ["Football", "Lifelong fan · La Liga literate"],
                ["Tennis", "High level · lifelong on the baseline"],
                ["Windsurf", "Tarifa instructor (2 summers, 2020+)"],
                ["Padel", "Casual · &gt; 100 matches"],
                ["Other", "Anything that involves a ball or wind"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col sm:flex-row sm:gap-3 border-b border-ink/15 pb-2"
                >
                  <dt className="font-bold smcp text-[11px] tracking-wide sm:w-24 shrink-0 mb-1 sm:mb-0">
                    {k}
                  </dt>
                  <dd
                    className="text-ink-soft flex-1"
                    dangerouslySetInnerHTML={{ __html: v }}
                  />
                </div>
              ))}
            </dl>
          </div>

          {/* Geography map */}
          <div className="border border-ink p-4 bg-paper">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-2">
              GEOGRAPHY OF AN ANALYST
            </p>
            <div className="space-y-2 text-[13px] font-body">
              <p className="border-l-2 border-ink pl-3">
                <strong className="font-display">Málaga</strong> —{" "}
                <span className="italic text-ink-soft">where it begins.</span>
              </p>
              <p className="border-l-2 border-ink pl-3">
                <strong className="font-display">Tarifa</strong> —{" "}
                <span className="italic text-ink-soft">
                  where the noise stops.
                </span>
              </p>
              <p className="border-l-2 border-ink pl-3">
                <strong className="font-display">Madrid</strong> —{" "}
                <span className="italic text-ink-soft">where the work is.</span>
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-tribune-red pl-4 py-2 bg-paper-deep/40 p-4">
            <p className="font-display italic text-ink text-2xl leading-tight">
              &ldquo;You cannot think about gradient descent on a wave.&rdquo;
            </p>
            <footer className="smcp text-[11px] text-ink-soft mt-2">
              — VERDUGO, FROM THE TARIFA YEARS
            </footer>
          </blockquote>

          {/* Sport-projects index */}
          <div className="border-y-2 border-ink py-3">
            <p className="smcp text-[11px] font-bold text-tribune-red mb-2">
              PROJECTS THIS SECTION REFERENCES
            </p>
            <ul className="font-mono text-[12px] text-ink space-y-1.5">
              {[
                ["$PSCOUT", "ProScout — football scouting ML"],
                ["$PREMIER", "PremierBot — Premier League stats"],
                ["$TENNIS", "Bachelor thesis — tennis match length"],
              ].map(([sym, desc]) => (
                <li
                  key={sym}
                  className="flex justify-between gap-3 border-b border-dotted border-ink/30 pb-1.5"
                >
                  <span className="font-bold">{sym}</span>
                  <span className="text-right text-ink-soft text-[11.5px] flex-1">
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </article>

      <ContinuedMarker next="§3 · PROFILE & CLASSIFIEDS" />
    </section>
  );
}
