
"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, animationId;
    const DPR = window.devicePixelRatio || 1;
    const stars = [];
    const STAR_COUNT = 200;
    function resize() {
      width = canvas.clientWidth; height = canvas.clientHeight;
      canvas.width = width * DPR; canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function initStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({ x: Math.random()*width, y: Math.random()*height, r: Math.random()*1.2+0.2, a: Math.random() });
      }
    }
    function draw() {
      ctx.clearRect(0,0,width,height);
      for (const s of stars) {
        ctx.globalAlpha = Math.max(0.2, Math.min(1, s.a + (Math.random()-0.5)*0.1));
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    }
    resize(); initStars(); draw();
    const onResize = () => { resize(); initStars(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />;
}
