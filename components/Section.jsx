
"use client";
import { motion } from "framer-motion";
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-20 md:py-28">
      <div className="container max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
