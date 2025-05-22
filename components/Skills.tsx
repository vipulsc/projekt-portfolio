"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";
import { SkillCard } from "@/components/ui/skill-card";
import { motion } from "framer-motion";

const skills = [
  { name: "React JS", icon: "⚛️" },
  { name: "Next JS", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Redux", icon: "🔄" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node JS", icon: "🟢" },
  { name: "Express JS", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Python", icon: "🐍" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💻" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Skills() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen h-auto bg-black">
      <div
        id="skills"
        className="flex flex-col items-center justify-center w-full px-18 py-32 md:py-40"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <TextHoverEffect text="Skills" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item} custom={index}>
              <SkillCard name={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
