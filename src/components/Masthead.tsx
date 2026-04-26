"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STATIC_TODAY = "TODAY";

function useToday() {
  const [today, setToday] = useState(STATIC_TODAY);
  useEffect(() => {
    setToday(
      new Date()
        .toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .toUpperCase()
    );
  }, []);
  return today;
}

export default function Masthead() {
  const today = useToday();
  return (
    <header className="relative w-full pt-6 pb-3 paper-grain">
      {/* Top thin info strip */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex justify-between items-center gap-2 text-[10px] sm:text-[11px] smcp text-ink-soft pb-3 border-b border-ink/30">
        <span className="truncate">EST. 2026 · MADRID</span>
        <span className="hidden md:inline whitespace-nowrap">
          “All the code that&apos;s fit to print.”
        </span>
        <span className="truncate text-right">CLEAR · 22°C</span>
      </div>

      {/* Big masthead title */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-6 pt-4"
      >
        <h1
          className="font-blackletter text-center text-ink leading-[0.9] ink-shadow select-none"
          style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            letterSpacing: "0.005em",
          }}
        >
          Wall Estrit Journal
        </h1>
      </motion.div>

      {/* Vol / Issue / Date strip */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 mt-3 pt-3 pb-3 double-rule flex flex-wrap justify-between items-center text-[10px] sm:text-[11px] smcp text-ink-soft gap-2">
        <span>VOL. I — N.º 0001</span>
        <span
          suppressHydrationWarning
          className="font-mono normal-case tracking-normal text-[10px] sm:text-[11px]"
        >
          {today}
        </span>
        <span className="hidden sm:inline">FREE — ONLINE EDITION</span>
      </div>
    </header>
  );
}
