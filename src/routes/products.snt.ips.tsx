import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import ipsHero from "@/assets/electrical-cabinet.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";

export const Route = createFileRoute("/products/snt/ips")({
  head: () => ({
    meta: [
      { title: "IPS — Integrated Power Supply System — LorVen Systems" },
      { name: "description", content: "Fail-safe integrated power supply system for railway signalling installations." },
    ],
  }),
  component: IpsRoute,
});

function IpsRoute() {
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
    { title: "Uninterrupted AC & DC Power Supply", desc: "Ensures continuous supply of safe, regulated power to critical signaling elements under all circumstances." },
    { title: "Automatic Battery Backup", desc: "Seamlessly switch to battery bank backup during mainline power failures without any voltage drop." },
    { title: "Intelligent Power Management", desc: "Microprocessor-controlled distribution supervising individual modules and load shedding protocols." },
    { title: "Stable Voltage Regulation", desc: "Protects sensitive microprocessor interlocking equipment from utility line voltage spikes or sags." },
    { title: "Automatic Power Changeover", desc: "Instant mechanical/electronic bypass switches between multiple input feeders and standby lines." },
    { title: "Railway Signalling & Telecom Support", desc: "Tailored to feed station interlocking systems, block instruments, point machines, and station telecom racks." }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Breadcrumb Banner */}
      <section className="relative h-[40vh] min-h-[340px] max-h-[420px] bg-ink overflow-hidden flex flex-col justify-end pb-12 pt-[56px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={ipsHero}
            alt="Integrated Power Supply (IPS)"
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
                <li className="text-white font-semibold">IPS</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-light uppercase tracking-tight leading-tight max-w-3xl">
              Integrated Power Supply (IPS)
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
              Reliable Power for Continuous <br />Railway Signalling Operations
            </h2>
            <div className="space-y-4 border-t border-rule/20 pt-6">
              <p className="text-base md:text-lg text-black leading-relaxed font-light">
                The Integrated Power Supply (IPS) is a centralized power management system designed to provide uninterrupted AC and DC power for Indian Railway signalling and telecommunication systems. It ensures continuous operation of safety-critical equipment during power interruptions through intelligent power management, battery backup and automatic power changeover.
              </p>
              <p className="text-base text-black leading-relaxed font-light">
                Designed in accordance with Indian Railway signalling requirements, IPS improves system reliability, minimizes service interruptions and supports the safe operation of railway infrastructure.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={ipsHero} alt="IPS cabinet and electrical panels" className="h-full w-full object-cover select-none pointer-events-none" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 border border-rule/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal flex gap-5 items-start">
                <div className="w-5 h-5 flex items-center justify-center border border-rule/40 text-ink text-xs font-semibold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-semibold text-ink uppercase leading-snug">{feat.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LorVen */}
      <section className="relative bg-ink text-on-dark py-24 md:py-32 border-t border-ink overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={ipsHero} alt="IPS Systems" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">WHY LORVEN</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Why Choose LorVen's Integrated Power Supply (IPS)
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light pt-4 max-w-3xl mx-auto">
              LorVen's Integrated Power Supply (IPS) delivers reliable and uninterrupted power for railway signalling and telecommunication systems, helping ensure continuous operation of safety-critical infrastructure. Designed for dependable performance, the system supports operational reliability, minimizes downtime and enhances the availability of railway signalling assets.
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
