import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import simImg from "@/assets/simulator.jpg";
import heroLocomotive from "@/assets/hero-locomotive.jpg";
import { BreadcrumbHero } from "@/components/site/BreadcrumbHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/products/electric-locomotive/simulators")({
  head: () => ({
    meta: [
      { title: "Driving Simulators — LorVen Systems" },
      { name: "description", content: "Full-cab driver-training simulators for electric locomotives." },
    ],
  }),
  component: SimulatorsPage,
});

function SimulatorsPage() {
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
        title="Driving Simulator"
        description="Locomotive Cabin Simulation Platform — High-fidelity driver training environment replicating mainline operations, faults, and emergency response scenarios."
        backgroundImage={simImg}
        path={[
          { label: "PRODUCTS", to: "/products" },
          { label: "ELECTRIC LOCOMOTIVE", to: "/products" },
          { label: "DRIVING SIMULATORS" },
        ]}
      />

      {/* 2. OVERVIEW (Asymmetric Layout) */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow block mb-4">Training Simulation</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-ink uppercase leading-tight">
                High Fidelity <br />
                Replication.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal text-lg text-ink-muted font-light leading-relaxed space-y-6">
              <p>
                The Lorven Driving Simulator delivers a high-fidelity cab environment for loco pilot training — covering emergency response, route familiarisation, and periodic recertification without requiring live rolling stock.
              </p>
              <p>
                Built to replicate WAP-class and other electric locomotive cabs, it utilizes OEM-grade hardware controls and functional switchgear to ensure training transfers directly to the real cab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL & MOTION PLATFORM */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Image */}
            <div className="relative aspect-[4/3] overflow-hidden reveal bg-white/5 order-2 lg:order-1">
              <img src={heroLocomotive} alt="Locomotive Cab Visuals" className="img-scale w-full h-full object-cover object-center opacity-85 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2">
              <div className="reveal-mask mb-8">
                <span className="eyebrow block text-white/50">Sensory Integration</span>
              </div>
              <div className="reveal-mask mb-8">
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                  Immersive feedback.
                </h3>
              </div>
              <div className="reveal space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Features an optional 3-DOF or 6-DOF electrical motion platform that translates acceleration, deceleration, track anomalies, and vibrations directly to the driver's seat.
                </p>
                <p>
                  A 3-channel 200° field-of-view visual system renders realistic day, night, and adverse weather operations with accurate signaling and route topology.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY SYSTEM FEATURES */}
      <section className="py-32 bg-section border-y border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">01 / HARDWARE</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">OEM Controls</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Full-scale replica of electric locomotive cabs with functional OEM switchgear, gauges, and dual-display HMI panels.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">02 / SOFTWARE</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Fault Injection</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Instructors can dynamically inject weather changes, signal faults, and mechanical/electrical failures in real time.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">03 / COMPLIANCE</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Distributed Training</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                HLA/DIS network integration allows distributed multi-train simulation, linking drivers with dispatcher stations.
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
                  <div className="font-mono text-xs uppercase text-ink-muted">Visual System</div>
                  <div className="md:col-span-2 text-ink font-light">3-channel 60 Hz, 200° FOV projection or LED wall</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Motion System</div>
                  <div className="md:col-span-2 text-ink font-light">Optional 3-DOF / 6-DOF electrical motion base</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Scenario Authoring</div>
                  <div className="md:col-span-2 text-ink font-light">Open instructor station with GIS terrain import capabilities</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Cab Fidelity</div>
                  <div className="md:col-span-2 text-ink font-light">OEM-grade controls, functional HMI, cab lighting</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Network Integration</div>
                  <div className="md:col-span-2 text-ink font-light">Distributed simulation ready (HLA/DIS compliant)</div>
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
            <h2 className="text-4xl font-light text-ink tracking-tight mb-8">Integrated Functional Tester</h2>
            <Link to="/products/electric-locomotive/ift" className="inline-flex items-center space-x-3 text-sm font-medium uppercase tracking-widest text-ink link-underline">
              <span>View IFT System</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
         </div>
      </section>

    </div>
  );
}
