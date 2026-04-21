'use client';

import { useEffect, useRef, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
};

const MAX_SPARKLES = 18;

export default function CursorSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastPointRef = useRef({ x: 0, y: 0 });
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canHover) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const lastPoint = lastPointRef.current;
      const distance = Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y);

      if (distance < 14) {
        return;
      }

      lastPointRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      const nextSparkle = {
        id: sparkleIdRef.current,
        x: event.clientX + (Math.random() - 0.5) * 18,
        y: event.clientY + (Math.random() - 0.5) * 18,
        delay: Math.random() * 0.08,
        size: 3 + Math.random() * 5,
      };

      sparkleIdRef.current += 1;

      setSparkles((current) => [...current.slice(-MAX_SPARKLES + 1), nextSparkle]);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="cursor-sparkle"
          style={{
            height: sparkle.size,
            left: sparkle.x,
            top: sparkle.y,
            transitionDelay: `${sparkle.delay}s`,
            width: sparkle.size,
          }}
        />
      ))}
    </div>
  );
}
