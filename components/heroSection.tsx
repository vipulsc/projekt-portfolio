"use client";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import SocialMedia from "./social-media";
import { ChevronDown } from "lucide-react";
const words = [
  {
    text: "Building",
  },
  {
    text: "modern",
  },
  {
    text: "web",
  },
  {
    text: "&",
  },
  {
    text: "web3",
  },
  {
    text: "experiences.",
  },
];
export default function HeroSection() {
  return (
    <div id="hero" className="relative w-full h-screen">
      <BackgroundBeams />

      <div className="flex flex-col sm:flex-row items-center sm:justify-center h-full gap-10 sm:gap-32 px-10 pt-30 sm:pt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 text-center order-2 sm:order-1"
        >
          <div>
            <h1 className="font-bold text-blue-500 dark:text-blue-500 text-4xl md:text-5xl sm:text-4xl font-['Roboto_Slab']">
              Vipul Singh
            </h1>
          </div>
          <div className="font-['Roboto'] relative">
            <div className="absolute inset-0 blur-2xl">
              <TypewriterEffect
                words={words}
                className="opacity-50"
                cursorClassName="bg-rose-500"
              />
            </div>
            <div className="relative z-20">
              <TypewriterEffect
                words={words}
                className=""
                cursorClassName="bg-rose-500"
              />
            </div>

            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pt-10"
            >
              <SocialMedia />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center order-1 sm:order-2"
        >
          <div className="overflow-hidden rounded-full border-4 border-white/20 relative group">
            <div className="absolute inset-0  bg-gradient-to-r from-purple-500/30 via-purple-500/60 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-3xl " />
            <Image
              src="/icon.png"
              alt="Profile Photo"
              width={600}
              height={300}
              className="rounded-full pt-10 sm:pt-15 md:pt-20 object-cover relative z-10 bg-black/40"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/70 blur-xl rounded-full animate-pulse" />
          <ChevronDown className="w-10 h-10 text-blue-500/90 relative z-10 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}
