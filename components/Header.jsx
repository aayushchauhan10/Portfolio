"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(href);

    // Smooth scroll to section
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 100; // Offset for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetId === "top" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mt-6 flex items-center justify-between rounded-2xl backdrop-blur-xl px-6 py-4 border transition-all duration-300 ${
            scrolled
              ? "bg-white/10 border-white/20 shadow-xl shadow-black/10"
              : "bg-white/5 border-white/10"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold tracking-tight text-white">
              Ayush
              <span className="text-brand-400 group-hover:text-brand-300 transition-colors">
                .
              </span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-400 to-purple-500 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeSection === item.href
                    ? "text-brand-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {/* Hover background */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-500/30 to-purple-500/30 border border-brand-400/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Talk
            <ChevronRight className="w-4 h-4" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden shadow-xl"
            >
              <nav className="flex flex-col p-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${
                      activeSection === item.href
                        ? "text-brand-400 bg-brand-500/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {activeSection === item.href && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-brand-400"
                        />
                      )}
                    </div>
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-500/50 transition-all duration-300"
                >
                  Let&apos;s Talk
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
