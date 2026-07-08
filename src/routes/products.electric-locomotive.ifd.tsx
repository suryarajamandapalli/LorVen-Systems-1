import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import pcbMacro from "@/assets/pcb-macro.jpg";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/products/electric-locomotive/ifd")({
  head: () => ({
    meta: [
      { title: "Intelligent Field Device (IFD) — LorVen Systems" },
      { name: "description", content: "Intelligent field monitoring solution for Indian Railway signalling infrastructure." },
    ],
  }),
  component: IfdRoute,
});

function IfdRoute() {
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
    { title: "Real-Time Asset Monitoring", desc: "Performs real-time condition tracking of crucial physical railway equipment and wayside controllers." },
    { title: "Continuous Health Monitoring", desc: "Supervises electrical and physical parameters non-stop to capture transient operational spikes." },
    { title: "Local Data Processing", desc: "Edge-based diagnostic algorithms process raw electrical signal inputs locally at the device level." },
    { title: "Fault Detection & Alerts", desc: "Locally detects threshold crossings and sends high-priority diagnostic alerts instantly." },
    { title: "Sensor Data Acquisition", desc: "Acquires data from an array of analog, digital, and environmental parameters." },
    { title: "Remote Communication with RDPMS", desc: "Transmits compressed health telemetry directly to the central diagnostic monitoring platform." },
    { title: "Predictive Maintenance Support", desc: "Provides historical parameters to predict operational failure windows for critical assets." },
    { title: "Reliable Field Operation", desc: "Designed inside a ruggedized chassis built to withstand harsh trackside thermal and electrical environments." }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Breadcrumb Banner */}
      <section className="relative h-[40vh] min-h-[340px] max-h-[420px] bg-ink overflow-hidden flex flex-col justify-end pb-12 pt-[56px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={pcbMacro}
            alt="Intelligent Field Device (IFD)"
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
                <li className="text-white font-semibold">IFD</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-light uppercase tracking-tight leading-tight max-w-3xl">
              Intelligent Field Device (IFD)
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
              Intelligent Field Monitoring <br />for Railway Infrastructure
            </h2>
            <div className="space-y-4 border-t border-rule/20 pt-6">
              <p className="text-base md:text-lg text-black leading-relaxed font-light">
                The Intelligent Field Device (IFD) is an IoT-enabled monitoring device designed for Indian Railway signalling infrastructure. Equipped with sensors and local processing capabilities, it continuously monitors the health of field assets, detects abnormal operating conditions and communicates real-time diagnostic information to the Remote Diagnostic & Predictive Maintenance System (RDPMS).
              </p>
              <p className="text-base text-black leading-relaxed font-light">
                By enabling continuous condition monitoring and early fault detection, IFD supports predictive maintenance and improves the reliability and availability of railway signalling assets.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={pcbMacro} alt="IFD local processing hardware unit" className="h-full w-full object-cover select-none pointer-events-none" />
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
          <img src={pcbMacro} alt="IFD Circuitry" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">WHY LORVEN</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Why Choose LorVen's Intelligent Field Device (IFD)
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light pt-4 max-w-3xl mx-auto">
              LorVen's Intelligent Field Device (IFD) provides continuous monitoring of critical railway signalling assets, enabling early fault detection, real-time diagnostics and centralized condition monitoring. Designed for dependable field operation, it supports predictive maintenance strategies that improve operational reliability and reduce maintenance response time.
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
