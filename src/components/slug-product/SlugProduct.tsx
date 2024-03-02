"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import ImageSection from "./interior/ImageSection";
import ProductContect from "./interior/ProductContent";

type Props = {
  productData: IProductResponse;
};

const SingleProduct = ({ productData }: Props) => {
  const router = useRouter();
  return (
    <div className=" my-20">
      <div className="container font-medium mx-auto mb-3">
        <button
          onClick={() => router.back()}
          className=" hover:text-red-600 animation  cursor-pointer flex w-fit items-center px-4 md:px-2"
        >
          <IoArrowBackOutline className=" text-xl" /> Back
        </button>
      </div>
      <div className="container grid sm:grid-cols-2 px-4 md:px-2 gap-x-8 gap-y-16">
        <ImageSection productData={productData} />
        <ProductContect productData={productData} />
      </div>
    </div>
  );
};

export default SingleProduct;
