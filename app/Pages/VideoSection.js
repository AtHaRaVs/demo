"use client";

import React, { useState } from "react";
import { BsFillPlayBtnFill } from "react-icons/bs";
const VideoSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleHoverEnter = () => {
    setIsVideoVisible(true);
  };

  const handleHoverLeave = () => {
    setIsVideoVisible(false);
  };

  return (
    <section className="w-auto relative flex flex-col items-center justify-center py-2">
      <div className="z-10 text-center mb-4">
        <h1 className="text-2xl text-black text-center font-bold uppercase font-poppins">
          Demo Video
        </h1>
        <hr className="border-sky-600 border-2 w-32 mx-auto mt-2 mb-6"></hr>
      </div>
      <div
        className={`h-[25rem] w-full flex items-center justify-center ${
          isVideoVisible ? "bg-transparent" : "bg-sky-700 bg-opacity-35"
        }`}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        {isVideoVisible ? (
          <iframe
            className="h-[25rem] w-[45rem]"
            src="https://www.youtube.com/embed/cn9hTyQ7Umc?autoplay=1&mute=1&loop=1&playlist=cn9hTyQ7Umc&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-sky-600 mb-4 uppercase font-poppins">
              Click to Watch
            </p>
            <button
              className="bg-sky-600 text-white py-3 px-3 rounded flex items-center justify-center"
              onClick={() => setIsVideoVisible(true)}
            >
              <BsFillPlayBtnFill style={{ fontSize: 50 }} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
