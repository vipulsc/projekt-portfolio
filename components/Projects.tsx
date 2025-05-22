"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const projects = [
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
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-black">
      <div
        id="projects"
        className="flex flex-col items-center justify-center py-10 pb-32 mt-20 px-4"
      >
        <div className="text-4xl font-bold mb-0 text-center pt-10">
          <TextHoverEffect text="Projects" />
        </div>

        <div className="w-full max-w-7xl">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex select-none">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-3"
                >
                  <CardContainer className="w-full">
                    <CardBody className="bg-black/40 rounded-xl p-4 h-[450px] flex flex-col">
                      <CardItem translateZ="100" className="w-full flex-grow">
                        <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
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
                          className="text-neutral-300 text-sm mb-3"
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
                              className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </CardItem>
                      </CardItem>

                      <div className="flex gap-2 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 text-sm text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 text-center"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 text-sm text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 text-center"
                        >
                          Live Demo
                        </a>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
