import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/wagons/wli")({
  head: () => ({
    meta: [
      { title: "WLI — Wagon Load Indicator — LorVen Systems" },
      { name: "description", content: "Onboard axle weight measurement and payload tracking indicator for freight wagons." },
    ],
  }),
  component: WliRoute,
});

function WliRoute() {
  return <ProductPage {...PRODUCTS_DATA.wli} />;
}
