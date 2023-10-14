import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Features from "./sections/Features";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Features />
      <Contact />
    </main>
  );
}
