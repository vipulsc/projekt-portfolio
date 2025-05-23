import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
}

const getIconColor = (name: string) => {
  const colors: { [key: string]: string } = {
    "React JS": "#61DAFB",
    "Next JS": "#FFFFFF",
    "Tailwind CSS": "#06B6D4",
    Redux: "#764ABC",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    "Node JS": "#339933",
    "Express JS": "#FFFFFF",
    MongoDB: "#47A248",
    PostgreSQL: "#336791",
    "Framer Motion": "#0055FF",
    AWS: "#FF9900",
    Docker: "#2496ED",
    GitHub: "#FFFFFF",
    "VS Code": "#007ACC",
    Solana: "#9945FF",
    Zod: "#E33E5A",
  };
  return colors[name] || "#FFFFFF";
};

export function SkillCard({ name, icon: Icon }: SkillCardProps) {
  const iconColor = getIconColor(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg bg-black/50 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-3xl"
          style={{ color: iconColor }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-white font-medium"
        >
          {name}
        </motion.div>
      </div>
    </motion.div>
  );
}
