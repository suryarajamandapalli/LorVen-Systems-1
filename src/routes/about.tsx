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
import pcbMacro from "@/assets/pcb-macro.jpg";
import smtLine from "@/assets/smt-line.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => createSeoMeta({
    title: "About | LorVen Systems",
    description: "Built for Indian Railways. Validated through engineering discipline, documentation and testing.",
    path: "/about",
  }),
  component: About,
});

function About() {
  useGSAP(() => {
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 24, opacity: 0 },
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
    setTimeout(() => ScrollTrigger.refresh(), 400);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">

      {/* Hero */}
      <PageHero
        eyebrow=""
        title="ABOUT LORVEN"
        lede={
          <span className="flex items-center gap-1.5 text-sm font-medium tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors cursor-pointer">Home</Link>
            <span className="text-white/35">/</span>
            <span className="text-white/90">About</span>
          </span>
        }
      />

      {/* 1. Company Overview */}
      <section id="overview" className="bg-bg border-t border-rule py-8 md:py-12">
        <div className="container-editorial grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-4">
            <span className="eyebrow block">COMPANY OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Technology <br />for Critical Industries.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              LorVen Systems develops high-reliability electronic systems that support safety-critical and mission-critical operations. By combining engineering expertise with disciplined execution, we deliver dependable technologies for railway transportation and industrial infrastructure.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              Every solution is designed with reliability, precision, and long-term operational performance at its core.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 gsap-reveal">
            <div className="aspect-[16/11] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={pcbMacro} alt="Precision electronics" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission, Purpose */}
      <section id="vision-mission" className="bg-section border-t border-rule py-10 md:py-14">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gsap-reveal border-t border-rule pt-5 space-y-2">
              <span className="eyebrow block">Vision</span>
              <p className="text-sm text-ink leading-relaxed font-light">
                To build a globally respected technology company delivering world-class systems for safety-critical and mission-critical industries.
              </p>
            </div>
            <div className="gsap-reveal border-t border-rule pt-5 space-y-2">
              <span className="eyebrow block">Mission</span>
              <p className="text-sm text-ink leading-relaxed font-light">
                To create reliable, innovative and high-performance products that advance transportation, infrastructure, aerospace and defence through engineering excellence and disciplined execution.
              </p>
            </div>
            <div className="gsap-reveal border-t border-rule pt-5 space-y-2">
              <span className="eyebrow block">Purpose</span>
              <p className="text-sm text-ink leading-relaxed font-light">
                Engineering technology that improves safety, reliability and performance where failure is not an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Capabilities */}
      <section id="capabilities" className="bg-bg border-t border-rule py-10 md:py-14">
        <div className="container-editorial grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-4">
            <span className="eyebrow block">ENGINEERING CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Excellence.<br />Reliable Execution.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              LorVen provides end-to-end engineering capabilities spanning product development, system integration, manufacturing support, installation and commissioning for mission-critical electronic systems.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              Our multidisciplinary approach enables us to deliver solutions that meet demanding operational requirements while maintaining the highest standards of quality, reliability and performance.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 gsap-reveal">
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={smtLine} alt="SMT Line Manufacturing" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section id="values" className="bg-section border-t border-rule py-10 md:py-14">
        <div className="container-editorial">
          <div className="mb-8 gsap-reveal space-y-2">
            <span className="eyebrow block">CORE VALUES</span>
            <h2 className="text-2xl md:text-3xl font-light leading-snug text-ink uppercase">
              Values that Define Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Value 01", title: "Precision Engineering", desc: "Every solution is developed with accuracy, consistency and attention to detail." },
              { label: "Value 02", title: "Reliability by Design", desc: "Products are engineered to perform consistently in demanding operating environments." },
              { label: "Value 03", title: "Quality First", desc: "Quality is integrated throughout the engineering, development and delivery process." },
              { label: "Value 04", title: "Disciplined Execution", desc: "Projects are delivered through structured engineering practices and technical excellence." },
            ].map((c) => (
              <div key={c.title} className="bg-white p-6 border border-rule/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal">
                <span className="num-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted block mb-4 font-semibold">{c.label}</span>
                <h3 className="text-base font-semibold text-ink uppercase">{c.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Index — just above Philosophy */}
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
            title: "Core Focus",
            items: [
              { label: "Engineering Capabilities", href: "#capabilities" },
              { label: "Core Values", href: "#values" },
            ],
          },
          {
            title: "Philosophy",
            items: [
              { label: "Leadership Philosophy", href: "#philosophy" },
            ],
          },
        ]}
      />

      {/* 5. Leadership Philosophy */}
      <section id="philosophy" className="relative bg-ink text-on-dark border-t border-ink py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Railway Depot" className="w-full h-full object-cover opacity-20 select-none pointer-events-none" />
        </div>
        <div className="container-editorial relative z-10 flex justify-center">
          <div className="max-w-4xl text-center gsap-reveal space-y-5">
            <span className="eyebrow !text-white/40 block">OUR PHILOSOPHY</span>
            <span className="text-2xl md:text-4xl font-light leading-snug text-white uppercase block">
              Engineering Trust. <br />Delivering Performance.
            </span>
            <p className="text-base text-white/80 leading-relaxed font-light">
              We believe trust is earned through reliable engineering, disciplined execution and long-term customer relationships. Every solution we develop reflects our commitment to safety, quality and dependable performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg border-t border-rule py-12 md:py-16 text-center">
        <div className="container-editorial flex flex-col items-center gsap-reveal space-y-4">
          <h2 className="text-2xl md:text-3xl font-light text-ink uppercase max-w-3xl">
            Let's Build Reliable Engineering Together.
          </h2>
          <p className="text-base text-ink-muted font-light leading-relaxed max-w-2xl">
            Whether you're developing railway infrastructure, industrial systems or mission-critical technologies, LorVen Systems is ready to collaborate with engineering solutions designed for long-term performance.
          </p>
          <div className="pt-1">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-ink text-xs font-bold uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-on-dark transition-colors duration-300 rounded-sm shadow-md"
            >
              Contact Our Engineering Team →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
