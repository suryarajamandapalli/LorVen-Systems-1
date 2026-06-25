import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import elec from "@/assets/electrical-cabinet.jpg";
import pcb from "@/assets/pcb-macro.jpg";
import engineers from "@/assets/engineers.jpg";

export const Route = createFileRoute("/products/electric-locomotive/ift")({
  head: () => ({
    meta: [
      { title: "IFT — Integrated Functional Tester — LorVen Systems" },
      { name: "description", content: "Bench tester for locomotive electronics assemblies." },
      { property: "og:title", content: "IFT — LorVen Systems" },
      { property: "og:url", content: "/products/electric-locomotive/ift" },
    ],
    links: [{ rel: "canonical", href: "/products/electric-locomotive/ift" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/02.2 — Product"
      index="P/02.2"
      title="IFT"
      lede="Integrated Functional Tester — a comprehensive testing platform that verifies the electrical and electronic functionality of locomotive systems during commissioning, maintenance, troubleshooting, and overhaul."
      hero={elec}
      overview="IFT replaces dozens of bench instruments with a single instrumented test rig. Designed to verify locomotive electrical and electronic systems, it exercises every input, output and bus during commissioning, scheduled maintenance and overhaul. Each device is configured and exercised through a scripted sequence with full pass/fail trace stored against the serial."
      applications={[
        "Production end-of-line test",
        "Returns and warranty analysis",
        "Depot acceptance test",
        "Field-spare validation",
      ]}
      specs={[
        { label: "Channels", value: "128 digital / 32 analog / 8 bus" },
        { label: "Stimulus", value: "DC, AC, PWM, CAN, MVB, RS-485" },
        { label: "Throughput", value: "Up to 30 units / shift" },
        { label: "Reporting", value: "PDF + machine-readable trace per serial" },
      ]}
      gallery={[
        { src: elec, caption: "IFT bench" },
        { src: pcb, caption: "Controller under test" },
        { src: engineers, caption: "Operator station" },
      ]}
      related={[
        {
          href: "/products/electric-locomotive/simulators",
          number: "P/02.1",
          title: "Driving Simulators",
        },
      ]}
    />
  ),
});
