
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4 md:gap-6">
        {data.experience.map((job, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <Card>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="text-lg font-medium">{job.title} • <span className="text-white/80">{job.company}</span></div>
                <div className="text-sm text-white/60">{job.period}</div>
              </div>
              <ul className="mt-3 space-y-2 list-disc list-inside text-white/80">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
