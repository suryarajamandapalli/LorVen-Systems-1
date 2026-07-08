import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/installation")({
  head: () => ({
    meta: [
      { title: "Site Installation — LorVen Systems" },
      { name: "description", content: "Railway telemetry commissioning and site installation services." },
    ],
  }),
  component: InstallationPage,
});

function InstallationPage() {
  const service = SERVICES_DATA.installation;
  return <ServicePageSystem data={service} />;
}
