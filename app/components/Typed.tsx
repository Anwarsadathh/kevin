"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Entrepreneur.",
  "Founder.",
  "Business Strategist.",
  "Education Innovator.",
];

export default function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = full.slice(0, text.length + 1);
          setText(next);
          if (next === full) setTimeout(() => setDel(true), 1600);
        } else {
          const next = full.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => (v + 1) % ROLES.length);
          }
        }
      },
      del ? 34 : 62
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-sky-300">
      {text}
      <span className="caret" aria-hidden>
        |
      </span>
    </span>
  );
}
