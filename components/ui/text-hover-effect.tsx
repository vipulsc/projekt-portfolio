"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1000 200"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="initialGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="25%" stopColor="#4ECDC4" />
          <stop offset="50%" stopColor="#45B7D1" />
          <stop offset="75%" stopColor="#96C93D" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="30%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="textShadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor="#ffffff"
            floodOpacity="0.5"
          />
        </filter>
      </defs>

      {/* Base text with white border and shadow */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="white"
        strokeWidth="2"
        className="fill-transparent font-[helvetica] text-[120px] font-black"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{
          scale: isInView ? 1.5 : 1,
          opacity: isInView ? 1 : 0.8,
          stroke: isInView ? "url(#textGradient)" : "white",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          filter: "url(#textShadow)",
        }}
      >
        {text}
      </motion.text>

      {/* Animated fill text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#textGradient)"
        className="font-[helvetica] text-[120px] font-black"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isInView ? 0.15 : 0,
          scale: isInView ? 1.5 : 0.95,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        style={{
          filter: "url(#glow)",
        }}
      >
        {text}
      </motion.text>

      {/* Hover effect text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#textGradient)"
        mask="url(#textMask)"
        className="font-[helvetica] text-[120px] font-black"
        style={{
          opacity: isInView && hovered ? 0.3 : 0,
          filter: "url(#strongGlow)",
          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {text}
      </text>
    </svg>
  );
};
