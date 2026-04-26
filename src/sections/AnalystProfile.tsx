"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnalystProfile() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f5f1ea 0%, #ece5d3 100%)",
      }}
    >
      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(60,40,20,0.08) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-14 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left: photo + small label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <div className="relative aspect-square sm:aspect-[4/5] bg-paper-deep border-2 border-ink overflow-hidden max-w-[15rem] sm:max-w-md mx-auto">
            <Image
              src="/characters/casual.png"
              alt="Sergio Verdugo Rubio"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-contain p-6"
            />
          </div>
          <div className="max-w-md mx-auto mt-4 text-center">
            <p className="smcp text-[11px] text-tribune-red font-bold tracking-wider">
              ✦ THE ANALYST ✦
            </p>
            <p className="font-headline italic text-ink-soft text-[14px] mt-1">
              Sergio Verdugo Rubio · Madrid · Málaga · Tarifa
            </p>
          </div>
        </motion.div>

        {/* Right: bio + facts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="md:col-span-7 text-ink"
        >
          <p className="smcp text-[11px] text-tribune-red font-bold tracking-[0.3em]">
            ABOUT
          </p>
          <h2
            className="font-display font-black headline-leading mt-3"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Hi, I&apos;m Sergio.
          </h2>
          <p className="font-headline italic text-ink-soft text-xl md:text-2xl mt-3 leading-snug">
            21-year-old ML engineer, finishing my CS + AI degree at IE
            University. I&apos;m a restless builder — I love creating new
            products. I trust the things I build with my own money. I keep the
            losses on the books.
          </p>

          <div className="mt-8 font-body text-[16px] text-ink leading-[1.7] space-y-4">
            <p>
              I grew up in <strong>Málaga</strong>, learned to windsurf in{" "}
              <strong>Tarifa</strong>, and study in <strong>Madrid</strong>. My
              first real venture was co-founding two blockchain startups in
              Colorado at sixteen, where we raised{" "}
              <strong>~$1.5M</strong> in venture capital and shipped a Rust
              decentralised DNS protocol funded by an Aleph Zero grant.
            </p>
            <p>
              In 2025 I joined <strong>MEmob+</strong> in Dubai (remote) as an
              ML Engineer Intern, building AWS EMR + PySpark pipelines for
              location-intelligence products and uncovering an ingestion fraud
              issue affecting <strong>75%</strong> of incoming data.
            </p>
            <p>
              Today I run <strong>Brainy Buddy</strong>, an AI study planner
              live at brainy-buddy.com, with an EU-compliant LTI extension
              shipping into European universities. On the side, I&apos;m
              building <strong>SocialMedia AI</strong>, a video
              pattern-analysis SaaS, and <strong>FinanceHub</strong>, a
              personal market-analysis cockpit I trust with my own portfolio.
            </p>
            <p>
              Most days I&apos;m in front of a terminal. The good ones, I&apos;m
              not.
            </p>
          </div>

          {/* Facts grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { k: "DEGREE", v: "BSc CS + AI · IE University" },
              { k: "GRADUATES", v: "May 2026" },
              { k: "GPA", v: "8.2 / 10.0" },
              { k: "LANGUAGES", v: "ES · EN · DE · FR" },
              { k: "STACK", v: "Python · TS · C++ · SQL · AWS · PySpark" },
              { k: "BASED", v: "Madrid 🇪🇸" },
            ].map(({ k, v }) => (
              <div
                key={k}
                className="border border-ink/30 bg-paper/60 backdrop-blur-sm px-3 py-2"
              >
                <p className="smcp text-[10px] text-tribune-red font-bold tracking-wider">
                  {k}
                </p>
                <p className="font-mono text-[12px] text-ink mt-0.5 leading-tight">
                  {v}
                </p>
              </div>
            ))}
          </div>

          {/* CV download */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-[12px] tracking-wider hover:bg-tribune-red transition-colors"
            >
              📄 DOWNLOAD CV ↗
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-verdugo-rubio-b54575210/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink px-5 py-3 font-mono text-[12px] tracking-wider hover:bg-ink hover:text-paper transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://github.com/Svrubio7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink px-5 py-3 font-mono text-[12px] tracking-wider hover:bg-ink hover:text-paper transition-colors"
            >
              GITHUB ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* Quote band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-y-2 border-ink py-12 mt-12"
      >
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p
            className="font-display italic text-ink leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            &ldquo;The constraint made the design.&rdquo;
          </p>
          <p className="smcp text-[11px] text-ink-soft mt-3 tracking-[0.2em]">
            — VERDUGO, ON THE 95% API-CALL REDUCTION AT MEMOB+
          </p>
        </div>
      </motion.div>
    </section>
  );
}
