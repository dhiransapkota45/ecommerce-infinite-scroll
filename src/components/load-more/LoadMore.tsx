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
  //state for tracking latest page in infinite scroll
  const [currentPage, setCurrentPage] = useState(firstPage);

  //checks if nextpage is available or not 
  const [isNextAvailable, setIsNexteAvailable] = useState(isNextPageAvailable);

  //state to append newly fetched data 
  const [products, setProducts] = useState<IProduct[]>([]);

  //to keep track of spinner that if that is in view or not
  const { ref: spinnerRef, inView } = useInView();

  //fetches data using server action and updates above states accrodingly
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

  //when spiner is in view it gets called
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
