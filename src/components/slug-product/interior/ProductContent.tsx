"use client";
import React, { useState } from "react";
import DOMPurify from "dompurify";
import toast from "react-hot-toast";
import Counter from "@/components/common/Counter";
import { CURRENCY } from "@/utils/constant";
import { FaRegStar, FaStar } from "react-icons/fa";

type Props = {
  productData: IProductResponse;
};

const ProductContent = ({ productData }: Props) => {
  const [counter, setCounter] = useState(0);

  const sanitizedDescription = DOMPurify.sanitize(
    productData?.data?.description ?? ""
  );
  return (
    <div>
      <div className="capitalize font-bold text-gray-800 text-3xl">
        {productData?.data?.title}
      </div>

      <div className=" flex items-center gap-2">
        <div className=" flex">
          {Array(Math.round(productData?.data?.ratings) ?? 0)
            .fill(<FaStar className="text-red-500" />)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          {Array(5 - Math.round(productData?.data?.ratings) ?? 0)
            .fill(<FaRegStar className=" text-red-500" />)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
        <span className=" text-gray-800">|</span>
        <div className=" font-medium text-sm">
          {productData?.data?.totalRatings > 0
            ? `${Math.round(productData?.data?.totalRatings)} Total reviews`
            : "No review available"}
        </div>
      </div>

      <div className=" flex gap-1 font-medium text-red-500 text-sm">
        <span className=" text-gray-800"> Brand: </span>
        <span>{productData?.data?.brand?.name}</span>
        <span className=" text-gray-800">|</span>
        <span>{productData?.data?.category?.title}</span>
      </div>

      <div className=" mt-4">
        <div className="h-[1px] bg-gray-200"></div>
        <div>
          <div className=" text-3xl py-6 text-red-600 font-medium">
            <div>
              {CURRENCY} {productData?.data?.price}
            </div>
            {productData?.data?.offPercent > 0 ? (
              <div className="flex gap-1 text-xs">
                <del className=" text-gray-400 font-normal">
                  <span>{CURRENCY}</span>
                  <span>{productData?.data?.strikePrice}</span>
                </del>

                <div className=" font-normal text-gray-800">
                  <span>-{productData?.data?.offPercent}%</span>
                </div>
              </div>
            ) : (
              <div className=" text-gray-400 font-normal text-xs">
                No offer available
              </div>
            )}
          </div>
        </div>
        <div className="h-[1px] bg-gray-200"></div>
        <div className=" my-3  font-medium text-sm flex gap-1">
          <div className="min-w-[100px]"> Description: </div>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            className="text-red-600"
          ></div>
        </div>

        <div className="font-medium text-sm mb-3 flex gap-2">
          <div className=" min-w-[100px]"> Color Family : </div>
          {Array.isArray(productData?.data?.colorVarients) &&
          productData?.data?.colorVarients.length > 0 ? (
            productData?.data?.colorVarients?.map((color, index) => (
              <div className="text-red-600" key={index}>
                <span>{color?.name}</span>
              </div>
            ))
          ) : (
            <span className="text-red-600"> Data not available </span>
          )}
        </div>

        <div className=" font-medium text-sm flex gap-2">
          <div className=" min-w-[100px]"> Size: </div>
          <div className="text-red-600 flex gap-1">
            {productData?.data?.sizeVariants?.length > 0 ? (
              productData?.data?.sizeVariants?.map((size, index) => (
                <div key={index} className=" flex flex-col gap-1">
                  {size?.variantName}
                  <div className=" w-14 p-1 cursor-pointer border rounded h-14 overflow-hidden">
                    <img
                      className=" w-full h-full object-cover"
                      src={size?.images[0]}
                      alt=""
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className=" text-red-600">Data not available</div>
            )}
          </div>
        </div>

        <div className="font-medium flex items-center gap-1 mt-4">
          <div className="  text-sm min-w-[100px]">Quantity</div>
          <div>
            <Counter counter={counter} setCounter={setCounter} />
          </div>
        </div>

        <div className=" grid gap-4 grid-cols-2 mt-8 ">
          <button
            disabled={counter === 0}
            onClick={() => toast.error("currently feature not availble")}
            className="font-medium p-4 bg-red-600 disabled:hover:cursor-not-allowed text-white rounded-md"
          >
            Buy Now
          </button>
          <button
            disabled={counter === 0}
            onClick={() => toast.success("item added to cart")}
            className=" font-medium p-4 disabled:hover:cursor-not-allowed bg-blue-600 text-white  rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
