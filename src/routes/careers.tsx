import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import engineers from "@/assets/engineers.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — LorVen Systems" },
      {
        name: "description",
        content:
          "Engineering roles at a quiet, specialist firm in railway electronics and electrical integration.",
      },
      { property: "og:title", content: "Careers — LorVen Systems" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const OPENINGS = [
  {
    n: "C/01",
    role: "Senior Hardware Engineer — Rail electronics",
    loc: "Hyderabad",
    type: "Permanent",
  },
  { n: "C/02", role: "PCB Layout Engineer", loc: "Hyderabad", type: "Permanent" },
  { n: "C/03", role: "Firmware Engineer — RTOS", loc: "Hyderabad", type: "Permanent" },
  { n: "C/04", role: "SMT Process Engineer", loc: "Bengaluru", type: "Permanent" },
  { n: "C/05", role: "Quality Engineer — IPC", loc: "Bengaluru", type: "Permanent" },
  { n: "C/06", role: "Site Installation Engineer", loc: "Pan-India", type: "Permanent" },
  { n: "C/07", role: "Procurement Specialist — Electronics", loc: "Hyderabad", type: "Permanent" },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="C — People"
        index="C/00"
        title="Slow work. Long careers."
        lede="LorVen is a specialist firm of engineers, technicians and machinists. We hire for patience as much as for skill. Most of our team has been with us for over a decade."
        image={engineers}
      />

      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Culture</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="reveal max-w-3xl text-2xl font-light leading-snug text-ink md:text-3xl">
              We are not in a hurry. The railway operates on twenty-year horizons, and so do we. Our
              engineers are expected to learn one subsystem deeply, then teach it to the next
              person.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-section">
        <div className="container-editorial py-16">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">Open roles</span>
            <span className="num-mono text-[11px] text-ink-muted">{OPENINGS.length} positions</span>
          </div>
          <ul className="mt-10 border-t border-rule">
            {OPENINGS.map((o) => (
              <li key={o.n} className="reveal border-b border-rule">
                <a
                  href={`mailto:careers@lorvensystems.com?subject=${encodeURIComponent(o.role)}`}
                  className="group grid grid-cols-12 items-baseline gap-4 py-6"
                >
                  <span className="col-span-12 text-2xl font-light text-ink group-hover:text-steel md:col-span-8 md:text-3xl">
                    {o.role}
                  </span>
                  <span className="col-span-6 text-[11px] uppercase tracking-[0.16em] text-ink-muted md:col-span-2">
                    {o.loc}
                  </span>
                  <span className="col-span-6 text-right text-[11px] uppercase tracking-[0.16em] text-ink-muted md:col-span-2">
                    {o.type} →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTAStrip
        eyebrow="Apply"
        title="Send a short note and a CV."
        cta="careers@lorvensystems.com"
        to="/contact"
      />
    </>
  );
}
