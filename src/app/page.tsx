import LoadMore from "@/components/load-more/LoadMore";
import Products from "@/components/product/Products";
import { getProducts } from "@/server-actions/products";

export default async function Home() {
  //perform error handle here
  const products = await getProducts(1);
  return (
    <div>
      <Products products={products?.data?.docs} />
      {products && (
        <LoadMore
          currentPage={products?.data?.pagination?.page}
          isNextPageAvailable={products?.data?.pagination?.nextPage}
        />
      )}
    </div>
  );
}
