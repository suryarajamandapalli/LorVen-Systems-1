import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import sntHero from "@/assets/snt-hero-real.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import smtLine from "@/assets/smt-line.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import depot from "@/assets/depot.jpg";
import locoThumb from "@/assets/loco-card-thumb.png";

export const Route = createFileRoute("/products/snt/")({
  head: () => ({
    meta: [
      { title: "Signalling & Telecom — LorVen Systems" },
      { name: "description", content: "Mission-critical signalling and telecommunication systems for modern railway networks." },
    ],
  }),
  component: SNTProductPage,
});

function SNTProductPage() {
  useGSAP(() => {
    // Parallax
    gsap.to(".snt-hero-img", {
      scrollTrigger: { trigger: ".snt-hero", start: "top top", end: "bottom top", scrub: true },
      yPercent: 25,
      ease: "none",
    });

    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
        }
      );
    });

    // Sticky image section
    ScrollTrigger.create({
      trigger: ".sticky-container",
      start: "top 20%",
      end: "bottom 80%",
      pin: ".sticky-image",
    });

    setTimeout(() => ScrollTrigger.refresh(), 1000);
  }, []);

  return (
    <div className="bg-ink text-on-dark selection:bg-on-dark selection:text-ink">
      
      {/* 1. HERO & CHAPTER HEADER */}
      <section className="snt-hero relative h-[100svh] w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src={sntHero} alt="Signalling Systems" className="snt-hero-img h-[120%] w-full object-cover -top-[10%] relative opacity-60" />
        </div>
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-ink/80 via-ink/20 to-ink" />

        <div className="container-editorial relative z-10 flex flex-col justify-end h-full pb-24">
          
          {/* Chapter Signature */}
          <div className="mb-12 pointer-events-auto">
            <span className="num-mono text-[10px] text-on-dark/40 uppercase tracking-[0.2em] mb-2 block">01</span>
            <span className="text-[10px] text-on-dark/60 uppercase tracking-[0.2em] border-b border-on-dark/20 pb-2 block w-max">
              PRODUCT / SIGNALLING & TELECOM
            </span>
          </div>

          <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] tracking-tight mb-8 max-w-5xl">
            Control the network. <br />Without compromise.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-on-dark/70 font-light leading-relaxed">
            Mission-critical signalling and telecommunication electronics designed for absolute reliability in the harshest mainline and metro environments.
          </p>
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW (Architectural Grid) */}
      <section className="py-32 md:py-48 border-t border-on-dark/10">
        <div className="container-editorial grid grid-cols-1 grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-4 gsap-reveal">
            <span className="eyebrow !text-on-dark/50">Overview</span>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 gsap-reveal">
            <div>
              <p className="text-xl text-on-dark/90 font-light leading-relaxed mb-6">
                Railway signalling is unforgiving. A failure in communication or logic doesn't just halt operations; it compromises safety. 
              </p>
              <p className="text-base text-on-dark/60 font-light leading-relaxed">
                LorVen’s SNT portfolio is built entirely around fail-safe architectures. From Integrated Power Supplies (IPS) that guarantee uninterrupted wayside operation, to ruggedized Data Loggers that record microsecond-level events, we engineer the invisible nervous system of modern railways.
              </p>
            </div>
            <div className="border-l border-on-dark/20 pl-8 flex flex-col justify-center">
              <span className="text-5xl font-light text-on-dark block mb-2">99.999%</span>
              <span className="text-[10px] text-on-dark/50 uppercase tracking-[0.2em]">Target Uptime Requirement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SYSTEMS (Dark Card Grid) */}
      <section className="py-32 bg-[#0a0a0a] border-t border-on-dark/10">
        <div className="container-editorial">
          <span className="eyebrow !text-on-dark/50 block mb-16 text-center gsap-reveal">Core Systems</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { id: "01", title: "Integrated Power Supply (IPS)", desc: "A centralized, redundant power architecture that replaces fragmented battery banks, providing pristine, highly regulated AC/DC power to critical signalling gears.", link: "/products/snt/ips" },
              { id: "02", title: "Remote Diagnostic & Predictive Maintenance (RDPMS)", desc: "Continuous wayside telemetry, current curves, and relay contact resistance tracking with dual-SIM LTE routing.", link: "/products/snt/rdpms" },
              { id: "03", title: "Track Circuit Equipment", desc: "Fail-safe train detection systems utilizing high-frequency modulation to reliably detect rolling stock presence under extreme ballast resistance variations.", link: "/products/snt" },
              { id: "04", title: "Relay & Logic Panels", desc: "Pre-wired, meticulously routed control panels that form the mechanical logic backbone for stations, interlocking systems, and level crossings.", link: "/products/snt" }
            ].map(sys => (
              <Link key={sys.id} to={sys.link} className="border border-on-dark/10 p-10 hover:border-on-dark/30 transition-colors duration-500 gsap-reveal block group">
                <span className="num-mono text-[10px] text-on-dark/40 uppercase tracking-[0.2em] mb-8 block">{sys.id}</span>
                <h3 className="text-2xl font-light text-on-dark mb-4 group-hover:text-steel transition-colors">{sys.title}</h3>
                <p className="text-base text-on-dark/60 font-light leading-relaxed">{sys.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (Sticky Image Layout) */}
      <section className="py-32 border-t border-on-dark/10 sticky-container">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Visual */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky-image top-32 w-full h-[60vh] bg-[#111] overflow-hidden border border-on-dark/10">
              <img src={pcbMacro} alt="Electronics" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
            </div>
          </div>
 
          {/* Scrolling Content */}
          <div className="lg:col-span-7 space-y-32">
            <div>
              <span className="eyebrow !text-on-dark/50 block mb-6">How It Works</span>
              <h2 className="text-4xl font-light text-on-dark mb-8">Fail-Safe by Design.</h2>
              <p className="text-lg text-on-dark/70 font-light leading-relaxed">
                In signalling, there is no acceptable margin for error. If a system cannot verify its own integrity, it must default to its most restrictive state (e.g., turning a signal red). This principle dictates every board we layout and every line of code we compile.
              </p>
            </div>

            <div className="gsap-reveal">
              <h3 className="text-2xl font-light text-on-dark mb-4">Hardware Redundancy</h3>
              <p className="text-base text-on-dark/60 font-light leading-relaxed">
                We employ dual out of two (2oo2) or triple modular redundancy (TMR) on critical microcontrollers. The processors constantly vote on the output; if a discrepancy occurs, the system immediately trips to safe mode.
              </p>
            </div>

            <div className="gsap-reveal">
              <h3 className="text-2xl font-light text-on-dark mb-4">Thermal & EMI Immunisation</h3>
              <p className="text-base text-on-dark/60 font-light leading-relaxed">
                Wayside cabinets bake in 55°C summers and freeze in winters, while sitting next to 25kV traction lines. We use heavy copper planes, conformal coating, and strict component derating to ensure logical integrity isn't destroyed by electrical noise.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SPECIFICATIONS (Editorial Layout) */}
      <section className="py-32 bg-[#050505] border-t border-on-dark/10">
        <div className="container-editorial">
          <div className="flex justify-between items-end mb-20 gsap-reveal border-b border-on-dark/20 pb-8">
            <h2 className="text-3xl font-light text-on-dark">Technical Specifications</h2>
            <span className="text-[10px] text-on-dark/50 uppercase tracking-[0.2em]">Data Logger Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <div className="gsap-reveal">
              <span className="block text-on-dark/40 text-sm mb-2">Input Capacity</span>
              <span className="block text-2xl font-light text-on-dark">Up to 4096 Digital I/O</span>
              <span className="block text-on-dark/40 text-sm mt-2">Expandable architecture</span>
            </div>
            <div className="gsap-reveal">
              <span className="block text-on-dark/40 text-sm mb-2">Scan Rate</span>
              <span className="block text-2xl font-light text-on-dark">&lt; 16 Milliseconds</span>
              <span className="block text-on-dark/40 text-sm mt-2">Real-time event capture</span>
            </div>
            <div className="gsap-reveal">
              <span className="block text-on-dark/40 text-sm mb-2">Operating Temp</span>
              <span className="block text-2xl font-light text-on-dark">-10°C to +70°C</span>
              <span className="block text-on-dark/40 text-sm mt-2">Without forced cooling</span>
            </div>
            <div className="gsap-reveal border-t border-on-dark/10 pt-8">
              <span className="block text-on-dark/40 text-sm mb-2">Communication</span>
              <span className="block text-2xl font-light text-on-dark">OFC, E1, Ethernet, GSM</span>
              <span className="block text-on-dark/40 text-sm mt-2">Multi-protocol routing</span>
            </div>
            <div className="gsap-reveal border-t border-on-dark/10 pt-8">
              <span className="block text-on-dark/40 text-sm mb-2">Memory Setup</span>
              <span className="block text-2xl font-light text-on-dark">Solid-State SD / NVRAM</span>
              <span className="block text-on-dark/40 text-sm mt-2">1 million event capacity</span>
            </div>
            <div className="gsap-reveal border-t border-on-dark/10 pt-8">
              <span className="block text-on-dark/40 text-sm mb-2">Certification</span>
              <span className="block text-2xl font-light text-on-dark">RDSO / SPN / 144</span>
              <span className="block text-on-dark/40 text-sm mt-2">Indian Railways standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS (Horizontal Image Cards) */}
      <section className="py-32 border-t border-on-dark/10">
        <div className="container-editorial">
          <span className="eyebrow !text-on-dark/50 block mb-16 gsap-reveal">Deployments</span>

          <div className="space-y-4">
            {[
              { title: "Mainline Interlocking", img: factoryHall, text: "Serving as the heart of station control, ensuring conflicting routes are mechanically and electronically impossible to set." },
              { title: "Wayside Stations", img: smtLine, text: "Distributed power and data aggregation in remote, unmanned locations where maintenance access is difficult." },
              { title: "Level Crossings", img: sntHero, text: "Automated warning systems linking train detection directly to road barrier mechanisms with zero latency." },
            ].map((app, i) => (
              <div key={i} className="group relative overflow-hidden h-[30vh] md:h-[40vh] bg-[#111] gsap-reveal cursor-default flex items-end p-8 md:p-12">
                <img src={app.img} alt={app.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out" />
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-3xl font-light text-on-dark mb-4">{app.title}</h3>
                  <p className="text-base text-on-dark/70 font-light hidden md:block">{app.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED PRODUCTS (Elegant Transition) */}
      <section className="py-32 bg-[#080808] border-t border-on-dark/10">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal">
            <span className="eyebrow !text-on-dark/50 block mb-8">Related Domain</span>
            <h2 className="text-4xl font-light text-on-dark mb-6">Electric Locomotive</h2>
            <p className="text-lg text-on-dark/60 font-light mb-12 max-w-md">
              From wayside signals to onboard intelligence. Explore our high-power traction converters, auxiliary panels, and driver cabin interfaces.
            </p>
            <Link to="/products/electric-locomotive" className="group flex items-center gap-4 border-b border-on-dark/30 pb-2 text-sm uppercase tracking-[0.2em] text-on-dark hover:border-on-dark w-max transition-colors">
              Continue to Electric Loco <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh]">
            <img src={locoThumb} alt="Electric Loco" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative h-[80svh] bg-ink flex items-center justify-center overflow-hidden border-t border-on-dark/10">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Depot" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        </div>
        <div className="container-editorial relative z-10 flex flex-col items-center text-center gsap-reveal">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-on-dark mb-10 max-w-4xl">
            Where Reliability Matters Most.
          </h2>
          <p className="text-lg md:text-xl text-on-dark/60 font-light leading-relaxed max-w-2xl mb-16">
            Partner with LorVen Systems for your next signalling deployment or infrastructure upgrade.
          </p>
          <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border border-on-dark/50 text-sm font-medium uppercase tracking-[0.16em] text-on-dark hover:bg-on-dark hover:text-ink transition-colors duration-300">
            Contact Engineering Team
          </Link>
        </div>
      </section>

    </div>
  );
}
