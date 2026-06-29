import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCT_INDEX } from "@/lib/site-data";
import heroImg from "@/assets/factory-hall.jpg";

import rdpmsImg from "@/assets/pcb-macro.jpg";
import ipsImg from "@/assets/electrical-cabinet.jpg";
import simImg from "@/assets/simulator.jpg";
import iftImg from "@/assets/loco-hero-real.jpg";
import wliImg from "@/assets/wagons.jpg";
import ahabdImg from "@/assets/coach-build.jpg";

const PRODUCT_IMAGES: Record<string, string> = {
  rdpms: rdpmsImg,
  ips: ipsImg,
  simulators: simImg,
  ift: iftImg,
  wli: wliImg,
  ahabd: ahabdImg,
};

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Index of All Products — LorVen Systems" },
      {
        name: "description",
        content: "Explore LorVen's complete portfolio of railway engineering solutions.",
      },
      { property: "og:title", content: "Index of All Products — LorVen Systems" },
      {
        property: "og:description",
        content: "Explore LorVen's complete portfolio of railway engineering solutions.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const allProducts = PRODUCT_INDEX.flatMap((div) =>
    div.children.map((prod) => ({
      ...prod,
      divisionSlug: div.slug,
      divisionTitle: div.title,
    }))
  );

  return (
    <>
      {/* 1. Hero Section with Dark Translucent Layer and White Text */}
      <section className="relative bg-bg pt-[64px]">
        {/* Hero Image with Black Translucent Layer */}
        <div className="relative h-[35vh] md:h-[45vh] w-full flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="LorVen Factory" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          
          <div className="container-editorial relative z-10 pb-8 md:pb-12">
            <h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-wide drop-shadow-sm">
              Index of All Products
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-sm">
              Explore LorVen's complete portfolio of railway engineering solutions.
            </p>
          </div>
        </div>
        
        {/* Perfect Breadcrumb Below Image */}
        <div className="container-editorial relative grid grid-cols-12 gap-6 pt-6 pb-8">
          <div className="col-span-12 flex flex-col justify-start border-b border-rule pb-6">
            <ul className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-ink-muted pointer-events-auto">
              <li><Link to="/" className="hover:text-ink transition-colors duration-200">Home</Link></li>
              <li>
                <svg width="4" height="6" viewBox="0 0 4 6" fill="none" className="opacity-40">
                  <path d="M1 1L3 3L1 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li><span className="text-ink">Products</span></li>
              <li>
                <svg width="4" height="6" viewBox="0 0 4 6" fill="none" className="opacity-40">
                  <path d="M1 1L3 3L1 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li><span className="text-ink font-semibold">Index of All Products</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Old Grid System (Simple 3-Col, Clean White Cards) */}
      <section className="pb-24 bg-bg pt-8">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {allProducts.map((prod) => (
              <Link
                key={prod.slug}
                to={`/products/${prod.divisionSlug}/${prod.slug}` as any}
                className="group/card flex flex-col bg-white overflow-hidden border border-rule/10 hover:border-rule/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Window */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img 
                    src={PRODUCT_IMAGES[prod.slug] || rdpmsImg} 
                    alt={prod.title} 
                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-[600ms] group-hover/card:bg-black/[0.03]" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-rule/80 mb-3 block">
                      {prod.divisionTitle}
                    </span>
                    <h2 className="text-xl font-medium text-ink transition-colors duration-300 group-hover/card:text-rule">
                      {prod.title}
                    </h2>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {prod.blurb}
                    </p>
                  </div>

                  {/* Footer / CTA */}
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-rule/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 group-hover/card:text-rule transition-colors duration-300">
                      Explore Product
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rule opacity-0 -translate-x-4 transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:opacity-100 group-hover/card:translate-x-0">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

