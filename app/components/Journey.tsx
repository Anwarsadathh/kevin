"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    n: "01",
    year: "2022",
    age: "Age 18",
    title: "Markets, hospitality, and a first look at education",
    text: "Entered the Indian stock market as a trader, building a foundation in investments, wealth creation, risk management, and strategic decision-making. Founded Caffè Latte Lounge the same year. Also began working as an admission consultant — seeing firsthand the challenges students face during the college admission process.",
  },
  {
    n: "02",
    year: "2023",
    age: "Age 19",
    title: "LearnScape Edu Pvt. Ltd. is founded",
    text: "Founded to simplify higher education admissions by connecting students directly with colleges, eliminating misinformation and unnecessary complexity through a seamless digital platform.",
  },
  {
    n: "03",
    year: "2025",
    age: "Recognition",
    title: "Best Education Consultancy Award",
    text: "LearnScape Edu honoured by Business Insight Magazine in recognition of its innovation, transparency, and commitment to excellence in higher education admissions.",
  },
  {
    n: "04",
    year: "Next",
    age: "Roadmap",
    title: "One platform. Every educational need.",
    text: "Expanding LearnScape into a complete education ecosystem — language academy, study abroad services, skill development, AI-powered education, scholarships, student financial services, and global university partnerships.",
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-line bg-bg-alt px-6 py-24 md:py-32"
    >
      {/* faint number watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 select-none text-[13rem] font-bold leading-none text-ink/[0.03] md:text-[18rem]"
      >
        04
      </span>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading eyebrow="Journey">
          Built in layers, since 2022
        </SectionHeading>

        <div ref={ref} className="relative mt-16">
          {/* track (static) + progress (animated draw-in) */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-line md:left-[35px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-2 w-px bg-gradient-to-b from-accent to-accent/30 md:left-[35px]"
          />

          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.year} delay={i * 0.07}>
                <li className="group relative flex gap-5 md:gap-7">
                  {/* node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-xs font-semibold text-ink-3 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.15)] transition-colors duration-300 group-hover:border-accent group-hover:text-accent md:h-[70px] md:w-[70px] md:text-sm">
                    {s.n}
                  </div>

                  {/* card */}
                  <div className="mb-8 flex-1 rounded-2xl border border-line bg-white p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-line-2 group-hover:shadow-[0_18px_40px_-16px_rgba(15,23,42,0.18)] md:p-7">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xl font-semibold tracking-tight md:text-2xl">
                        {s.year}
                      </span>
                      <span className="rounded-full bg-accent-lo px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-accent">
                        {s.age}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-snug md:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-2 md:text-[0.95rem]">
                      {s.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}