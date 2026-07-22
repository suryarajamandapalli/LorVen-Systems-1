import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/testing-commissioning")({
  head: () => ({
    meta: [
      { title: "Installation, Testing & Commissioning — LorVen Systems" },
      { name: "description", content: "Turnkey field installation, testing, and safety certification under traffic block schedules." },
    ],
  }),
  component: TestingCommissioningPage,
});

function TestingCommissioningPage() {
  const service = SERVICES_DATA["testing-commissioning"];
  return <ServicePageSystem data={service} />;
}
