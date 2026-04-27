"use client";

import React, { useState, useEffect, useRef, memo } from "react";

interface Props {
  value: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber = memo(({ value, decimals = 1, className, prefix = "", suffix = "" }: Props) => {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef({ from: value, start: 0 });

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = { from: display, start: performance.now() };

    const duration = 1000;

    function step(now: number) {
      const elapsed = now - startRef.current.start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startRef.current.from + (value - startRef.current.from) * eased;
      setDisplay(current);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    }

    frameRef.current = requestAnimationFrame(step);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [value]);

  const isInfinite = !isFinite(value) || value > 999;
  return <span className={className}>{prefix}{isInfinite ? "∞" : display.toFixed(decimals)}{suffix}</span>;
});

AnimatedNumber.displayName = "AnimatedNumber";
export default AnimatedNumber;
