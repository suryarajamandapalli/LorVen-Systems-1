import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import coachHero from "@/assets/coach-build.jpg";
import smtLine from "@/assets/smt-line.jpg";
import depot from "@/assets/depot.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import wagons from "@/assets/wagons.jpg"; // For next product thumb

export const Route = createFileRoute("/products/coaches")({
  head: () => ({
    meta: [
      { title: "Passenger Coaches — LorVen Systems" },
      { name: "description", content: "Human-centric engineering for passenger coaches. HVAC controllers, passenger information systems, and intelligent lighting." },
    ],
  }),
  component: CoachesProductPage,
});

function CoachesProductPage() {
  useGSAP(() => {
    gsap.to(".coach-parallax", {
      scrollTrigger: { trigger: ".coach-hero", start: "top top", end: "bottom top", scrub: true },
      yPercent: 15,
      ease: "none",
    });

    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 90%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1.2, ease: "power2.out",
        }
      );
    });
    
    setTimeout(() => ScrollTrigger.refresh(), 1000);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark font-light">
      
      {/* 1. HERO & CHAPTER HEADER (Airy, Minimal, Full Width) */}
      <section className="coach-hero relative h-[90svh] w-full overflow-hidden flex flex-col justify-end pb-24 border-b border-rule">
        <div className="absolute inset-0 z-0 bg-surface">
          <img src={coachHero} alt="Passenger Coach Engineering" className="coach-parallax h-[115%] w-full object-cover -top-[5%] relative opacity-80 mix-blend-multiply grayscale-[20%]" />
        </div>
        
        <div className="container-editorial relative z-10 flex flex-col items-center text-center">
          
          <div className="mb-12 pointer-events-auto">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-2 block">03</span>
            <span className="text-[10px] text-ink-muted uppercase tracking-[0.2em] border-b border-rule pb-2 block w-max mx-auto">
              PRODUCT / PASSENGER COACHES
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,7vw,6rem)] font-light leading-[0.95] tracking-tight text-ink mb-8 max-w-4xl coach-parallax">
            The invisible architecture of comfort.
          </h1>
        </div>
      </section>

      {/* 2. PHILOSOPHY (Clean Centered Text) */}
      <section className="py-24 md:py-32 border-b border-rule bg-bg">
        <div className="container-editorial flex justify-center text-center gsap-reveal">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-ink font-light leading-relaxed mb-6">
              Unlike a locomotive, a passenger coach is an environment for human beings. The engineering must be invisible, silent, and flawlessly consistent. 
            </p>
            <p className="text-base text-ink-muted font-light leading-relaxed">
              LorVen engineers the subsystems that make modern train travel possible. From the microprocessors regulating the HVAC compressors to the networked displays providing real-time journey data, we build the nervous system of the passenger experience.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SYSTEMS (Symmetrical 50/50 blocks) */}
      <section className="bg-bg">
        
        {/* Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="h-[50vh] lg:h-auto border-r border-rule bg-surface overflow-hidden">
            <img src={depot} alt="HVAC Systems" className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="p-16 md:p-24 flex flex-col justify-center gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6 block">01 / Climate Control</span>
            <h3 className="text-4xl font-light text-ink mb-6">HVAC Microprocessors</h3>
            <p className="text-lg text-ink-muted leading-relaxed">
              Managing heavy electrical loads seamlessly. Our RMPU (Roof Mounted Package Unit) controllers handle temperature regulation, compressor sequencing, and fault diagnosis without drawing attention to themselves.
            </p>
          </div>
        </div>

        {/* Block 2 (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="p-16 md:p-24 flex flex-col justify-center order-2 lg:order-1 gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6 block">02 / Passenger Information</span>
            <h3 className="text-4xl font-light text-ink mb-6">PIS & Display Networks</h3>
            <p className="text-lg text-ink-muted leading-relaxed">
              High-visibility LED and LCD matrix displays driven by ruggedized ethernet backbones. Delivering GPS-synchronized journey data, automated announcements, and critical emergency messaging.
            </p>
          </div>
          <div className="h-[50vh] lg:h-auto border-l border-rule bg-surface overflow-hidden order-1 lg:order-2">
            <img src={factoryHall} alt="Displays" className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="h-[50vh] lg:h-auto border-r border-rule bg-surface overflow-hidden">
            <img src={smtLine} alt="Lighting" className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="p-16 md:p-24 flex flex-col justify-center gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6 block">03 / Ambiance</span>
            <h3 className="text-4xl font-light text-ink mb-6">Intelligent Lighting</h3>
            <p className="text-lg text-ink-muted leading-relaxed">
              Energy-efficient LED drivers that adapt to ambient conditions. Providing flicker-free illumination that meets strict railway photobiological safety standards while significantly reducing power draw.
            </p>
          </div>
        </div>

      </section>

      {/* 4. APPLICATIONS (Elegant Large Cards) */}
      <section className="py-32 md:py-48 bg-section border-b border-rule">
        <div className="container-editorial">
          <span className="eyebrow block mb-16 text-center gsap-reveal">Coach Platforms</span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg border border-rule p-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 gsap-reveal">
              <h4 className="text-2xl font-light text-ink mb-4">LHB Coaches</h4>
              <p className="text-base text-ink-muted leading-relaxed">
                We supply switchboard cabinets and climate controllers for the Linke Hofmann Busch platform, the standard-bearer for high-speed intercity travel on the Indian Railways.
              </p>
            </div>
            
            <div className="bg-bg border border-rule p-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 gsap-reveal">
              <h4 className="text-2xl font-light text-ink mb-4">EMU / MEMU Trains</h4>
              <p className="text-base text-ink-muted leading-relaxed">
                High-density commuter networks rely on our robust passenger announcement systems and door-closing warning modules designed for millions of cycles.
              </p>
            </div>
            
            <div className="bg-bg border border-rule p-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 gsap-reveal">
              <h4 className="text-2xl font-light text-ink mb-4">Vande Bharat Express</h4>
              <p className="text-base text-ink-muted leading-relaxed">
                Contributing to India's premier semi-high-speed trainsets with advanced networked electronics and compact, high-efficiency power distribution.
              </p>
            </div>

            <div className="bg-bg border border-rule p-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 gsap-reveal flex flex-col justify-center items-center text-center">
              <span className="text-ink font-light text-lg mb-2">Custom Integration</span>
              <p className="text-sm text-ink-muted uppercase tracking-widest">Available Upon Request</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY & LIFECYCLE (Timeline layout) */}
      <section className="py-32 md:py-48 bg-bg border-b border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 gsap-reveal">
              <h2 className="text-3xl font-light text-ink mb-6">Designed to Outlast.</h2>
              <p className="text-base text-ink-muted leading-relaxed">
                Rolling stock represents a massive capital investment. The electronics inside must remain viable, maintainable, and safe for decades.
              </p>
            </div>
            
            <div className="md:col-span-7 md:col-start-6 relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-rule hidden md:block"></div>
              
              <div className="space-y-16">
                <div className="relative pl-8 md:pl-12 gsap-reveal">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-ink bg-bg hidden md:block"></div>
                  <h4 className="text-xl font-medium text-ink mb-3">Component Selection</h4>
                  <p className="text-base text-ink-muted leading-relaxed">
                    We select automotive or military-grade silicon capable of withstanding severe thermal cycling without solder fatigue.
                  </p>
                </div>
                
                <div className="relative pl-8 md:pl-12 gsap-reveal">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-rule bg-bg hidden md:block"></div>
                  <h4 className="text-xl font-medium text-ink mb-3">Conformal Coating</h4>
                  <p className="text-base text-ink-muted leading-relaxed">
                    Every PCB is coated to protect against the high humidity, condensation, and metallic dust prevalent in railway environments.
                  </p>
                </div>
                
                <div className="relative pl-8 md:pl-12 gsap-reveal">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-rule bg-bg hidden md:block"></div>
                  <h4 className="text-xl font-medium text-ink mb-3">Obsolescence Management</h4>
                  <p className="text-base text-ink-muted leading-relaxed">
                    We guarantee form-fit-function replacements. If a component goes End-of-Life, we redesign the board to ensure the operator never faces a grounded coach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="py-32 bg-ink text-on-dark border-b border-ink">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal">
            <span className="eyebrow !text-on-dark/50 block mb-8">Related Domain</span>
            <h2 className="text-4xl font-light text-on-dark mb-6">Freight Wagons</h2>
            <p className="text-lg text-on-dark/60 font-light mb-12 max-w-md">
              From passenger comfort to heavy industrial freight. Discover our condition monitoring and telemetry systems for freight wagons.
            </p>
            <Link to="/products/wagons" className="group flex items-center gap-4 border-b border-on-dark/30 pb-2 text-sm uppercase tracking-[0.2em] text-on-dark hover:border-on-dark w-max transition-colors">
              Continue to Wagons <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh] bg-[#111]">
            <img src={wagons} alt="Wagons" className="w-full h-full object-cover mix-blend-luminosity opacity-40 hover:opacity-80 hover:scale-105 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 md:py-48 bg-bg text-center">
        <div className="container-editorial flex flex-col items-center gsap-reveal">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-ink mb-10 max-w-4xl">
            Engineering the Passenger Experience.
          </h2>
          <p className="text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-2xl mb-16">
            Ensure your rolling stock delivers absolute reliability for every journey.
          </p>
          <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border border-ink text-sm font-medium uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-on-dark transition-colors duration-300">
            Contact Engineering Team
          </Link>
        </div>
      </section>

    </div>
  );
}
