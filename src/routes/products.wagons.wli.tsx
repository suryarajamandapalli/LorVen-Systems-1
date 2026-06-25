import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import wagons from "@/assets/wagons.jpg";
import pcb from "@/assets/pcb-macro.jpg";

export const Route = createFileRoute("/products/wagons/wli")({
  head: () => ({
    meta: [
      { title: "WLI — Wagon Load Indicator — LorVen Systems" },
      {
        name: "description",
        content: "Onboard axle weight measurement and payload tracking indicator for freight wagons.",
      },
      { property: "og:title", content: "WLI — LorVen Systems" },
      { property: "og:url", content: "/products/wagons/wli" },
    ],
    links: [{ rel: "canonical", href: "/products/wagons/wli" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/04.1 — Product"
      index="P/04.1"
      title="WLI"
      lede="Wagon Load Indicator — an intelligent load monitoring system that accurately measures wagon loading conditions to prevent overloading, improve cargo distribution, and ensure compliance with railway safety standards."
      hero={wagons}
      overview="The Lorven WLI system uses rugged, hermetically sealed strain-gauge sensors installed on the wagon bogies and suspension. It provides train operators and loading yard systems with precise axle weight data, preventing overloading, improving cargo distribution, and ensuring full compliance with railway safety standards."
      applications={[
        "Freight wagon payload loading optimization",
        "Axle-load limit enforcement for track safety",
        "Imbalanced cargo load detection",
        "Automated yard billing integration",
      ]}
      specs={[
        { label: "Accuracy", value: "±0.5% of full-scale load" },
        { label: "Sensor type", value: "High-stability strain gauge (hermetic steel)" },
        { label: "Display", value: "High-contrast LED on wagon body, IP66 certified" },
        { label: "Wireless RF", value: "Sub-1GHz yard-telemetry, GSM-R optional" },
        { label: "Power supply", value: "Hardened lithium battery with 5-year lifetime" },
        { label: "Standards", value: "Meets EN 50155 and AAR loading norms" },
      ]}
      gallery={[
        { src: wagons, caption: "WLI-equipped freight rake" },
        { src: pcb, caption: "Sensor signal conditioning card" },
      ]}
      related={[{ href: "/products/wagons/ahabd", number: "P/04.2", title: "AHABD" }]}
    />
  ),
});
