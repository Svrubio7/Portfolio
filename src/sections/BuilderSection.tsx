"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * THE WORKBENCH — a "what I do" interlude between Trading Floor and Sports Desk.
 * Frames Sergio as a Machine Learning / Software / AI engineer who is, above
 * all, a restless builder.
 */
export default function BuilderSection() {
  const stack = [
    "Python", "TypeScript", "C++", "SQL", "PySpark", "pandas",
    "scikit-learn", "PyTorch", "LangGraph", "Next.js", "FastAPI",
    "Django", "Vue.js", "PostgreSQL", "Redis", "Celery",
    "AWS · EMR · S3", "Azure", "Docker", "GitHub Actions",
  ];

  const currently = [
    {
      tag: "🟢",
      name: "Brainy Buddy",
      desc: "Shipping the EU-compliant LTI extension to universities",
    },
    {
      tag: "📈",
      name: "SocialMedia AI",
      desc: "Video pattern analysis + automated editing SaaS",
    },
    {
      tag: "📈",
      name: "FinanceHub",
      desc: "Personal market-analysis cockpit I trade from",
    },
    {
      tag: "🎓",
      name: "IE University",
      desc: "Wrapping the CS + AI bachelor's, May 2026",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden text-trade-text"
      style={{
        backgroundColor: "#0d1117",
        backgroundImage:
          "linear-gradient(180deg, #0d1117 0%, #131820 60%, #0a0d12 100%)",
      }}
    >
      {/* Code-style grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,135,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft amber spotlight on the right */}
      <div
        className="absolute top-0 right-0 w-[60vw] h-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(255,196,46,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-14 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          <p className="font-mono text-[11px] text-trade-amber tracking-[0.3em] mb-3">
            ★ THE WORKBENCH ★
          </p>
          <h2
            className="font-display font-black headline-leading"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
          >
            A restless <span className="text-trade-up">builder.</span>
          </h2>
          <p className="font-headline italic text-trade-muted text-xl md:text-2xl mt-4 max-w-[55ch] leading-snug">
            Machine learning. Software. AI. Pick whichever label fits — to me
            they&apos;re all the same job: noticing a problem, refusing to let
            it sit there, and shipping something.
          </p>

          {/* Role badges */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "MACHINE LEARNING ENGINEER",
              "SOFTWARE ENGINEER",
              "AI ENGINEER",
            ].map((role) => (
              <span
                key={role}
                className="font-mono text-[11px] tracking-[0.18em] border border-trade-up/60 text-trade-up px-3 py-1.5 bg-trade-up/5"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Body */}
          <div className="mt-7 font-body text-[16px] text-trade-text leading-[1.7] space-y-4 max-w-[60ch]">
            <p>
              I learned early that the <em>loop</em> matters more than the
              language. Build the smallest thing that solves the actual
              problem. Use it. Notice what&apos;s wrong. Ship the next version.
              Repeat until the thing is alive — or until you&apos;ve learned
              enough to delete it.
            </p>
            <p>
              Most of my projects went one way. Some went the other. Both
              counted, and both are listed on the trading floor above.
            </p>
          </div>

          {/* Tech stack */}
          <div className="mt-8">
            <p className="font-mono text-[10px] text-trade-muted tracking-[0.25em] mb-3">
              STACK · IN ROTATION
            </p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11.5px] text-trade-text bg-trade-panel border border-trade-grid px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — coder character + currently building */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="md:col-span-5"
        >
          <div className="relative aspect-square sm:aspect-[3/4] max-w-[14rem] sm:max-w-md mx-auto">
            <Image
              src="/characters/coder.png"
              alt="Sergio at the terminal"
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 768px) 80vw, 460px"
              className="object-contain drop-shadow-[0_30px_50px_rgba(0,255,135,0.15)]"
            />
          </div>
          <p className="text-center font-mono text-[10px] text-trade-amber tracking-[0.3em] mt-2">
            ▶ AT THE TERMINAL
          </p>

          {/* Currently building */}
          <div className="mt-8 border border-trade-grid bg-trade-panel/60 backdrop-blur-sm p-5">
            <p className="font-mono text-[10px] text-trade-amber tracking-[0.3em] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-trade-up animate-pulse" />
              CURRENTLY BUILDING
            </p>
            <ul className="space-y-3">
              {currently.map((c) => (
                <li key={c.name} className="flex gap-3 items-start">
                  <span className="text-base shrink-0">{c.tag}</span>
                  <div className="flex-1">
                    <p className="font-display font-bold text-trade-text text-[15px]">
                      {c.name}
                    </p>
                    <p className="font-body text-[13px] text-trade-muted leading-snug">
                      {c.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom philosophy band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative border-t border-trade-grid"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { k: "BIAS", v: "Ship something tiny. Use it. Iterate." },
            { k: "ENERGY", v: "Restless. The next idea is already loading." },
            {
              k: "MEASURE",
              v: "Did it solve the actual problem for a real person?",
            },
          ].map((p) => (
            <div key={p.k}>
              <p className="font-mono text-[10px] text-trade-amber tracking-[0.3em]">
                {p.k}
              </p>
              <p className="font-headline italic text-trade-text text-lg mt-2 leading-snug">
                {p.v}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
