import SlugProduct from "@/components/slug-product/SlugProduct";
import { getProduct } from "@/server-actions/products";
import React from "react";

type TContext = {
  params: {
    slug: string;
  };
  searchParams: string;
};

const page = async (context: TContext) => {
  // accessing slug value using context from server and fetching product
  const productData = await getProduct(context?.params?.slug);
  return <SlugProduct productData={productData} />;
};

export default page;
