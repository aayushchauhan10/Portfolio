"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" title="About">
      <Card className="relative overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Highlighted stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2.4
            </span>
            <span className="text-sm text-white/70">Years of Experience</span>
          </motion.div>

          {/* Enhanced summary text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-relaxed text-white/90"
          >
            <span className="font-semibold text-white">
              Full-stack Developer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-blue-400">
              2.4 years of experience
            </span>{" "}
            building{" "}
            <span className="text-white font-medium">
              scalable, user-centric web applications
            </span>{" "}
            using modern{" "}
            <span className="text-purple-400 font-medium">JavaScript</span> and{" "}
            <span className="text-purple-400 font-medium">Python</span>{" "}
            ecosystems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base leading-relaxed text-white/80"
          >
            Proficient in{" "}
            <span className="text-blue-400 font-medium">
              React, Next.js, Node.js, Express, FastAPI
            </span>
            , and <span className="text-green-400 font-medium">MongoDB</span>,
            with strong exposure to{" "}
            <span className="text-orange-400 font-medium">AWS (EC2, S3)</span>{" "}
            and <span className="text-cyan-400 font-medium">Docker</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-base leading-relaxed text-white/80"
          >
            Skilled in creating{" "}
            <span className="text-pink-400 font-medium">
              performant front-end interfaces
            </span>{" "}
            with TailwindCSS and architecting{" "}
            <span className="text-indigo-400 font-medium">
              efficient backend systems
            </span>{" "}
            leveraging RabbitMQ & TaskIQ.
          </motion.p>
        </div>
      </Card>
    </Section>
  );
}
