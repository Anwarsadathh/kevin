"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
  scale = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  scale?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: scale ? 0.94 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Headline whose lines rise in with a soft stagger + clip reveal. */
export function RevealLines({
  lines,
  className = "",
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: delay + i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Scale-and-fade in — for cards, badges, icons. More punch than plain Reveal. */
export function RevealPop({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Slide in from a side — for alternating content blocks. */
export function RevealSide({
  children,
  from = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const x = from === "left" ? -46 : 46;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — children fade/rise in sequence as a group. */
export function RevealStagger({
  children,
  className = "",
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ staggerChildren: gap }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 22, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};
