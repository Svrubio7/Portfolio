"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * SPORTS DESK — three panels, one for each sport, each in its own visual world.
 * Scroll naturally moves between them. Each panel is roughly viewport-tall.
 */
export default function SportsDesk() {
  return (
    <section className="relative">
      {/* Section divider — break from trading floor */}
      <div className="bg-trade-bg py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] text-trade-amber tracking-[0.4em]"
        >
          ✦ SECTOR ROTATION ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-trade-text mt-3"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          The Sports Desk.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-headline italic text-trade-muted text-lg mt-3 max-w-[55ch] mx-auto px-6"
        >
          Three sports, three palettes. Where the analyst goes when the markets
          close.
        </motion.p>
      </div>

      <FootballPanel />
      <TennisPanel />
      <TarifaPanel />
    </section>
  );
}

// =====================================================================
// ⚽ Football
// =====================================================================
function FootballPanel() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(160deg, #0a4d1d 0%, #0f7a2e 45%, #0a5320 100%)",
      }}
    >
      {/* Pitch lines — subtle */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent calc(50% - 1px), rgba(255,255,255,0.4) 50%, transparent calc(50% + 1px))," +
            "linear-gradient(to right, transparent calc(50% - 1px), rgba(255,255,255,0.4) 50%, transparent calc(50% + 1px))",
        }}
      />
      {/* Center circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-square rounded-full border-2 border-white/15 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative aspect-[3/4] max-w-md mx-auto md:mx-0"
        >
          <Image
            src="/characters/footballer.png"
            alt="Sergio in football kit"
            fill
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 text-white"
        >
          <p className="smcp text-[12px] text-floodlight tracking-[0.3em] font-bold">
            ⚽ MATCH DAY · STADIUM
          </p>
          <h3
            className="font-display font-black mt-3 leading-[0.92]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Football —<br />
            <span className="italic font-headline font-normal text-floodlight">
              the love.
            </span>
          </h3>
          <p className="font-body text-lg mt-4 max-w-[50ch] leading-relaxed text-white/85">
            First sport. Longest love. The kind of devotion that puts calendar
            reminders to shame, optimises university schedules around fixtures,
            and quietly leaks into ML projects. La Liga literate. Spain national
            team supporter, but spectator of all the good football.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
            {[
              ["▲ $PSCOUT", "ProScout · ML scouting"],
              ["▼ $PREMIER", "PremierBot · the lesson"],
              ["⚽", "Spain · La Liga · all of it"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-2"
              >
                <p className="font-mono text-[12px] font-bold text-floodlight">
                  {k}
                </p>
                <p className="font-body text-[12px] text-white/80 mt-0.5 leading-tight">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// =====================================================================
// 🎾 Tennis
// =====================================================================
function TennisPanel() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(160deg, #f5efe0 0%, #e8d8b8 45%, #d4b890 100%)",
      }}
    >
      {/* Court lines diagonal */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />
      {/* Clay-court tone radial accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, #c84f2d 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 md:order-1 order-2 text-ink"
        >
          <p
            className="smcp text-[12px] tracking-[0.3em] font-bold"
            style={{ color: "#c84f2d" }}
          >
            🎾 ROLAND-GARROS QUIET
          </p>
          <h3
            className="font-display font-black mt-3 leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Tennis —<br />
            <span
              className="italic font-headline font-normal"
              style={{ color: "#c84f2d" }}
            >
              the discipline.
            </span>
          </h3>
          <p className="font-body text-lg mt-4 max-w-[50ch] leading-relaxed text-ink-soft">
            Played at a high level since childhood. Long enough that the rhythm
            of footwork, racket prep, and between-point ritual has become — in
            his own words — &ldquo;the quietest part of the day.&rdquo; The
            discipline tracks: a 68,803-match dataset and a Monte Carlo
            simulator dressed up as a final-year project, on the books as{" "}
            <strong>$TENNIS</strong>.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
            {[
              ["▬ $TENNIS", "Bachelor thesis · 68k matches · Monte Carlo"],
              ["🎾", "Lifelong baseliner · still playing"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border border-ink/30 bg-paper/70 backdrop-blur-sm px-3 py-2"
              >
                <p
                  className="font-mono text-[12px] font-bold"
                  style={{ color: "#c84f2d" }}
                >
                  {k}
                </p>
                <p className="font-body text-[12px] text-ink-soft mt-0.5 leading-tight">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 md:order-2 order-1 relative aspect-[3/4] max-w-md mx-auto md:mx-0"
        >
          <Image
            src="/characters/tennis.png"
            alt="Sergio with tennis racket"
            fill
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-contain drop-shadow-[0_25px_30px_rgba(60,30,10,0.3)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

// =====================================================================
// 🌊 Tarifa / Windsurf
// =====================================================================
function TarifaPanel() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(180deg, #053048 0%, #0a4a6e 45%, #1f7a9c 100%)",
      }}
    >
      {/* Animated wave bands */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-1/2 opacity-30 pointer-events-none"
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(110deg, transparent 0, transparent 80px, rgba(255,255,255,0.2) 80px, rgba(255,255,255,0.2) 90px)",
        }}
      />
      {/* Sun accent */}
      <div
        className="absolute right-[15%] top-[18%] w-32 h-32 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #f4a37c 0%, rgba(244,163,124,0.0) 70%)",
          filter: "blur(8px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative aspect-[3/4] max-w-md mx-auto md:mx-0"
        >
          <Image
            src="/characters/windsurfer.png"
            alt="Sergio in wetsuit"
            fill
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 text-white"
        >
          <p
            className="smcp text-[12px] tracking-[0.3em] font-bold"
            style={{ color: "#ff9d6c" }}
          >
            🌊 STRAIT OF GIBRALTAR · LEVANTE WINDS
          </p>
          <h3
            className="font-display font-black mt-3 leading-[0.92] text-foam"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Tarifa —<br />
            <span
              className="italic font-headline font-normal"
              style={{ color: "#ff9d6c" }}
            >
              the religion.
            </span>
          </h3>
          <p className="font-body text-lg mt-4 max-w-[50ch] leading-relaxed text-white/90">
            For two consecutive summers, the analyst was not an analyst at all —
            he was a <strong className="text-foam">windsurf instructor in Tarifa</strong>,
            the southernmost municipality of mainland Spain. A town defined by
            the relentless Levante and Poniente winds. The board, the sail, and
            the chop of the Strait are the place where, by his own admission,
            the noise stops.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-lg">
            {[
              ["🏄", "Two summers · 2020+ · windsurf instructor"],
              ["🌊", "Anywhere there's wind and water"],
              ["🏠", "From Málaga · summered in Tarifa"],
              ['"', "“You can’t think about gradient descent on a wave.”"],
            ].map(([k, v]) => (
              <div
                key={v}
                className="border border-white/25 bg-white/5 backdrop-blur-sm px-3 py-2"
              >
                <p
                  className="font-mono text-[12px] font-bold"
                  style={{ color: "#ff9d6c" }}
                >
                  {k}
                </p>
                <p className="font-body text-[12px] text-white/85 mt-0.5 leading-tight">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
