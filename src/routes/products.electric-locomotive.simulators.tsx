import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import sim from "@/assets/simulator.jpg";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/products/electric-locomotive/simulators")({
  head: () => ({
    meta: [
      { title: "Driving Simulators — LorVen Systems" },
      {
        name: "description",
        content: "Full-cab driver-training simulators for electric locomotives.",
      },
      { property: "og:title", content: "Driving Simulators — LorVen Systems" },
      { property: "og:url", content: "/products/electric-locomotive/simulators" },
    ],
    links: [{ rel: "canonical", href: "/products/electric-locomotive/simulators" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/02.1 — Product"
      index="P/02.1"
      title="Driving Simulator"
      lede="Professional locomotive simulation platform that recreates realistic railway operations for driver training, emergency response practice, route familiarization, and operational skill enhancement."
      hero={sim}
      overview="The Lorven Driving Simulator delivers a high-fidelity cab environment for loco pilot training — covering emergency response, route familiarisation, and periodic recertification without requiring live rolling stock. Built to replicate WAP-class and other electric locomotive cabs with OEM-grade controls, it is used by national operator training schools to qualify mainline drivers."
      applications={[
        "Initial driver qualification",
        "Periodic re-certification",
        "Route familiarisation (any line, any weather)",
        "Failure response drilling",
        "Incident reconstruction",
      ]}
      specs={[
        { label: "Visual system", value: "3-channel 60 Hz, 200° FOV" },
        { label: "Motion", value: "Optional 3-DOF / 6-DOF base" },
        { label: "Scenario authoring", value: "Open instructor station, GIS import" },
        { label: "Cab fidelity", value: "OEM-grade controls, HMI, lighting" },
      ]}
      gallery={[
        { src: sim, caption: "Cab and screens" },
        { src: depot, caption: "Reference locomotive" },
      ]}
      related={[{ href: "/products/electric-locomotive/ift", number: "P/02.2", title: "IFT" }]}
    />
  ),
});
