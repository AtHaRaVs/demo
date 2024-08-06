"use client";
import { motion } from "framer-motion";

export default function Steps() {
  const stepsData = [
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
        </svg>
      ),
      title: "Install the App",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      ),
      title: "Set Up Profile",
    },
    {
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          color="#FFF"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
      title: "Enjoy the Features",
    },
  ];

  return (
    <div className="flex flex-col items-center p-10">
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <motion.img
          src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Top Image"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="text-center mt-6 mb-8">
        <motion.p
          className="text-lg md:text-xl text-sky-500 font-bold"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How it works
        </motion.p>
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          3 Easy Steps
        </motion.h1>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full">
        <div className="absolute w-full md:w-3/5 h-px bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
        {stepsData.map(({ Icon, title }, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center mx-4 md:mx-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <div className="bg-sky-500 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              {Icon}
            </div>
            <motion.h2
              className="text-md md:text-lg lg:text-xl font-semibold text-center mt-4 text-gray-800"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {title}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
