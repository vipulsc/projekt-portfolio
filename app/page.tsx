import HeroSection from "@/components/heroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import IntroSection from "@/components/IntroSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <HeroSection />
        <IntroSection />
        <Projects />
        <Skills />
        <ContactForm />
      </div>
    </div>
  );
}
