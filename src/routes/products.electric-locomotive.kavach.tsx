import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import simulator from "@/assets/simulator.jpg";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/products/electric-locomotive/kavach")({
  head: () => ({
    meta: [
      { title: "Kavach Training Simulators — LorVen Systems" },
      { name: "description", content: "High-fidelity HIL simulator for train pilot training on the Indian Railways Kavach Automatic Train Protection (ATP) system." },
    ],
  }),
  component: KavachRoute,
});

function KavachRoute() {
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

  const features = [
    { title: "Realistic Kavach DMI Interface", desc: "Emulates the exact driver machine interface (DMI) layout, displaying speed limits, target speeds, and signal status." },
    { title: "Hardware-in-the-Loop Integration", desc: "Integrates physical brake valves, master controllers, and warning alarms to match cabin responses." },
    { title: "Brake Interface Unit (BIU) Emulation", desc: "Replicates automatic brake application scenarios, including service and emergency braking." },
    { title: "Interactive Scenario Generator", desc: "Allows instructors to inject emergency situations, SOS signals, red-signal passing, and temporary speed limits." },
    { title: "Automated Evaluation & Scoring", desc: "Logs driver reaction times, brake response times, and compliance with Kavach operating rules." },
    { title: "Desktop & Full-Cab Form Factors", desc: "Available in compact desktop versions for classrooms or full-cab replicas for deep immersion." },
    { title: "RFID Reader Simulation", desc: "Simulates wayside RFID tag updates as the virtual locomotive passes over trackside checkpoints." },
    { title: "Instructor Operator Station (IOS)", desc: "Provides real-time train tracking, parameter monitoring, and instant scenario controls for instructors." }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Breadcrumb Banner */}
      <section className="relative h-[40vh] min-h-[340px] max-h-[420px] bg-ink overflow-hidden flex flex-col justify-end pb-12 pt-[56px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={simulator}
            alt="Kavach Training Simulator"
            className="w-full h-full object-cover opacity-45 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-15" />
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        {/* Content */}
        <div className="container-editorial relative z-30 w-full text-white">
          <div className="max-w-4xl space-y-4">
            {/* Breadcrumbs */}
            <nav className="text-sm font-normal text-white/80">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li><Link to="/products/electric-locomotive/simulators" className="hover:text-white transition-colors">Training Simulators</Link></li>
                <li className="text-white/40 font-light">&gt;</li>
                <li className="text-white font-semibold">Kavach Simulators</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-light uppercase tracking-tight leading-tight max-w-3xl">
              Kavach Training Simulators
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-20 md:py-28 border-t border-rule/30">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 gsap-reveal space-y-6">
            <span className="eyebrow block">OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Immersive Training for India's <br />Automatic Train Protection System
            </h2>
            <div className="space-y-4 border-t border-rule/20 pt-6">
              <p className="text-base md:text-lg text-black leading-relaxed font-light">
                Kavach is the nationally mandated Automatic Train Protection (ATP) system designed to prevent train collisions on Indian Railways. Replicating this system in an active locomotive requires specialized pilot training. The LorVen Kavach Training Simulator provides an immersive, HIL-integrated environment where pilots learn to navigate DMI prompts, respond to automated braking sequences, and manage emergency overrides safely.
              </p>
              <p className="text-base text-black leading-relaxed font-light">
                Equipped with real-time feedback loops and customizable weather, track, and routing scenarios, our Kavach trainers guarantee that pilots achieve absolute operational confidence before taking the controls of an active passenger or freight train.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/10 shadow-sm">
              <img src={simulator} alt="Kavach pilot training cabin simulator setup" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">FEATURES</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 border border-rule/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-5 h-5 flex items-center justify-center border border-rule/40 text-ink text-xs font-semibold flex-shrink-0">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-ink uppercase leading-snug">{feat.title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LorVen */}
      <section className="bg-ink text-on-dark py-24 md:py-32 border-t border-ink relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Traction Training Depot" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">WHY LORVEN</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Why Choose LorVen's Kavach Training Simulators
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light pt-4 max-w-3xl mx-auto">
              LorVen's Kavach Training Simulators are engineered to match real-world railway standards. By using robust mechanical components and low-latency feedback engines, our simulators offer an authentic driving experience. Highly configurable instructor tools enable targeted exercises, supporting safer rail networks and high operational proficiency.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md"
              >
                Contact Our Engineering Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
