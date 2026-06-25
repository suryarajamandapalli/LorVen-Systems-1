import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import depot from "@/assets/depot.jpg";
import pcb from "@/assets/pcb-macro.jpg";
import elec from "@/assets/electrical-cabinet.jpg";

export const Route = createFileRoute("/products/snt/ips")({
  head: () => ({
    meta: [
      { title: "IPS — Integrated Power Supply System — LorVen Systems" },
      {
        name: "description",
        content: "Fail-safe integrated power supply system for railway signalling installations.",
      },
      { property: "og:title", content: "IPS — LorVen Systems" },
      { property: "og:url", content: "/products/snt/ips" },
    ],
    links: [{ rel: "canonical", href: "/products/snt/ips" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/01.2 — Product"
      index="P/01.2"
      title="IPS"
      lede="Integrated Power Supply — a microprocessor-controlled power solution that delivers uninterrupted, stable, and redundant power to railway signalling equipment under all electrical conditions."
      hero={elec}
      overview="LorVen IPS integrates switch-mode rectifiers, DC-DC converters, inverter panels, and smart monitoring modules into a single, cohesive power cabinet. It features hot-swappable sub-assemblies to ensure absolute availability for safety-critical interlocking rooms, ensuring continuous operation even under adverse electrical conditions."
      applications={[
        "Station electronic and relay interlocking systems",
        "Block instruments and axle counters power line",
        "Signal lamp lighting circuits supply",
        "Trackside telemetry and telecom power hubs",
      ]}
      specs={[
        { label: "AC Input", value: "Single-phase or three-phase 110V/230V/415V" },
        { label: "DC Outputs", value: "24V, 60V, 110V modular options" },
        { label: "Rectifiers", value: "Hot-swappable switch-mode rectifier units (N+1 redundant)" },
        { label: "Efficiency", value: ">92% at full load" },
        { label: "MTBF", value: ">100,000 hours per module" },
        { label: "Certifications", value: "RDSO SPEC SPN/186/2016 approved" },
      ]}
      downloads={[{ label: "IPS Product Catalogue", file: "PDF · 1.8 MB" }]}
      gallery={[
        { src: pcb, caption: "Power control card assembly" },
        { src: elec, caption: "Modular IPS cabinet unit" },
        { src: depot, caption: "Station cabin installation" },
      ]}
      related={[{ href: "/products/snt/rdpms", number: "P/01.1", title: "RDPMS" }]}
    />
  ),
});
