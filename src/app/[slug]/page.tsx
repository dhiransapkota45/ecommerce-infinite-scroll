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
  return <div>page</div>;
};

export default page;
