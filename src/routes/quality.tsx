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
import engineers from "@/assets/engineers.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () => createSeoMeta({
    title: "Quality | LorVen Systems",
    description: "Safety-critical railway electronics validated through engineering discipline, formal documentation, and rigorous testing.",
    path: "/quality",
  }),
  component: QualityRoute,
});

function QualityRoute() {
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

  const principles = [
    {
      num: "01",
      title: "Quality Management System",
      desc: "QMS established in accordance with ISO 9001:2015 — covering design, manufacturing, installation and commissioning; certification in progress."
    },
    {
      num: "02",
      title: "Formal Lifecycle Documentation",
      desc: "Requirements, design, V&V plans, test specifications and test reports — produced and maintained for every development."
    },
    {
      num: "03",
      title: "Standards-First Engineering",
      desc: "EN 50155, EN 50121, EN 61373, IEC 60571 and product-applicable RDSO specifications planned in from concept, not retrofitted."
    },
    {
      num: "04",
      title: "Third-Party Validated",
      desc: "Type testing at Government / NABL-accredited laboratories; support through RDSO vendor and prototype approval processes."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Requirements" },
    { step: "02", name: "Design" },
    { step: "03", name: "Development" },
    { step: "04", name: "Testing" },
    { step: "05", name: "Validation" },
    { step: "06", name: "Manufacturing" },
    { step: "07", name: "Commissioning" }
  ];

  const standards = [
    { category: "Quality Management", spec: "ISO 9001:2015-aligned QMS covering design, manufacturing, installation & commissioning" },
    { category: "Environmental & Operating", spec: "EN 50155 / IEC 60571 (Railway electronic equipment standards)" },
    { category: "Electromagnetic Compatibility", spec: "EN 50121 series (Railway EMC requirements)" },
    { category: "Shock & Vibration", spec: "EN 61373 (Rolling stock shock and vibration testing)" },
    { category: "Workmanship & Assembly", spec: "IPC-A-610 Class 3 workmanship & soldering standards" },
    { category: "Third-Party Validation", spec: "Type testing at NABL-accredited labs & RDSO vendor approval support" }
  ];

  const whyLorVen = [
    {
      title: "Safety-Critical Engineering",
      desc: "Standards-first engineering planned in from concept for high reliability across safety-critical railway deployments."
    },
    {
      title: "Documentation & Traceability",
      desc: "Comprehensive V&V plans, test specifications, test reports, and material traceability maintained for every project."
    },
    {
      title: "Railway Compliance",
      desc: "Strict adherence to Indian Railways SEM guidelines and product-applicable RDSO specifications."
    },
    {
      title: "Lifecycle Support",
      desc: "End-to-end technical support spanning design, prototype approval, FAT/SAT, field commissioning, and maintenance."
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
            alt="Engineering Quality & Inspection"
            className="w-full h-full object-cover opacity-35 select-none pointer-events-none"
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
                <li className="text-white">Quality</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">QUALITY</span>
              <h1 className="text-3xl md:text-5xl lg:text-[56px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Engineering Quality
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel pl-6 pt-2">
              Built for Indian Railways. Validated through engineering discipline, documentation and testing.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore Quality Principles</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* 2. Quality Philosophy Section */}
      <section className="bg-bg py-16 md:py-24 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal space-y-6">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">QUALITY PHILOSOPHY</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              Engineering Built on Evidence
            </h2>
            <div className="border-t border-rule/20 pt-6 space-y-4">
              <p className="text-xl md:text-2xl text-black font-light leading-snug">
                Built to be inspected.
              </p>
              <p className="text-base text-ink-muted leading-relaxed font-light">
                Safety-critical railway electronics are judged by the evidence behind them. Every LorVen product and service line is delivered with the documentation, testing and traceability that railway inspection demands.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={engineers}
                alt="Engineers Performing Railway Equipment Validation"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quality Principles Section */}
      <section className="bg-section border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-16">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">FOUNDATIONS</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Quality Principles
            </h2>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              Disciplined engineering practices ensuring compliance and reliability for railway infrastructure.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((prin, idx) => (
              <div
                key={idx}
                className="p-8 bg-bg border border-rule/25 rounded shadow-sm hover:border-steel transition-all duration-300 gsap-reveal flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase">
                    PRINCIPLE {prin.num}
                  </span>
                  <h3 className="text-xl font-bold text-ink uppercase tracking-tight group-hover:text-steel transition-colors duration-300">
                    {prin.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light border-t border-rule/15 pt-4">
                    {prin.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering Workflow Section */}
      <section className="bg-bg border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Workflow
            </h2>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              A structured 7-step engineering lifecycle delivering verified railway solutions.
            </p>
          </div>

          {/* Horizontal Workflow Strip */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 gsap-reveal">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-4 bg-section border border-rule/20 rounded flex flex-col items-center text-center space-y-2 hover:border-steel transition-colors duration-300"
              >
                <span className="text-xs font-mono text-steel font-bold">{ws.step}</span>
                <span className="text-xs font-semibold text-ink uppercase tracking-wide">{ws.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Engineering Standards Table */}
      <section className="bg-section border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">SPECIFICATIONS</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Standards
            </h2>
          </div>

          {/* Specification Matrix Table */}
          <div className="bg-bg border border-rule/25 rounded overflow-hidden shadow-sm gsap-reveal">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-rule/20 bg-section/50 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                  <th className="py-4 px-6 w-1/3">Category</th>
                  <th className="py-4 px-6">Specification / Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule/15 text-sm text-ink-muted font-light">
                {standards.map((row, idx) => (
                  <tr key={idx} className="hover:bg-section/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-ink uppercase text-xs tracking-wider">{row.category}</td>
                    <td className="py-4 px-6">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Why LorVen Quality Section */}
      <section className="bg-bg border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">WHY LORVEN</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Trust Through Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyLorVen.map((item, idx) => (
              <div key={idx} className="p-8 bg-section border border-rule/20 rounded space-y-3 gsap-reveal hover:border-steel transition-colors duration-300">
                <h3 className="text-base font-bold text-ink uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Enterprise CTA */}
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
