import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/design")({
  head: () => ({
    meta: [
      { title: "Engineering Design — LorVen Systems" },
      { name: "description", content: "Railway engineering design and custom integration services." },
    ],
  }),
  component: DesignPage,
});

function DesignPage() {
  const service = SERVICES_DATA.design;
  return <ServicePageSystem data={service} />;
}
