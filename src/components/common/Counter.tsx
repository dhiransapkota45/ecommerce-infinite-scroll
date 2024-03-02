import React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

type Props = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ counter, setCounter }: Props) => {
  return (
    <div className=" flex gap-5 items-center">
      <button
        disabled={counter === 0}
        onClick={() => setCounter((prev) => prev - 1)}
        type="button"
        className=" h-12 disabled:cursor-not-allowed disabled:hover:bg-red-300 w-12 flex justify-center items-center shadow rounded hover:bg-red-600 text-red-600  cursor-pointer hover:text-white animation"
      >
        <FaMinus />
      </button>
      <div className=" font-semibold">{counter}</div>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        type="button"
        className=" h-12 w-12 flex justify-center items-center shadow rounded hover:bg-red-600 text-red-600  cursor-pointer hover:text-white animation"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
