"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent bar at the very top showing reading progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left bg-accent"
    />
  );
}
