import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import locoHero from "@/assets/loco-hero-real.jpg";
import simulator from "@/assets/simulator.jpg";
import depot from "@/assets/depot.jpg";
import electricalCabinet from "@/assets/electrical-cabinet.jpg";
import coachThumb from "@/assets/coach-build.jpg";

export const Route = createFileRoute("/products/electric-locomotive/")({
  head: () => ({
    meta: [
      { title: "Electric Locomotive — LorVen Systems" },
      { name: "description", content: "High-voltage traction, auxiliary power, and advanced driver interfaces for mainline electric locomotives." },
    ],
  }),
  component: LocoProductPage,
});

function LocoProductPage() {
  useGSAP(() => {
    // Hero split parallax
    gsap.to(".loco-parallax", {
      scrollTrigger: { trigger: ".loco-hero", start: "top top", end: "bottom top", scrub: true },
      yPercent: 30,
      ease: "none",
    });

    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1.2, ease: "power2.out",
        }
      );
    });

    // Horizontal Scroll Section
    const horizontalSections = gsap.utils.toArray(".horizontal-item");
    if (horizontalSections.length > 0) {
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + (document.querySelector(".horizontal-container")?.scrollWidth || 2000),
        }
      });
    }

    setTimeout(() => ScrollTrigger.refresh(), 1000);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark overflow-hidden">
      
      {/* 1. HERO & CHAPTER HEADER (Panoramic Split) */}
      <section className="loco-hero relative h-[100svh] w-full flex flex-col lg:flex-row">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 h-full bg-surface pt-32 pb-24 px-[clamp(1.25rem,4vw,4rem)] xl:px-24 flex flex-col justify-between relative z-10">
          <div className="pointer-events-auto">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-2 block">02</span>
            <span className="text-[10px] text-ink-muted uppercase tracking-[0.2em] border-b border-rule pb-2 block w-max">
              PRODUCT / ELECTRIC LOCOMOTIVE
            </span>
          </div>

          <div className="loco-parallax">
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tight text-ink mb-8">
              Power in Motion. <br/>Precision at Speed.
            </h1>
            <p className="max-w-md text-lg text-ink-muted font-light leading-relaxed">
              Handling 25kV traction systems requires more than rugged design; it demands highly intelligent power management and seamless driver interfaces operating at 160 km/h.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden">
          <img src={locoHero} alt="Electric Locomotive" className="w-full h-full object-cover loco-parallax" />
          <div className="absolute inset-0 bg-ink/5 mix-blend-multiply" />
        </div>
      </section>

      {/* 2. ENGINEERING PHILOSOPHY (Dynamic Offset) */}
      <section className="py-32 md:py-48 border-t border-rule bg-bg">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 gsap-reveal">
              <span className="eyebrow block mb-8">Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-light leading-snug text-ink mb-8">
                Taming thousands of amps.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 gsap-reveal">
              <p className="text-xl text-ink-muted font-light leading-relaxed mb-6">
                An electric locomotive is an incredibly harsh electrical environment. High-voltage transients, extreme EMI, and relentless mechanical vibration are constants.
              </p>
              <p className="text-base text-ink-muted font-light leading-relaxed">
                LorVen designs the onboard intelligence that safely distributes auxiliary power, interfaces with the driver cab, and processes fault diagnostics in real-time. Our systems ensure that a locomotive doesn't just pull weight, but does so with continuous digital awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SYSTEMS (Horizontal Motion Layout) */}
      <section className="horizontal-container bg-ink text-on-dark h-[100svh] flex flex-col justify-center overflow-hidden border-y border-ink">
        <div className="px-[clamp(1.25rem,4vw,4rem)] xl:px-24 mb-12 shrink-0">
          <span className="eyebrow !text-on-dark/50">Onboard Technologies</span>
        </div>
        
        <div className="flex w-[300vw] md:w-[200vw] lg:w-[150vw] h-[60vh]">
          {/* Item 1 */}
          <div className="horizontal-item w-[100vw] md:w-[50vw] h-full flex flex-col px-[clamp(1.25rem,4vw,4rem)] border-r border-on-dark/20 relative">
            <div className="absolute inset-0 z-0 opacity-10">
              <img src={electricalCabinet} alt="Auxiliary Panels" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-end pb-12">
              <span className="text-6xl font-light text-on-dark/20 mb-8 block">01</span>
              <h3 className="text-3xl font-light text-on-dark mb-4">Auxiliary Control Panels</h3>
              <p className="text-base text-on-dark/60 font-light max-w-sm">
                Managing power distribution for compressors, blowers, and onboard electronics. Built with high-current busbars and modular contactors for rapid swap-outs.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="horizontal-item w-[100vw] md:w-[50vw] h-full flex flex-col px-[clamp(1.25rem,4vw,4rem)] border-r border-on-dark/20 relative bg-[#0a0a0a]">
            <div className="relative z-10 flex flex-col h-full justify-end pb-12">
              <span className="text-6xl font-light text-on-dark/20 mb-8 block">02</span>
              <h3 className="text-3xl font-light text-on-dark mb-4">Driver Desk Interfaces</h3>
              <p className="text-base text-on-dark/60 font-light max-w-sm">
                Ergonomic, highly reliable master controllers, switch panels, and indicator clusters designed to withstand millions of physical actuations.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="horizontal-item w-[100vw] md:w-[50vw] h-full flex flex-col px-[clamp(1.25rem,4vw,4rem)] relative">
            <div className="absolute inset-0 z-0 opacity-20">
              <img src={simulator} alt="Simulators" className="w-full h-full object-cover mix-blend-screen" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-end pb-12">
              <span className="text-6xl font-light text-on-dark/20 mb-8 block">03</span>
              <h3 className="text-3xl font-light text-on-dark mb-4">Training Simulators</h3>
              <p className="text-base text-on-dark/60 font-light max-w-sm">
                Full-scale, hardware-in-the-loop cab simulators providing photorealistic route rendering and precise pneumatic brake emulation for pilot training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPECIFICATIONS (Editorial Typographic Flow) */}
      <section className="py-32 bg-surface border-t border-rule">
        <div className="container-editorial">
          <div className="mb-20 gsap-reveal">
            <span className="eyebrow block mb-4">Engineering Standards</span>
            <h2 className="text-3xl font-light text-ink">Built for the Indian Railways.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3">Vibration & Shock</h4>
                <p className="text-base text-ink-muted font-light leading-relaxed">
                  Compliant with IEC 61373 categories. Enclosures and PCB mounts are finite-element optimized to prevent resonant frequency coupling on the bogie and carbody.
                </p>
              </div>
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3">Operating Temperatures</h4>
                <p className="text-base text-ink-muted font-light leading-relaxed">
                  Rated for -25°C to +70°C without active cooling. We utilize high-temperature industrial grade components and thick-film thermal management strategies.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3">EMC / EMI Compliance</h4>
                <p className="text-base text-ink-muted font-light leading-relaxed">
                  Certified to EN 50121-3-2. Our power supplies and microcontrollers are heavily shielded to reject transient noise generated by 25kV pantograph arcs and traction motors.
                </p>
              </div>
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3">Fire Safety & Toxicity</h4>
                <p className="text-base text-ink-muted font-light leading-relaxed">
                  All cables, terminal blocks, and non-metallic enclosures comply with EN 45545-2 HL3 requirements for low smoke and zero halogen emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL WIDTH INDUSTRIAL SHOT */}
      <section className="w-full h-[70vh] overflow-hidden gsap-reveal">
        <img src={depot} alt="Electric Loco Depot" className="w-full h-full object-cover" />
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="py-32 bg-bg border-t border-rule">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh] bg-surface">
            <img src={coachThumb} alt="Coaches" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-all duration-700" />
          </div>
          <div className="gsap-reveal">
            <span className="eyebrow block mb-8">Related Domain</span>
            <h2 className="text-4xl font-light text-ink mb-6">Passenger Coaches</h2>
            <p className="text-lg text-ink-muted font-light mb-12 max-w-md">
              Step from the locomotive into the trainset. Discover our high-reliability passenger information systems, onboard diagnostics, and cabin comforts.
            </p>
            <Link to="/products/coaches" className="group flex items-center gap-4 border-b border-ink/30 pb-2 text-sm uppercase tracking-[0.2em] text-ink hover:border-ink w-max transition-colors">
              Continue to Coaches <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 md:py-48 bg-section text-center border-t border-rule">
        <div className="container-editorial flex flex-col items-center gsap-reveal">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-ink mb-10 max-w-4xl">
            Built for Critical Missions.
          </h2>
          <p className="text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-2xl mb-16">
            Elevate your rolling stock with onboard technology designed for zero-defect operations.
          </p>
          <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border border-ink text-sm font-medium uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-on-dark transition-colors duration-300">
            Talk With Our Engineering Team
          </Link>
        </div>
      </section>

    </div>
  );
}
