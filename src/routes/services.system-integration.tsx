import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/system-integration")({
  head: () => ({
    meta: [
      { title: "S&T System Integration — LorVen Systems" },
      { name: "description", content: "End-to-end integration of signalling, telecom, power, and diagnostic networks." },
    ],
  }),
  component: SystemIntegrationPage,
});

function SystemIntegrationPage() {
  const service = SERVICES_DATA["system-integration"];
  return <ServicePageSystem data={service} />;
}
