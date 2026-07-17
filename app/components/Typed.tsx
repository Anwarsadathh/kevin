"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = [
  "Entrepreneur.",
  "Founder.",
  "Business Strategist.",
  "Education Innovator.",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Typed() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-block overflow-hidden align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-block font-display font-bold uppercase tracking-widest text-sky-300"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
