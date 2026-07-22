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
      { title: "WLI — Wagon Load Indicator — LorVen Systems" },
      { name: "description", content: "Onboard Wagon Load Indicator system for real-time axle weight monitoring and payload cargo diagnostics." },
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

  const capabilities = [
    {
      title: "Bogie-Mounted Sensors",
      desc: "Heavy-duty strain sensors are welded or clamped directly to critical bogie support members for direct load path capture.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 2v20M17 5H7M19 12H5M17 19H7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Wireless Telemetry Hub",
      desc: "Sub-1GHz wireless RF transmitter links cargo weight telemetry directly to loading yard display terminals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M3 12h3l3-9 4 18 3-12h5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "External LED Indicators",
      desc: "IP66 side-mounted display show status parameters directly on the wagon wall during bulk silo loading.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Hermetic Steel Seals",
      desc: "Sensing hardware is housed in laser-welded stainless steel cases to survive gravel strikes and water washdowns.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Low-Power Processor",
      desc: "Smart power-management core keeps sensors in sleep mode, waking up only when cargo weight shift or motion is registered.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Grade Compensation",
      desc: "Internal inclinometers measure vehicle angle to dynamically compensate payload figures for track grade.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const applications = [
    {
      title: "Heavy Haul Freight Wagons",
      desc: "Onboard weight and balance monitoring to prevent overloading and imbalance derailments.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M19 18H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2zM14 6v12M9 6v12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Bulk Cargo Yards & Terminals",
      desc: "Silo loading optimization using real-time side-mounted LED indicators and terminal links.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 13h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Locomotive Cabs",
      desc: "Wireless weight telemetry reception for onboard train operators.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M2 17h20M7 17v2M17 17v2M4 8h16v6H4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "OEM Wagon Integration",
      desc: "— Integration specification to be updated",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Maintenance Depots",
      desc: "— Maintenance applications to be updated",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const interfaces = [
    { name: "Sub-1GHz RF", spec: "Proprietary wireless link, range up to 150m" },
    { name: "Ethernet", spec: "— Interface specification to be updated" },
    { name: "RS-485", spec: "— Interface specification to be updated" },
    { name: "CAN Bus", spec: "— Interface specification to be updated" },
    { name: "Wi-Fi", spec: "— Interface specification to be updated" },
    { name: "4G LTE", spec: "— Interface specification to be updated" },
    { name: "5G uplink", spec: "— Interface specification to be updated" },
    { name: "MQTT", spec: "— Protocol specification to be updated" },
    { name: "Modbus", spec: "— Protocol specification to be updated" }
  ];

  const compliance = [
    { title: "EN 50155", std: "Rolling Stock Electronics", desc: "Compliance standard for electronic equipment used on rolling stock applications." },
    { title: "AAR Cargo Rules", std: "Loading Compliance", desc: "Conforms with Association of American Railroads specifications for cargo weight distribution." },
    { title: "IP68 Sensor Sealing", std: "Ingress Protection", desc: "Hermetic sealing protecting the bogie strain sensors from continuous immersion and debris strikes." },
    { title: "IP66 Display Sealing", std: "Ingress Protection", desc: "Weatherproof seal protection for side-mounted display box configurations." },
    { title: "CRIS Integration", std: "— To be updated", desc: "— Compliance information to be updated" },
    { title: "IEC Standards", std: "— To be updated", desc: "— Compliance standard to be updated" },
    { title: "Shock & Vibration", std: "— To be updated", desc: "— Structural testing parameters to be updated" },
    { title: "Cyber Security", std: "— To be updated", desc: "— Security specifications to be updated" }
  ];

  const downloads = [
    { label: "WLI Onboard System Specs", size: "1.6 MB", type: "Datasheet", disabled: false },
    { label: "WLI Bogie Installation Guide", size: "3.2 MB", type: "Manual", disabled: false },
    { label: "WLI Cargo Yard Integration Info", size: "1.4 MB", type: "Brochure", disabled: false },
    { label: "WLI Chassis 2D/3D CAD Layout", size: "—", type: "— CAD drawing to be updated", disabled: true },
    { label: "Embedded Firmware Update Utility", size: "—", type: "— Firmware tool to be updated", disabled: true }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Premium Hero Banner */}
      <section className="relative min-h-[50vh] bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={coachBuild}
            alt="Wagon Load Indicator (WLI)"
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
              <span className="eyebrow !text-steel tracking-[0.2em] font-semibold text-xs uppercase block">Onboard Telemetry</span>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extralight uppercase tracking-tight leading-none text-white max-w-3xl">
                Wagon Load Indicator (WLI)
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l-2 border-steel/40 pl-6">
              Continuous onboard axle load telemetry and cargo balance tracking.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-3xl">
              {[
                { title: "Sub-1GHz RF", desc: "Wireless Link" },
                { title: "IP68 Hermetic", desc: "Bogie Sensors" },
                { title: "EN 50155", desc: "Railway Standard" },
                { title: "±0.5% Accuracy", desc: "Weight Telemetry" }
              ].map((badge, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded flex flex-col justify-between">
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">{badge.title}</span>
                  <span className="text-sm font-medium text-white/90 mt-1">{badge.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-20 md:py-28 border-t border-rule/30">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6 gsap-reveal space-y-6">
            <span className="eyebrow block">OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Continuous Onboard Axle Load Telemetry & Cargo Balance Tracking
            </h2>
            <div className="space-y-6 border-t border-rule/20 pt-6">
              <p className="text-base md:text-lg text-black leading-relaxed font-light">
                The Wagon Load Indicator (WLI) is an onboard payload measurement system that utilizes bogie-mounted strain sensors. Engineered for heavy haul freight wagons, it monitors cargo weight and balance distribution in real time, preventing overloading damage and cargo imbalance derailments.
              </p>
              <p className="text-base text-ink-muted leading-relaxed font-light">
                The system broadcasts loading data using sub-1GHz wireless links, sending cargo weights directly to yard screens and locomotive cabs without connecting cables between wagon frames. High-visibility external LED displays show cargo level status during bulk loading runs.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img src={coachBuild} alt="WLI Wagon System" className="h-full w-full object-cover select-none pointer-events-none" />
              {/* Technical floating labels */}
              <div className="absolute top-4 left-4 bg-ink/80 text-white text-[10px] uppercase font-mono tracking-widest px-3 py-1.5 rounded backdrop-blur">
                Bogie Sensors: IP68 Hermetic
              </div>
              <div className="absolute bottom-4 right-4 bg-steel/90 text-white text-[10px] uppercase font-mono tracking-widest px-3 py-1.5 rounded backdrop-blur">
                Display Box: IP66 Sealing
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
              Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-8 border border-rule/15 rounded shadow-sm hover:shadow-md transition-all duration-300 gsap-reveal flex flex-col justify-between h-full group hover:border-steel">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded bg-bg text-ink border border-rule/20 flex items-center justify-center group-hover:bg-steel group-hover:text-white transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-ink uppercase leading-snug">{cap.title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed font-light">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Applications */}
      <section className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">DEPLOYMENTS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Target Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-white p-6 border border-rule/15 rounded shadow-sm gsap-reveal space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-steel">
                    {app.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-ink uppercase tracking-wide">{app.title}</h3>
                    <p className="text-xs text-ink-muted font-light leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. System Architecture Section */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">ARCHITECTURE</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              System Architecture & Flow
            </h2>
          </div>

          {/* Architecture Visual Layout */}
          <div className="grid grid-cols-12 gap-8 items-center bg-white border border-rule/20 p-8 md:p-12 rounded">
            <div className="col-span-12 lg:col-span-7 space-y-8 gsap-reveal">
              <h3 className="text-xl font-semibold text-ink uppercase">Onboard to Wayside Data Pipeline</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                The WLI architecture records physical strain loads under rolling stock assemblies and relays telemetry signals directly to terminal yards and locomotive display cabins.
              </p>
              
              {/* Architecture Steps */}
              <div className="space-y-6">
                {[
                  { title: "Bogie-Mounted Sensors", desc: "Calibrated strain sensors weld/clamp directly to key bogie structural members." },
                  { title: "Onboard Telemetry Hub", desc: "Onboard transmitter box samples strain data and converts it to payload readings." },
                  { title: "Sub-1GHz Wireless Transmitter", desc: "Broadcasters relay load data packages wirelessly up to 150 meters." },
                  { title: "Locomotive Cab & Yard Displays", desc: "Yard display terminals and locomotive cabin displays read payloads without interconnecting cables." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-steel/10 text-steel font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-ink uppercase">{step.title}</h4>
                      <p className="text-xs text-ink-muted font-light mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Schematic Box */}
            <div className="col-span-12 lg:col-span-5 gsap-reveal">
              <div className="bg-bg p-8 border border-rule/15 rounded flex flex-col gap-6 justify-center items-center relative min-h-[360px]">
                {/* Block 1 */}
                <div className="bg-white px-4 py-3 border border-rule rounded shadow-sm w-full text-center">
                  <span className="text-[10px] font-mono text-ink-muted uppercase block">SENSORS</span>
                  <span className="text-xs font-bold text-ink uppercase">Bogie Strain Sensors</span>
                </div>
                {/* Connector Arrow */}
                <div className="text-steel font-bold">↓</div>
                {/* Block 2 */}
                <div className="bg-white px-4 py-3 border border-steel/40 rounded shadow-sm w-full text-center">
                  <span className="text-[10px] font-mono text-steel uppercase block">TRANSMITTER</span>
                  <span className="text-xs font-bold text-ink uppercase">Wireless Telemetry Hub</span>
                </div>
                {/* Connector Arrow */}
                <div className="text-steel font-bold">↓</div>
                {/* Block 3 */}
                <div className="bg-white px-4 py-3 border border-rule rounded shadow-sm w-full text-center">
                  <span className="text-[10px] font-mono text-ink-muted uppercase block">RF LINK</span>
                  <span className="text-xs font-bold text-ink uppercase">Sub-1GHz Wireless Protocol</span>
                </div>
                {/* Connector Arrow */}
                <div className="text-steel font-bold">↓</div>
                {/* Block 4 */}
                <div className="bg-white px-4 py-3 border border-rule rounded shadow-sm w-full text-center">
                  <span className="text-[10px] font-mono text-ink-muted uppercase block">RECEIVERS</span>
                  <span className="text-xs font-bold text-ink uppercase">Yard Displays & Cabin Terminals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technical Specifications */}
      <section className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">SPECIFICATIONS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Technical Specifications
            </h2>
          </div>

          <div className="border border-rule/20 rounded overflow-hidden shadow-sm gsap-reveal">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-bg border-b border-rule text-ink uppercase font-mono text-[10px] tracking-wider">
                  <th className="p-4 md:p-6 font-bold w-1/3">Parameter</th>
                  <th className="p-4 md:p-6 font-bold w-2/3">Specification Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule/10 text-xs md:text-sm text-ink-muted">
                {[
                  { param: "Weight Accuracy", val: "±0.5% of total wagon cargo load capacity" },
                  { param: "Sensing Array", val: "4 calibrated strain-gauge sensors per bogie assembly" },
                  { param: "Wireless Protocol", val: "Sub-1GHz proprietary RF link, transmission range up to 150m" },
                  { param: "Battery Life", val: "Up to 5 years typical operating life under standard sleep cycles" },
                  { param: "Operating Temperature", val: "-20°C to +70°C ambient operating range" },
                  { param: "Standards Compliance", val: "AAR cargo loading rules, EN 50155 rolling stock electronics" },
                  { param: "Enclosure Sealing", val: "IP68 hermetic rating for bogie sensors, IP66 for side display box" },
                  { param: "Power Supply", val: "— Product specification to be updated" },
                  { param: "Operating Voltage", val: "— Product specification to be updated" },
                  { param: "Housing", val: "— Product specification to be updated" },
                  { param: "Dimensions", val: "— Product specification to be updated" },
                  { param: "Weight", val: "— Product specification to be updated" }
                ].map((spec, idx) => (
                  <tr key={idx} className="hover:bg-bg/25">
                    <td className="p-4 md:p-6 font-bold text-ink uppercase tracking-wide text-xs">{spec.param}</td>
                    <td className="p-4 md:p-6 font-light leading-relaxed">{spec.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Communication & Interfaces */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">COMMUNICATION</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Supported Interfaces
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interfaces.map((iface, idx) => (
              <div key={idx} className="bg-white p-4 border border-rule/15 rounded shadow-sm text-center flex flex-col justify-between min-h-[100px] gsap-reveal">
                <span className="text-xs font-bold text-ink uppercase tracking-wider block">{iface.name}</span>
                <span className="text-[10px] text-ink-muted font-light mt-2 block leading-tight">{iface.spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Standards & Compliance */}
      <section className="bg-bg border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">STANDARDS</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Compliance & Safety Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((std, idx) => (
              <div key={idx} className="bg-white p-6 border border-rule/15 rounded shadow-sm flex flex-col justify-between gsap-reveal">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-rule/10 pb-4">
                    <h3 className="text-xs font-bold text-ink uppercase tracking-wider">{std.title}</h3>
                    <span className="text-[10px] bg-bg px-2.5 py-1 rounded text-steel font-mono font-semibold uppercase">{std.std}</span>
                  </div>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Downloads Section */}
      <section className="bg-section border-t border-rule py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block">LIBRARY</span>
            <h2 className="text-3xl font-light leading-snug text-ink uppercase">
              Product Downloads & CAD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((dl, idx) => (
              <div key={idx} className={`bg-white p-6 border border-rule/15 rounded flex items-center justify-between shadow-sm gsap-reveal ${dl.disabled ? 'opacity-55' : 'hover:border-steel group'}`}>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-ink uppercase tracking-wide leading-snug">{dl.label}</h3>
                  <div className="flex items-center gap-3 text-xs text-ink-muted">
                    <span className="font-mono">{dl.size}</span>
                    <span className="opacity-30">|</span>
                    <span className="font-light">{dl.type}</span>
                  </div>
                </div>
                <div>
                  {dl.disabled ? (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted/50 border border-rule bg-bg px-2.5 py-1 rounded">Locked</span>
                  ) : (
                    <a
                      href="#"
                      className="w-8 h-8 rounded border border-rule flex items-center justify-center text-ink group-hover:bg-steel group-hover:text-white group-hover:border-steel transition-colors duration-300"
                    >
                      ↓
                    </a>
                  )}
                </div>
              </div>
            ))}
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
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light pt-4 max-w-3xl mx-auto">
              Consult with our system design engineers to customize mounting brackets, configure output telemetry formats, or integrate the WLI with your existing rolling stock networks.
            </p>
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
