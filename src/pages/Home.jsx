import React from "react";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Features />
      <Contact />
    </main>
  );
};

export default Home;
