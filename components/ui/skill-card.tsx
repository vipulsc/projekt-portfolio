import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
}

export function SkillCard({ name, icon: Icon }: SkillCardProps) {
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
