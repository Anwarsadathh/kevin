import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ACHIEVEMENTS = [
  "Built partnerships with 500+ colleges and universities across India",
  "Founded LearnScape Edu, Invest Better, and Caffè Latte Lounge",
  "Developed LearnScapeEdu.com — a platform for direct college admissions",
  "Built one of India's fastest-growing education consultancy networks",
  "Created ventures across education, consulting, and hospitality before age 21",
  "Entered the Indian stock market as a trader at age 18",
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="border-t border-line px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Recognition">
          Awards &amp; achievements
        </SectionHeading>

        <div className="mt-12 grid md:grid-cols-12 gap-6">
          {/* featured award */}
          <Reveal className="md:col-span-5">
            <div className="card h-full p-8 bg-accent-lo border-accent/15">
              <p className="eyebrow text-accent">2025</p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug">
                Best Education Consultancy Award
              </h3>
              <p className="mt-2 text-sm font-medium text-ink-2">
                Business Insight Magazine
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink-2">
                Awarded to LearnScape Edu Pvt. Ltd. in recognition of its
                innovation, transparency, and commitment to excellence in
                higher education admissions — reflecting the mission to build
                one of India&rsquo;s most trusted and fastest-growing
                education ecosystems.
              </p>
            </div>
          </Reveal>

          {/* achievement list */}
          <Reveal delay={0.06} className="md:col-span-7">
            <ul className="card h-full divide-y divide-line">
              {ACHIEVEMENTS.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 px-6 py-4 text-sm leading-relaxed text-ink-2"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-3" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
