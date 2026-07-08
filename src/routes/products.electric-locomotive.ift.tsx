import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { PRODUCTS_DATA } from "@/lib/products-data";

export const Route = createFileRoute("/products/electric-locomotive/ift")({
  head: () => ({
    meta: [
      { title: "IFT — Integrated Functional Tester — LorVen Systems" },
      { name: "description", content: "Bench tester for locomotive electronics assemblies." },
    ],
  }),
  component: IftRoute,
});

function IftRoute() {
  return <ProductPage {...PRODUCTS_DATA.ift} />;
}
