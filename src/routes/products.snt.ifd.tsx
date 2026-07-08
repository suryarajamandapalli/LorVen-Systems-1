import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/snt/ifd")({
  head: () => ({
    meta: [
      { title: "IFD — LorVen Systems" },
      { name: "description", content: "IFD product — LorVen Systems." },
    ],
  }),
  component: IfdRoute,
});

function IfdRoute() {
  return <ProductPage {...PRODUCTS_DATA.ifd} />;
}
