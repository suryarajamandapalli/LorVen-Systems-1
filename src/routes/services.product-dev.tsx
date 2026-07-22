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

export const Route = createFileRoute("/services/product-dev")({
  head: () => ({
    meta: [
      { title: "Electronic Product Development — LorVen Systems" },
      { name: "description", content: "End-to-end — from concept through validated design to production. Safety-critical railway electronic product development services." },
    ],
  }),
  component: ProductDevRoute,
});

function ProductDevRoute() {
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

  const lifecycleStages = [
    {
      step: "01",
      title: "Requirements & compliance",
      desc: "Requirements engineering and feasibility; compliance planning against EN 50155, EN 50121, IEC 60571 and applicable RDSO specifications."
    },
    {
      step: "02",
      title: "Hardware design",
      desc: "Schematic capture and PCB layout — high-reliability practices for vibration, temperature and EMC environments."
    },
    {
      step: "03",
      title: "Embedded firmware",
      desc: "Firmware development with structured lifecycle documentation: requirements, design, verification."
    },
    {
      step: "04",
      title: "Mechanical & enclosure",
      desc: "Packaging and enclosure design, including IP- and IK-rated enclosures for rolling stock and trackside environments."
    },
    {
      step: "05",
      title: "Prototype & DVT",
      desc: "Prototype build, design verification testing and environmental/EMC pre-compliance evaluation."
    },
    {
      step: "06",
      title: "Verification & Validation",
      desc: "Formal V&V plans, test specifications and test reports; third-party type testing at accredited laboratories."
    },
    {
      step: "07",
      title: "Approvals & field trials",
      desc: "Support through vendor and prototype approval with Indian Railways and RDSO — technical documentation, QAP, O&M manuals."
    },
    {
      step: "08",
      title: "Transfer to production",
      desc: "Handover to our in-house EMS facility — a single-point path from concept to supplied product."
    }
  ];

  const engineeringCapabilities = [
    {
      title: "Standards Compliance Planning",
      desc: "EN 50155, EN 50121, IEC 60571 and applicable RDSO specifications."
    },
    {
      title: "High-Reliability Hardware Design",
      desc: "Schematic capture and PCB layout engineered for extreme vibration, thermal cycles and EMC environments."
    },
    {
      title: "Structured V&V Lifecycle",
      desc: "Formal V&V documentation, test specifications, and third-party accredited laboratory type testing."
    },
    {
      title: "Single-Point Production Transfer",
      desc: "Direct handover to our in-house EMS manufacturing facility for seamless execution and QAP adherence."
    }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={pcbMacro}
            alt="Electronic Engineering & Design"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-5">
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">Electronic Product Development</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">ENGINEERING SERVICES</span>
              <h1 className="text-3xl md:text-5xl lg:text-[56px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Electronic Product Development
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel pl-6 pt-2">
              End-to-end — from concept through validated design to production
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore Engineering Workflow</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-16 md:py-24 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal space-y-6">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              End-to-End Product Engineering
            </h2>
            <div className="border-t border-rule/20 pt-6 space-y-4">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                LorVen Systems provides full-scope electronic engineering services for railway, transport, and industrial sectors. We guide complex designs from early requirements capture through rigorous type testing and seamless transfer to production.
              </p>
              <p className="text-base text-ink-muted leading-relaxed font-light">
                Our engineering methodology ensures strict compliance with safety-critical standards including EN 50155, EN 50121, IEC 60571, and applicable RDSO specifications.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={pcbMacro}
                alt="Electronic Engineering Layout & PCB Verification"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Development Lifecycle Section (Connected Engineering Process Timeline) */}
      <section className="bg-section border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-16">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">METHODOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Development Lifecycle
            </h2>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              An eight-stage structured engineering workflow ensuring compliance, reliability, and smooth manufacturing transition.
            </p>
          </div>

          {/* Connected Stage Timeline Grid */}
          <div className="relative">
            {/* Connecting Vertical Guide Line on Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-rule/30 -translate-x-1/2 z-0" />

            <div className="space-y-8 lg:space-y-12 relative z-10">
              {lifecycleStages.map((stage, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center gsap-reveal ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Column for Even Steps, Right for Odd */}
                  <div className={`col-span-12 lg:col-span-5 ${idx % 2 === 0 ? "lg:text-right" : "lg:order-last lg:text-left"}`}>
                    <div className="bg-bg p-8 rounded border border-rule/20 shadow-sm space-y-3 hover:border-steel transition-colors duration-300">
                      <span className="text-xs font-mono font-bold text-steel uppercase tracking-widest block">
                        STAGE {stage.step}
                      </span>
                      <h3 className="text-lg font-bold text-ink uppercase tracking-wide">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-ink-muted leading-relaxed font-light">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="hidden lg:flex col-span-12 lg:col-span-2 justify-center items-center">
                    <div className="w-12 h-12 rounded-full bg-steel text-white flex items-center justify-center font-mono text-sm font-bold shadow-md border-4 border-bg">
                      {stage.step}
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden lg:block col-span-12 lg:col-span-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Expertise Section */}
      <section className="bg-bg border-t border-rule/20 py-16 md:py-24">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringCapabilities.map((cap, idx) => (
              <div key={idx} className="p-8 bg-section border border-rule/20 rounded space-y-3 gsap-reveal hover:border-steel transition-colors duration-300">
                <h3 className="text-base font-bold text-ink uppercase tracking-wide">{cap.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why LorVen Engineering Section */}
      <section className="bg-section border-t border-rule/20 py-16 md:py-24">
        <div className="container-editorial max-w-4xl space-y-8 gsap-reveal">
          <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">WHY LORVEN</span>
          <h2 className="text-3xl md:text-4xl font-light text-ink uppercase leading-snug">
            Single-Point Path from Concept to Production
          </h2>
          <div className="space-y-4 text-base md:text-lg text-ink-muted font-light leading-relaxed border-l-2 border-steel pl-6">
            <p>
              By offering a single-point engineering path through our in-house EMS manufacturing facility, LorVen Systems eliminates vendor fragmentation and reduces execution risks for railway electronics.
            </p>
            <p className="text-sm font-mono uppercase tracking-wider text-steel pt-2">
              Full material traceability & ISO 9001:2015 QMS alignment
            </p>
          </div>
        </div>
      </section>

      {/* 6. Enterprise CTA */}
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
