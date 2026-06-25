import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/CTAStrip";
import { PRODUCT_INDEX } from "@/lib/site-data";
import smt from "@/assets/smt-line.jpg";
import sim from "@/assets/simulator.jpg";
import coach from "@/assets/coach-build.jpg";
import elec from "@/assets/electrical-cabinet.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — LorVen Systems" },
      {
        name: "description",
        content:
          "Railway electronics, locomotive systems, coach & wagon assemblies and electrical systems.",
      },
      { property: "og:title", content: "Products — LorVen Systems" },
      {
        property: "og:description",
        content: "Four product programmes engineered for the railway.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

const IMGS = [smt, sim, coach, elec];

function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="P — Index"
        index="P/00"
        title="Four programmes. One engineering discipline."
        lede="LorVen Systems' product catalogue spans printed-circuit assembly, locomotive electronics, rolling-stock sub-assemblies and electrical integration — each line designed and manufactured in-house."
      />

      <section className="border-t border-rule bg-bg">
        <div className="container-editorial py-12">
          <ul>
            {PRODUCT_INDEX.map((p, i) => (
              <li key={p.slug} className="reveal border-t border-rule">
                <a
                  href={`/products/${p.slug}`}
                  className="group grid grid-cols-12 items-center gap-6 py-10 md:py-14"
                >
                  <div className="col-span-12 md:col-span-6">
                    <h2 className="text-3xl font-light leading-tight text-ink transition-colors group-hover:text-steel md:text-5xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm text-ink-muted">{p.blurb}</p>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="aspect-[16/10] overflow-hidden bg-surface">
                      <img
                        src={IMGS[i]}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <span className="hidden md:col-span-1 md:block text-[11px] uppercase tracking-[0.16em] text-ink-muted text-right">
                    View →
                  </span>
                </a>
              </li>
            ))}
            <li className="border-t border-rule" />
          </ul>
        </div>
      </section>

      <CTAStrip eyebrow="Specify" title="Tailor a configuration to your operating envelope." />
    </>
  );
}
