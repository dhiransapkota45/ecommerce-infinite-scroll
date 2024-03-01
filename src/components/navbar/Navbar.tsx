import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=" h-16  shadow-md z-10 sticky top-0 bg-white ">
      <div className="items-center font-semibold text-red-500 flex justify-between w-full h-full container px-6">
        <Link href="/">Logo</Link>
        <div className=" flex gap-6">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
