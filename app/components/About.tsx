"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Reveal, { RevealSide } from "./Reveal";
import SectionHeading from "./SectionHeading";

const SKILLS: [string, number][] = [
  ["Business Strategy", 0.95],
  ["Education Consulting", 0.92],
  ["Team Leadership", 0.88],
  ["Brand & Marketing", 0.84],
];

const PILLARS = [
  ["Solve meaningful problems", "Every venture starts from a real gap — not a trend."],
  ["Embrace innovation", "New models over old playbooks, in education and beyond."],
  ["Deliver with integrity", "Long-term trust beats short-term wins, every time."],
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <RevealSide from="left">
          <SectionHeading eyebrow="About">
            Ecosystems, not just companies
          </SectionHeading>
          <Reveal delay={0.08}>
            <p className="mt-8 text-base leading-relaxed text-ink-2">
              I started my entrepreneurial journey at 18 with a single café.
              Today, Kwin Syndicate Holdings operates across education,
              consulting, and hospitality — each venture built on the same
              conviction: great businesses are created by solving meaningful
              problems.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="mt-8 space-y-5">
              {PILLARS.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="mt-0.5 text-sm text-ink-3">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </RevealSide>

        <RevealSide from="right" delay={0.12}>
          <div
            ref={ref}
            className={`rounded-2xl border border-line bg-white p-8 shadow-[0_18px_44px_-20px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:-translate-y-1.5 ${
              inView ? "in-view" : ""
            }`}
          >
            <p className="eyebrow">Expertise</p>
            <div className="mt-7 space-y-6">
              {SKILLS.map(([label, w]) => (
                <div key={label}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-xs tabular-nums text-ink-3">
                      {Math.round(w * 100)}%
                    </span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ "--w": w } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-ink-3">
              &ldquo;Since age 18 — building ventures across education,
              consulting, and hospitality.&rdquo;
            </p>
          </div>
        </RevealSide>
      </div>
    </section>
  );
}
