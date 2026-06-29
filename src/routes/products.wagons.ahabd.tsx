import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import coachBuild from "@/assets/coach-build.jpg";
import newBulletTrain from "@/assets/new-bullet-train.png";
import { BreadcrumbHero } from "@/components/site/BreadcrumbHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/products/wagons/ahabd")({
  head: () => ({
    meta: [
      { title: "AHABD — Acoustic Hot Axle Box Detector — LorVen Systems" },
      { name: "description", content: "Trackside acoustic bearing fault detector to identify anomalies in passing wagon wheel bearings." },
    ],
  }),
  component: AhabdPage,
});

function AhabdPage() {
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
        title="AHABD"
        description="Acoustic Hot Axle Box Detector — Wayside acoustic bearing fault detector designed to identify micro-fractures and bearing anomalies in passing wagons."
        backgroundImage={coachBuild}
        path={[
          { label: "PRODUCTS", to: "/products" },
          { label: "WAGONS", to: "/products" },
          { label: "AHABD" },
        ]}
      />

      {/* 2. OVERVIEW (Bespoke Staggered Layout) */}
      <section className="py-32 bg-bg relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow block mb-4">Wayside Acoustics</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-ink uppercase leading-tight">
                Acoustic <br />
                Intelligence.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal text-lg text-ink-muted font-light leading-relaxed space-y-6">
              <p>
                AHABD listens to the acoustic signatures of passing wagons at speeds up to 120 km/h.
              </p>
              <p>
                Using advanced digital signal processing and spectral analysis, it flags micro-fractures, bearing spalls, and lubrication failures weeks before they manifest as thermal faults. This allows operators to schedule maintenance proactively and eliminate derailment risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHASED ARRAY TECHNOLOGY */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Copy */}
            <div>
              <div className="reveal-mask mb-8">
                <span className="eyebrow block text-white/50">Beamforming</span>
              </div>
              <div className="reveal-mask mb-8">
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                  Phased array precision.
                </h3>
              </div>
              <div className="reveal space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Features a multi-microphone trackside phased array that uses acoustic beamforming to isolate and track the noise of each individual wheel bearing as it passes the sensor site.
                </p>
                <p>
                  Integrated Automatic Equipment Identification (AEI) RFID readers automatically match acoustic defect alarms with specific wagon numbers and axle positions.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[4/3] overflow-hidden reveal bg-white/5">
              <img src={newBulletTrain} alt="High-speed train corridor validation" className="img-scale w-full h-full object-cover object-center opacity-85 mix-blend-luminosity" />
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
              <span className="text-xs font-mono text-ink-muted block mb-4">01 / DIAGNOSTICS</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">Early Fault Detection</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Detects micro-fractures and lubrication issues weeks before traditional thermal hot-box detectors trigger.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">02 / ACQUISITION</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">120 km/h Capture</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Accurately captures acoustic signatures of passing train bearings at speeds ranging from 5 km/h up to 120 km/h.
              </p>
            </div>
            <div className="reveal">
              <span className="text-xs font-mono text-ink-muted block mb-4">03 / TELEMETRY</span>
              <h4 className="text-xl font-normal text-ink mb-3 uppercase">AEI RFID Sync</h4>
              <p className="text-ink-muted font-light leading-relaxed">
                Automatically links acoustic faults to specific wagon and axle IDs using integrated trackside RFID readers.
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
                  <div className="font-mono text-xs uppercase text-ink-muted">Train Speed Range</div>
                  <div className="md:col-span-2 text-ink font-light">5 km/h to 120 km/h</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Acoustic Sensor</div>
                  <div className="md:col-span-2 text-ink font-light">Multi-microphone phased array (beamforming)</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Detection Accuracy</div>
                  <div className="md:col-span-2 text-ink font-light">&gt;95% for early stage bearing defects</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Alert Latency</div>
                  <div className="md:col-span-2 text-ink font-light">&lt;60 seconds from train pass to SMS/Email alert</div>
                </div>
                <div className="py-6 border-b border-rule grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                  <div className="font-mono text-xs uppercase text-ink-muted">Integration</div>
                  <div className="md:col-span-2 text-ink font-light">Automatic Equipment Identification (AEI) RFID sync</div>
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
            <h2 className="text-4xl font-light text-ink tracking-tight mb-8">Remote Diagnostic & Predictive Maintenance</h2>
            <Link to="/products/snt/rdpms" className="inline-flex items-center space-x-3 text-sm font-medium uppercase tracking-widest text-ink link-underline">
              <span>View RDPMS System</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
         </div>
      </section>

    </div>
  );
}
