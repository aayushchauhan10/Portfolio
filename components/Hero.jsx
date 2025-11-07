"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const titleRef = useRef(null);
  useEffect(() => {
    const el = titleRef.current;
    gsap.fromTo(
      el.querySelectorAll("span"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-12 md:pb-24">
      <div className="container max-w-6xl">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12 overflow-hidden">
          {/* Enhanced grid background */}
          <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-30" />

          {/* Gradient orbs */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-cyan-500/20 via-blue-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-medium">
                Available for opportunities
              </span>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  Ayush Chauhan
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
            </div>

            {/* Enhanced description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-base md:text-lg text-white/90 max-w-3xl leading-relaxed"
            >
              I build{" "}
              <span className="text-white font-semibold">
                scalable, user-centric web apps
              </span>{" "}
              with <span className="text-blue-400 font-medium">React</span>,{" "}
              <span className="text-blue-400 font-medium">Next.js</span>,{" "}
              <span className="text-green-400 font-medium">Node.js</span>/
              <span className="text-purple-400 font-medium">FastAPI</span>, and{" "}
              <span className="text-green-400 font-medium">MongoDB</span>. I
              obsess over{" "}
              <span className="text-pink-400 font-medium">performance</span>,{" "}
              <span className="text-cyan-400 font-medium">clean code</span>, and{" "}
              <span className="text-orange-400 font-medium">delightful UX</span>
              .
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="mailto:ai.aayush10@gmail.com"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/ayush-chauhan-009"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium backdrop-blur-sm transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/aayushchauhan10"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium backdrop-blur-sm transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
