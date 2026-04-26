"use client";

import { motion } from "framer-motion";

export default function ContinuedMarker({ next }: { next: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1200px] px-6 pb-12 pt-6 text-center"
    >
      <div className="thin-rule pt-4 flex flex-col items-center gap-2">
        <p className="smcp text-[11px] text-ink-soft">CONTINUED ON {next}</p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-xl text-ink"
        >
          ↓
        </motion.div>
      </div>
    </motion.div>
  );
}
