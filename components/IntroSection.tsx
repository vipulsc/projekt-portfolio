"use client";
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

const roles = [
  "Full Stack Developer",
  "Blockchain Developer",
  "UI/UX Designer",
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
};

const IntroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [typing, setTyping] = useState(true);
  const [isTurning, setIsTurning] = useState(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTurning(true);
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1jjaexl2vAMQLkO79GyqXlDBC9PQcQP4q/view?usp=sharing",
        "_blank"
      );
      setIsTurning(false);
    }, 800);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const currentRole = roles[roleIndex];
    if (typing) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, typing, roleIndex]);

  useEffect(() => {
    if (!typing) return;
    setDisplayedRole(roles[roleIndex].slice(0, 1));
  }, [roleIndex]);

  return (
    <>
      <section
        id="intro"
        className="relative py-20 overflow-hidden min-h-screen flex items-center"
      >
        {/* Crushed Paper Texture Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
              linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05))
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            backgroundColor: "rgba(0,0,0,0.95)",
            filter: "contrast(1.1) brightness(0.9)",
          }}
        />

        {/* Paper Crumple Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Line Pattern Background */}
        <BackgroundLines className="absolute inset-0 opacity-25 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center" />
        </BackgroundLines>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-lg md:text-xl font-semibold text-pink-300 mb-2 animate-pulse">
              {getGreeting()}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap">
              <span>Hey! I am </span>
              <span className="bg-gradient-to-l from-purple-400 via-blue-400/50 to-yellow-300 bg-clip-text text-transparent drop-shadow-md">
                Vipul Singh
              </span>
            </h1>
            <h2 className="inline-block px-6 py-2 rounded-lg text-4xl md:text-5xl font-extrabold text-white mb-10 bg-gradient-to-r from-pink-400 via-pink-400 to-yellow-400 shadow-lg">
              <span className="tracking-wide">
                {displayedRole}
                <span className="border-r-2 border-white ml-1 animate-pulse" />
              </span>
            </h2>
            <div className="text-2xl md:text-3xl font-bold mt-8 mb-6">
              <span className="text-yellow-200">Building ideas, </span>
              <span className="inline-block align-middle bg-yellow-300 text-black px-2 py-1 rounded font-mono text-lg mx-1">
                one line of code
              </span>
              <span className="text-yellow-200"> at a time.</span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              I&apos;m passionate about solving real-world problems with code,
              blending creativity and logic to deliver delightful user
              experiences. Let&apos;s collaborate and make something
              extraordinary!
            </p>
            <a
              href="#"
              onClick={handleResumeClick}
              className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#2d3748,45%,#4a5568,55%,#2d3748)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0_0_15px_rgba(148,163,184,0.3)] hover:shadow-[0_0_20px_rgba(148,163,184,0.5)] ${
                isTurning
                  ? "animate-turn-page scale-110 -rotate-12"
                  : "hover:scale-105 hover:-rotate-1"
              }`}
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
