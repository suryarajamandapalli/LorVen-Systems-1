import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import depot from "@/assets/depot.jpg";
import sim from "@/assets/simulator.jpg";
import coach from "@/assets/coach-build.jpg";
import elec from "@/assets/electrical-cabinet.jpg";
import smt from "@/assets/smt-line.jpg";
import wagons from "@/assets/wagons.jpg";
import engineers from "@/assets/engineers.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — LorVen Systems" },
      {
        name: "description",
        content:
          "A selection of recent railway electronics, integration and manufacturing projects.",
      },
      { property: "og:title", content: "Projects — LorVen Systems" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Project = {
  n: string;
  title: string;
  client: string;
  year: number;
  sector: "Mainline" | "Metro" | "Freight" | "Manufacturing";
  region: "North" | "South" | "East" | "West";
  img: string;
  copy: string;
};

const PROJECTS: Project[] = [
  {
    n: "P/41",
    title: "Mainline RDPMS rollout — 400 coaches",
    client: "Indian Railways",
    year: 2024,
    sector: "Mainline",
    region: "South",
    img: depot,
    copy: "Programme retrofit of RDPMS across 400 coaches in three zonal railways, with depot dashboards and predictive scheduling.",
  },
  {
    n: "P/40",
    title: "Coach electrical refit",
    client: "ICF Chennai",
    year: 2024,
    sector: "Manufacturing",
    region: "South",
    img: coach,
    copy: "Junction box and harness sets supplied to the Vande Bharat build line on a pre-kitted basis.",
  },
  {
    n: "P/38",
    title: "Full-cab driving simulator",
    client: "ZRTI Mumbai",
    year: 2023,
    sector: "Mainline",
    region: "West",
    img: sim,
    copy: "WAP-class simulator with 200° visual, motion base and operator-authored route library.",
  },
  {
    n: "P/36",
    title: "Depot LV switchgear",
    client: "BMRCL",
    year: 2023,
    sector: "Metro",
    region: "South",
    img: elec,
    copy: "Form 4b LV distribution for the Yelachenahalli rolling-stock depot.",
  },
  {
    n: "P/34",
    title: "SMT capacity expansion",
    client: "Internal",
    year: 2022,
    sector: "Manufacturing",
    region: "South",
    img: smt,
    copy: "Fourth SMT line commissioned at Bengaluru; qualified IPC-A-610 Class 3 inside 90 days.",
  },
  {
    n: "P/31",
    title: "Freight wagon brake electronics",
    client: "RITES / IR",
    year: 2022,
    sector: "Freight",
    region: "North",
    img: wagons,
    copy: "Brake-control electronics supplied for a 1,200-wagon programme, type-tested at RDSO Lucknow.",
  },
  {
    n: "P/29",
    title: "IFT roll-out at depots",
    client: "Indian Railways",
    year: 2021,
    sector: "Mainline",
    region: "East",
    img: engineers,
    copy: "Integrated functional testers commissioned across six electric-loco sheds.",
  },
];

const SECTORS = ["All", "Mainline", "Metro", "Freight", "Manufacturing"] as const;
const REGIONS = ["All", "North", "South", "East", "West"] as const;

function Projects() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>("All");
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("All");

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (sector === "All" || p.sector === sector) && (region === "All" || p.region === region),
      ),
    [sector, region],
  );

  return (
    <>
      <PageHero
        eyebrow="W — Selected"
        index="W/00"
        title="Selected work."
        lede="A short index of recent programmes — across mainline, metro, freight and our own manufacturing investments. Full case histories available on request."
      />

      {/* Filters */}
      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-10">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Filter — Sector</span>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.16em]">
              {SECTORS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={`link-underline ${sector === s ? "text-ink" : "text-ink-muted"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Filter — Region</span>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.16em]">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`link-underline ${region === r ? "text-ink" : "text-ink-muted"}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex items-end justify-end md:col-span-6">
            <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {filtered.length} / {PROJECTS.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Editorial grid */}
      <section className="border-t border-rule bg-section">
        <div className="container-editorial py-16">
          <div className="grid grid-cols-12 gap-x-6 gap-y-20">
            {filtered.map((p, i) => {
              // Asymmetric pattern
              const span =
                i % 4 === 0
                  ? "col-span-12 md:col-span-8"
                  : i % 4 === 1
                    ? "col-span-12 md:col-span-4 md:mt-32"
                    : i % 4 === 2
                      ? "col-span-12 md:col-span-5"
                      : "col-span-12 md:col-span-6 md:col-start-7";
              return (
                <article key={p.n} className={`reveal ${span}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between border-t border-rule pt-3">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                      {p.sector} · {p.region} · {p.year}
                    </span>
                  </div>
                  <h2 className="mt-3 text-2xl font-light text-ink md:text-3xl">{p.title}</h2>
                  <p className="mt-2 text-sm text-ink-muted">{p.client}</p>
                  <p className="mt-4 max-w-md text-base text-ink">{p.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTAStrip eyebrow="Engage" title="Request a full case study." cta="Contact us" />
    </>
  );
}
