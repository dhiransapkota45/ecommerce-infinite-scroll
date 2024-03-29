"use client";
import ImageMagnifier from "@/components/common/ImageMagnifier";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  productData: IProductResponse;
};

const ImageSection = ({ productData }: Props) => {
  //state to keep track which image is being hoverd so that image can be shown in main image container
  const [activeImage, setActiveImage] = useState(productData?.data?.images[0]);

  return (
    <div className=" flex flex-col gap-6">
      <div className=" ">
        <ImageMagnifier featureImage={activeImage} />
      </div>
      <div className=" flex gap-3 mt-2 justify-center flex-wrap">
        {productData?.data?.images?.map((image, index) => (
          <div
            className={` relative w-16 h-16 md:w-24 md:h-24 animation cursor-pointer rounded-md overflow-hidden ${
              image === activeImage && " scale-105 "
            }`}
            key={index}
          >
            <Image
              fill
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
