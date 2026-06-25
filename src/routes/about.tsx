import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import factoryHall from "@/assets/factory-hall.jpg";
import engineers from "@/assets/engineers.jpg";
import coachBuild from "@/assets/coach-build.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LorVen Systems" },
      {
        name: "description",
        content:
          "A fifteen-year practice in railway electronics, electrical integration and rolling-stock engineering.",
      },
      { property: "og:title", content: "About — LorVen Systems" },
      { property: "og:description", content: "A quiet practice in railway engineering." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2008", note: "LorVen Systems founded in Hyderabad. First SMT line commissioned." },
  { year: "2012", note: "Bengaluru manufacturing facility opens; ISO 9001 certified." },
  { year: "2016", note: "First RDPMS deployment on Indian Railways mainline." },
  { year: "2019", note: "IRIS certification. Full-cab driving simulator delivered." },
  { year: "2022", note: "Coach electrical refit programme at ICF Chennai." },
  { year: "2024", note: "IPC-A-610 Class 3 line upgrade. 200+ projects delivered." },
];

const LEADERSHIP = [
  { name: "A. Ramaswamy", role: "Managing Director" },
  { name: "S. Iyer", role: "Director, Engineering" },
  { name: "P. Mehra", role: "Director, Operations" },
  { name: "K. Nair", role: "Head of Quality" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="A — Index"
        index="A/01"
        title="A quiet practice in railway engineering."
        lede="LorVen Systems is a privately-held engineering firm headquartered in Hyderabad, manufacturing in Bengaluru, working with national operators, OEMs and integrators across mainline, metro and freight rail."
        image={factoryHall}
      />

      {/* Vision / Mission */}
      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Position</span>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-12 md:col-span-9 md:grid-cols-2">
            <div className="reveal">
              <p className="num-mono text-[11px] text-ink-muted">Vision</p>
              <p className="mt-4 text-2xl font-light leading-snug text-ink">
                To be the silent specialist trusted by every railway in the region — chosen because
                the work simply lasts.
              </p>
            </div>
            <div className="reveal">
              <p className="num-mono text-[11px] text-ink-muted">Mission</p>
              <p className="mt-4 text-2xl font-light leading-snug text-ink">
                Engineer, manufacture and install electronics and electrical systems that meet the
                railway's most patient standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="border-t border-rule bg-section">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-5">
            <span className="eyebrow">Manufacturing</span>
            <h2 className="reveal-mask mt-8 display-clamp font-light text-ink">
              <span>Two plants. Forty thousand square feet.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="reveal text-lg leading-relaxed text-ink">
              Our Hyderabad facility houses design, prototyping and small-batch SMT. The Bengaluru
              plant handles high-mix production, system integration and environmental qualification.
            </p>
            <dl className="mt-10 divide-y divide-rule border-t border-rule">
              {[
                ["SMT lines", "4 — qualified to IPC-A-610 Class 3"],
                ["Test chambers", "Thermal, vibration, EMI/EMC, burn-in"],
                ["Annual capacity", "120,000 boards / 2,400 cabinets"],
                ["Traceability", "End-to-end serial tracking, 15-year archive"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[1fr_2fr]">
                  <dt className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {k}
                  </dt>
                  <dd className="text-base text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Facilities image */}
      <section className="relative h-[80vh] bg-ink">
        <img
          src={coachBuild}
          alt="Coach in build"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        <div className="container-editorial relative z-10 flex h-full items-end pb-12">
          <p className="num-mono text-[11px] uppercase tracking-[0.16em] text-on-dark/80">
            Plant 02, Bengaluru — Coach electrical bay
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-rule bg-bg">
        <div className="container-editorial py-24">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">Leadership</span>
            <span className="num-mono text-[11px] text-ink-muted">Four members</span>
          </div>
          <ul className="mt-12 divide-y divide-rule border-t border-rule">
            {LEADERSHIP.map((l, i) => (
              <li key={l.name} className="reveal grid grid-cols-12 items-baseline gap-4 py-8">
                <span className="col-span-12 text-3xl font-light text-ink md:col-span-8 md:text-4xl">
                  {l.name}
                </span>
                <span className="col-span-12 text-[11px] uppercase tracking-[0.16em] text-ink-muted md:col-span-4 md:text-right">
                  {l.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quality */}
      <section className="border-t border-rule bg-section">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Quality</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="reveal max-w-3xl text-2xl font-light leading-snug text-ink md:text-3xl">
              Quality is a documentation practice as much as a manufacturing one. Every assembly
              carries a serial, a route card and a paper trail that outlives the warranty.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {["IRIS Rev. 03", "ISO 9001:2015", "ISO 14001:2015", "RDSO Approved"].map((c) => (
                <div key={c} className="border-t border-rule pt-4">
                  <p className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    Standard
                  </p>
                  <p className="mt-2 text-base text-ink">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Timeline</span>
          </div>
          <ol className="col-span-12 border-l border-rule md:col-span-9">
            {TIMELINE.map((t) => (
              <li
                key={t.year}
                className="reveal relative grid grid-cols-1 gap-2 py-6 pl-8 md:grid-cols-[120px_1fr] md:gap-12"
              >
                <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  {t.year}
                </span>
                <span className="text-lg text-ink md:text-xl">{t.note}</span>
                <span className="absolute left-[-5px] top-8 h-2 w-2 bg-ink" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule bg-section">
        <div className="container-editorial py-20">
          <img
            src={engineers}
            alt="Engineers inspecting bogie"
            loading="lazy"
            className="h-[70vh] w-full object-cover"
          />
        </div>
      </section>

      <CTAStrip eyebrow="Work with us" title="Tell us about the system you need to build." />
    </>
  );
}
