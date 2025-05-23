"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 pt-10 overflow-hidden">
      {/* Draggable Computer Emoji */}
      <motion.div
        className="absolute top-10 left-10 text-4xl cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ top: 0, left: 0, right: 300, bottom: 300 }}
        dragElastic={0.6}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        💻
      </motion.div>

      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
        GET IN TOUCH WITH ME
      </h1>

      <form
        action="https://formspree.io/f/xkgrakwj"
        method="POST"
        className="w-full max-w-lg space-y-5"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-semibold">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1 text-sm font-semibold">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Enter the subject"
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Enter your message"
            required
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center gap-2 bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
            Submit
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Vipul Singh • All rights reserved
        </p>
        <p className="text-gray-500 mt-1 text-xs sm:text-sm max-w-sm mx-auto">
          Built with 💻, ☕ and way too many late nights. If it’s broken, I was
          probably hungry.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
