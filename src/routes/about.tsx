import { createFileRoute, Link } from "@tanstack/react-router";
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
import sntHero from "@/assets/snt-hero-real.jpg";
import simulator from "@/assets/simulator.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import wagons from "@/assets/wagons.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LorVen Systems" },
      {
        name: "description",
        content:
          "LorVen Systems is an engineering firm delivering mission-critical electronics and electrical systems for railways, infrastructure, aerospace, and defence.",
      },
      { property: "og:title", content: "About — LorVen Systems" },
      { property: "og:description", content: "Engineering Confidence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  useGSAP(() => {
    // 1. Hero text parallax scrolling
    gsap.to(".hero-parallax-content", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 30,
      opacity: 0,
      ease: "none",
    });

    // 2. Global GSAP scroll reveals for eyebrows, headings and body matter
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 35, opacity: 0 },
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

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative h-[90svh] w-full overflow-hidden bg-ink text-on-dark flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Railway engineering facility"
            className="h-full w-full object-cover animate-kenburns opacity-70"
          />
        </div>
        <div className="absolute inset-0 z-5 bg-gradient-to-t from-ink via-ink/40 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="container-editorial hero-parallax-content relative z-10 flex w-full flex-col justify-end pb-24 pointer-events-none">
          
          <ul className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-on-dark/50 mb-10 pointer-events-auto">
            <li><Link to="/" className="hover:text-on-dark transition-colors duration-200">Home</Link></li>
            <li><span>/</span></li>
            <li className="text-on-dark/90">About</li>
          </ul>

          <h1 className="text-[clamp(2.5rem,5vw,6rem)] font-light leading-[1.06] tracking-[-0.03em] overflow-visible">
            Engineering Confidence.
          </h1>
          
          <div className="mt-8 grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-6">
              <p className="text-lg md:text-xl text-on-dark/70 font-light leading-relaxed">
                About LorVen Systems
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 flex md:justify-end">
              <p className="max-w-md text-sm md:text-base text-on-dark/50 leading-relaxed text-left md:text-right">
                Delivering mission-critical electronics and electrical integration for industries where failure is not an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-bg border-t border-rule py-24 md:py-32">
        <div className="container-editorial grid grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="col-span-12 md:col-span-5 gsap-reveal">
            <span className="eyebrow block mb-8">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink mb-6">
              A quiet practice in <br className="hidden lg:block"/>mission-critical engineering.
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed font-light mb-6">
              For over fifteen years, LorVen Systems has built the unseen layer of India's rolling stock — circuit boards that survive a million cycles, cabinets that earn certification on the first attempt, and installations that hand over on time.
            </p>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              We work with national operators, OEMs and integrators across mainline, metro, and freight. Our discipline is patience: every assembly is engineered for the operating envelope it will actually serve.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 gsap-reveal">
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface">
              <img src={pcbMacro} alt="Precision electronics" className="h-full w-full object-cover scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="bg-section border-t border-rule py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-16">
            <div className="gsap-reveal border-t border-rule pt-6">
              <span className="eyebrow block mb-6">Vision</span>
              <h3 className="text-2xl font-light leading-snug text-ink mb-4">
                To build a globally respected technology company delivering world-class systems for safety-critical and mission-critical industries.
              </h3>
            </div>
            
            <div className="gsap-reveal border-t border-rule pt-6">
              <span className="eyebrow block mb-6">Mission</span>
              <h3 className="text-2xl font-light leading-snug text-ink mb-4">
                To create reliable, innovative, and high-performance products that advance transportation, infrastructure, aerospace, and defence through engineering excellence and disciplined execution.
              </h3>
            </div>
            
            <div className="gsap-reveal border-t border-rule pt-6">
              <span className="eyebrow block mb-6">Purpose</span>
              <h3 className="text-2xl font-light leading-snug text-ink mb-4">
                Engineering technology that improves safety, reliability, and performance where failure is not an option.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="bg-ink text-on-dark border-t border-ink py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={factoryHall} alt="Background texture" className="w-full h-full object-cover" />
        </div>
        <div className="container-editorial relative z-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 gsap-reveal">
            <span className="eyebrow !text-on-dark/50 block mb-8">Engineering Philosophy</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-7 gsap-reveal">
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-on-dark mb-8">
              Reliability is not a feature. <br className="hidden md:block"/>It is the absolute baseline.
            </h2>
            <div className="space-y-6 text-lg text-on-dark/70 font-light leading-relaxed">
              <p>
                In safety-critical industries, performance is measured over decades, not quarters. Our engineering philosophy is rooted in extreme environmental tolerance, predictive fault isolation, and uncompromising precision.
              </p>
              <p>
                Whether designing a fail-safe traction control board or a wayside diagnostic array, we do not over-engineer for the sake of complexity; we engineer for absolute, unyielding dependability under the harshest conditions imaginable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-bg border-t border-rule py-24 md:py-32">
        <div className="container-editorial">
          <div className="flex items-baseline justify-between mb-16 gsap-reveal">
            <span className="eyebrow">Industries We Serve</span>
          </div>
          
          <div className="flex flex-col border-t border-rule">
            {[
              { name: "Railways", desc: "Mainline traction, signalling, and communication systems.", img: sntHero },
              { name: "Metro & Transit", desc: "Urban mobility train control and onboard electronics.", img: simulator },
              { name: "Infrastructure", desc: "Critical power distribution and telemetry.", img: factoryHall },
              { name: "Aerospace", desc: "Avionics sub-assemblies and ground support equipment.", img: pcbMacro },
              { name: "Defence", desc: "Ruggedized tactical electronics and secure enclosures.", img: wagons },
            ].map((ind, i) => (
              <div key={ind.name} className="group relative border-b border-rule block overflow-hidden gsap-reveal">
                <div className="absolute inset-0 z-0 bg-surface translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between py-8 px-0 group-hover:px-6 transition-all duration-500 ease-out gap-6">
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 w-full md:w-auto">
                    <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light text-ink group-hover:text-steel transition-colors duration-300">
                      {ind.name}
                    </h3>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-end w-full md:w-1/2 gap-6 lg:gap-12">
                    <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="w-24 h-16 shrink-0 overflow-hidden hidden md:block border border-rule/50">
                      <img src={ind.img} alt={ind.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Engineering Excellence */}
      <section className="bg-section border-t border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[50vh] lg:h-auto w-full overflow-hidden">
            <img src={smtLine} alt="SMT Line Manufacturing" className="w-full h-full object-cover" />
          </div>
          
          <div className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col justify-center">
            <span className="eyebrow block mb-8 gsap-reveal">Manufacturing & Engineering</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink mb-8 gsap-reveal">
              End-to-end capability.<br/>Absolute control.
            </h2>
            <div className="space-y-6 text-lg text-ink-muted font-light leading-relaxed gsap-reveal">
              <p>
                LorVen operates dual facilities to separate R&D from high-volume production. Our Hyderabad hub focuses on design engineering, rapid prototyping, and environmental stress testing.
              </p>
              <p>
                Our Bengaluru plant is a dedicated high-mix manufacturing center featuring IPC-A-610 Class 3 qualified SMT lines, cleanroom assembly, and comprehensive end-of-line functional validation bays.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-rule grid grid-cols-2 gap-8 gsap-reveal">
              <div>
                <p className="text-3xl font-light text-ink mb-2">40,000</p>
                <p className="num-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">Sq. Ft. Manufacturing Space</p>
              </div>
              <div>
                <p className="text-3xl font-light text-ink mb-2">Class 3</p>
                <p className="num-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">IPC-A-610 Standard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Standards */}
      <section className="bg-bg border-t border-rule py-24 md:py-32">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="gsap-reveal">
              <span className="eyebrow block mb-4">Quality & Standards</span>
              <h2 className="text-3xl font-light leading-snug text-ink">
                Certified for the mainline.
              </h2>
            </div>
            <p className="text-sm text-ink-muted max-w-sm gsap-reveal">
              Quality is a documentation practice as much as a manufacturing one. Every assembly carries a route card and a paper trail that outlives the warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Management", title: "ISO 9001:2015", desc: "Certified quality management systems for design, manufacturing and service." },
              { label: "Rail Industry", title: "IRIS Rev. 03", desc: "Compliance with the International Railway Industry Standard for rolling stock." },
              { label: "Environment", title: "ISO 14001:2015", desc: "Environmental management standards actively governing our production facilities." },
              { label: "Approval", title: "RDSO", desc: "Approved vendor for Indian Railways Research Designs & Standards Organisation." },
            ].map((c) => (
              <div key={c.title} className="bg-surface p-8 border border-rule/50 gsap-reveal">
                <span className="num-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted block mb-6">{c.label}</span>
                <h3 className="text-xl font-medium text-ink mb-4">{c.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LorVen */}
      <section className="bg-section border-t border-rule py-24 md:py-32">
        <div className="container-editorial">
          <span className="eyebrow block mb-16 text-center gsap-reveal">Why LorVen</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "Engineering Excellence", desc: "Deep domain expertise in mixed-signal design, high-power electronics, and robust mechanical packaging tailored to industrial realities." },
              { title: "Mission Critical Reliability", desc: "Products subjected to extreme thermal, vibration, and EMI/EMC testing to guarantee uptime in applications where failure is catastrophic." },
              { title: "Customer Partnership", desc: "We act as an extension of our clients' engineering teams, collaborating from early-stage design through to commissioning and obsolescence management." },
              { title: "Long-Term Performance", desc: "Designing for 25-year lifecycles. We actively manage component lifecycles to ensure form-fit-function replacements remain available for decades." },
            ].map((w) => (
              <div key={w.title} className="border-t border-rule pt-6 gsap-reveal">
                <h3 className="text-2xl font-light text-ink mb-4">{w.title}</h3>
                <p className="text-base text-ink-muted leading-relaxed font-light">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="relative bg-ink text-on-dark border-t border-ink py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Railway Depot" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container-editorial relative z-10 flex justify-center">
          <div className="max-w-4xl text-center gsap-reveal">
            <span className="text-3xl md:text-5xl font-light leading-snug text-on-dark mb-10 block">
              "When an operator deploys our system on the mainline, they are purchasing peace of mind. Our responsibility is to ensure that trust is never broken."
            </span>
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="text-lg font-medium text-on-dark">A. Ramaswamy</span>
              <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-on-dark/60">Managing Director</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Call To Action */}
      <section className="bg-bg border-t border-rule py-24 md:py-32 text-center">
        <div className="container-editorial flex flex-col items-center gsap-reveal">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-ink mb-8 max-w-4xl">
            Let's engineer the future together.
          </h2>
          <p className="text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-2xl mb-12">
            Whether your project demands signalling systems, locomotive technologies or mission-critical engineering solutions, LorVen Systems is ready to collaborate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-ink text-sm font-medium uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-on-dark transition-colors duration-300"
          >
            Contact Our Engineering Team →
          </Link>
        </div>
      </section>
    </>
  );
}
