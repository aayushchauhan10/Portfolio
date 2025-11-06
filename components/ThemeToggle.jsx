
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10 skeleton" />;
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-2xl grid place-items-center bg-white/5 hover:bg-white/10 transition backdrop-blur shadow-soft"
    >
      {isDark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  );
}
