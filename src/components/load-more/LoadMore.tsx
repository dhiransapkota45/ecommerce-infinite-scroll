"use client";
import React, { useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import { useInView } from "react-intersection-observer";
import { getProducts } from "@/server-actions/products";
import Products from "../product/Products";

type Props = {
  currentPage: number;
  isNextPageAvailable: boolean;
};

const LoadMore = ({ currentPage: firstPage, isNextPageAvailable }: Props) => {
  const [currentPage, setCurrentPage] = useState(firstPage);
  const [isNextAvailable, setIsNexteAvailable] = useState(isNextPageAvailable);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { ref: spinnerRef, inView } = useInView();

  const loadMoreProducts = async () => {
    if (isNextAvailable) {
      const data = await getProducts(currentPage + 1);
      if (data) {
        setProducts([...products, ...data?.data?.docs]);
        setCurrentPage(currentPage + 1);
        setIsNexteAvailable(data?.data?.pagination?.nextPage);
      }
    }
  };
  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);
  return (
    <>
      <Products products={products} />
      {isNextAvailable && (
        <div ref={spinnerRef}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default LoadMore;
