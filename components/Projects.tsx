"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";
import { useState } from "react";
import { Vortex } from "./ui/vortex";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe integration",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses and sentiment analysis",
    image: "/projects/chat.jpg",
    tags: ["React", "OpenAI", "WebSocket"],
    github: "https://github.com/yourusername/ai-chat",
    demo: "https://ai-chat-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website with 3D animations and interactive elements",
    image: "/projects/portfolio.jpg",
    tags: ["Three.js", "React", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates",
    image: "/projects/tasks.jpg",
    tags: ["Vue.js", "Firebase", "TailwindCSS"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and insights",
    tags: ["React", "D3.js", "Node.js"],
    github: "https://github.com/yourusername/social-dashboard",
    demo: "https://social-dashboard-demo.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    tags: ["React", "OpenWeather API", "Geolocation"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-app-demo.com",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const loadMore = () => {
    setVisibleProjects((prev) => {
      const next = prev + 2;
      return next > allProjects.length ? allProjects.length : next;
    });
    setHasLoadedMore(true);
  };

  const hideProjects = () => {
    setVisibleProjects(2);
    setHasLoadedMore(false);
  };

  const displayedProjects = allProjects.slice(0, visibleProjects);

  return (
    <BackgroundBeamsWithCollision className="min-h-screen h-auto py-[50px] pt-[100px] bg-black">
      <div
        id="projects"
        className="flex flex-col items-center justify-center px-4"
      >
        <div className="text-4xl font-bold mb-0 text-center pt-2">
          <TextHoverEffect text="Projects" />
        </div>

        <div className="w-full max-w-7xl">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((project, index) => (
              <CardContainer key={index} className="w-full">
                <CardBody className="bg-black/40 backdrop-blur-sm rounded-xl p-4 h-[450px] flex flex-col border border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardItem translateZ="100" className="w-full flex-grow">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30 group-hover:from-purple-500/40 group-hover:via-pink-500/40 group-hover:to-blue-500/40 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        {project.title}
                      </div>
                    </div>
                    <CardItem
                      translateZ="60"
                      className="text-white text-lg font-bold mb-2"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-neutral-300 text-sm mb-4"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="flex flex-wrap gap-2 mb-4"
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-white backdrop-blur-sm border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>
                  </CardItem>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 text-center backdrop-blur-sm border border-white/10 hover:border-white/20"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 text-center backdrop-blur-sm border border-white/10 hover:border-white/20"
                    >
                      Live Demo
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {!hasLoadedMore && visibleProjects < allProjects.length && (
              <button
                onClick={loadMore}
                className="px-6 py-3 text-white bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-xl hover:from-purple-500/40 hover:via-pink-500/40 hover:to-blue-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                Load More Projects
              </button>
            )}
            {visibleProjects > 2 && (
              <button
                onClick={hideProjects}
                className="px-6 py-3 text-white bg-gradient-to-r from-red-500/30 via-pink-500/30 to-purple-500/30 rounded-xl hover:from-red-500/40 hover:via-pink-500/40 hover:to-purple-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                Hide Projects
              </button>
            )}
          </div>
        </div>

        {/* Hire Me Section */}
        <div className="mt-16 mb-8 w-full max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 p-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-x opacity-50"></div>

            <div className="relative bg-black/40 backdrop-blur-xs rounded-2xl p-10">
              <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 mb-4">
                    Let&apos;s Create Something Amazing
                  </h2>
                  <p className="text-neutral-300 mb-8 text-lg max-w-2xl mx-auto">
                    Ready to bring your ideas to life? I&apos;m available for
                    exciting projects and opportunities.
                  </p>
                  <a
                    href="mailto:your.email@example.com"
                    className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-xl hover:from-purple-500/40 hover:via-pink-500/40 hover:to-blue-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    Get in Touch
                  </a>
                </div>
              </Vortex>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
