"use client";
import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen md:h-[50rem] lg:h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-50"
        style={{
          backgroundImage: `url('https://wallpapercave.com/wp/wp7113919.jpg')`,
          filter: "blur(10px)",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="w-full md:w-2/3 bg-transparent p-4 md:p-20 flex items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="detail-box text-center md:text-left text-white lg:ml-[12rem]">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-4xl font-bold mt-10 md:mt-0 uppercase"
              initial={{ y: -20, opacity: 0 }}
              viewport={{ once: true }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="animate-spin text-white">Welcome </span>
              To Homenetics!
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mt-4 leading-relaxed m-2 italic"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              -Your Smart Home Journey Begins Here
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <a
                href="#features"
                className="bg-sky-500 hover:bg-blue-700 p-2 m-2 text-lg text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Explore Features
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/3 bg-transparent lg:p-10 md:p-10 flex items-center justify-center">
        <div className="relative lg:mt-8 pt-[4rem] md:mt-0 lg:mr-[15rem] mt-0">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
