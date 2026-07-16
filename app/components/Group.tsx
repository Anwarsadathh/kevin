"use client";

import { motion } from "framer-motion";
import Reveal, { staggerItem } from "./Reveal";
import Logo from "./Logo";
import { COMPANIES, PARENT } from "../companies";

/** Small accent color per company — keeps things "a little colorful" without going loud. */
const ACCENTS: Record<string, { ring: string; glow: string; dot: string; text: string }> = {
  learnscape: {
    ring: "hover:border-sky-400/40",
    glow: "from-sky-400/25",
    dot: "bg-sky-400",
    text: "text-sky-300",
  },
  investbetter: {
    ring: "hover:border-emerald-400/40",
    glow: "from-emerald-400/25",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
  },
  caffe: {
    ring: "hover:border-amber-400/40",
    glow: "from-amber-400/25",
    dot: "bg-amber-400",
    text: "text-amber-300",
  },
};
const FALLBACK = ACCENTS.learnscape;

export default function Group() {
  return (
    <section
      id="group"
      className="relative overflow-hidden border-t border-line bg-bg-deep px-6 py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, #000, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, #000, transparent)",
        }}
      />

      {/* soft colored glows, tucked behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow text-white/45">The group</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            One holding company. Three businesses.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            {PARENT.blurb}
          </p>
        </Reveal>

        {/* parent node */}
        <Reveal delay={0.06}>
          <div className="mt-14 inline-flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 backdrop-blur-sm">
            <div className="rounded-lg bg-gradient-to-br from-sky-400/25 via-emerald-400/20 to-amber-400/25 p-[2px]">
              <Logo
                src={PARENT.logo}
                name={PARENT.short}
                initials={PARENT.initials}
                size={42}
                className="rounded-[7px]"
              />
            </div>
            <div className="text-left">
              <p className="text-base font-semibold">{PARENT.name}</p>
              <p className="mt-0.5 text-xs text-white/50">
                {PARENT.role} · Parent holding company
              </p>
            </div>
          </div>
        </Reveal>

        {/* connector */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-2 h-14 w-full max-w-3xl" aria-hidden>
            <span className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-white/20" />
            <span className="absolute left-1/2 top-7 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-sky-400/40 via-white/20 to-amber-400/40 md:block" />
            <span className="absolute left-[16.66%] top-7 hidden h-7 w-px bg-sky-400/40 md:block" />
            <span className="absolute left-1/2 top-7 hidden h-7 w-px -translate-x-1/2 bg-emerald-400/40 md:block" />
            <span className="absolute left-[83.33%] top-7 hidden h-7 w-px bg-amber-400/40 md:block" />
          </div>
        </Reveal>

        {/* children */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {COMPANIES.map((c) => {
            const a = ACCENTS[c.key] ?? FALLBACK;
            return (
              <motion.div
                key={c.key}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`group relative h-full overflow-hidden rounded-xl border border-white/12 bg-white/[0.05] p-6 text-left backdrop-blur-sm transition-colors ${a.ring} hover:bg-white/[0.08]`}
              >
                {/* corner glow, brightens on hover */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex items-center gap-3">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                  <Logo
                    src={c.logo}
                    name={c.name}
                    initials={c.initials}
                    size={34}
                    invert
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{c.name}</p>
                    <p className={`text-[0.7rem] ${a.text}`}>{c.sector}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-xs font-medium text-white/70">
                  {c.role}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}