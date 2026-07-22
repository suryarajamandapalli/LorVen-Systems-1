import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import serviceInstallation from "@/assets/service-installation.png";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/services/kavach-installation")({
  head: () => ({
    meta: [
      { title: "KAVACH Installation & Commissioning — LorVen Systems" },
      { name: "description", content: "Installation, integration, testing and verification services to KAVACH OEMs and railway units — per OEM documentation and RDSO/SPN/196/2020." },
    ],
  }),
  component: KavachInstallationRoute,
});

function KavachInstallationRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // GSAP ScrollTrigger reveals
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
    {
      title: "Onboard Locomotive Works",
      desc: "Installation of KAVACH onboard equipment on electric locomotives (WAP/WAG): Vital Computer, DMI, brake interface unit, radio and antenna systems, RFID reader and cabling per OEM wiring schedules.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M8 6H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-3M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M8 6h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Cable Routing & Termination",
      desc: "Cable routing, termination and continuity/insulation verification against released wiring drawings.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Locomotive System Acceptance Testing",
      desc: "Post-installation testing, integration testing with locomotive systems, and commissioning support through onboard functional acceptance tests.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Station & Trackside Works",
      desc: "Installation of Station KAVACH equipment — stationary KAVACH unit, tower and radio infrastructure, interface wiring to interlocking.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "RFID Tag Installation & Placement",
      desc: "RFID tag installation — normal, adjustment line, TIN discrimination and LC gate tags — with programming and placement per approved tag layout (Annexure requirements).",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M7 7h10M7 12h10M7 17h10M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Independent Tag-Data Field Verification",
      desc: "Independent tag-data field verification — absolute location, TIN, tag type, unique ID — against approved station data, with formal discrepancy reporting.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "IFAT / OFAT & Field Trial Support",
      desc: "Support during IFAT / OFAT and field trials.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={serviceInstallation}
            alt="KAVACH Installation & Commissioning"
            className="w-full h-full object-cover opacity-35 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-4">
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">KAVACH Installation & Commissioning</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                KAVACH Installation & Commissioning
              </h1>
            </div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel/40 pl-6 pt-2">
              Installation, integration, testing and verification services to KAVACH OEMs and railway units — per OEM documentation and RDSO/SPN/196/2020.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore KAVACH Services</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-12 md:py-16 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal space-y-6">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              KAVACH Installation & Commissioning
            </h2>
            <div className="border-t border-rule/20 pt-6 space-y-4">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                Installation, integration, testing and verification services to KAVACH OEMs and railway units — per OEM documentation and RDSO/SPN/196/2020.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={serviceInstallation}
                alt="KAVACH Field Installation Works"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="bg-bg border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Features
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {features.map((feat, idx) => (
              <div key={idx} className="flex gap-6 items-start gsap-reveal group">
                <div className="w-12 h-12 rounded bg-section border border-rule/20 flex items-center justify-center text-ink flex-shrink-0 group-hover:bg-steel group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-ink uppercase tracking-wide leading-snug">{feat.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enterprise CTA */}
      <section className="bg-ink text-on-dark py-16 md:py-20 border-t border-ink relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={depot}
            alt="Wayside Maintenance Depot"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">DISCUSS REQUIREMENTS</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Discuss your deployment requirements with our engineering team
            </h2>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md"
              >
                Consult Our Engineers →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
