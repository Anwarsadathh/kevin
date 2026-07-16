"use client";

import { motion } from "framer-motion";
import Reveal, { RevealSide } from "./Reveal";
import SectionHeading from "./SectionHeading";

const CHANNELS = [
  {
    label: "Email",
    value: "kevincphilipose2004@gmail.com",
    href: "mailto:kevincphilipose2004@gmail.com",
    external: false,
    icon: (
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2.3 6.8 5.1 6.8-5.1M4.5 17.5v-9l7.5 5.6 7.5-5.6v9" />
    ),
  },
  {
    label: "Website",
    value: "learnscapeedu.com",
    href: "https://learnscapeedu.com",
    external: true,
    icon: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9s1.2-6.4 3.6-9ZM3.3 9h17.4M3.3 15h17.4" />
    ),
  },
  {
    label: "Instagram",
    value: "@iamkwinn",
    href: "https://www.instagram.com/iamkwinn",
    external: true,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="connect"
        className="border-t border-line bg-bg-alt px-6 py-24 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12">
            <RevealSide from="left" className="md:col-span-5">
              <SectionHeading eyebrow="Connect">
                Let&rsquo;s build something together
              </SectionHeading>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-2">
                  I welcome opportunities to collaborate with educational
                  institutions, entrepreneurs, startups, investors, and
                  organizations that share a vision for innovation and
                  sustainable growth.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <a
                  href="mailto:kevincphilipose2004@gmail.com"
                  className="btn-primary group mt-8 inline-flex"
                >
                  Start a conversation
                  <span className="btn-arrow" aria-hidden>
                    →
                  </span>
                </a>
              </Reveal>
            </RevealSide>

            <RevealSide
              from="right"
              delay={0.06}
              className="md:col-span-6 md:col-start-7"
            >
              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_44px_-20px_rgba(15,23,42,0.12)]">
                {CHANNELS.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-accent-lo ${
                      i > 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-lo text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        {c.icon}
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wide text-ink-3">
                        {c.label}
                      </span>
                      <span className="block truncate text-[0.95rem] font-medium text-ink">
                        {c.value}
                      </span>
                    </span>
                    <span className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </RevealSide>
          </div>
        </div>
      </section>

      <footer className="bg-bg-deep px-6 py-10 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Kevin C Philipose
            </p>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/45">
              Founder, Kwin Syndicate Holdings Pvt. Ltd. · Founder &amp; CEO,
              LearnScape Edu · Founder, Invest Better · Founder, Caffè Latte
              Lounge
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} Kevin C Philipose
            </p>
            <a
              href="#top"
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              Back to top
              <span aria-hidden>↑</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}