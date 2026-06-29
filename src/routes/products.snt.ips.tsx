import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import elecCabinet from "@/assets/electrical-cabinet.jpg";
import sntHeroReal from "@/assets/snt-hero-real.jpg";
import { BreadcrumbHero } from "@/components/site/BreadcrumbHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/products/snt/ips")({
  head: () => ({
    meta: [
      { title: "IPS — Integrated Power Supply System — LorVen Systems" },
      { name: "description", content: "Fail-safe integrated power supply system for railway signalling installations." },
    ],
  }),
  component: IpsPage,
});

function IpsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal text
    gsap.utils.toArray(".reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
        }
      );
    });

    // Suble image scales
    gsap.utils.toArray(".img-scale").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. HERO SECTION */}
      <BreadcrumbHero
        category="PRODUCTS"
        title="IPS"
        description="Integrated Power Supply System — Fail-safe microprocessor-controlled power solution delivering stable, redundant power under all electrical conditions."
        backgroundImage={elecCabinet}
        path={[
          { label: "PRODUCTS", to: "/products" },
          { label: "SIGNALLING & TELECOM", to: "/products" },
          { label: "IPS" },
        ]}
      />

      {/* 2. THE SYSTEM PHILOSOPHY (Staggered Layout) */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow block mb-4">Core Architecture</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-ink uppercase leading-tight">
                Absolute <br />
                Availability.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal text-lg text-ink-muted font-light leading-relaxed space-y-6">
              <p>
                LorVen IPS integrates switch-mode rectifiers, DC-DC converters, inverter panels, and smart monitoring modules into a single, cohesive power cabinet.
              </p>
              <p>
                Engineered for safety-critical railway interlocking environments, it features hot-swappable sub-assemblies to ensure zero downtime during maintenance or module replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHT IMAGE WITH TEXT OVERLAY */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-ink flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={sntHeroReal}
            alt="IPS Cabinet Detail"
            className="img-scale w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>
        <div className="container-editorial relative z-10 text-white">
          <div className="max-w-xl reveal">
            <span className="eyebrow text-white/60 block mb-4">Safety Compliance</span>
            <h3 className="text-3xl md:text-4xl font-light mb-6">RDSO Certified Reliability</h3>
            <p className="text-white/70 font-light leading-relaxed">
              Fully compliant with the stringent RDSO SPEC SPN/186/2016 specification, ensuring robust performance across Indian Railways SNT installations under extreme voltage fluctuations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE ADVANTAGES */}
      <section className="py-32 bg-section border-y border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">01 / EFFICIENCY</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">High Efficiency</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Advanced switch-mode power conversion achieving greater than 92% efficiency under full operational load.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">02 / CONTINUITY</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Zero Downtime</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Hot-swappable rectifier and converter modules allow seamless maintenance without interrupting the signalling power path.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">03 / REDUNDANCY</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">N+1 Redundancy</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Parallel-redundant configuration guarantees that a single module failure does not compromise the interlocking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32 reveal">
                <h2 className="text-3xl font-light tracking-tight text-ink uppercase">Specifications</h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="editorial-rule">
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">AC Input Voltage</div>
                  <div className="md:col-span-2 text-ink font-light">Single-phase or three-phase 110V / 230V / 415V options</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">DC Output Channels</div>
                  <div className="md:col-span-2 text-ink font-light">24V, 60V, 110V modular configurations</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Rectifier Type</div>
                  <div className="md:col-span-2 text-ink font-light">Hot-swappable switch-mode rectifier units</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">System MTBF</div>
                  <div className="md:col-span-2 text-ink font-light">&gt; 100,000 hours per module</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Standardization</div>
                  <div className="md:col-span-2 text-ink font-light">RDSO SPEC SPN/186/2016 approved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA / Next Product */}
      <section className="py-32 bg-section border-t border-rule">
         <div className="container-editorial text-center reveal">
            <span className="eyebrow block mb-6">Explore Further</span>
            <h2 className="text-4xl font-light text-ink tracking-tight mb-8">Driving Simulators</h2>
            <Link to="/products/electric-locomotive/simulators" className="inline-flex items-center space-x-3 text-sm font-medium uppercase tracking-widest text-ink link-underline">
              <span>View Simulators</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
         </div>
      </section>

    </div>
  );
}
