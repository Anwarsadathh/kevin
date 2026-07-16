import Reveal from "./Reveal";
import Logo from "./Logo";
import { COMPANIES, PARENT } from "../companies";

export default function Group() {
  return (
    <section
      id="group"
      className="relative overflow-hidden border-t border-line bg-bg-deep px-6 py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, #000, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, #000, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow text-white/45">The group</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            One holding company. Three businesses.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            {PARENT.blurb}
          </p>
        </Reveal>

        {/* parent node */}
        <Reveal delay={0.06}>
          <div className="mt-14 inline-flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 backdrop-blur-sm">
            <Logo
              src={PARENT.logo}
              name={PARENT.short}
              initials={PARENT.initials}
              size={42}
              invert
            />
            <div className="text-left">
              <p className="text-base font-semibold">{PARENT.name}</p>
              <p className="mt-0.5 text-xs text-white/50">
                {PARENT.role} · Parent holding company
              </p>
            </div>
          </div>
        </Reveal>

        {/* connector */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-2 h-14 w-full max-w-3xl" aria-hidden>
            <span className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-white/20" />
            <span className="absolute left-1/2 top-7 hidden h-px w-2/3 -translate-x-1/2 bg-white/20 md:block" />
            <span className="absolute left-[16.66%] top-7 hidden h-7 w-px bg-white/20 md:block" />
            <span className="absolute left-1/2 top-7 hidden h-7 w-px -translate-x-1/2 bg-white/20 md:block" />
            <span className="absolute left-[83.33%] top-7 hidden h-7 w-px bg-white/20 md:block" />
          </div>
        </Reveal>

        {/* children */}
        <div className="grid gap-4 md:grid-cols-3">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.key} delay={0.14 + i * 0.06}>
              <div className="h-full rounded-xl border border-white/12 bg-white/[0.05] p-6 text-left backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.08]">
                <div className="flex items-center gap-3">
                  <Logo
                    src={c.logo}
                    name={c.name}
                    initials={c.initials}
                    size={34}
                    invert
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{c.name}</p>
                    <p className="text-[0.7rem] text-white/45">{c.sector}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-medium text-white/70">
                  {c.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
