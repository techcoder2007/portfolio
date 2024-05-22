import About from "@/components/about";
import { Playme } from "@/components/audios/play-me";
import Contact from "@/components/contact";
import { MacbookScrollDemo } from "@/components/demo/macbook-scrool-demo";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Playme />
      <MacbookScrollDemo />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
