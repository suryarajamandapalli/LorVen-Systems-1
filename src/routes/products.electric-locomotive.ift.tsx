import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import locoHeroReal from "@/assets/loco-hero-real.jpg";
import engineers from "@/assets/engineers.jpg";
import { BreadcrumbHero } from "@/components/site/BreadcrumbHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/products/electric-locomotive/ift")({
  head: () => ({
    meta: [
      { title: "IFT — Integrated Functional Tester — LorVen Systems" },
      { name: "description", content: "Bench tester for locomotive electronics assemblies." },
    ],
  }),
  component: IftPage,
});

function IftPage() {
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
        title="IFT"
        description="Integrated Functional Tester — Bench diagnostic and test system engineered to verify locomotive electronics assemblies during commissioning and maintenance."
        backgroundImage={locoHeroReal}
        path={[
          { label: "PRODUCTS", to: "/products" },
          { label: "ELECTRIC LOCOMOTIVE", to: "/products" },
          { label: "IFT" },
        ]}
      />

      {/* 2. THE OVERVIEW (Bespoke Staggered Layout) */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow block mb-4">Diagnostics Bench</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-ink uppercase leading-tight">
                Consolidated <br />
                Verification.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal text-lg text-ink-muted font-light leading-relaxed space-y-6">
              <p>
                LorVen IFT replaces dozens of separate bench instruments with a single, calibrated test rig.
              </p>
              <p>
                Designed to verify locomotive electrical and electronic systems, it exercises every input, output, and bus during commissioning, scheduled maintenance, and overhaul. Each device is configured and verified through a scripted sequence with full pass/fail trace stored against the serial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC INTERFACE */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Copy */}
            <div>
              <div className="reveal-mask mb-8">
                <span className="eyebrow block text-white/50">Automation</span>
              </div>
              <div className="reveal-mask mb-8">
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                  Calibrated stimulus.
                </h3>
              </div>
              <div className="reveal space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Features 128 digital, 32 analog, and 8 bus channels to interface with complex locomotive electronics.
                </p>
                <p>
                  It provides programmable stimulus across DC, AC, PWM, CAN, MVB, and RS-485 interfaces, allowing comprehensive verification of control units under simulated load.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[4/3] overflow-hidden reveal bg-white/5">
              <img src={engineers} alt="Engineers using IFT" className="img-scale w-full h-full object-cover object-center opacity-85 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent mix-blend-multiply" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE ADVANTAGES */}
      <section className="py-32 bg-section border-y border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">01 / INTEGRATION</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Instrument Consolidation</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Replaces oscilloscopes, multimeters, and signal generators with a single calibrated rack, minimizing bench space and calibration overhead.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">02 / TRACEABILITY</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Automated Scripting</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Executes automated test sequences with full pass/fail traces stored against component serial numbers in PDF and XML formats.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">03 / PERFORMANCE</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">High Throughput</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Capable of qualifying up to 30 complex electronic assemblies per shift, significantly accelerating depot turnaround times.
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
                  <div className="font-mono text-xs uppercase text-ink-muted">Channels</div>
                  <div className="md:col-span-2 text-ink font-light">128 digital / 32 analog / 8 bus channels</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Stimulus Interfaces</div>
                  <div className="md:col-span-2 text-ink font-light">DC, AC, PWM, CAN, MVB, RS-485 interfaces</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Throughput</div>
                  <div className="md:col-span-2 text-ink font-light">Up to 30 units / shift under automated testing</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Reporting Format</div>
                  <div className="md:col-span-2 text-ink font-light">PDF + machine-readable XML trace per serial number</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Power Requirements</div>
                  <div className="md:col-span-2 text-ink font-light">110V/230V AC, 50/60Hz, isolated ground</div>
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
            <h2 className="text-4xl font-light text-ink tracking-tight mb-8">Wagon Load Indicator</h2>
            <Link to="/products/wagons/wli" className="inline-flex items-center space-x-3 text-sm font-medium uppercase tracking-widest text-ink link-underline">
              <span>View WLI System</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
         </div>
      </section>

    </div>
  );
}
