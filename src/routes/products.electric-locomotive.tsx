import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import locoHero from "@/assets/loco-hero.jpg";
import sim from "@/assets/simulator.jpg";
import depot from "@/assets/depot.jpg";
import engineers from "@/assets/engineers.jpg";

export const Route = createFileRoute("/products/electric-locomotive")({
  head: () => ({
    meta: [
      { title: "Electric Locomotive — LorVen Systems" },
      {
        name: "description",
        content:
          "Advanced training and testing solutions for electric locomotives that improve operational readiness, driver competency, and maintenance reliability.",
      },
      { property: "og:title", content: "Electric Locomotive — LorVen Systems" },
      { property: "og:url", content: "/products/electric-locomotive" },
    ],
    links: [{ rel: "canonical", href: "/products/electric-locomotive" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/02 — Product"
      index="P/02"
      title="Electric Locomotive"
      lede="Advanced training and testing solutions for electric locomotives that improve operational readiness, driver competency, and maintenance reliability."
      hero={locoHero}
      overview="Lorven Systems provides advanced training and testing solutions for electric locomotives that improve operational readiness, driver competency, and maintenance reliability. Our solutions support efficient commissioning, diagnostics, and skill development while helping railway operators achieve safer and more dependable locomotive performance."
      keySystemsLabel="Key Systems"
      keySystems={[
        {
          code: "Driving Simulator",
          name: "Professional Locomotive Simulation Platform",
          description:
            "Professional locomotive simulation platform that recreates realistic railway operations for driver training, emergency response practice, route familiarization, and operational skill enhancement without requiring live rolling stock.",
          href: "/products/electric-locomotive/simulators",
          icons: ["🚆 Driver Training", "🖥 Simulation", "🗺 Route Familiarization"],
        },
        {
          code: "IFT",
          name: "Integrated Functional Tester",
          description:
            "Comprehensive testing platform designed to verify the electrical and electronic functionality of locomotive systems during commissioning, scheduled maintenance, troubleshooting, and overhaul.",
          href: "/products/electric-locomotive/ift",
          icons: ["🔧 Functional Testing", "⚙ Diagnostics", "✅ Commissioning"],
        },
      ]}
      applications={[
        "WAP-5 / WAP-7 / WAG-9 retrofit electronics",
        "Vigilance and event-recorder integration",
        "Driver-machine interface and HMI",
        "Functional testing and acceptance",
        "Driver-training and simulation",
      ]}
      specs={[
        { label: "Supply range", value: "72 V / 110 V DC battery, 25 kV AC line" },
        { label: "Comm bus", value: "MVB, CAN, Ethernet TCN" },
        { label: "Display", value: '10.4" / 12.1" sunlight-readable HMI' },
        { label: "Operating range", value: "−25 °C to +70 °C" },
        { label: "Standards", value: "EN 50155, IEC 61373, RDSO spec" },
      ]}
      gallery={[
        { src: locoHero, caption: "Locomotive cab control console" },
        { src: sim, caption: "Professional driving simulator cab" },
        { src: depot, caption: "Locomotive depot commissioning" },
        { src: engineers, caption: "System functional testing" },
      ]}
      related={[
        {
          href: "/products/electric-locomotive/simulators",
          number: "P/02.1",
          title: "Driving Simulators",
        },
        { href: "/products/electric-locomotive/ift", number: "P/02.2", title: "IFT" },
      ]}
    />
  ),
});
