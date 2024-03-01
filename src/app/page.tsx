import Products from "@/components/Products";
import { getProducts } from "@/server-actions/products";

export default async function Home() {
  const products = await getProducts(10);

  return <Products products={products} />;
}
