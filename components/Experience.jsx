"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef(null);

  // Track scroll progress within the experience section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Apply spring physics for smooth animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const highlightTechnologies = (text) => {
    const techMap = {
      "Next.js": "text-blue-400",
      React: "text-blue-400",
      Redux: "text-purple-400",
      "Node.js": "text-green-400",
      Node: "text-green-400",
      Express: "text-green-400",
      FastAPI: "text-purple-400",
      Python: "text-purple-400",
      MongoDB: "text-green-400",
      RabbitMQ: "text-orange-400",
      TaskIQ: "text-orange-400",
      "AWS EC2": "text-orange-400",
      AWS: "text-orange-400",
      S3: "text-orange-400",
      Docker: "text-cyan-400",
      Azure: "text-blue-400",
      ThreeJS: "text-pink-400",
      Tailwind: "text-cyan-400",
      "HTML/CSS/JS": "text-orange-400",
    };

    let highlightedText = text;
    Object.entries(techMap).forEach(([tech, color]) => {
      const regex = new RegExp(`\\b${tech}\\b`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="font-medium ${color}">${tech}</span>`
      );
    });
    return highlightedText;
  };

  return (
    <Section id="experience" title="Experience">
      <div ref={containerRef} className="relative">
        {/* Timeline line background (static) */}
        <div className="absolute left-6 top-8 bottom-8 w-px bg-white/10 hidden md:block" />

        {/* Animated timeline line */}
        <motion.div
          className="absolute left-6 top-8 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block origin-top"
          style={{
            scaleY,
            height: "calc(100% - 4rem)",
          }}
        />

        <div className="grid gap-6">
          {data.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="relative overflow-hidden md:ml-16">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>

                <div className="pl-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-base text-white/70">
                        <span className="font-medium text-blue-400">
                          {job.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-white/60 lg:mt-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{job.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * j }}
                        className="flex items-start gap-3 text-white/80 leading-relaxed"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlightTechnologies(bullet),
                          }}
                        />
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
