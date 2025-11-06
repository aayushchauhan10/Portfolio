
"use client";
import LenisProvider from "../components/LenisProvider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Certs from "../components/Certs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Aurora from "../components/Aurora";
import Starfield from "../components/Starfield";

export default function Page() {
  return (
    <LenisProvider>
      <main className="relative min-h-screen bg-black text-white">
        <div className="absolute inset-0 bg-stars" />
        <Starfield />
        <Aurora />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certs />
        <Contact />
        <Footer />
      </main>
    </LenisProvider>
  );
}
