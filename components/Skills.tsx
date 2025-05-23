"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { SkillCard } from "@/components/ui/skill-card";
import { motion } from "framer-motion";
import { CrushedPaperTexture } from "@/components/ui/crushed-paper-texture";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFramer,
  SiGithub,
  SiAmazon,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "React JS", icon: SiReact },
  { name: "Next JS", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node JS", icon: SiNodedotjs },
  { name: "Express JS", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Framer Motion", icon: SiFramer },
  { name: "AWS", icon: SiAmazon },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: VscVscode },
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
    <div className="relative min-h-screen h-auto bg-black">
      <CrushedPaperTexture />
      <div
        id="skills"
        className="flex flex-col items-center justify-center w-full px-18 py-32 md:py-40 relative z-10"
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
    </div>
  );
}
