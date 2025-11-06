
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {data.projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <Card className="h-full">
              <div className="aspect-video rounded-xl skeleton mb-4" />
              <div className="text-lg font-medium">{p.name}</div>
              <div className="mt-1 text-sm text-white/70">{p.desc}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s, j) => (<span key={j} className="px-2 py-1 rounded-lg bg-white/10 text-xs">{s}</span>))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
