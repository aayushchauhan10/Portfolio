"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { motion } from "framer-motion";
import { Award, Calendar, Shield, Sparkles } from "lucide-react";

export default function Certs() {
  const gradients = [
    "from-amber-500/20 via-orange-500/20 to-red-500/20",
    "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  ];

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card className="h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  gradients[i % gradients.length]
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Decorative corner gradient */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating sparkles effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium">{c.year}</span>
                  </div>
                </div>

                {/* Certification Name */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                  {c.name}
                </h3>

                {/* Organization */}
                <div className="flex items-start gap-2 text-white/80">
                  <Shield className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{c.org}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
