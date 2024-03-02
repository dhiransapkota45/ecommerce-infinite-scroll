import SingleProduct from "@/components/product/SlugProduct";
import { getProduct } from "@/server-actions/products";
import React from "react";

type TContext = {
  params: {
    slug: string;
  };
  searchParams: string;
};

const page = async (context: TContext) => {
  const productData = await getProduct(context?.params?.slug);
  return <SingleProduct productData={productData} />;
};

export default page;
