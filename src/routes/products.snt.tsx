import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import sntHero from "@/assets/snt-hero.jpg";
import pcb from "@/assets/pcb-macro.jpg";
import elec from "@/assets/electrical-cabinet.jpg";
import smt from "@/assets/smt-line.jpg";

export const Route = createFileRoute("/products/snt")({
  head: () => ({
    meta: [
      { title: "Signalling & Telecom (SNT) — LorVen Systems" },
      {
        name: "description",
        content:
          "Advanced signalling & telecom solutions for predictive maintenance, real-time diagnostics, and reliable power infrastructure for critical railway signalling assets.",
      },
      { property: "og:title", content: "Signalling & Telecom (SNT) — LorVen Systems" },
      {
        property: "og:description",
        content: "Advanced railway signalling and telecommunication systems engineered for maximum safety and reliability.",
      },
      { property: "og:url", content: "/products/snt" },
    ],
    links: [{ rel: "canonical", href: "/products/snt" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/01 — Product"
      index="P/01"
      title="Signalling & Telecom (SNT)"
      lede="Modern railway operations demand intelligent signalling systems that ensure maximum safety, reliability, and uninterrupted train movement."
      hero={sntHero}
      overview="Lorven Systems develops advanced Signalling & Telecom solutions that enable predictive maintenance, real-time diagnostics, and highly reliable power infrastructure for critical railway signalling assets, helping operators reduce downtime while improving operational efficiency."
      keySystemsLabel="Key Systems"
      keySystems={[
        {
          code: "RDPMS",
          name: "Remote Diagnostic & Predictive Maintenance System",
          description:
            "IoT-powered monitoring platform that continuously analyzes signalling equipment health, detects anomalies in real time, and generates predictive maintenance alerts using AI-driven analytics before failures occur.",
          href: "/products/snt/rdpms",
          icons: ["📡 Real-Time Monitoring", "🧠 Predictive Analytics", "📈 AI Diagnostics"],
        },
        {
          code: "IPS",
          name: "Integrated Power Supply",
          description:
            "Microprocessor-controlled power supply solution that delivers uninterrupted, stable, and redundant power to railway signalling equipment, ensuring continuous operation even under adverse electrical conditions.",
          href: "/products/snt/ips",
          icons: ["⚡ Intelligent Power", "🔒 Redundant Systems", "🖥 Remote Monitoring"],
        },
      ]}
      applications={[
        "Station interlocking and signal control",
        "Track circuit monitoring and diagnostics",
        "Uninterrupted power supplies for signal cabins",
        "Mainline remote telemetry systems",
        "Predictive maintenance for relay rooms",
      ]}
      specs={[
        { label: "Compliance", value: "Fully compliant with RDSO standards" },
        { label: "IP Rating", value: "IP65 for outdoor trackside enclosures" },
        { label: "Interlocking Interface", value: "Relay & Electronic Interlocking compatible" },
        { label: "Power Modular", value: "Hot-swappable switch-mode rectifier units" },
        { label: "Telemetry", value: "Real-time GSM-R / LTE / Wi-Fi reporting" },
        { label: "Design Class", value: "Safety Integrity Level (SIL-4) ready" },
      ]}
      downloads={[
        { label: "SNT Signalling Brochure", file: "PDF · 2.1 MB" },
        { label: "RDSO approval certificate", file: "PDF · 750 KB" },
      ]}
      gallery={[
        { src: sntHero, caption: "Railway Electronic Interlocking Room" },
        { src: pcb, caption: "Signalling controller PCB" },
        { src: elec, caption: "Integrated cabin power cabinet" },
        { src: smt, caption: "SMT assembly line" },
      ]}
      related={[
        { href: "/products/snt/rdpms", number: "P/01.1", title: "RDPMS" },
        { href: "/products/snt/ips", number: "P/01.2", title: "IPS" },
      ]}
    />
  ),
});
