import HeroSection from "@/components/heroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <HeroSection />
        <Projects />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
