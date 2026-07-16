"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { PARENT } from "../companies";

const LINKS = [
  ["#group", "Group"],
  ["#about", "About"],
  ["#ventures", "Ventures"],
  ["#journey", "Journey"],
  ["#connect", "Connect"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo
            src={PARENT.logo}
            name={PARENT.short}
            initials="KCP"
            size={30}
            invert={!dark}
            className="rounded-lg"
          />
          <span
            className={`text-sm font-semibold tracking-tight transition-colors ${
              dark ? "text-ink" : "text-white"
            }`}
          >
            Kevin C Philipose
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-ink-2 hover:text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#connect"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              scrolled
                ? "bg-ink text-white hover:opacity-90"
                : "bg-white text-bg-deep hover:opacity-90"
            }`}
          >
            Get in touch
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`h-[1.5px] w-6 rounded-full ${dark ? "bg-ink" : "bg-white"}`}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className={`h-[1.5px] w-6 rounded-full ${dark ? "bg-ink" : "bg-white"}`}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`h-[1.5px] w-6 rounded-full ${dark ? "bg-ink" : "bg-white"}`}
          />
        </button>
      </nav>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line bg-white px-6 pb-8 pt-4 md:hidden"
          >
            <div className="flex flex-col">
              {LINKS.map(([href, label], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-line py-4 text-base font-medium text-ink"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#connect"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + LINKS.length * 0.05, duration: 0.35 }}
                className="mt-6 rounded-lg bg-ink px-5 py-3 text-center text-sm font-medium text-white"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
