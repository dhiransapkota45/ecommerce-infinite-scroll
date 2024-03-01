import LoadMore from "@/components/load-more/LoadMore";
import Products from "@/components/product/Products";
import { getProducts } from "@/server-actions/products";

export default async function Home() {
  //perform error handle here
  const products = await getProducts(1);
  return (
    <div>
      <div className=" font-bold text-xl  mt-10 text-center">Our Top Selling Products</div>
      <div className=" max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        <Products products={products?.data?.docs} />
        {products && (
          <LoadMore
            currentPage={products?.data?.pagination?.page}
            isNextPageAvailable={products?.data?.pagination?.nextPage}
          />
        )}
      </div>
    </div>
  );
}
