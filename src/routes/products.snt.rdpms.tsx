import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import sntHeroReal from "@/assets/snt-hero-real.jpg";
import electricalCabinet from "@/assets/electrical-cabinet.jpg";
import { BreadcrumbHero } from "@/components/site/BreadcrumbHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/products/snt/rdpms")({
  head: () => ({
    meta: [
      { title: "RDPMS — Remote Diagnostic System — LorVen Systems" },
      { name: "description", content: "Proactive remote diagnostic and predictive maintenance for railway infrastructure." },
    ],
  }),
  component: RdpmsPage,
});

// An ultra-minimal telemetry component.
function TelemetryNumbers() {
  const [current, setCurrent] = useState(4.2);
  const [res, setRes] = useState(0.024);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent(+(4.2 + (Math.random() * 0.4 - 0.2)).toFixed(2));
      setRes(+(0.024 + (Math.random() * 0.002 - 0.001)).toFixed(3));
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-12 mt-16 font-mono border-t border-rule/20 pt-8">
      <div className="reveal">
        <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">Motor Peak Current</span>
        <span className="text-5xl lg:text-7xl font-light text-white tracking-tighter num-mono">{current}</span>
        <span className="text-white/40 ml-2">A</span>
      </div>
      <div className="reveal">
        <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">Contact Resistance</span>
        <span className="text-5xl lg:text-7xl font-light text-white tracking-tighter num-mono">{res}</span>
        <span className="text-white/40 ml-2">Ω</span>
      </div>
    </div>
  );
}

function RdpmsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Elegant reveal mask animations
    gsap.utils.toArray(".reveal-mask > *").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: elem.parentElement,
            start: "top 90%",
          },
        }
      );
    });

    // Simple opacity reveals
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
        title="RDPMS"
        description="Remote Diagnostic & Predictive Maintenance System — Mission-critical remote monitoring platform engineered for modern railway infrastructure."
        backgroundImage={sntHeroReal}
        path={[
          { label: "PRODUCTS", to: "/products" },
          { label: "SIGNALLING & TELECOM", to: "/products" }, // Navigates to products catalogue SNT section
          { label: "RDPMS" },
        ]}
      />

      {/* 2. THE STATEMENT (Vast Negative Space) */}
      <section className="py-32 md:py-48 bg-bg relative">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-mask mb-8">
              <span className="eyebrow block">A Paradigm Shift</span>
            </div>
            <div className="reveal-mask">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-ink leading-[1.1] tracking-tight">
                From reactive recovery <br />
                <span className="text-ink-muted">to proactive prevention.</span>
              </h2>
            </div>
            <div className="mt-12 reveal">
              <p className="text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-2xl mx-auto">
                Wayside signaling failures cascade across networks instantly. 
                By continuously sampling electrical and mechanical signatures at the point of action, 
                our system identifies anomalies weeks before they manifest as critical faults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE IMMERSIVE TELEMETRY ROOM */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Telemetry & Copy */}
            <div>
              <div className="reveal-mask mb-8">
                <span className="eyebrow block text-white/50">Continuous Sampling</span>
              </div>
              <div className="reveal-mask mb-8">
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                  Sensing the invisible.
                </h3>
              </div>
              <div className="reveal">
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  The RDPMS wayside remote terminal unit (RTU) intercepts analog telemetry, current curves, and relay contact resistance seamlessly. 
                  Data is transmitted securely via dual-SIM LTE routing directly to the dispatcher console, without interfering with the interlocking logic.
                </p>
              </div>
              
              <TelemetryNumbers />
            </div>

            {/* Right: Abstract Hardware Image */}
            <div className="relative aspect-[4/5] overflow-hidden reveal bg-white/5">
              <img src={electricalCabinet} alt="Wayside RTU Cabinet" className="img-scale w-full h-full object-cover object-center opacity-80 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-transparent to-transparent mix-blend-multiply" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ARCHITECTURE */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Section Header */}
            <div className="lg:col-span-4">
               <div className="reveal-mask lg:sticky lg:top-32">
                 <h2 className="text-3xl font-light tracking-tight text-ink uppercase">Architecture</h2>
               </div>
            </div>

            {/* Tech Specs Grid */}
            <div className="lg:col-span-8">
              <div className="editorial-rule">
                {/* Spec Row 1 */}
                <div className="py-8 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
                  <div className="text-sm font-medium uppercase tracking-widest text-ink/40">Data Acquisition</div>
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-light text-ink mb-3">100Hz Precision Sampling</h4>
                    <p className="text-ink-muted font-light leading-relaxed">
                      Captures high-resolution current signatures of point machines to detect mechanical friction and wear before operational failure.
                    </p>
                  </div>
                </div>

                {/* Spec Row 2 */}
                <div className="py-8 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
                  <div className="text-sm font-medium uppercase tracking-widest text-ink/40">Connectivity</div>
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-light text-ink mb-3">Dual-SIM LTE Routing</h4>
                    <p className="text-ink-muted font-light leading-relaxed">
                      Redundant carrier paths ensure uninterrupted telemetry stream to the Central Diagnostic Server, even in remote sectors.
                    </p>
                  </div>
                </div>

                {/* Spec Row 3 */}
                <div className="py-8 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
                  <div className="text-sm font-medium uppercase tracking-widest text-ink/40">Safety & Isolation</div>
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-light text-ink mb-3">2.5kV Galvanic Isolation</h4>
                    <p className="text-ink-muted font-light leading-relaxed">
                      Opto-isolated sensing guarantees zero interference with mission-critical SIL-4 interlocking circuits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA or Next Product */}
      <section className="py-32 bg-section border-t border-rule">
         <div className="container-editorial text-center reveal">
            <span className="eyebrow block mb-6">Explore Further</span>
            <h2 className="text-4xl font-light text-ink tracking-tight mb-8">Integrated Power Supply</h2>
            <Link to="/products/snt/ips" className="inline-flex items-center space-x-3 text-sm font-medium uppercase tracking-widest text-ink link-underline">
              <span>View IPS System</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
         </div>
      </section>

    </div>
  );
}
