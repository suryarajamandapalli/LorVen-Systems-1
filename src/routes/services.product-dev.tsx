import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/product-dev")({
  head: () => ({
    meta: [
      { title: "Electronic Product Development — LorVen Systems" },
      { name: "description", content: "Embedded hardware design, firmware development, and rapid prototyping for safety-critical railway systems." },
    ],
  }),
  component: ProductDevPage,
});

function ProductDevPage() {
  const service = SERVICES_DATA["product-dev"];
  return <ServicePageSystem data={service} />;
}
