"use client";

import { useEffect, useState } from "react";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo
            src={PARENT.logo}
            name={PARENT.short}
            initials="KCP"
            size={30}
            invert={!scrolled}
            className="rounded-lg"
          />
          <span
            className={`text-sm font-semibold tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Kevin C Philipose
          </span>
        </a>
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
      </nav>
    </header>
  );
}
