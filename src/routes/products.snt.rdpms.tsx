import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import sntHero from "@/assets/snt-hero-premium.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";

export const Route = createFileRoute("/products/snt/rdpms")({
  head: () => ({
    meta: [
      { title: "RDPMS — Remote Diagnostic & Predictive Maintenance — LorVen Systems" },
      { name: "description", content: "Condition monitoring and predictive diagnostics for critical railway signalling infrastructure." },
    ],
  }),
  component: RdpmsRoute,
});

function RdpmsRoute() {
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

  const capabilities = [
    { title: "Battery Health Monitoring", desc: "Supervises voltage levels, discharge rates, charging current, and backup capacity of signalling battery banks." },
    { title: "Point Health Monitoring", desc: "Monitors operational characteristics including point machine motor current signature, travel time, and operation counts." },
    { title: "SPD Health Monitoring", desc: "Tracks surge protective device leakage currents and status indicators to ensure transient voltage protection." },
    { title: "Signal Aspect Health Monitoring", desc: "Continuously checks current consumption levels of active LED lamp aspects to predict filament and driver failures." },
    { title: "Control Room Temperature Monitoring", desc: "Maintains records of environmental conditions in interlocking cabins to prevent heat-related controller shutdowns." },
    { title: "DC Track Circuit Health Monitoring", desc: "Tracks track relays, battery status, feed end parameters, and leakage resistance fluctuations due to moisture." },
    { title: "MSDAC Health Monitoring", desc: "Supervises Multi-Section Digital Axle Counter diagnostic logs, card temperatures, section states, and communication links." }
  ];

  const workflowSteps = [
    { n: "01", title: "Railway Signalling Assets", desc: "Critical assets like points, track circuits, batteries, and signals." },
    { n: "02", title: "Remote Data Acquisition", desc: "Field sensors and telemetry units logging data parameters in real-time." },
    { n: "03", title: "RDPMS Monitoring Platform", desc: "Centralized server aggregating diagnostics from remote station gateways." },
    { n: "04", title: "Real-Time Diagnostics", desc: "Rule engine comparing operational signatures against normal envelopes." },
    { n: "05", title: "Fault Detection & Alerts", desc: "SMS and email alerts sent instantly to maintenance teams upon anomaly detection." },
    { n: "06", title: "Railway Maintenance Team", desc: "Engineers dispatched with tools and spares to fix issues before failure." }
  ];

  const applications = [
    "Railway Signalling Systems",
    "Relay Rooms",
    "Station Equipment Rooms",
    "Interlocking Installations",
    "Railway Control Centres",
    "Railway Maintenance Operations"
  ];

  const benefits = [
    "Continuous asset health monitoring",
    "Early fault identification",
    "Improved maintenance planning",
    "Reduced equipment downtime",
    "Enhanced operational reliability",
    "Centralized monitoring of signalling assets"
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Breadcrumb Banner */}
      <section className="relative h-[40vh] min-h-[340px] max-h-[420px] bg-ink overflow-hidden flex flex-col justify-end pb-12 pt-[56px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={sntHero}
            alt="Remote Diagnostic & Predictive Maintenance System (RDPMS)"
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
                <li><Link to="/products/snt" className="hover:text-white transition-colors">Signalling & Telecom</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li className="text-white font-semibold">RDPMS</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-light uppercase tracking-tight leading-tight max-w-3xl">
              Remote Diagnostic & Predictive Maintenance System (RDPMS)
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
              Continuous Predictive Monitoring <br />of Railway Signalling Assets
            </h2>
            <div className="space-y-4 border-t border-rule/20 pt-6">
              <p className="text-base md:text-lg text-black leading-relaxed font-light">
                The Remote Diagnostic & Predictive Maintenance System (RDPMS) is a centralized condition monitoring solution designed for Indian Railway signalling infrastructure. It continuously supervises the operational health of critical signalling assets, enabling early fault detection, proactive maintenance, and improved operational reliability.
              </p>
              <p className="text-base text-black leading-relaxed font-light">
                By collecting operational data from field equipment and presenting it through a centralized monitoring platform, RDPMS helps maintenance teams identify developing issues before failures occur, reducing downtime and improving the availability of signalling systems.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={pcbMacro} alt="RDPMS conditioning board detail" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Monitoring Capabilities */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">CAPABILITIES</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Key Monitoring Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-8 border border-rule/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal flex gap-5 items-start">
                <div className="w-5 h-5 flex items-center justify-center border border-rule/40 text-ink text-xs font-semibold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-semibold text-ink uppercase leading-snug">{cap.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. Applications Section */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">DEPLOYMENTS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-white p-6 border border-rule/15 rounded-xl shadow-sm gsap-reveal flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-ink/70"></span>
                <h3 className="text-base font-medium text-ink uppercase tracking-wide">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Why Choose LorVen */}
      <section className="relative bg-ink text-on-dark py-24 md:py-32 border-t border-ink overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={sntHero} alt="RDPMS Systems" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">WHY LORVEN</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Why Choose LorVen's RDPMS
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light pt-4 max-w-3xl mx-auto">
              LorVen's Remote Diagnostic & Predictive Maintenance System provides continuous visibility into critical railway signalling assets, enabling maintenance teams to detect abnormalities early, plan maintenance proactively and improve the reliability and availability of signalling infrastructure.
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
