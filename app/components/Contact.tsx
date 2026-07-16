import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="connect"
      className="border-t border-line bg-bg-alt px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="Connect">
              Let&rsquo;s build something together
            </SectionHeading>
            <Reveal delay={0.08}>
              <p className="mt-6 text-base leading-relaxed text-ink-2">
                I welcome opportunities to collaborate with educational
                institutions, entrepreneurs, startups, investors, and
                organizations that share a vision for innovation and
                sustainable growth.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.06} className="md:col-span-6 md:col-start-7">
            <div className="card p-8">
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:learnscapeinfo@gmail.com"
                      className="text-base font-medium text-accent hover:underline"
                    >
                      learnscapeinfo@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="eyebrow">Website</dt>
                  <dd className="mt-1">
                    <a
                      href="https://learnscapeedu.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-medium text-accent hover:underline"
                    >
                      learnscapeedu.com
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="eyebrow">Instagram</dt>
                  <dd className="mt-1">
                    <a
                      href="https://www.instagram.com/learn_scape_"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-medium text-accent hover:underline"
                    >
                      @learn_scape_
                    </a>
                  </dd>
                </div>
              </dl>

              <a
                href="mailto:learnscapeinfo@gmail.com"
                className="mt-8 block rounded-lg bg-ink px-5 py-3 text-center text-sm font-medium text-white hover:bg-ink/90 transition-colors"
              >
                Start a conversation
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold">Kevin C. Philipose</p>
            <p className="mt-1 text-sm text-ink-2">
              Founder, Kwin Syndicate Holdings Pvt. Ltd. · Founder &amp; CEO,
              LearnScape Edu · Founder, Invest Better · Founder, Caffè Latte
              Lounge
            </p>
          </div>
          <p className="text-xs text-ink-3">
            © {new Date().getFullYear()} Kevin C. Philipose. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
