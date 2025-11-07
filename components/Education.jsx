"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { m } from "framer-motion";
import { GraduationCap, Calendar, School } from "lucide-react";

export default function Education() {
  const gradients = [
    "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  ];

  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-6">
        {data.education.map((e, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Decorative corner gradient */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium">{e.period}</span>
                  </div>
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                  {e.degree}
                </h3>

                {/* School */}
                <div className="flex items-start gap-2 text-white/80">
                  <School className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{e.school}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
