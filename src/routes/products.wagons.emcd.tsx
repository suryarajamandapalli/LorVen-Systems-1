import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import wagons from "@/assets/wagons.jpg";
import logoWhite from "@/assets/logo-1-white.svg";

export const Route = createFileRoute("/products/wagons/emcd")({
  head: () => ({
    meta: [
      { title: "EMCD — AI-Based Electromagnetic Crack Detector — LorVen Systems" },
      { name: "description", content: "Automated non-destructive testing system using electromagnetic arrays and AI to detect micro-cracks in metal railway components." },
    ],
  }),
  component: EmcdRoute,
});

function EmcdRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

      {/* Full-Screen Coming Soon Hero */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={wagons}
            alt="EMCD — AI-Based Electromagnetic Crack Detector"
            className="w-full h-full object-cover opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 space-y-10">
          {/* Breadcrumbs */}
          <nav className="text-xs uppercase tracking-wider text-white/40">
            <ol className="flex items-center gap-2 flex-wrap font-semibold justify-center">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20 font-light">&gt;</li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li className="text-white/20 font-light">&gt;</li>
              <li><Link to="/products/wagons" className="hover:text-white transition-colors">Coaches & Wagons</Link></li>
              <li className="text-white/20 font-light">&gt;</li>
              <li className="text-white/60">EMCD</li>
            </ol>
          </nav>

          {/* Logo */}
          <img
            src={logoWhite}
            alt="LorVen Systems"
            className="w-40 md:w-52 h-auto opacity-80 select-none pointer-events-none"
          />

          {/* Product Title */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white">
              AI-Based Electromagnetic Crack Detector (EMCD)
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              Automated non-destructive testing for railway components
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <span className="inline-block px-6 py-2.5 border border-steel/50 text-steel text-xs font-bold uppercase tracking-[0.25em] rounded-sm">
              Coming Soon
            </span>
            <p className="text-white/40 text-xs font-light tracking-wider uppercase">
              Product details will be available shortly
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm"
            >
              Discuss Your Requirements →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
