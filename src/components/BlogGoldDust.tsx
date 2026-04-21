'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Particle = {
  alpha: number;
  drift: number;
  phase: number;
  size: number;
  speed: number;
  x: number;
  y: number;
};

const PARTICLE_COUNT = 320;

export default function BlogGoldDust() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        alpha: 0.18 + Math.random() * 0.5,
        drift: 5 + Math.random() * 20,
        phase: Math.random() * Math.PI * 2,
        size: 0.18 + Math.random() * 0.42,
        speed: 0.14 + Math.random() * 0.42,
        x: Math.random() * width,
        y: Math.random() * height,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    resize();

    const ticker = gsap.ticker.add((time) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const shimmer = 0.45 + Math.sin(time * particle.speed + particle.phase) * 0.45;
        const x = particle.x + Math.sin(time * 0.18 + particle.phase) * particle.drift;
        const y = particle.y + Math.cos(time * 0.12 + particle.phase) * particle.drift * 0.5;

        const radius = particle.size * 3.2;
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(255, 245, 201, ${particle.alpha * shimmer})`);
        gradient.addColorStop(0.35, `rgba(212, 175, 55, ${particle.alpha * shimmer * 0.5})`);
        gradient.addColorStop(1, "rgba(212, 175, 55, 0)");

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    });

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
