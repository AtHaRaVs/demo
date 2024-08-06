// components/Faq.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const faqData = [
  {
    question: "What is the product used for?",
    answer:
      "Our home automation device allows you to control and automate various devices in your home, transforming it into a smart house. Manage lights, fans, ACs, and other electronic home appliances, which can be controlled by our mobile application.",
  },
  {
    question: "From where can I download the application?",
    answer:
      "You can download our application from our website and through the Play Store and App Store.",
  },
  {
    question: "How can I purchase the device?",
    answer:
      "You can just mail us regarding your needs, or you can call our phone number to place an order as per your home requirements.",
  },
  {
    question: "How do you add devices to the app?",
    answer: [
      "First you have to install the product in the room you want to automate",
      <br key="1" />,
      "- Then download the application.",
      <br key="2" />,
      "- When you open the app, you have to first sign yourself up and connect it to your Wi-Fi.",
      <br key="3" />,
      "- Then you have to discover the device, and all the devices connected to our product will be shown on the application all together.",
    ],
  },
  {
    question: "How do I reset the password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login screen. You will receive an email with instructions on how to reset your password.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We prioritize your privacy and security. All communications between your app and our servers are encrypted, and we follow industry-standard security practices to protect your data.",
  },
  {
    question: "What should I do if a device is not responding?",
    answer: [
      "If a device is not responding, try the following steps:",
      <br key="1" />,
      "- Ensure the device is powered on and connected to your Wi-Fi network.",
      <br key="2" />,
      "- Restart the device and the app.",
      <br key="3" />,
      "- Check for firmware updates for the device.",
      <br key="4" />,
      "- If the problem persists, refer to the troubleshooting section in the user manual or contact our support team.",
    ],
  },
  {
    question: "What if I have more questions or need support?",
    answer:
      "If you have any further questions or need assistance, please contact our customer support team through the Help section in the app or visit our support website.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container mx-auto py-1 px-5">
        <div className="text-center mb-6">
          <div className="mx-auto align-middle justify-center pt-12 md:pt-16 px-4 md:px-0">
            <motion.h1
              className="text-2xl text-black text-center font-bold uppercase font-poppins"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.hr
              className="border-sky-600 border-2 w-32 mx-auto mt-2 mb-6"
              initial={{ width: 0 }}
              animate={{ width: "32px" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        <motion.div
          className="space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ delayChildren: 0.3, staggerChildren: 0.2 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-white to-white font-poppins rounded-lg m-1 p-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="w-full text-left px-4 py-2 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center bg-gradient-to-r font-poppins from-sky-500 to-sky-500 p-3 rounded-md">
                  <h2 className="text-md font-medium text-white">
                    {item.question}
                  </h2>
                  <span className="text-white">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <motion.div
                  className="px-4 pb-4"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-stone-500 bg-white p-2 rounded-md text-md">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
