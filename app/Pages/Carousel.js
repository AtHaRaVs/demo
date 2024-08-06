"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import phoneFrame from "../assets/screenshot-frame.png";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";

const images = [image1, image2, image3, image4, image5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-72 h-[37rem] mx-auto">
      <Image
        src={phoneFrame}
        alt="Phone Frame"
        className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none"
      />
      <div className="absolute w-[88%] h-[97%] top-[2.5%] left-[6%] z-0 flex items-center justify-center overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute flex justify-center w-full bottom-4 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
