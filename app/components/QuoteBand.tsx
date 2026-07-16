"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function QuoteBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-90, 90]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-bg-deep px-6 py-32">
      <motion.div style={{ y }} className="absolute inset-[-120px]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="orb orb-a opacity-30" />
        <div className="orb orb-b opacity-30" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <Reveal>
          <span className="text-6xl leading-none text-sky-400/60" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="mt-2 text-2xl font-medium leading-snug md:text-4xl">
            Great businesses are created by solving meaningful problems,
            embracing innovation, and delivering value with integrity.
          </blockquote>
          <p className="mt-7 text-sm text-white/50">
            Kevin C Philipose · Founder, Kwin Syndicate Holdings
          </p>
        </Reveal>
      </div>
    </section>
  );
}
