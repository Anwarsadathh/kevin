import type { Metadata } from "next";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin C Philipose — Entrepreneur, Founder & Business Strategist",
  description:
    "Founder & CEO of LearnScape Edu Pvt. Ltd. Founder of Invest Better and Caffè Latte Lounge. Building businesses across education, consulting, and hospitality.",
  openGraph: {
    title: "Kevin C Philipose — Entrepreneur, Founder & Business Strategist",
    description:
      "Building businesses that solve real-world problems through innovation, technology, and strategic execution.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
