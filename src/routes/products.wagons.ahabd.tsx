import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/wagons/ahabd")({
  head: () => ({
    meta: [
      { title: "AHABD — Acoustic Hot Axle Box Detector — LorVen Systems" },
      { name: "description", content: "Trackside acoustic bearing fault detector to identify anomalies in passing wagon wheel bearings." },
    ],
  }),
  component: AhabdRoute,
});

function AhabdRoute() {
  return <ProductPage {...PRODUCTS_DATA.ahabd} />;
}
