"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutContent } from "../Content/about";

const About = () => {
  const icons = {
    CurrencyRupeeIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    VerifiedUserIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    AccessibilityIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
        />
      </svg>
    ),
  };

  return (
    <section className="m-0 p-0">
      <div className="max-w-6xl mx-auto pt-20 mt-16 md:mt-20 md:pt-28 px-4 md:px-8">
        <motion.h1
          className="text-2xl text-sky-500 text-center font-bold uppercase font-poppins"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {aboutContent.header}
        </motion.h1>
        <motion.hr
          className="border-sky-600 border-2 w-32 mx-auto mt-2 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div
          className="text-center text-md mx-auto text-gray-500 font-poppins"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>{aboutContent.description}</p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center pt-12 md:pt-16 px-4 md:px-1 font-poppins">
        {aboutContent.sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 bg-white  border-b-2  shadow-md shadow-sky-700 border-sky-700 p-4 rounded-md md:m-4 transition-transform transform hover:scale-110 duration-500 ease-in-out"
          >
            <div className="flex text-white items-center p-4 m-4 justify-center rounded-full bg-gradient-to-r from-sky-300 to-sky-600 h-32 w-32">
              {icons[section.icon]}
            </div>
            <motion.h3
              className="text-sky-700 text-center font-bold text-lg p-2 mt-4"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {section.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-500 p-2 m-2 text-sm"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {section.description}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
