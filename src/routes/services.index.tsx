import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import { SERVICE_INDEX } from "@/lib/site-data";
import serviceDesign from "@/assets/service-design.png";
import serviceInstallation from "@/assets/service-installation.png";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — LorVen Systems" },
      {
        name: "description",
        content: "Design and installation services for railway electronics and electrical systems.",
      },
      { property: "og:title", content: "Services — LorVen Systems" },
      { property: "og:description", content: "Design and installation, in one pair of hands." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const IMG = [serviceDesign, serviceInstallation];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="S — Index"
        index="S/00"
        title="Design and installation, in one pair of hands."
        lede="From the first schematic to the final commissioning sign-off, our engineering team owns the work end-to-end. Two services, one continuous discipline."
      />

      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          {SERVICE_INDEX.map((s, i) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="reveal group col-span-12 md:col-span-6"
            >
              <div className="aspect-[5/4] overflow-hidden bg-surface">
                <img
                  src={IMG[i]}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-end border-t border-rule pt-4">
                <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  Read →
                </span>
              </div>
              <h2 className="mt-4 text-4xl font-light text-ink group-hover:text-steel md:text-5xl">
                {s.title}
              </h2>
              <p className="mt-3 max-w-md text-base text-ink-muted">{s.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <CTAStrip eyebrow="Engage" title="Bring us in at design, or at installation." />
    </>
  );
}
