import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageIndex } from "@/components/site/PageIndex";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import heroBg from "@/assets/loco-hero-real.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import smtLine from "@/assets/smt-line.jpg";
import depot from "@/assets/depot.jpg";
import factoryHall from "@/assets/factory-hall.jpg";

import logoLight from "@/assets/logo-light.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — LorVen Systems" },
      {
        name: "description",
        content:
          "LorVen Systems is an engineering firm delivering mission-critical electronics and electrical systems for railways, infrastructure, aerospace, and defence.",
      },
      { property: "og:title", content: "About Us — LorVen Systems" },
      { property: "og:description", content: "Engineering Confidence Since 2008." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: logoLight },
      { name: "twitter:image", content: logoLight },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  useGSAP(() => {
    // Scroll reveals
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        }
      );
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      {/* Hero */}
      <PageHero
        eyebrow="ABOUT"
        title="Engineering Confidence."
        lede="Delivering mission-critical electronics and electrical integration for industries where failure is not an option."
        image={heroBg}
      />

      <PageIndex
        columns={[
          {
            title: "Corporate Overview",
            items: [
              { label: "Company Overview", href: "#overview" },
              { label: "Vision, Mission & Purpose", href: "#vision-mission" },
            ],
          },
          {
            title: "Operations & Facilities",
            items: [
              { label: "Manufacturing & Quality", href: "#manufacturing" },
              { label: "Infrastructure Profile", href: "#infrastructure" },
            ],
          },
          {
            title: "Governance",
            items: [
              { label: "Certifications", href: "#certifications" },
              { label: "Leadership Message", href: "#leadership" },
            ],
          },
        ]}
      />

      {/* 1. Company Overview */}
      <section id="overview" className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-6">
            <span className="eyebrow block">Company Overview</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              A quiet practice in <br />mission-critical engineering.
            </h2>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed font-light">
              For over fifteen years, LorVen Systems has built the unseen layer of India's rolling stock — circuit boards that survive a million cycles, cabinets that earn certification on the first attempt, and installations that hand over on time.
            </p>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              We work with national operators, OEMs and integrators across mainline, metro, and freight. Our discipline is patience: every assembly is engineered for the operating envelope it will actually serve.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 gsap-reveal">
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={pcbMacro} alt="Precision electronics" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission, Purpose */}
      <section id="vision-mission" className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="gsap-reveal border-t border-rule pt-6 space-y-4">
              <span className="eyebrow block">Vision</span>
              <h3 className="text-lg font-semibold text-ink uppercase">Safety-Critical Tech</h3>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                To build a globally respected technology company delivering world-class systems for safety-critical and mission-critical industries.
              </p>
            </div>
            
            <div className="gsap-reveal border-t border-rule pt-6 space-y-4">
              <span className="eyebrow block">Mission</span>
              <h3 className="text-lg font-semibold text-ink uppercase">Disciplined Execution</h3>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                To create reliable, innovative, and high-performance products that advance transportation, infrastructure, aerospace, and defence through engineering excellence and disciplined execution.
              </p>
            </div>
            
            <div className="gsap-reveal border-t border-rule pt-6 space-y-4">
              <span className="eyebrow block">Purpose</span>
              <h3 className="text-lg font-semibold text-ink uppercase">Absolute Reliability</h3>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                Engineering technology that improves safety, reliability, and performance where failure is not an option in active daily operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Manufacturing */}
      <section id="manufacturing" className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-6">
            <span className="eyebrow block">Manufacturing</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              End-to-end capability.<br/>Absolute control.
            </h2>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed font-light">
              LorVen operates dual facilities to separate R&D from high-volume production. Our Hyderabad hub focuses on design engineering, rapid prototyping, and environmental stress testing.
            </p>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed font-light">
              Our Bengaluru plant is a dedicated high-mix manufacturing center featuring IPC-A-610 Class 3 qualified SMT lines, cleanroom assembly, and comprehensive end-of-line functional validation bays.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 gsap-reveal">
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={smtLine} alt="SMT Line Manufacturing" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure */}
      <section id="infrastructure" className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="gsap-reveal space-y-2">
              <span className="eyebrow">Facility Size</span>
              <h4 className="text-3xl font-light text-ink uppercase">40,000 SQ. FT.</h4>
              <p className="text-sm text-ink-muted font-light leading-relaxed">Manufacturing and assembly floor space.</p>
            </div>
            <div className="gsap-reveal space-y-2">
              <span className="eyebrow">Standard Compliance</span>
              <h4 className="text-3xl font-light text-ink uppercase">Class 3</h4>
              <p className="text-sm text-ink-muted font-light leading-relaxed">IPC-A-610 certified assembly lines.</p>
            </div>
            <div className="gsap-reveal space-y-2">
              <span className="eyebrow">R&D Core</span>
              <h4 className="text-3xl font-light text-ink uppercase">Hyderabad</h4>
              <p className="text-sm text-ink-muted font-light leading-relaxed">Rapid prototyping & environmental testing center.</p>
            </div>
          </div>
          
          <div className="w-full h-[40vh] overflow-hidden rounded-xl border border-rule/10 shadow-sm gsap-reveal">
            <img src={factoryHall} alt="Production floor" className="w-full h-full object-cover select-none pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 5. Quality & Certifications */}
      <section id="certifications" className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="gsap-reveal space-y-4">
              <span className="eyebrow block">Quality & Standards</span>
              <h2 className="text-3xl font-light leading-snug text-ink uppercase">
                Certified for the mainline.
              </h2>
            </div>
            <p className="text-sm text-ink-muted max-w-sm gsap-reveal font-light leading-relaxed">
              Quality is a documentation practice as much as a manufacturing one. Every assembly carries a route card and a paper trail that outlives the warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Management", title: "ISO 9001:2015", desc: "Certified quality management systems for design, manufacturing and service." },
              { label: "Rail Industry", title: "IRIS Rev. 03", desc: "Compliance with the International Railway Industry Standard for rolling stock." },
              { label: "Environment", title: "ISO 14001:2015", desc: "Environmental management standards actively governing our production facilities." },
              { label: "Approval", title: "RDSO", desc: "Approved vendor for Indian Railways Research Designs & Standards Organisation." },
            ].map((c) => (
              <div key={c.title} className="bg-white p-8 border border-rule/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal">
                <span className="num-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted block mb-6 font-semibold">{c.label}</span>
                <h3 className="text-xl font-medium text-ink uppercase">{c.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership (Future Ready) */}
      <section id="leadership" className="relative bg-ink text-on-dark border-t border-ink py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Railway Depot" className="w-full h-full object-cover opacity-20 select-none pointer-events-none" />
        </div>
        <div className="container-editorial relative z-10 flex justify-center">
          <div className="max-w-4xl text-center gsap-reveal space-y-6">
            <span className="eyebrow !text-white/40 block">Leadership Message</span>
            <span className="text-2xl md:text-4xl font-light leading-snug text-white uppercase block">
              "When an operator deploys our system on the mainline, they are purchasing peace of mind. Our responsibility is to ensure that trust is never broken."
            </span>
            <div className="pt-6 flex flex-col items-center gap-2">
              <span className="text-lg font-semibold text-white">A. Ramaswamy</span>
              <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Managing Director</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg border-t border-rule py-20 md:py-28 text-center">
        <div className="container-editorial flex flex-col items-center gsap-reveal space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-ink uppercase max-w-4xl">
            Let's engineer the future together.
          </h2>
          <p className="text-base md:text-lg text-ink-muted font-light leading-relaxed max-w-2xl">
            Whether your project demands signalling systems, locomotive technologies or mission-critical engineering solutions, LorVen Systems is ready to collaborate.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-ink text-xs font-bold uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-on-dark transition-colors duration-300 rounded-sm shadow-md"
            >
              Contact Our Engineering Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
