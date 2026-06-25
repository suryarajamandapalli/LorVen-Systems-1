import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import pcb from "@/assets/service-design.png";
import smt from "@/assets/smt-line.jpg";

export const Route = createFileRoute("/services/design")({
  head: () => ({
    meta: [
      { title: "Design — LorVen Systems" },
      {
        name: "description",
        content:
          "Schematic capture, PCB layout, mechanical packaging and qualification for railway electronics.",
      },
      { property: "og:title", content: "Design Services — LorVen Systems" },
      { property: "og:url", content: "/services/design" },
    ],
    links: [{ rel: "canonical", href: "/services/design" }],
  }),
  component: DesignPage,
});

const PHASES = [
  {
    n: "01",
    t: "Requirements",
    c: "Working session with the operator's engineering team. Operating envelope, interfaces, standards, life-cycle costs.",
  },
  {
    n: "02",
    t: "Concept",
    c: "Block diagrams, technology selection, supplier shortlisting. Trade studies for cost, weight, reliability.",
  },
  {
    n: "03",
    t: "Detail design",
    c: "Schematic capture, PCB layout, mechanical packaging, harness routing — all reviewed against EN 50155.",
  },
  {
    n: "04",
    t: "Prototype",
    c: "First articles built on our own SMT lines. Bench characterisation and design-of-experiment.",
  },
  {
    n: "05",
    t: "Qualification",
    c: "Thermal, vibration, EMI/EMC, life-cycle. Independent witness where required.",
  },
  {
    n: "06",
    t: "Handover",
    c: "As-built drawings, BOM, test records, service manual. Ready for production.",
  },
];

function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="S/01 — Service"
        index="S/01"
        title="Design"
        lede="Electrical, electronics and mechanical design for the railway operating envelope — schematic to qualification, all under one engineering team."
        image={pcb}
      />

      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Process</span>
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
            <span className="eyebrow">Capabilities</span>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-6 md:col-span-9 md:grid-cols-2">
            {[
              "Mixed-signal PCB design, up to 12 layers",
              "FPGA / SoC firmware, RTOS application",
              "Enclosure, harness and routing (3D)",
              "EN 50155 / IEC 61373 qualification",
              "EMI / EMC design and pre-compliance",
              "Functional safety per EN 50128 (TÜV-aligned)",
            ].map((c) => (
              <li key={c} className="border-t border-rule pt-4 text-lg text-ink">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative h-[70vh]">
        <img
          src={smt}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </section>

      <CTAStrip eyebrow="Engage" title="Bring us in at the requirements stage." />
    </>
  );
}
