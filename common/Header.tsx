"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsTransitioning(true);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 10;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-sm">
        <nav className="max-w-7xl mx-auto px-8 sm:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-semibold text-white font-roboto-slab hover:text-blue-400 transition-colors"
            >
              {"<Vipul />"}
            </Link>
            <div className="hidden md:flex items-center gap-10 text-sm">
              {[
                { name: "Home", id: "hero" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map(({ name, id }) => (
                <Link
                  key={id}
                  href={`/#${id}`}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-200 hover:text-white transition-colors text-base"
                >
                  {name}
                </Link>
              ))}
            </div>
            <Link
              href="/#contact"
              onClick={() => scrollToSection("contact")}
              className="md:hidden px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors"
            >
              Connect
            </Link>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/30 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
}
