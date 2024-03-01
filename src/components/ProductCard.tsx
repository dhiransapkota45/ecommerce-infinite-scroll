"use client";
import { CURRENCY } from "@/utils/constant";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const [checkMouse, setCheckMouse] = useState(false);
  return (
    <div
      onMouseEnter={() => setCheckMouse(true)}
      onMouseLeave={() => setCheckMouse(false)}
      className="max-w-xs hover:cursor-pointer hover:shadow-lg bg-white shadow duration-300 rounded-md overflow-hidden m-4"
    >
      <div className="w-full h-56 overflow-hidden ">
        <img
          className={`w-full h-full object-cover object-center ${
            checkMouse && "scale-105"
          } duration-300`}
          src={product?.images[0]}
          alt="product"
        />
      </div>
      <div className="px-6 py-2 flex items-center flex-col gap-1">
        <div className=" font-medium text-gray-400 text-sm">
          {product?.brand?.name}
        </div>
        <div className=" font-bold text-gray-800">{product?.title}</div>
        <div className=" flex justify-center ">
          {Array(product?.ratings).fill(<FaStar className="text-red-500" />)}
          {Array(5 - product?.ratings).fill(
            <FaRegStar className=" text-red-500" />
          )}
        </div>

        <div className="h-[1px] bg-gray-200 my-2 w-full"></div>
        <div className=" font-semibold  text-gray-800  flex w-full justify-between">
          <div className=" flex flex-col justify-center ">
            <div className=" text-red-500">
              <span>{CURRENCY}</span>
              <span>{product?.price}</span>
            </div>
            {product?.offPercent > 0 && (
              <div className="flex gap-1 text-xs">
                <del className=" text-gray-400 font-normal">
                  <span>{CURRENCY}</span>
                  <span>{product?.strikePrice}</span>
                </del>

                <div className=" font-normal text-gray-800">
                  <span>-{product?.offPercent}%</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <FaRegHeart className="text-red-600 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
