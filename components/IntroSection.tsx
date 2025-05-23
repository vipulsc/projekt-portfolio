import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
const IntroSection = () => {
  return (
    <>
      <section
        id="intro"
        className="relative py-20 overflow-hidden min-h-screen flex items-center"
      >
        {/* Line Pattern Background */}
        <BackgroundLines className="absolute inset-0 opacity-10">
          <div className="w-full h-full" />
        </BackgroundLines>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%),
            linear-gradient(-45deg, #000 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #000 75%),
            linear-gradient(-45deg, transparent 75%, #000 75%)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hey! I&apos;m Vipul Singh
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
              FullStack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              I transform caffeine into code and dreams into digital reality! As
              a passionate FullStack Developer, I create elegant solutions that
              bridge the gap between imagination and implementation.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              My expertise lies in architecting robust, scalable web
              applications using cutting-edge technologies like JavaScript,
              TypeScript, React, Next.js, and Node.js. From dynamic websites to
              complex SaaS platforms, I bring ideas to life with clean code and
              intuitive user experiences. Let&apos;s build something
              extraordinary together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
