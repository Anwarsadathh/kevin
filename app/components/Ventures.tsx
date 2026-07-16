"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Logo from "./Logo";
import { COMPANIES } from "../companies";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Ventures() {
  return (
    <section id="ventures" className="border-t border-line px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Companies">
          Three businesses. One belief.
        </SectionHeading>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-base text-ink-2 leading-relaxed">
            Great businesses are created by solving meaningful problems,
            embracing innovation, and delivering value with integrity.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COMPANIES.map((c) => (
            <motion.article
              key={c.key}
              initial={{ opacity: 0, y: 56, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="card flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg-alt">
                <div className="zoom absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Logo
                    src={c.logo}
                    name={c.name}
                    initials={c.initials}
                    size={120}
                    className="rounded-xl"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2 py-1 text-[0.65rem] font-medium text-ink-2 backdrop-blur-sm">
                  {c.sector}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">
                    {c.name}
                  </h3>
                  <span className="shrink-0 text-xs text-ink-3">{c.year}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {c.role}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-2">
                  {c.blurb}
                </p>

                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-3" />
                      {p}
                    </li>
                  ))}
                </ul>

                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 text-sm font-medium text-accent hover:underline"
                  >
                    Visit website →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}