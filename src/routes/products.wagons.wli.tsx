import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import wagonsHero from "@/assets/wagons-hero.jpg";
import wagonsHeroReal from "@/assets/wagons-hero-real.jpg";
import { BreadcrumbHero } from "@/components/site/BreadcrumbHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/products/wagons/wli")({
  head: () => ({
    meta: [
      { title: "WLI — Wagon Load Indicator — LorVen Systems" },
      { name: "description", content: "Onboard axle weight measurement and payload tracking indicator for freight wagons." },
    ],
  }),
  component: WliPage,
});

function WliPage() {
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
        title="WLI"
        description="Wagon Load Indicator — Onboard axle weight measurement and payload tracking indicator engineered for rugged freight wagon operations."
        backgroundImage={wagonsHero}
        path={[
          { label: "PRODUCTS", to: "/products" },
          { label: "WAGONS", to: "/products" },
          { label: "WLI" },
        ]}
      />

      {/* 2. OVERVIEW (Bespoke Staggered Layout) */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow block mb-4">Onboard Weighing</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-ink uppercase leading-tight">
                Axle Load <br />
                Precision.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal text-lg text-ink-muted font-light leading-relaxed space-y-6">
              <p>
                The Lorven WLI system uses rugged, hermetically sealed strain-gauge sensors installed directly on the wagon bogies and suspension assemblies.
              </p>
              <p>
                It provides train operators and loading yard systems with precise axle weight data in real time, preventing overloading, optimizing cargo distribution, and ensuring compliance with heavy haul safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUSPENSION INTEGRATION */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Image */}
            <div className="relative aspect-[4/3] overflow-hidden reveal bg-white/5 order-2 lg:order-1">
              <img src={wagonsHeroReal} alt="Wagon bogie assembly with WLI" className="img-scale w-full h-full object-cover object-center opacity-85 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2">
              <div className="reveal-mask mb-8">
                <span className="eyebrow block text-white/50">Wireless Yard Telemetry</span>
              </div>
              <div className="reveal-mask mb-8">
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                  Wayside transmission.
                </h3>
              </div>
              <div className="reveal space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Equipped with a sub-1GHz wireless RF transmitter, WLI broadcasts loading status directly to yard terminals and locomotive cabs without requiring cables between wagons.
                </p>
                <p>
                  A high-contrast, IP66-rated LED indicator on the wagon body provides loading crews with immediate visual feedback during bulk material loading.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE ADVANTAGES */}
      <section className="py-32 bg-section border-y border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">01 / PROTECTION</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Overload Prevention</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Real-time loading feedback prevents structural damage to wagons and tracks by ensuring strict adherence to loading limits.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">02 / BALANCE</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Imbalanced Load</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Detects uneven weight distribution across axles to prevent derailment risks and reduce uneven wheel and flange wear.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">03 / HARDENING</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">5-Year Battery Life</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Hardened lithium battery pack designed for a 5-year operational lifetime in extreme environmental and weather conditions.
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
                  <div className="font-mono text-xs uppercase text-ink-muted">Measurement Accuracy</div>
                  <div className="md:col-span-2 text-ink font-light">±0.5% of full-scale load</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Sensor Type</div>
                  <div className="md:col-span-2 text-ink font-light">High-stability strain gauge (hermetically sealed steel)</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Wagon Display</div>
                  <div className="md:col-span-2 text-ink font-light">High-contrast LED on wagon body, IP66 certified</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Wireless Interface</div>
                  <div className="md:col-span-2 text-ink font-light">Sub-1GHz yard-telemetry, GSM-R optional</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Standards</div>
                  <div className="md:col-span-2 text-ink font-light">Meets EN 50155 and AAR loading norms</div>
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
            <h2 className="text-4xl font-light text-ink tracking-tight mb-8">Acoustic Hot Axle Box Detector</h2>
            <Link to="/products/wagons/ahabd" className="inline-flex items-center space-x-3 text-sm font-medium uppercase tracking-widest text-ink link-underline">
              <span>View AHABD System</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
         </div>
      </section>

    </div>
  );
}
