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
    const shootingStars = [];
    const STAR_COUNT = 120; // Reduced from 200 for better performance
    const MAX_SHOOTING_STARS = 5; // Reduced from 8

    // Color palette for shooting stars
    const colors = [
      { main: "rgba(96, 165, 250, ", trail: "rgba(96, 165, 250, " }, // blue
      { main: "rgba(168, 85, 247, ", trail: "rgba(168, 85, 247, " }, // purple
      { main: "rgba(244, 114, 182, ", trail: "rgba(244, 114, 182, " }, // pink
      { main: "rgba(34, 211, 238, ", trail: "rgba(34, 211, 238, " }, // cyan
      { main: "rgba(251, 146, 60, ", trail: "rgba(251, 146, 60, " }, // orange
    ];

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function initStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.2,
          a: Math.random(),
          vx: (Math.random() - 0.5) * 0.2, // Horizontal velocity
          vy: (Math.random() - 0.5) * 0.2, // Vertical velocity
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    }

    function createShootingStar() {
      if (shootingStars.length >= MAX_SHOOTING_STARS) return;

      const colorPalette = colors[Math.floor(Math.random() * colors.length)];

      // Spawn more centrally (within 70% of screen width/height from center)
      const centerX = width / 2;
      const centerY = height / 2;
      const spawnRadius = Math.min(width, height) * 0.35;
      const randomAngle = Math.random() * Math.PI * 2;
      const randomDistance = Math.random() * spawnRadius;

      const startX = centerX + Math.cos(randomAngle) * randomDistance;
      const startY =
        centerY + Math.sin(randomAngle) * randomDistance - height * 0.2; // Bias towards top

      // Random direction with more variation
      const angle = Math.PI / 4 + ((Math.random() - 0.5) * Math.PI) / 2;
      const speed = 4 + Math.random() * 4;
      const length = 40 + Math.random() * 60;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: length,
        opacity: 1,
        color: colorPalette,
        trail: [],
      });
    }

    function updateShootingStars() {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Add current position to trail
        star.trail.push({ x: star.x, y: star.y, opacity: star.opacity });

        // Keep trail length limited
        if (star.trail.length > 25) {
          star.trail.shift();
        }

        // Fade out as it moves
        star.opacity -= 0.008;

        // Remove if off screen or faded
        if (
          star.opacity <= 0 ||
          star.x < -100 ||
          star.x > width + 100 ||
          star.y < -100 ||
          star.y > height + 100
        ) {
          shootingStars.splice(i, 1);
        }
      }

      // Randomly create new shooting stars (optimized frequency)
      if (Math.random() < 0.015 && shootingStars.length < MAX_SHOOTING_STARS) {
        createShootingStar();
      }
    }

    function drawShootingStars() {
      for (const star of shootingStars) {
        // Draw trail
        for (let i = 0; i < star.trail.length; i++) {
          const point = star.trail[i];
          const trailOpacity = (i / star.trail.length) * star.opacity;
          const size = (i / star.trail.length) * 2;

          // Draw trail glow
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            size * 3
          );
          gradient.addColorStop(0, star.color.trail + trailOpacity + ")");
          gradient.addColorStop(1, star.color.trail + "0)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw main shooting star head
        const headGradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          6
        );
        headGradient.addColorStop(0, star.color.main + star.opacity + ")");
        headGradient.addColorStop(
          0.3,
          star.color.main + star.opacity * 0.8 + ")"
        );
        headGradient.addColorStop(1, star.color.main + "0)");

        ctx.fillStyle = headGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function updateStars() {
      for (const s of stars) {
        // Move stars
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around edges
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Update twinkle
        s.a += (Math.random() - 0.5) * s.twinkleSpeed;
        s.a = Math.max(0.2, Math.min(1, s.a));
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Update and draw moving/twinkling stars
      updateStars();
      for (const s of stars) {
        ctx.globalAlpha = s.a;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Update and draw shooting stars
      updateShootingStars();
      drawShootingStars();

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initStars();
    // Create initial shooting stars
    for (let i = 0; i < 4; i++) {
      setTimeout(() => createShootingStar(), i * 300);
    }
    draw();

    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        initStars();
      }, 150);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ willChange: "contents" }}
    />
  );
}
