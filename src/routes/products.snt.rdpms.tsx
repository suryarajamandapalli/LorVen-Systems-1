import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/snt/rdpms")({
  head: () => ({
    meta: [
      { title: "RDPMS — Remote Diagnostic System — LorVen Systems" },
      { name: "description", content: "Proactive remote diagnostic and predictive maintenance for railway infrastructure." },
    ],
  }),
  component: RdpmsRoute,
});

function RdpmsRoute() {
  return <ProductPage {...PRODUCTS_DATA.rdpms} />;
}
