"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const EASE = [0.16, 1, 0.3, 1] as const;

function StepItem({ s, i }: { s: (typeof STEPS)[number]; i: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px", amount: 0.35 }}
      transition={{ duration: 0.65, delay: i * 0.05, ease: EASE }}
      className="group relative flex gap-5 md:gap-7"
    >
      {/* node — pulses in with a spring pop */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.05 + 0.1 }}
        className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-xs font-semibold text-ink-3 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.15)] transition-colors duration-300 group-hover:border-accent group-hover:text-accent md:h-[70px] md:w-[70px] md:text-sm"
      >
        {s.n}
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: [0.6, 1.4, 1], opacity: [0, 0.5, 0] }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.9, delay: i * 0.05 + 0.15, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-accent/25"
          aria-hidden
        />
      </motion.div>

      {/* card */}
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="relative mb-8 flex-1 overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.12)] transition-shadow duration-300 group-hover:border-line-2 group-hover:shadow-[0_18px_40px_-16px_rgba(15,23,42,0.18)] md:p-7"
      >
        {/* shine sweep across the card on reveal */}
        <motion.span
          aria-hidden
          initial={{ x: "-120%" }}
          whileInView={{ x: "220%" }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.9, delay: i * 0.05 + 0.2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
        <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-xl font-semibold tracking-tight md:text-2xl">
            {s.year}
          </span>
          <span className="rounded-full bg-accent-lo px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-accent">
            {s.age}
          </span>
        </div>
        <h3 className="relative mt-3 text-base font-semibold leading-snug md:text-lg">
          {s.title}
        </h3>
        <p className="relative mt-2.5 text-sm leading-relaxed text-ink-2 md:text-[0.95rem]">
          {s.text}
        </p>
      </motion.div>
    </motion.li>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

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
          {/* glowing dot riding the tip of the progress line */}
          <motion.div
            style={{ top: lineHeight, opacity: dotOpacity }}
            className="absolute left-[27px] z-10 -ml-[3px] -mt-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_3px_rgba(29,78,216,0.55)] md:left-[35px]"
          />

          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <StepItem key={s.year} s={s} i={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}