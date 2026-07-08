import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/electric-locomotive/simulators")({
  head: () => ({
    meta: [
      { title: "Driving Simulators — LorVen Systems" },
      { name: "description", content: "Full-cab driver-training simulators for electric locomotives." },
    ],
  }),
  component: SimulatorsRoute,
});

function SimulatorsRoute() {
  return <ProductPage {...PRODUCTS_DATA.simulators} />;
}
