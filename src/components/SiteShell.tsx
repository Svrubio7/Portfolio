"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import NewspaperBook from "@/components/NewspaperBook";
import TradingFloor from "@/sections/TradingFloor";
import BuilderSection from "@/sections/BuilderSection";
import SportsDesk from "@/sections/SportsDesk";
import AnalystProfile from "@/sections/AnalystProfile";
import Contact from "@/sections/Contact";

export default function SiteShell({
  newspaperPages,
}: {
  newspaperPages: ReactNode[];
}) {
  const [inNewspaper, setInNewspaper] = useState(true);

  useEffect(() => {
    const exitHandler = () => setInNewspaper(false);
    const enterHandler = () => setInNewspaper(true);
    window.addEventListener("svr:exit-newspaper", exitHandler);
    window.addEventListener("svr:enter-newspaper", enterHandler);
    return () => {
      window.removeEventListener("svr:exit-newspaper", exitHandler);
      window.removeEventListener("svr:enter-newspaper", enterHandler);
    };
  }, []);

  useEffect(() => {
    if (inNewspaper) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [inNewspaper]);

  return (
    <>
      <AnimatePresence>
        {inNewspaper && (
          <motion.div
            key="book"
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <NewspaperBook>{newspaperPages}</NewspaperBook>
          </motion.div>
        )}
      </AnimatePresence>

      {!inNewspaper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.1 } }}
        >
          <TradingFloor />
          <BuilderSection />
          <SportsDesk />
          <AnalystProfile />
          <Contact />
        </motion.div>
      )}

      {/* Floating "back to newspaper" button — visible after leaving the paper */}
      {!inNewspaper && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={() => setInNewspaper(true)}
          className="fixed top-3 left-3 sm:top-4 sm:left-4 z-[60] bg-paper/90 backdrop-blur-sm border border-ink/40 text-ink hover:bg-tribune-red hover:text-paper hover:border-tribune-red transition-colors shadow-md font-mono text-[11px] tracking-[0.18em] px-4 py-3 flex items-center gap-2 min-h-[44px]"
          aria-label="Back to the newspaper"
        >
          <span>←</span>
          <span>BACK TO PAPER</span>
        </motion.button>
      )}
    </>
  );
}
