"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { m } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

export default function Projects() {
  const techColors = {
    React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    NextJS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    NodeJS: "bg-green-500/10 text-green-400 border-green-500/20",
    Express: "bg-green-500/10 text-green-400 border-green-500/20",
    MongoDB: "bg-green-500/10 text-green-400 border-green-500/20",
    Redux: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    JWT: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Redis: "bg-red-500/10 text-red-400 border-red-500/20",
    JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Nodemailer: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  };

  const getGradient = (index) => {
    const gradients = [
      "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
      "from-pink-500/20 via-purple-500/20 to-blue-500/20",
      "from-orange-500/20 via-pink-500/20 to-purple-500/20",
      "from-green-500/20 via-cyan-500/20 to-blue-500/20",
      "from-purple-500/20 via-pink-500/20 to-orange-500/20",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((p, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full group hover:scale-[1.02] transition-transform duration-300 cursor-pointer relative overflow-hidden">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getGradient(
                  i
                )} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Project Icon/Header */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 mb-4 flex items-center justify-center overflow-hidden relative group/icon">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative">
                    <Code2 className="w-16 h-16 text-white/30 group-hover/icon:text-white/50 group-hover/icon:scale-110 transition-all duration-300" />
                    <Sparkles className="w-6 h-6 text-blue-400 absolute -top-2 -right-2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Project Name */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech, j) => (
                    <m.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * j }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        techColors[tech] ||
                        "bg-white/5 text-white/70 border-white/10"
                      } backdrop-blur-sm transition-all hover:scale-110`}
                    >
                      {tech}
                    </m.span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
