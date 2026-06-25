import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import depot from "@/assets/depot.jpg";
import pcb from "@/assets/pcb-macro.jpg";

export const Route = createFileRoute("/products/wagons/ahabd")({
  head: () => ({
    meta: [
      { title: "AHABD — Acoustic Hot Axle Box Detector — LorVen Systems" },
      {
        name: "description",
        content: "Trackside acoustic bearing fault detector to identify anomalies in passing wagon wheel bearings.",
      },
      { property: "og:title", content: "AHABD — LorVen Systems" },
      { property: "og:url", content: "/products/wagons/ahabd" },
    ],
    links: [{ rel: "canonical", href: "/products/wagons/ahabd" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/04.2 — Product"
      index="P/04.2"
      title="AHABD"
      lede="Acoustic Hot Axle Box Detector — a wayside condition monitoring system that continuously detects abnormal axle bearing temperatures and acoustic signatures, providing early warning of bearing failures."
      hero={depot}
      overview="AHABD listens to acoustic signatures of passing wagons at speeds up to 120 km/h. Using advanced digital signal processing and spectral analysis, it flags micro-fractures, spalls, and lubrication failures before they cause derailments — alerting control rooms of imminent box bearing failure to reduce derailment risks and improve fleet reliability."
      applications={[
        "Trackside high-speed acoustic bearing arrays",
        "Wagon bearing failure prevention and warning",
        "Yard inspection automation",
        "Real-time rail network safety dispatch",
      ]}
      specs={[
        { label: "Train speed range", value: "5 km/h to 120 km/h" },
        { label: "Acoustic sensor", value: "Multi-microphone phased array (beamforming)" },
        { label: "Detection accuracy", value: ">95% for early stage bearing defects" },
        { label: "Alert time", value: "<60 seconds from train pass to SMS/Email alert" },
        { label: "Integration", value: "Automatic Equipment Identification (AEI) RFID sync" },
        { label: "Compliance", value: "Approved under global trackside safety guidelines" },
      ]}
      gallery={[
        { src: depot, caption: "Trackside acoustic detector enclosure" },
        { src: pcb, caption: "Acoustic beamformer card assembly" },
      ]}
      related={[{ href: "/products/wagons/wli", number: "P/04.1", title: "WLI" }]}
    />
  ),
});
