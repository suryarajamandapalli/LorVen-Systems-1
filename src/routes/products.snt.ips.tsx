import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/snt/ips")({
  head: () => ({
    meta: [
      { title: "IPS — Integrated Power Supply System — LorVen Systems" },
      { name: "description", content: "Fail-safe integrated power supply system for railway signalling installations." },
    ],
  }),
  component: IpsRoute,
});

function IpsRoute() {
  return <ProductPage {...PRODUCTS_DATA.ips} />;
}
