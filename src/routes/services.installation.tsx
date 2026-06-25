import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import engineers from "@/assets/service-installation.png";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/services/installation")({
  head: () => ({
    meta: [
      { title: "Installation — LorVen Systems" },
      {
        name: "description",
        content:
          "Turnkey installation, integration and commissioning on rolling stock, depots and trackside cabinets.",
      },
      { property: "og:title", content: "Installation Services — LorVen Systems" },
      { property: "og:url", content: "/services/installation" },
    ],
    links: [{ rel: "canonical", href: "/services/installation" }],
  }),
  component: InstallationPage,
});

const PHASES = [
  {
    n: "01",
    t: "Site survey",
    c: "Walk-down of the coach, cabin or cabinet. As-found drawings, interface verification, retrofit risk.",
  },
  {
    n: "02",
    t: "Method statement",
    c: "Sequence, tooling, safety isolation, possession planning, RAMS submitted to the operator.",
  },
  {
    n: "03",
    t: "Mobilisation",
    c: "Pre-kitted assemblies, calibrated tooling and a trained crew arrive on site.",
  },
  {
    n: "04",
    t: "Install",
    c: "Mechanical fit, harness routing, terminations — all to drawing, with photo record of each step.",
  },
  {
    n: "05",
    t: "Commissioning",
    c: "Static and dynamic tests, software loading, FAT/SAT, operator witness.",
  },
  {
    n: "06",
    t: "Handover",
    c: "As-installed pack, training to operator's depot staff, warranty bond start.",
  },
];

function InstallationPage() {
  return (
    <>
      <PageHero
        eyebrow="S/02 — Service"
        index="S/02"
        title="Installation"
        lede="Turnkey installation, integration and commissioning. Our crews work in the depot, in the coach build line and in the trackside cabinet."
        image={engineers}
      />

      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Method</span>
          </div>
          <ol className="col-span-12 divide-y divide-rule border-t border-rule md:col-span-9">
            {PHASES.map((p) => (
              <li key={p.n} className="reveal grid grid-cols-12 items-baseline gap-4 py-8">
                <span className="num-mono col-span-2 text-[11px] text-ink-muted">{p.n}</span>
                <div className="col-span-10 md:grid md:grid-cols-[1fr_2fr] md:gap-8">
                  <h3 className="text-2xl font-light text-ink md:text-3xl">{p.t}</h3>
                  <p className="mt-2 text-base text-ink-muted md:mt-0 md:text-lg md:text-ink">
                    {p.c}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule bg-section">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Footprint</span>
          </div>
          <dl className="col-span-12 divide-y divide-rule border-t border-rule md:col-span-9">
            {[
              ["Active site crews", "12 — deployed across India"],
              ["Average mobilisation", "72 h to any zonal HQ"],
              ["Operator approvals", "IR, MRVC, BMRCL, CMRL, KMRL"],
              ["Safety record", "Zero LTI since 2021"],
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
      </section>

      <section className="relative h-[70vh]">
        <img
          src={depot}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </section>

      <CTAStrip eyebrow="Engage" title="Hand the install to a team that's done it before." />
    </>
  );
}
