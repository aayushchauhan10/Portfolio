"use client";
import Section from "./Section";
import data from "../data/resume";
import Card from "./Card";
import { m } from "framer-motion";
import { Code2, Database, Cloud, Palette, Server, Wrench } from "lucide-react";

export default function Skills() {
  // Categorize skills
  const categories = {
    Frontend: {
      icon: Code2,
      color: "blue",
      skills: ["ReactJS", "NextJS", "HTML", "CSS", "JavaScript"],
    },
    Backend: {
      icon: Server,
      color: "green",
      skills: ["NodeJS", "Express", "FastAPI", "Python"],
    },
    Database: {
      icon: Database,
      color: "purple",
      skills: ["MongoDB", "Redis"],
    },
    Cloud: {
      icon: Cloud,
      color: "orange",
      skills: ["AWS EC2", "S3", "Azure", "GCP"],
    },
    Styling: {
      icon: Palette,
      color: "pink",
      skills: ["TailwindCSS", "Bootstrap", "Figma"],
    },
    Tools: {
      icon: Wrench,
      color: "cyan",
      skills: ["Docker", "RabbitMQ", "TaskIQ", "JWT"],
    },
  };

  const colorMap = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
      iconBg: "bg-blue-500/20",
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/30",
      glow: "shadow-green-500/20",
      iconBg: "bg-green-500/20",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/20",
      iconBg: "bg-purple-500/20",
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      border: "border-orange-500/30",
      glow: "shadow-orange-500/20",
      iconBg: "bg-orange-500/20",
    },
    pink: {
      bg: "bg-pink-500/10",
      text: "text-pink-400",
      border: "border-pink-500/30",
      glow: "shadow-pink-500/20",
      iconBg: "bg-pink-500/20",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "shadow-cyan-500/20",
      iconBg: "bg-cyan-500/20",
    },
  };

  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Object.entries(categories).map(([category, data], categoryIndex) => {
          const Icon = data.icon;
          const colors = colorMap[data.color];

          return (
            <m.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative gradient */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 ${colors.iconBg} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2.5 rounded-lg ${colors.iconBg} ${colors.border} border backdrop-blur-sm`}
                    >
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3
                      className={`text-lg font-bold ${colors.text} tracking-tight`}
                    >
                      {category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, skillIndex) => (
                      <m.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} ${colors.border} border text-xs font-medium backdrop-blur-sm cursor-default transition-all hover:${colors.glow} hover:shadow-lg`}
                      >
                        {skill}
                      </m.span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </Card>
            </m.div>
          );
        })}
      </div>
    </Section>
  );
}
