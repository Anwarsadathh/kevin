"use client";

import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";

/** Eyebrow + heading with an accent underline that grows in on view. */
export default function SectionHeading({
  eyebrow,
  children,
  light = false,
  center = false,
}: {
  eyebrow: string;
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Reveal>
      <div ref={ref} className={center ? "text-center" : ""}>
        <p className={`eyebrow ${light ? "text-white/45" : ""}`}>{eyebrow}</p>
        <h2
          className={`h-underline mt-4 text-3xl md:text-4xl font-semibold leading-tight ${
            inView ? "in-view" : ""
          }`}
        >
          {children}
        </h2>
      </div>
    </Reveal>
  );
}
