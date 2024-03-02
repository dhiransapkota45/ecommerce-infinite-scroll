import LoadMore from "@/components/load-more/LoadMore";
import Products from "@/components/product/Products";
import { getProducts } from "@/server-actions/products";

export default async function Home() {
  //calls a server action with default page number 1 from nextjs server and returns list of products and with pagination details
  const products = await getProducts(1);
  return (
    <div>
      <div className=" font-bold text-xl  mt-10 text-center">
        Our Top Selling Products
      </div>
      <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {/* component for displaying list of products */}
        <Products products={products?.data?.docs} />

        {/* component for loading more data when user scrolls and reaches to spinner  */}
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
