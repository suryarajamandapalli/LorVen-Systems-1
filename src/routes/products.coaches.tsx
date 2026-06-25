import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import coach from "@/assets/coach-build.jpg";
import elec from "@/assets/electrical-cabinet.jpg";

export const Route = createFileRoute("/products/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — LorVen Systems" },
      {
        name: "description",
        content: "Onboard electrical cabinets, panels, wiring harnesses, and auxiliary systems for passenger coaches.",
      },
      { property: "og:title", content: "Coaches — LorVen Systems" },
      { property: "og:url", content: "/products/coaches" },
    ],
    links: [{ rel: "canonical", href: "/products/coaches" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="P/03 — Programme"
      index="P/03"
      title="Coaches"
      lede="Integrated passenger coach electronics and electrical systems — including custom panels, wiring harnesses, and auxiliary systems designed for LHB, ICF, and metro rolling stock."
      hero={coach}
      overview="LorVen is an established supplier of onboard electrical assemblies built to RDSO and coach factory specifications. Our products drop directly into passenger vehicle assembly lines, featuring ruggedised components, fire-retardant wiring, and factory-tested configurations."
      applications={[
        "LHB / ICF passenger coach electrical panels",
        "Roof-mounted AC control cabinets",
        "EMU and metro coach-level wiring harnesses",
        "Onboard passenger public address (PA) systems",
        "Emergency LED lighting driver modules",
      ]}
      specs={[
        { label: "Voltage rating", value: "110V AC/DC, 415V AC options" },
        { label: "IP rating", value: "IP54 for indoor panels, IP65 for underslung gear" },
        { label: "Wiring standard", value: "Low-smoke zero-halogen (LSZH) per EN 50264" },
        { label: "Fire safety", value: "EN 45545-2 (HL3) compliant materials" },
        { label: "Vibration tests", value: "IEC 61373 Category 1 Class B approved" },
        { label: "Diagnostics", value: "Cabinet-level status telemetry option" },
      ]}
      gallery={[
        { src: coach, caption: "Coach electrical bay assembly" },
        { src: elec, caption: "Under-frame distribution box" },
      ]}
    />
  ),
});
