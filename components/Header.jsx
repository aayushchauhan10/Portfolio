
"use client";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container max-w-6xl">
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur px-4 py-3 border border-white/10">
          <motion.a href="#top" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="font-semibold tracking-tight">
            Ayush<span className="text-brand-400">.</span>
          </motion.a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-brand-300">About</a>
            <a href="#experience" className="hover:text-brand-300">Experience</a>
            <a href="#projects" className="hover:text-brand-300">Projects</a>
            <a href="#skills" className="hover:text-brand-300">Skills</a>
            <a href="#contact" className="hover:text-brand-300">Contact</a>
          </nav>
          <div className="flex items-center gap-2"><ThemeToggle /></div>
        </div>
      </div>
    </header>
  );
}
