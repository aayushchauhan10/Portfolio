"use client";
import { useEffect, useRef } from "react";

// Aurora gradient background with subtle parallax
export default function Aurora() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    function onMove(e) {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!ticking) {
        requestAnimationFrame(() => {
          const { innerWidth: w, innerHeight: h } = window;
          const x = (lastX - w / 2) / w;
          const y = (lastY - h / 2) / h;
          el.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute -inset-[20%] blur-3xl opacity-60 mix-blend-screen will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/30 via-fuchsia-500/20 to-cyan-400/20 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#22d3ee33,_#6366f133,_#f0abfc33,_transparent_60%)] animate-[spin_30s_linear_infinite]" />
      </div>
    </div>
  );
}
