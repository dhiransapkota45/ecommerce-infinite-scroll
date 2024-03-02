"use client";
import React, { useState } from "react";

type Props = {
  productData: IProductResponse;
};

const ImageSection = ({ productData }: Props) => {
  const [activeImage, setActiveImage] = useState(productData?.data?.images[0]);

  return (
    <div className=" flex flex-col gap-6">
      <div className=" h-80 border rounded overflow-hidden flex justify-center">
        <img
          src={activeImage}
          alt="product_image"
          className="object-cover h-full"
        />
      </div>
      <div className=" flex gap-3 justify-center flex-wrap">
        {productData?.data?.images?.map((image, index) => (
          <div
            className={` w-16 h-16 md:w-24 md:h-24 animation cursor-pointer rounded-md overflow-hidden ${
              image === activeImage && " scale-105 "
            }`}
            key={index}
          >
            <img
              onMouseEnter={() => setActiveImage(image)}
              src={image}
              alt="sub_image"
              className=" h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
