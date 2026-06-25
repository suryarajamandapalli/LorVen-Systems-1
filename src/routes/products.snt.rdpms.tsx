import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import depot from "@/assets/depot.jpg";
import pcb from "@/assets/pcb-macro.jpg";
import elec from "@/assets/electrical-cabinet.jpg";

export const Route = createFileRoute("/products/snt/rdpms")({
  head: () => ({
    meta: [
      { title: "RDPMS — Remote Diagnostic and Predictive Maintenance — LorVen Systems" },
      {
        name: "description",
        content: "Onboard and trackside diagnostic and predictive-maintenance system for mainline railway networks.",
      },
      { property: "og:title", content: "RDPMS — LorVen Systems" },
      { property: "og:url", content: "/products/snt/rdpms" },
    ],
    links: [{ rel: "canonical", href: "/products/snt/rdpms" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/01.1 — Product"
      index="P/01.1"
      title="RDPMS"
      lede="Remote Diagnostic & Predictive Maintenance System — an IoT-powered platform that continuously analyzes signalling equipment health and generates predictive maintenance alerts using AI-driven analytics."
      hero={depot}
      overview="RDPMS continuously monitors interlocking status, signalling relays, point machine cycles, and power levels, sending telemetry data to central operations dashboards. It detects anomalies in real time and predicts failures before they occur, reducing line disruptions and maintenance costs."
      applications={[
        "Station relay room condition monitoring",
        "Point machine current and timing diagnostics",
        "Track circuit voltage telemetry",
        "Signalling battery bank health tracking",
        "Depot fleet operations diagnostic hubs",
      ]}
      specs={[
        { label: "Data sampling", value: "Real-time state and analog telemetry" },
        { label: "Input Channels", value: "Up to 256 digital, 32 analog inputs" },
        { label: "Communication", value: "Ethernet, RS-485, 4G/LTE dual-SIM, Wi-Fi" },
        { label: "Operating Temp", value: "−20 °C to +70 °C, fanless operation" },
        { label: "Protocol Support", value: "Modbus, TCP/IP, MQTT, custom railway protocols" },
        { label: "Diagnostic Logs", value: "Non-volatile local storage for 30 days" },
      ]}
      downloads={[{ label: "RDPMS Telemetry Datasheet", file: "PDF · 2.5 MB" }]}
      gallery={[
        { src: pcb, caption: "Telemetry controller PCB" },
        { src: elec, caption: "Onboard gateway installation" },
        { src: depot, caption: "Mainline monitoring installation" },
      ]}
      related={[{ href: "/products/snt/ips", number: "P/01.2", title: "IPS" }]}
    />
  ),
});
