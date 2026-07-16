"use client";

import { useState } from "react";

/**
 * Drop a file named  portrait.jpg  into /public — that's it.
 * This component tries to load it; if it's missing, the KCP
 * placeholder shows instead. No code changes required.
 */
export default function Portrait() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-bg-alt">
      {!missing && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/portrait.jpg"
          alt="Kevin C Philipose"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          onError={() => setMissing(true)}
        />
      )}
      {missing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-semibold text-ink-3/40">KCP</span>
        </div>
      )}
    </div>
  );
}
