
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const titleRef = useRef(null);
  useEffect(() => {
    const el = titleRef.current;
    gsap.fromTo(el.querySelectorAll('span'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.8, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-12 md:pb-24">
      <div className="container max-w-6xl">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-30" />
          <div ref={titleRef} className="relative">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              <span>Ayush Chauhan — </span><span>Full Stack Developer</span>
            </h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-5 text-base md:text-lg text-white/80 max-w-3xl">
            I build scalable, user-centric web apps with React, Next.js, Node.js/FastAPI, and MongoDB. I obsess over performance, clean code, and delightful UX.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:ai.aayush10@gmail.com" className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white">Contact</a>
            <a href="https://linkedin.com/in/ayush-chauhan-009" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">LinkedIn</a>
            <a href="https://github.com/aayushchauhan10" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
