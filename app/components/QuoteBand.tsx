"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function QuoteBand() {
  const ref = useRef<HTMLElement>(null);
  const [imgOk, setImgOk] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-bg-deep px-6 py-32">
      {/* background photo — drop /public/quote-bg.jpg to enable, otherwise this
          layer stays invisible and the grid + orbs carry the section */}
      {imgOk && (
        <motion.div style={{ y: imgY }} className="absolute inset-[-80px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/quote-bg.jpg"
            alt=""
            aria-hidden
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover opacity-60"
          />
        </motion.div>
      )}
   <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/40 via-bg-deep/55 to-bg-deep/40" />

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