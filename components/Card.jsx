
"use client";
import { useSpring, animated } from "react-spring";
export default function Card({ children, className = "" }) {
  const [style, api] = useSpring(() => ({ y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }));
  return (
    <animated.div onMouseEnter={() => api.start({ y: -6 })} onMouseLeave={() => api.start({ y: 0 })} style={style} className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 ${className}`}>
      {children}
    </animated.div>
  );
}
