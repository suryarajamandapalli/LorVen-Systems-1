import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/kavach-installation")({
  head: () => ({
    meta: [
      { title: "KAVACH Installation & Commissioning — LorVen Systems" },
      { name: "description", content: "Certified installation, RFID placement, and onboard/wayside testing for Kavach ATP." },
    ],
  }),
  component: KavachInstallationPage,
});

function KavachInstallationPage() {
  const service = SERVICES_DATA["kavach-installation"];
  return <ServicePageSystem data={service} />;
}
