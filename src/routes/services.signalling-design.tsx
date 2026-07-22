import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/signalling-design")({
  head: () => ({
    meta: [
      { title: "Signalling Design Services — LorVen Systems" },
      { name: "description", content: "CAD schematics, interlocking plans, and layout designs compliant with RDSO standards." },
    ],
  }),
  component: SignallingDesignPage,
});

function SignallingDesignPage() {
  const service = SERVICES_DATA["signalling-design"];
  return <ServicePageSystem data={service} />;
}
