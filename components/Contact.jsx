
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: data.contact.email,
      href: `mailto:${data.contact.email}`,
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400",
      accentGradient: "from-blue-500 via-cyan-500 to-teal-500",
      copyable: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: data.contact.phone,
      href: `tel:${data.contact.phone}`,
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      accentGradient: "from-green-500 via-emerald-500 to-teal-500",
      copyable: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: data.contact.linkedin,
      gradient: "from-blue-600/20 via-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
      accentGradient: "from-blue-600 via-blue-500 to-indigo-500",
      external: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my work",
      href: data.contact.github,
      gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
      accentGradient: "from-purple-500 via-violet-500 to-indigo-500",
      external: true
    }
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, i) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group hover:scale-[1.05] transition-all duration-300">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Decorative corner gradient */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${method.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${method.iconColor}`} />
                    </div>
                    {method.external && (
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>

                  {/* Label */}
                  <h3 className={`text-lg font-bold text-white mb-2 group-hover:${method.iconColor} transition-colors`}>
                    {method.label}
                  </h3>

                  {/* Value */}
                  <p className="text-sm text-white/70 mb-4 flex-grow break-all">
                    {method.value}
                  </p>

                  {/* Action Button */}
                  <div className="flex gap-2">
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className={`flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r ${method.accentGradient} text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group-hover:scale-105`}
                    >
                      {method.external ? "Visit" : "Contact"}
                    </a>
                    {method.copyable && (
                      <button
                        onClick={() => copyToClipboard(method.value, method.label)}
                        className="px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group-hover:scale-105"
                        title="Copy to clipboard"
                      >
                        {copiedField === method.label ? (
                          <span className="text-xs text-green-400 font-medium">✓</span>
                        ) : (
                          <Copy className="w-4 h-4 text-white/60" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Additional CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <Card className="relative overflow-hidden group">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-pink-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Decorative elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-brand-500/30 to-purple-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

          <div className="relative z-10 text-center py-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
              Let&apos;s Work Together
            </h3>
            <p className="text-white/70 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href={`mailto:${data.contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Me a Message
            </a>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
