import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 justify-center relative z-50">
      {links.map((link) => (
        <a
          href={link.url}
          key={link.name}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl md:text-4xl hover:scale-110 transition-transform duration-200 cursor-pointer bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-lg hover:bg-white/20"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const links: { name: string; url: string; icon: React.ReactNode }[] = [
  {
    name: "GitHub",
    url: "https://github.com/vipulsc",
    icon: <FaGithub className="text-[#333333] dark:text-white" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vipulsingh14",
    icon: <FaLinkedin className="text-[#0077B5] dark:text-[#0077B5]" />,
  },
  {
    name: "X",
    url: "https://x.com/vipulsc1",
    icon: <FaXTwitter className="text-black dark:text-white" />,
  },
  {
    name: "Email",
    url: "mailto:vipulsc14@gmail.com",
    icon: <FaEnvelope className="text-[#EA4335] dark:text-[#EA4335]" />,
  },
];

export default SocialMedia;
