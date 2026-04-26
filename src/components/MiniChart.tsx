"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import type { StockTrend } from "@/data/projects";

type Props = {
  trend: StockTrend;
  ticker: string;
  width?: number;
  height?: number;
};

const POINTS = 22;

/**
 * Generates a deterministic squiggly line that matches the trend's vibe.
 */
function generatePath(ticker: string, trend: StockTrend, width: number, height: number) {
  // Seeded pseudo-random from ticker so each project has a distinct shape
  let seed = 0;
  for (let i = 0; i < ticker.length; i++) seed = (seed * 31 + ticker.charCodeAt(i)) >>> 0;
  const rng = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return (seed >>> 0) / 0xffffffff;
  };

  const startY = (() => {
    switch (trend) {
      case "rising":
      case "dev":
        return 0.85; // start low, climb
      case "stable":
        return 0.5;
      case "underperform":
        return 0.4; // start high, decline
      case "delisted":
        return 0.5;
    }
  })();

  const endY = (() => {
    switch (trend) {
      case "rising":
        return 0.1;
      case "dev":
        return 0.25;
      case "stable":
        return 0.5;
      case "underperform":
        return 0.85;
      case "delisted":
        return 0.95; // collapse
    }
  })();

  const points: [number, number][] = [];
  for (let i = 0; i < POINTS; i++) {
    const t = i / (POINTS - 1);
    const baseY = startY + (endY - startY) * t;
    // Wiggle amount depends on trend
    const wiggle = trend === "stable" ? 0.07 : trend === "delisted" ? 0.05 : 0.12;
    const noise = (rng() - 0.5) * wiggle;
    const y = Math.max(0.02, Math.min(0.98, baseY + noise));
    const x = t * width;
    points.push([x, y * height]);
  }

  // Cubic-spline-ish smoothing using simple bezier through midpoints
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 1; i < points.length; i++) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const mx = (px + cx) / 2;
    const my = (py + cy) / 2;
    d += ` Q ${px.toFixed(2)} ${py.toFixed(2)}, ${mx.toFixed(2)} ${my.toFixed(2)}`;
    if (i === points.length - 1) {
      d += ` T ${cx.toFixed(2)} ${cy.toFixed(2)}`;
    }
  }
  return { d, points };
}

export default function MiniChart({ trend, ticker, width = 240, height = 80 }: Props) {
  const { d, points } = useMemo(
    () => generatePath(ticker, trend, width, height),
    [trend, ticker, width, height]
  );

  const stroke =
    trend === "rising" || trend === "dev"
      ? "var(--color-trade-up)"
      : trend === "stable"
        ? "var(--color-trade-amber)"
        : trend === "underperform"
          ? "var(--color-trade-down)"
          : "#5a5a5a";

  const fillGradientId = `mc-grad-${ticker}`;

  // For delisted, we draw a partial line that drops to 0 with a "delisted" overlay
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="block"
    >
      <defs>
        <linearGradient id={fillGradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Fill area */}
      <motion.path
        d={`${d} L ${width} ${height} L 0 ${height} Z`}
        fill={`url(#${fillGradientId})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line
          key={i}
          x1={0}
          x2={width}
          y1={t * height}
          y2={t * height}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}

      {/* Main line */}
      <motion.path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Final-point pulse */}
      <motion.circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r={3}
        fill={stroke}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.4 }}
      />

      {/* Delisted overlay */}
      {trend === "delisted" && (
        <motion.text
          x={width / 2}
          y={height / 2 + 5}
          textAnchor="middle"
          fill="var(--color-trade-down)"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight="700"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          DELISTED
        </motion.text>
      )}
    </svg>
  );
}
