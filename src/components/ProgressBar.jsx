import React from "react";
import { cn } from "../utils/cn";

export default function ProgressBar({ months, state }) {
  const progressPercentage = Math.min((months / 12) * 100, 100);

  const colors = {
    safe: "bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]",
    warning: "bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]",
    danger: "bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.8)]",
  };

  return (
    <div className="w-full mt-10">
      <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1">
        <span>0m</span>
        <span>3m</span>
        <span>6m</span>
        <span>9m</span>
        <span>12m+</span>
      </div>
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)",
            colors[state]
          )}
          style={{ width: `${progressPercentage}%` }}
        >
          {/* Inner highlight for 3D effect */}
          <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent rounded-full" />
        </div>
        
        {/* Scale Markers */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-[1%] pointer-events-none">
          <div className="w-px h-full bg-white/10" style={{ left: "0%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "25%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "50%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "75%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "100%" }} />
        </div>
      </div>
    </div>
  );
}
