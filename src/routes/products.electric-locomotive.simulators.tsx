import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import simHero from "@/assets/simulator.jpg";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/products/electric-locomotive/simulators")({
  head: () => ({
    meta: [
      { title: "Locomotive Simulator — LorVen Systems" },
      { name: "description", content: "High-fidelity driver-training simulators for electric locomotives." },
    ],
  }),
  component: SimulatorsRoute,
});

function SimulatorsRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered reveals
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });
  }, { scope: containerRef });

  const features = [
    { title: "Realistic Driver Cab Simulation", desc: "Full-scale exact cabin layout replica with operational controls, indicators, gauge displays, and seat ergonomics." },
    { title: "Electric Locomotive & EMU/MEMU Training", desc: "Supports training across electric locomotives (WAP-7, WAP-5, WAG-9) and motor coach formations." },
    { title: "Day & Night Driving Scenarios", desc: "Configurable diurnal cycles simulating varying daylight conditions, twilight, and operational night hazards." },
    { title: "Multiple Weather Conditions", desc: "Exercises driving skills under simulated rain, fog, snowfall, lightning storms, and track moisture changes." },
    { title: "Railway Signalling Simulation", desc: "Includes comprehensive route signals, automatic signalling aspects, and wayside sensor responses." },
    { title: "Performance Monitoring & Assessment", desc: "Logs driver reaction times, braking efficiency, speed limit compliance, and energy conservation." },
    { title: "Emergency Scenario Training", desc: "Presents critical faults like signal passing at danger (SPAD), traction failures, and brake pipe leaks." },
    { title: "Instructor Control Station", desc: "Allows instructors to inject faults, control weather conditions, track telemetry, and generate reports." }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Breadcrumb Banner */}
      <section className="relative h-[40vh] min-h-[340px] max-h-[420px] bg-ink overflow-hidden flex flex-col justify-end pb-12 pt-[56px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={simHero}
            alt="Locomotive Simulator"
            className="w-full h-full object-cover opacity-45 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-15" />
          {/* Fine architectural grid overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        {/* Content */}
        <div className="container-editorial relative z-30 w-full text-white">
          <div className="max-w-4xl space-y-4">
            {/* Breadcrumbs */}
            <nav className="text-sm font-normal text-white/80">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li><Link to="/products/electric-locomotive" className="hover:text-white transition-colors">Electric Locomotive</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li className="text-white font-semibold">Locomotive Simulator</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-light uppercase tracking-tight leading-tight max-w-3xl">
              Locomotive Simulator
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-20 md:py-28 border-t border-rule/30">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 gsap-reveal space-y-6">
            <span className="eyebrow block">OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Realistic Training for Safer <br />Railway Operations
            </h2>
            <div className="space-y-4 border-t border-rule/20 pt-6">
              <p className="text-base md:text-lg text-black leading-relaxed font-light">
                The Locomotive Simulator is a high-fidelity training system designed to enhance the operational skills of Loco Pilots through realistic simulation of electric locomotive and EMU/MEMU driving environments. By replicating real operating conditions, the simulator enables safe, effective and standardized training without disrupting live railway operations.
              </p>
              <p className="text-base text-black leading-relaxed font-light">
                It provides a controlled environment for practicing normal operations, emergency scenarios and operational procedures, helping improve safety, passenger comfort, punctuality and energy-efficient train handling.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={simHero} alt="Full scale locomotive simulator cab interior" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">FEATURES</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 border border-rule/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-5 h-5 flex items-center justify-center border border-rule/40 text-ink text-xs font-semibold flex-shrink-0">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-ink uppercase leading-snug">{feat.title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LorVen */}
      <section className="bg-ink text-on-dark py-24 md:py-32 border-t border-ink relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Overhaul Depot" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">WHY LORVEN</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Why Choose LorVen's Locomotive Simulator
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light pt-4 max-w-3xl mx-auto">
              LorVen's Locomotive Simulator provides a realistic and controlled training environment that helps Loco Pilots develop operational confidence, improve decision-making and strengthen their driving skills before operating live rolling stock. The system supports safer railway operations through standardized, practical and performance-oriented training.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md"
              >
                Contact Our Engineering Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
