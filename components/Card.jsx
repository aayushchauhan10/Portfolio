"use client";
import { memo } from "react";

const Card = memo(function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-transform duration-300 hover:-translate-y-1.5 will-change-transform ${className}`}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      {children}
    </div>
  );
});

export default Card;
