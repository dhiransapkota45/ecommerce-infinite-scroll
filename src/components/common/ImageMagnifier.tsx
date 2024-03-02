/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

type props = {
  featureImage: string;
};

const ImageMagnifier = ({ featureImage }: props) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const onMouseEnterHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const onMouseMoveHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  console.log(x, y);

  return (
    <div className="relative">
      <img
        onMouseEnter={onMouseEnterHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        className="w-full h-96 object-cover"
        src={featureImage}
        alt=""
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: "150px",
          width: "150px",
          // move element center to cursor pos
          top: `${y - 100 / 2}px`,
          left: `${x - 100 / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid white",
          backgroundColor: "white",
          backgroundImage: `url('${featureImage}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * 1.5}px ${imgHeight * 1.5}px`,

          //calculete position of zoomed image.
          backgroundPositionX: `${-x * 1.5 + 1.5 / 2}px`,
          backgroundPositionY: `${-y * 1.5 + 1.5 / 2}px`,
        }}
      ></div>
    </div>
  );
};

export default ImageMagnifier;
