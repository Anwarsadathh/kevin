"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Typed from "./Typed";
import Logo from "./Logo";
import { COMPANIES } from "../companies";

const STATS = [
  ["500+", "Colleges partnered"],
  ["3", "Operating companies"],
  ["4", "Years building"],
];

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 260]);
  const fgY = useTransform(scrollY, [0, 900], [0, -80]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg-deep">
      {/* parallax background layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/portrait.jpg"
            alt=""
            aria-hidden
            onError={() => setImgOk(false)}
            className="h-[120%] w-full object-cover opacity-60"
          />
        )}
<div className="absolute inset-0 bg-gradient-to-b from-bg-deep/40 via-bg-deep/55 to-bg-deep" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* floating orbs */}
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </motion.div>

      <motion.div
        style={{ y: fgY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center text-white"
      >
        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[1.04] md:text-7xl">
            Kevin C Philipose
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 font-mono text-lg tracking-wide text-white/80 md:text-2xl">
            <Typed />
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Founder of Kwin Syndicate Holdings — the group behind LearnScape
            Edu, Invest Better, and Caffè Latte Lounge. Building businesses
            that solve real problems since age 18.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-row justify-center gap-2.5 sm:gap-3">
            <a href="#connect" className="btn-hero-solid group whitespace-nowrap px-4 text-[13px] sm:px-6 sm:text-sm">
              Get in touch <span className="btn-arrow">→</span>
            </a>
            <a href="#group" className="btn-hero-ghost group whitespace-nowrap px-4 text-[13px] sm:px-6 sm:text-sm">
              Explore <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <dl className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <dt className="text-3xl font-semibold tabular-nums md:text-4xl">
                  <Counter value={n} />
                </dt>
                <dd className="mt-1 text-xs text-white/50">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <div className="scroll-cue" aria-hidden />
      </div>

      {/* logo strip pinned to hero bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-black/25 backdrop-blur-md md:block">
        <div className="marquee-mask overflow-hidden py-4">
          <div className="marquee flex w-max gap-14">
            {[...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES].map((c, i) => (
              <div key={`${c.key}-${i}`} className="flex shrink-0 items-center gap-3 opacity-50 transition-opacity hover:opacity-100">
                <Logo src={c.logo} name={c.name} initials={c.initials} size={26} invert />
                <span className="whitespace-nowrap text-sm font-medium text-white/70">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
