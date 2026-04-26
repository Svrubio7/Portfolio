"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Simple, smooth intro:
 *   PHASE 1 (0–0.8s):  Cover flies in from off-screen right and slams into a tilted resting pose.
 *   PHASE 2 (0.8–2.8s): Holds, fully visible.
 *   PHASE 3 (2.8–4.5s): Camera dives forward through the cover (scale up + fade).
 *
 * No filter:blur (GPU-hostile), single ease curve (no per-segment easing seams).
 */
export default function NewspaperIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => setShow(false)}
          style={{
            perspective: "2200px",
            backgroundColor: "#1a1a1a",
            backgroundImage:
              "radial-gradient(ellipse at center, #2c2c2c 0%, #131313 65%, #050505 100%)",
          }}
        >
          {/* Soft vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)",
            }}
          />

          <Particles />

          {/* The cover — flies in, settles tilted, then dives forward */}
          <motion.div
            initial={{
              scale: 1.4,
              x: 600,
              rotateY: 30,
              rotateZ: -25,
              y: -50,
              opacity: 1,
            }}
            animate={{
              scale: [1.4, 1.0, 1.0, 4.4],
              x: [600, 0, 0, 0],
              rotateY: [30, 12, 12, 0],
              rotateZ: [-25, -2, -2, 0],
              y: [-50, 0, 0, -30],
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration: 4.5,
              times: [0, 0.18, 0.62, 1],
              ease: [0.16, 1, 0.3, 1],
              opacity: {
                duration: 4.5,
                times: [0, 0.62, 0.92, 1],
                ease: "easeIn",
              },
            }}
            style={{
              width: "min(78vw, 432px)",
              aspectRatio: "5 / 7",
              transformOrigin: "center center",
              transformStyle: "preserve-3d",
              filter:
                "drop-shadow(0 50px 70px rgba(30,20,5,0.65)) drop-shadow(0 12px 25px rgba(30,20,5,0.4))",
              willChange: "transform, opacity",
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-paper border-[3px] border-ink overflow-hidden flex flex-col px-5 pt-3.5 pb-3">
              <div className="text-center pb-1.5 border-b-2 border-ink">
                <p className="smcp text-[8px] text-tribune-red font-bold tracking-[0.2em]">
                  ★ TODAY&apos;S EDITION · MADRID · EST. 2026 ★
                </p>
              </div>

              <h1
                className="font-blackletter text-ink text-center mt-2 leading-[0.85]"
                style={{ fontSize: "clamp(1.1rem, 5.2vw, 2.3rem)" }}
              >
                Wall Estrit Journal
              </h1>

              <div className="double-rule mt-2 py-0.5 text-center smcp text-[8px] text-ink-soft">
                VOL. I — N.º 0001 — FREE EDITION
              </div>

              <h2
                className="font-display font-black text-ink text-center mt-2.5 leading-[1.0]"
                style={{ fontSize: "clamp(0.85rem, 3.4vw, 1.6rem)" }}
              >
                Verdugo Opens
                <br />
                Portfolio To Public
              </h2>

              <p className="font-headline italic text-ink-soft text-center mt-1 text-[9px] md:text-[10.5px] leading-snug px-1">
                Diversified holdings unveiled — markets respond favourably
              </p>

              <div className="mt-2 flex-1 bg-paper-deep border border-ink/40 relative overflow-hidden">
                <Image
                  src="/characters/casual.png"
                  alt="The analyst"
                  fill
                  sizes="430px"
                  className="object-contain p-1.5"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-paper/95 border-t border-ink/40 px-2 py-0.5">
                  <p className="smcp text-[7px] text-ink-soft text-center">
                    PICTURED · THE ANALYST AT HIS DESK
                  </p>
                </div>
              </div>

              <p className="font-mono text-[8px] text-ink-soft text-center mt-2 tracking-wide">
                $SVR · ▲ 8.42% · 10 HOLDINGS · INSIDE: §1 §2 §3 §4
              </p>
            </div>

            <div className="absolute top-0 -right-0.5 bottom-0 w-0.5 bg-ink-faded/30 pointer-events-none" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0.55, 0] }}
            transition={{ delay: 1.4, duration: 3 }}
            className="absolute bottom-8 smcp text-[10px] text-paper/55 pointer-events-none tracking-wider"
          >
            click anywhere to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      {Array.from({ length: 24 }).map((_, i) => {
        const left = (i * 53 + 17) % 100;
        const delay = (i * 0.31) % 4;
        const duration = 9 + (i % 5);
        const top = (i * 29 + 13) % 100;
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-paper/40 rounded-full"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{
              y: [0, -45, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
