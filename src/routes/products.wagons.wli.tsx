import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import coachBuild from "@/assets/coach-build.jpg";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/products/wagons/wli")({
  head: () => ({
    meta: [
      { title: "WLI — IoT-Based Water Level Indicator — LorVen Systems" },
      { name: "description", content: "Real-time water-tank level measurement for passenger coaches, reported coach-wise to the CRIS server." },
    ],
  }),
  component: WliRoute,
});

function WliRoute() {
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

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Premium Hero Banner */}
      <section className="relative min-h-[50vh] bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={coachBuild}
            alt="WLI — IoT-Based Water Level Indicator"
            className="w-full h-full object-cover opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent z-10" />
          {/* Fine architectural grid overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        {/* Content */}
        <div className="container-editorial relative z-30 w-full text-white">
          <div className="max-w-4xl space-y-8">
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/products/wagons" className="hover:text-white transition-colors">Coaches & Wagons</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">WLI</li>
              </ol>
            </nav>

            <div className="space-y-4">
              <span className="eyebrow !text-white/60 tracking-[0.2em] font-semibold text-xs uppercase block">Products — Coaches & Wagons</span>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extralight uppercase tracking-tight leading-none text-white max-w-3xl">
                WLI — IoT-Based Water Level Indicator
              </h1>
            </div>

            <p className="text-sm uppercase tracking-wider text-white/70 font-mono">
              Developed for Indian Railways — Specific Technical Requirement (STR) prepared for RDSO
            </p>

            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light max-w-3xl border-l-2 border-steel/40 pl-6">
              Real-time water-tank level measurement for passenger coaches, reported coach-wise to the CRIS server — enabling planned watering at nominated stations and reducing en-route watering failures and passenger complaints.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-20 md:py-28 border-t border-rule/30">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="col-span-12 gsap-reveal space-y-6">
            <span className="eyebrow block">OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Product Overview
            </h2>
            <div className="space-y-6 border-t border-rule/20 pt-6">
              <div className="text-base text-ink-muted leading-relaxed font-mono italic">
                &lt;&lt; Waiting for official product description &gt;&gt;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Capabilities */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">CAPABILITIES</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Key Features
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official feature list &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 4. Applications */}
      <section className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">DEPLOYMENTS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Applications
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official deployment information &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 5. System Architecture Section */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">ARCHITECTURE</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              System Architecture
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official architecture diagram &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 6. Technical Specifications */}
      <section className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">SPECIFICATIONS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Specifications
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official specifications &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 7. Communication & Interfaces */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">COMMUNICATION</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Communication
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official interfaces &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 8. Standards & Compliance */}
      <section className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">STANDARDS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Compliance
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official standards &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 9. Downloads Section */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">LIBRARY</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Downloads
            </h2>
          </div>

          <div className="bg-white p-12 border border-rule/15 rounded text-center gsap-reveal">
            <span className="text-sm font-mono text-ink-muted italic">&lt;&lt; Waiting for official documents &gt;&gt;</span>
          </div>
        </div>
      </section>

      {/* 10. Enterprise CTA */}
      <section className="bg-ink text-on-dark py-24 md:py-32 border-t border-ink relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Wayside Maintenance Depot" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
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
