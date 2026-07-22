import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServicePageSystem } from "@/components/site/ServicePageSystem";

export const Route = createFileRoute("/services/ems")({
  head: () => ({
    meta: [
      { title: "Electronics Manufacturing Services — LorVen Systems" },
      { name: "description", content: "High-mix manufacturing featuring IPC Class 3 qualified SMT lines for safety-critical electronics." },
    ],
  }),
  component: EmsPage,
});

function EmsPage() {
  const service = SERVICES_DATA["ems"];
  return <ServicePageSystem data={service} />;
}
