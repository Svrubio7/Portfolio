"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  page,
  section,
  pageNumber,
}: {
  page: string;
  section: string;
  pageNumber: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[1200px] px-6 pt-8 pb-3 flex justify-between items-center"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-blackletter text-ink text-2xl">Wall Estrit Journal</span>
        <span className="smcp text-[11px] text-ink-soft">— continued —</span>
      </div>
      <div className="flex items-center gap-3 smcp text-[11px] text-ink-soft">
        <span>{section}</span>
        <span className="text-tribune-red">·</span>
        <span className="font-mono normal-case tracking-normal">PAGE {pageNumber}</span>
        <span className="text-tribune-red">·</span>
        <span className="text-tribune-red font-bold">{page}</span>
      </div>
    </motion.div>
  );
}
