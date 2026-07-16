import Image from "next/image";

type Props = {
  /** path under /public, e.g. "/logos/learnscape.svg" — omit to show the initials fallback */
  src?: string;
  name: string;
  /** short fallback shown until the logo file is added */
  initials: string;
  size?: number;
  className?: string;
  invert?: boolean;
};

/**
 * Single place every company logo renders. Drop the file in /public/logos
 * and pass `src` — the initials fallback disappears automatically.
 */
export default function Logo({
  src,
  name,
  initials,
  size = 40,
  className = "",
  invert = false,
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={size}
        height={size}
        className={`object-contain ${invert ? "brightness-0 invert" : ""} ${className}`}
      />
    );
  }

  return (
    <span
      aria-label={`${name} logo`}
      role="img"
      className={`inline-flex shrink-0 items-center justify-center rounded-lg border font-semibold tracking-tight ${
        invert
          ? "border-white/20 bg-white/10 text-white"
          : "border-line bg-bg-alt text-ink-3"
      } ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.32 }}
    >
      {initials}
    </span>
  );
}
