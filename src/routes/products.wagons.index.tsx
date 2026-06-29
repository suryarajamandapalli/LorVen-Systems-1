import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import wagonsHero from "@/assets/wagons.jpg";
import depot from "@/assets/depot.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import sntHero from "@/assets/snt-hero-real.jpg";

export const Route = createFileRoute("/products/wagons/")({
  head: () => ({
    meta: [
      { title: "Freight Wagons — LorVen Systems" },
      { name: "description", content: "Heavy industry condition monitoring and telemetry systems for freight wagons." },
    ],
  }),
  component: WagonsProductPage,
});

function WagonsProductPage() {
  useGSAP(() => {
    gsap.to(".wagon-parallax", {
      scrollTrigger: { trigger: ".wagon-hero", start: "top top", end: "bottom top", scrub: true },
      yPercent: 20,
      ease: "none",
    });

    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
        }
      );
    });
    
    setTimeout(() => ScrollTrigger.refresh(), 1000);
  }, []);

  return (
    <div className="bg-ink text-on-dark selection:bg-on-dark selection:text-ink font-light overflow-hidden">
      
      {/* 1. HERO & CHAPTER HEADER (Massive Visual Weight) */}
      <section className="wagon-hero relative h-[100svh] w-full flex flex-col justify-end pb-24 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src={wagonsHero} alt="Freight Wagons" className="wagon-parallax h-[120%] w-full object-cover -top-[10%] relative mix-blend-luminosity opacity-40" />
        </div>
        
        <div className="container-editorial relative z-10">
          <div className="mb-12 pointer-events-auto">
            <span className="num-mono text-[10px] text-on-dark/40 uppercase tracking-[0.2em] mb-2 block">04</span>
            <span className="text-[10px] text-on-dark/60 uppercase tracking-[0.2em] border-b border-on-dark/20 pb-2 block w-max">
              PRODUCT / FREIGHT WAGONS
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[0.9] tracking-tight text-on-dark mb-10 max-w-5xl uppercase">
            Heavy Industry. <br/>Absolute Precision.
          </h1>
          <p className="max-w-2xl text-xl text-on-dark/70 font-light leading-relaxed">
            Protecting massive rolling stock assets with intelligent condition monitoring, acoustic bearing analysis, and real-time telemetry.
          </p>
        </div>
      </section>

      {/* 2. DATA POINTS (High Impact) */}
      <section className="py-24 md:py-32 bg-[#050505] border-t border-on-dark/10">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-on-dark/10">
            <div className="pt-8 md:pt-0 md:px-8 first:px-0 text-center gsap-reveal">
              <span className="text-5xl md:text-7xl font-light text-on-dark block mb-4">100+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-on-dark/50">Tons Per Wagon</span>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 text-center gsap-reveal">
              <span className="text-5xl md:text-7xl font-light text-on-dark block mb-4">24/7</span>
              <span className="text-xs uppercase tracking-[0.2em] text-on-dark/50">Continuous Monitoring</span>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 text-center gsap-reveal">
              <span className="text-5xl md:text-7xl font-light text-on-dark block mb-4">Zero</span>
              <span className="text-xs uppercase tracking-[0.2em] text-on-dark/50">Unplanned Derailments</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY (Dark, Heavy) */}
      <section className="py-32 md:py-48 border-t border-on-dark/10">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 gsap-reveal">
            <h2 className="text-4xl md:text-5xl font-light leading-snug text-on-dark">
              Preventing catastrophic failure at speed.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 gsap-reveal">
            <p className="text-xl text-on-dark/80 font-light leading-relaxed mb-8">
              A seized axle on a fully loaded freight train doesn't just stop operations; it destroys infrastructure. In heavy freight, maintenance cannot be reactive.
            </p>
            <p className="text-base text-on-dark/60 font-light leading-relaxed">
              LorVen engineers Trackside Acoustic Condition Monitoring Systems (TACMS) and Hot Box Detectors. We use highly sensitive acoustic arrays and infrared optics to detect micro-fractures in bearings and excessive heat generation while the train is moving at line speed, notifying the control room before failure occurs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE SYSTEMS (Alternating sections) */}
      <section className="border-t border-on-dark/10">
        
        <div className="flex flex-col lg:flex-row bg-[#080808]">
          <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center gsap-reveal">
            <span className="eyebrow !text-on-dark/40 block mb-8">System 01</span>
            <h3 className="text-4xl font-light text-on-dark mb-6">Acoustic Bearing Detectors</h3>
            <p className="text-lg text-on-dark/60 leading-relaxed">
              Microphone arrays placed along the trackside that record the acoustic signature of every passing bearing. Proprietary DSP algorithms isolate fault frequencies—such as a cracked inner race or spalling—from the immense background noise of a freight train.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
            <img src={depot} alt="Trackside" className="w-full h-full object-cover mix-blend-luminosity opacity-50" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse bg-ink">
          <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center gsap-reveal">
            <span className="eyebrow !text-on-dark/40 block mb-8">System 02</span>
            <h3 className="text-4xl font-light text-on-dark mb-6">Hot Box & Wheel Detectors</h3>
            <p className="text-lg text-on-dark/60 leading-relaxed">
              Infrared scanning systems that measure the exact temperature of journal bearings and wheels. Our electronics aggregate this data, compensating for ambient conditions, to instantly flag any axle operating outside safe thermal limits.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
            <img src={factoryHall} alt="Wagons" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
          </div>
        </div>

      </section>

      {/* 5. SPECIFICATIONS (Massive Typography) */}
      <section className="py-32 bg-[#050505] border-t border-on-dark/10">
        <div className="container-editorial">
          <span className="eyebrow !text-on-dark/50 block mb-16 gsap-reveal">Technical Capabilities</span>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-on-dark/20 pb-16 gsap-reveal">
              <div className="md:col-span-4">
                <span className="text-xl text-on-dark/60">Speed Rating</span>
              </div>
              <div className="md:col-span-8">
                <h4 className="text-4xl md:text-5xl font-light text-on-dark">Up to 160 km/h</h4>
                <p className="text-on-dark/50 mt-4 max-w-md">Accurate acoustic and thermal reading on fully loaded trains passing at maximum line speeds.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-on-dark/20 pb-16 gsap-reveal">
              <div className="md:col-span-4">
                <span className="text-xl text-on-dark/60">Data Processing</span>
              </div>
              <div className="md:col-span-8">
                <h4 className="text-4xl md:text-5xl font-light text-on-dark">Edge AI Analysis</h4>
                <p className="text-on-dark/50 mt-4 max-w-md">Raw acoustic and thermal data is processed trackside. Only critical fault alerts and analytical metadata are transmitted to the control room, saving bandwidth.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-on-dark/20 pb-16 gsap-reveal">
              <div className="md:col-span-4">
                <span className="text-xl text-on-dark/60">Environmental</span>
              </div>
              <div className="md:col-span-8">
                <h4 className="text-4xl md:text-5xl font-light text-on-dark">IP67 Enclosures</h4>
                <p className="text-on-dark/50 mt-4 max-w-md">Electronics housed in heavy-duty stainless steel, entirely protected from monsoons, coal dust, and severe track vibrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="py-32 bg-[#080808] border-t border-on-dark/10">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh]">
            <img src={sntHero} alt="Signalling" className="w-full h-full object-cover opacity-60 mix-blend-screen hover:scale-105 transition-all duration-700" />
          </div>
          <div className="gsap-reveal">
            <span className="eyebrow !text-on-dark/50 block mb-8">Related Domain</span>
            <h2 className="text-4xl font-light text-on-dark mb-6">Signalling & Telecom</h2>
            <p className="text-lg text-on-dark/60 font-light mb-12 max-w-md">
              The data from our trackside wagon monitors feeds directly into the larger signalling network. Explore the systems that control the mainline.
            </p>
            <Link to="/products/snt" className="group flex items-center gap-4 border-b border-on-dark/30 pb-2 text-sm uppercase tracking-[0.2em] text-on-dark hover:border-on-dark w-max transition-colors">
              Continue to Signalling <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 md:py-48 bg-ink text-center border-t border-on-dark/10">
        <div className="container-editorial flex flex-col items-center gsap-reveal">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-on-dark mb-10 max-w-4xl uppercase tracking-wide">
            Protect Your Assets.
          </h2>
          <p className="text-lg md:text-xl text-on-dark/60 font-light leading-relaxed max-w-2xl mb-16">
            Ensure the safety and efficiency of your heavy freight operations with LorVen's monitoring systems.
          </p>
          <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border border-on-dark/50 text-sm font-medium uppercase tracking-[0.16em] text-on-dark hover:bg-on-dark hover:text-ink transition-colors duration-300">
            Contact Engineering Team
          </Link>
        </div>
      </section>

    </div>
  );
}
