import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { PageIndex } from "@/components/site/PageIndex";
import { CTAStrip } from "@/components/site/CTAStrip";
import { useAutoReveal } from "@/hooks/use-reveal";

// Asset imports
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
    title: "Diagnostic rig roll-out",
    client: "Indian Railways",
    year: 2021,
    sector: "Mainline",
    region: "East",
    img: engineers,
    copy: "Diagnostic testing rigs commissioned across six electric-locomotive overhaul yards.",
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

  // Trigger intersection observer reveal updates when filters change
  useAutoReveal(`${sector}-${region}`);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      <PageHero
        eyebrow="PROJECTS"
        title="Selected work."
        lede="A selection of recent programmes — across mainline, metro, freight and our own manufacturing investments."
        image={depot}
        path={[{ label: "PROJECTS" }]}
      />

      <PageIndex
        columns={[
          {
            title: "Domestic Projects",
            items: [
              { label: "Railways", onClick: () => setSector("Mainline"), active: sector === "Mainline" },
              { label: "Metro", onClick: () => setSector("Metro"), active: sector === "Metro" },
            ],
          },
          {
            title: "Specialized Projects",
            items: [
              { label: "Industrial / Freight", onClick: () => setSector("Freight"), active: sector === "Freight" },
              { label: "Manufacturing", onClick: () => setSector("Manufacturing"), active: sector === "Manufacturing" },
            ],
          },
          {
            title: "Global Reach",
            items: [
              { label: "International (All)", onClick: () => setSector("All"), active: sector === "All" },
            ],
          },
        ]}
      />

      {/* Region Status Bar */}
      <section className="bg-bg border-b border-rule/20 py-6">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
              Region:
            </span>
            <div className="flex flex-wrap gap-x-4 text-xs font-semibold uppercase tracking-[0.12em]">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`link-underline ${region === r ? "text-ink font-bold" : "text-ink/40 hover:text-ink"}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {filtered.length} / {PROJECTS.length} projects
          </span>
        </div>
      </section>

      {/* Editorial Grid (Clean, Responsive Multi-Column Matrix) */}
      <section className="bg-white border-t border-rule/20 py-16 md:py-24">
        <div className="container-editorial">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filtered.map((p) => (
                <article key={p.n} className="reveal flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden bg-surface border border-rule/15">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover select-none pointer-events-none"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between border-t border-rule/10 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                        {p.sector} · {p.region} · {p.year}
                      </span>
                      <span className="text-[10px] font-mono text-ink-muted/40">{p.n}</span>
                    </div>
                    <h3 className="mt-3 text-xl md:text-2xl font-light text-ink uppercase tracking-tight leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-ink-muted/70 font-semibold">{p.client}</p>
                    <p className="mt-4 text-base text-ink font-light leading-relaxed">{p.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-12 border border-dashed border-rule/30 text-center">
              <span className="text-sm text-ink-muted font-light">No projects match the selected criteria.</span>
            </div>
          )}
        </div>
      </section>

      <CTAStrip eyebrow="Engage" title="Request a full case study." cta="Contact us" />
    </div>
  );
}
