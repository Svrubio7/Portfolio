"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function ProfilePage() {
  return (
    <section className="relative min-h-screen paper-texture">
      <PageHeader page="§3" section="PROFILE & CLASSIFIEDS" pageNumber={4} />

      <article className="mx-auto max-w-[1200px] px-6 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 flex justify-between items-end">
          <p className="smcp text-[11px] text-tribune-red font-bold">
            §3 · PROFILE
          </p>
          <p className="smcp text-[11px] text-ink-soft hidden sm:block">
            THE WEEKLY INTERVIEW
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
          From Málaga to Madrid: A Profile of the Analyst.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 font-headline italic text-ink-soft text-lg md:text-xl leading-snug border-t-2 border-b-2 border-ink py-3"
        >
          The 21-year-old IE student on building products that ship, raising
          venture capital at nineteen, catching fraud at scale, and learning
          when to delete his own code.
        </motion.p>

        <p className="col-span-12 smcp text-[12px] text-ink-soft -mt-4">
          BY THE PROFILE DESK · MADRID
        </p>

        {/* Lead column with photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-7 grid grid-cols-1 gap-6"
        >
          <figure className="relative">
            <div className="relative w-full aspect-[5/4] bg-paper-deep border-2 border-ink overflow-hidden">
              <Image
                src="/characters/casual.png"
                alt="The analyst, off-duty"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="mt-2 text-[12px] italic text-ink-soft border-l-2 border-ink pl-3">
              <strong className="not-italic smcp text-ink">PICTURED:</strong>{" "}
              Verdugo, off-duty. The analyst confirms he does, in fact, leave
              the terminal occasionally.
            </figcaption>
          </figure>

          <div className="font-body text-[17px] leading-[1.55] text-ink space-y-4">
            <p className="dropcap">
              SERGIO Verdugo Rubio sits across the table with the precise
              calm of a person who has already calculated three different
              ways the conversation could go. He is twenty-one, six months
              from a Bachelor&apos;s in Computer Science and Artificial
              Intelligence at <strong>IE University Madrid</strong>, and on
              paper he reads less like a senior student than like a junior
              fund manager — a restless builder by his own admission.
            </p>
            <p>
              His résumé tracks the unusual arc of someone who started early
              and kept compounding. At sixteen, he co-founded blockchain
              startups <em>Bproto Labs</em> and <em>Cortex Network</em> in
              Colorado, helping raise approximately{" "}
              <strong>$1.5 million</strong> in venture capital and securing
              an Aleph Zero grant for a decentralised DNS protocol written in
              Rust. By the time most students were writing their first CV, he
              was translating technical roadmaps into investor-ready
              materials.
            </p>
            <p>
              At <strong>MEmob+</strong>, the Dubai-based AdTech and
              location-intelligence firm where he interned as an{" "}
              <strong>ML Engineer</strong> through the second half of 2025,
              he built scalable AWS EMR + PySpark pipelines for production
              location data. The accomplishment he downplays most — and
              probably should not — is the audit in which he discovered that{" "}
              <strong>over 75% of the firm&apos;s incoming location feed
              was fraudulent</strong>, a finding that materially changed how
              the company priced its products.
            </p>
            <p>
              He also prototyped a road-heatmap module using the Mapbox
              Directions API combined with geospatial optimisation, which —
              by his own measurement — reduced required external API calls
              by approximately <strong>95%</strong>. &ldquo;The constraint
              made the design,&rdquo; he says.
            </p>
            <p>
              Today his attention is on <strong>Brainy Buddy</strong>, the
              AI study planner now live at brainy-buddy.com (with an
              EU-compliant LTI extension shipping into European universities)
              and <strong>SocialMedia AI</strong>, the video-pattern SaaS he
              describes — without much self-deprecation — as &ldquo;one of my
              biggest projects.&rdquo;
            </p>
            <p>
              On the wall above his desk is a quiet, paradoxical reminder of
              two delisted holdings: <em>$DEGU</em> (a corruption tracker he
              was forced to shut down when hosting bills became
              unsustainable) and <em>$ETERNAL</em> (a privacy-first WhatsApp
              memory vault, paused for the same reason). He refuses to take
              them off the books. &ldquo;The losses,&rdquo; he says,
              &ldquo;are part of the track record.&rdquo;
            </p>
            <p className="font-headline italic text-ink-soft pt-2">
              In his free time: football, tennis, windsurfing, and the
              occasional well-timed disappearance to Tarifa.
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
          {/* Quick facts */}
          <div className="border-2 border-ink p-5 bg-paper-deep">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-3">
              QUICK FACTS
            </p>
            <dl className="font-mono text-[12px] text-ink space-y-2 leading-relaxed">
              {[
                ["AGE", "22"],
                ["BASED", "Madrid · Málaga · Tarifa"],
                ["DEGREE", "BSc CS + AI · IE University · 2026"],
                ["GPA", "8.2 / 10.0 · IE High Potential Award"],
                ["EARLY", "A-Levels: Maths A* / Further Maths A* / Physics A"],
                ["LANGS", "ES native · EN bilingual · DE basic · FR basic"],
                ["STACK", "Python · PySpark · TS · C++ · SQL · AWS · Azure"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-3 gap-2 border-b border-ink/15 pb-2"
                >
                  <dt className="col-span-1 font-bold smcp text-[11px] tracking-wide">
                    {k}
                  </dt>
                  <dd className="col-span-2 text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Career timeline */}
          <div className="border border-ink p-4 bg-paper">
            <p className="smcp text-[11px] text-tribune-red font-bold mb-3">
              CAREER LOG
            </p>
            <ul className="font-body text-[14px] text-ink space-y-3">
              <li className="flex gap-3">
                <span className="font-mono text-[11px] text-ink-faded w-14 shrink-0 pt-0.5">
                  2026
                </span>
                <div>
                  <p className="font-bold">Brainy Buddy</p>
                  <p className="text-ink-soft text-[12.5px] italic">
                    Founder + Engineer · live at brainy-buddy.com
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[11px] text-ink-faded w-14 shrink-0 pt-0.5">
                  2025
                </span>
                <div>
                  <p className="font-bold">MEmob+ (Dubai, remote)</p>
                  <p className="text-ink-soft text-[12.5px] italic">
                    ML Engineer Intern · AWS EMR · PySpark
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[11px] text-ink-faded w-14 shrink-0 pt-0.5">
                  &apos;21–&apos;24
                </span>
                <div>
                  <p className="font-bold">
                    Bproto Labs / Cortex Network (Colorado)
                  </p>
                  <p className="text-ink-soft text-[12.5px] italic">
                    Co-founder · COO · ~$1.5M raised
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[11px] text-ink-faded w-14 shrink-0 pt-0.5">
                  2025
                </span>
                <div>
                  <p className="font-bold">UBRI Connect / XRPL Apex</p>
                  <p className="text-ink-soft text-[12.5px] italic">
                    Singapore · IE University delegate · XRPL hackathon
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[11px] text-ink-faded w-14 shrink-0 pt-0.5">
                  2020
                </span>
                <div>
                  <p className="font-bold">Tarifa Watersports</p>
                  <p className="text-ink-soft text-[12.5px] italic">
                    Windsurf instructor · summer
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* === CLASSIFIEDS === */}
          <div className="border-2 border-ink bg-paper">
            <div className="bg-ink text-paper px-4 py-2 text-center">
              <p className="smcp text-[11px] font-bold tracking-[0.25em]">
                ✦ CLASSIFIEDS ✦
              </p>
            </div>

            <div className="p-4 grid grid-cols-1 gap-3 font-body text-[13px] text-ink leading-snug">
              <div className="border-b border-ink/30 pb-3">
                <p className="font-display font-black text-ink uppercase text-[14px]">
                  POSITION SOUGHT
                </p>
                <p>
                  ML Engineer / Founding Engineer roles considered. Bias
                  toward small teams, hard problems, and shipping. Ref.
                  $SVR.
                </p>
              </div>
              <div className="border-b border-ink/30 pb-3">
                <p className="font-display font-black text-ink uppercase text-[14px]">
                  AVAILABLE FROM
                </p>
                <p>
                  June 2026, on graduation. Earlier for the right
                  internship.
                </p>
              </div>
              <div className="border-b border-ink/30 pb-3">
                <p className="font-display font-black text-ink uppercase text-[14px]">
                  CORRESPONDENCE
                </p>
                <span className="block space-y-1">
                  <a
                    href="mailto:sverdugorub@gmail.com"
                    className="block underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition"
                  >
                    sverdugorub@gmail.com
                  </a>
                  <a
                    href="https://github.com/Svrubio7"
                    className="block underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Svrubio7
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sergio-verdugo-rubio-b54575210/"
                    className="block underline decoration-tribune-red decoration-2 underline-offset-2 hover:bg-tribune-red hover:text-paper transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/sergio-verdugo-rubio
                  </a>
                </span>
              </div>
              <div>
                <p className="font-display font-black text-ink uppercase text-[14px]">
                  PERSONAL
                </p>
                <p className="italic text-ink-soft">
                  Recruiter? Founder? Just curious? Open the next section
                  for the live trading floor — every position on the
                  Verdugo Index, in colour.
                </p>
              </div>
            </div>
          </div>

          {/* End-of-newspaper marker */}
          <div className="text-center pt-2">
            <p className="smcp text-[10px] text-ink-faded tracking-[0.2em]">
              — END OF EDITION —
            </p>
          </div>
        </motion.aside>
      </article>

      {/* Continue → Trading Floor button */}
      <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-4 text-center">
        <div className="thin-rule pt-6 flex flex-col items-center gap-3">
          <p className="smcp text-[11px] text-ink-soft">
            THE NEWSPAPER ENDS HERE
          </p>
          <p className="font-headline italic text-ink text-lg max-w-md mx-auto">
            For the live data — the actual stock quotes, charts, and the rest of
            the analyst&apos;s world — open the trading floor.
          </p>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("svr:exit-newspaper"));
            }}
            className="mt-3 group bg-ink text-paper px-6 py-3 font-mono text-[13px] tracking-wider hover:bg-tribune-red transition-colors flex items-center gap-2"
          >
            <span>OPEN TRADING FLOOR</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <p className="smcp text-[10px] text-ink-faded mt-2">
            ← scroll up or use ← key to revisit any page
          </p>
        </div>
      </div>
    </section>
  );
}
