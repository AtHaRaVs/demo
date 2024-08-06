"use client";

import React from "react";
import { motion } from "framer-motion";
import "tw-elements";

import Steps from "./Steps";

const Features = () => {
  const featuresData = [
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
      title: "Easily Accessible",
      description:
        "Manage all home functions conveniently through our user-friendly mobile app, ensuring effortless control at your fingertips",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      title: "Editable Profile",
      description:
        "Personalize your smart home experience by customizing room names and other details with ease, adapting to your preferences seamlessly.",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
          />
        </svg>
      ),
      title: "Multiple Connection",
      description:
        "Seamlessly integrate and control every room in your home via robust WiFi connectivity, enhancing accessibility and convenience.",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
          />
        </svg>
      ),
      title: "User Friendly",
      description:
        "Designed for simplicity, our system ensures that anyone can operate and enjoy the benefits of smart home technology without complexity",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "Customizable Interface",
      description:
        "Tailor your home environment with personalized backgrounds and icons for each room within our intuitive app, reflecting your unique style and needs.",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "Support System",
      description:
        "Access prompt assistance with our dedicated support system, offering reliable help via email and phone directly from the app whenever you need it.",
    },
  ];

  return (
    <section className="mt-2 pt-[1.5rem] pb-[1.5rem] bg-transparent">
      <div className="mx-auto align-middle justify-center pt-2 md:pt-16 px-4 md:px-0">
        <motion.h1
          className="text-2xl text-black text-center font-bold uppercase font-poppins"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h1>
        <motion.hr
          className="border-sky-600 border-2 w-32 mx-auto mt-2 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.h1
          className="text-2xl text-sky-500 text-center font-bold uppercase font-poppins"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Awesome Features
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10 ">
        {featuresData.map(({ Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-feature-image rounded-md bg-white shadow-xl flex flex-col items-center p-4 border-b-4 border-sky-700 hover:shadow-md hover:shadow-sky-700 transition-transform transform hover:scale-110 duration-500 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <div className="bg-gradient-to-r from-sky-300 to-sky-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
              {Icon}
            </div>
            <motion.h1
              className="text-lg font-bold text-center text-sky-700"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="m-2 p-2 text-gray-500 text-justify text-sm"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <Steps />
    </section>
  );
};

export default Features;
