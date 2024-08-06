"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Address from "./Address";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will only run on the client-side
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isClient) {
      const formDatab = new FormData(e.target);
      let date = new Date().toLocaleDateString();
      let time = new Date().toLocaleTimeString();

      formDatab.append("date", date);
      formDatab.append("time", time);

      fetch(
        "https://script.google.com/macros/s/AKfycbx0nYPGKQND0b0mASKrvQAhm4uj3qJWDAQD7vkei12IsC5gKfrJzEN5Bx76JaO88tvD/exec",
        {
          method: "POST",
          body: formDatab,
        }
      )
        .then(() => {
          toast.success("Submitted Successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("There was an error sending your message.");
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4">
      <div className="md:w-1/2 w-full m-4 p-4 pt-[4rem] z-10 bg-white h-[40rem] pr-[4rem]">
        <meta name="description" content="Company location map" />
        <link rel="icon" href="/favicon.ico" />

        <main>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-sky-500">Location</h2>
            <h1 className="text-4xl font-bold mt-2">Visit Us Here</h1>
          </div>

          <div className="w-full h-96 rounded-md m-2 p-2">
            <Address />
          </div>
        </main>
      </div>
      <div className="md:w-1/2 w-full py-20 px-5 mt-4 md:mt-0 h-[40rem] bg-white  rounded-lg">
        <ToastContainer />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-sky-500">Contact Us</h2>
          <h1 className="text-4xl font-bold mt-2">Get In Touch!</h1>
        </div>
        <form
          className="max-w-xl mx-auto text-md"
          name="submit-to-google-sheet"
          onSubmit={handleSubmit}
        >
          <div className="mb-2">
            <label
              className="block text-sky-500 text-md font-bold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sky-500 text-md font-bold "
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sky-500 text-md font-bold"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sky-500 text-md font-bold "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-400 to-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
