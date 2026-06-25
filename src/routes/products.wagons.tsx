import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import wagonsHero from "@/assets/wagons-hero.jpg";
import wagons from "@/assets/wagons.jpg";
import depot from "@/assets/depot.jpg";
import elec from "@/assets/electrical-cabinet.jpg";

export const Route = createFileRoute("/products/wagons")({
  head: () => ({
    meta: [
      { title: "Coaches & Wagons — LorVen Systems" },
      {
        name: "description",
        content:
          "Intelligent monitoring solutions for coaches and freight wagons that improve railway safety, maximize asset availability, and reduce maintenance costs.",
      },
      { property: "og:title", content: "Coaches & Wagons — LorVen Systems" },
      { property: "og:url", content: "/products/wagons" },
    ],
    links: [{ rel: "canonical", href: "/products/wagons" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/04 — Product"
      index="P/04"
      title="Coaches & Wagons"
      lede="Intelligent monitoring solutions for coaches and freight wagons that improve railway safety, maximize asset availability, and reduce maintenance costs."
      hero={wagonsHero}
      overview="Lorven Systems develops intelligent monitoring solutions for coaches and freight wagons that improve railway safety, maximize asset availability, and reduce maintenance costs. These systems continuously monitor wagon loading conditions and axle health, helping prevent failures before they impact railway operations."
      keySystemsLabel="Key Systems"
      keySystems={[
        {
          code: "WLI",
          name: "Wagon Load Indicator",
          description:
            "Intelligent load monitoring system that accurately measures wagon loading conditions to prevent overloading, improve cargo distribution, and ensure compliance with railway safety standards.",
          href: "/products/wagons/wli",
          icons: ["🚛 Load Monitoring", "📊 Cargo Distribution", "🛡 Safety Compliance"],
        },
        {
          code: "AHABD",
          name: "Acoustic Hot Axle Box Detector",
          description:
            "Wayside condition monitoring system that continuously detects abnormal axle bearing temperatures and acoustic signatures, providing early warning of bearing failures to reduce derailment risks and improve fleet reliability.",
          href: "/products/wagons/ahabd",
          icons: ["🌡 Bearing Health", "🔔 Predictive Alerts", "🔊 Acoustic Detection"],
        },
      ]}
      applications={[
        "Freight wagon bearing health monitoring",
        "Onboard wagon payload and axle-load indicators",
        "Wagon tracking and telemetry solutions",
        "Trackside hot box warning systems",
      ]}
      specs={[
        { label: "Data Telemetry", value: "Radio frequency, GPS, GSM networks" },
        { label: "Power Source", value: "Onboard solar, axle-generator, or battery options" },
        { label: "Diagnostics", value: "Real-time acoustic bearing analysis" },
        { label: "Standards", value: "AAR and RDSO freight specifications compliant" },
        { label: "Mechanical Enclosure", value: "IP68 dust-proof and water-immersion proof" },
      ]}
      gallery={[
        { src: wagonsHero, caption: "Heavy haul freight wagons at golden hour" },
        { src: wagons, caption: "Freight wagons in transit" },
        { src: depot, caption: "Trackside detector installation" },
        { src: elec, caption: "Telemetry control unit assembly" },
      ]}
      related={[
        { href: "/products/wagons/wli", number: "P/04.1", title: "WLI" },
        { href: "/products/wagons/ahabd", number: "P/04.2", title: "AHABD" },
      ]}
    />
  ),
});
