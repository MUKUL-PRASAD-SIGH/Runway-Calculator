import React, { useState, useEffect, useRef } from "react";
import { cn } from "../utils/cn";

/**
 * Animates a number rolling up/down to a new value.
 */
function useCountUp(target, duration = 800) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef(null);
  const startRef = useRef({ from: target, start: 0 });

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = { from: display, start: performance.now() };

    function step(now) {
      const elapsed = now - startRef.current.start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startRef.current.from + (target - startRef.current.from) * eased;
      setDisplay(current);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    }
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return display;
}

export default function AnimatedNumber({ value, decimals = 1, className }) {
  const animated = useCountUp(isFinite(value) ? value : 0);
  const isInfinite = !isFinite(value) || value > 999;

  return (
    <span className={className}>
      {isInfinite ? "∞" : animated.toFixed(decimals)}
    </span>
  );
}
