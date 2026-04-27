import React from "react";
import { cn } from "../utils/cn";
import ProgressBar from "./ProgressBar";
import BurnChart from "./BurnChart";
import {
  calculateRunwayDays,
  calculateSurvivalDate,
} from "../utils/calculations";
import { Activity } from "lucide-react";

export default function ResultCard({
  runwayMonths,
  totalCash,
  monthlyBurn,
  state,
}) {
  const isInfinite = runwayMonths === Infinity || runwayMonths > 1200;
  const runwayDays = calculateRunwayDays(runwayMonths);
  const survivalDate = calculateSurvivalDate(runwayMonths);

  const stateConfig = {
    safe: {
      text: "Safe Zone",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_60px_-15px_rgba(52,211,153,0.3)]",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
    },
    warning: {
      text: "Warning",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "shadow-[0_0_60px_-15px_rgba(251,191,36,0.3)]",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
    },
    danger: {
      text: "Critical Danger",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      glow: "shadow-[0_0_60px_-15px_rgba(244,63,94,0.4)] animate-pulse-glow",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
    },
  };

  const config = stateConfig[state] || stateConfig.safe;

  return (
    <div
      className={cn(
        "relative flex flex-col p-10 rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border transition-all duration-700 overflow-hidden",
        config.border,
        config.glow
      )}
    >
      {/* Background ambient glow inside the card */}
      <div className={cn("absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-50 pointer-events-none transition-colors duration-1000", config.bg)} />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-semibold text-white/50 tracking-widest uppercase flex items-center gap-2">
          <Activity size={16} />
          Estimated Runway
        </h2>
        <div
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md flex items-center gap-2 shadow-xl",
            config.bg,
            config.badgeText,
            config.badgeBorder
          )}
        >
          <div className={cn("w-2 h-2 rounded-full", `bg-current animate-pulse`)} />
          {config.text}
        </div>
      </div>

      {/* Main Number */}
      <div className="flex items-baseline gap-3 mb-6 relative z-10">
        <span
          className={cn(
            "text-8xl md:text-[140px] font-black tracking-tighter transition-colors duration-700 leading-none drop-shadow-2xl",
            config.color
          )}
        >
          {isInfinite ? "∞" : runwayMonths.toFixed(1)}
        </span>
        <span className="text-3xl font-medium text-white/40 mb-4 tracking-tight">
          months
        </span>
      </div>

      {/* Sub-stats */}
      {!isInfinite && runwayMonths > 0 && (
        <div className="flex flex-col gap-4 mt-2 mb-4 relative z-10">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-white/50 font-medium">Days Remaining</span>
            <span className="text-xl font-bold text-white tracking-tight">
              ~{new Intl.NumberFormat("en-IN").format(runwayDays)}
            </span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-white/50 font-medium">Zero Cash Date</span>
            <span className="text-xl font-bold text-white tracking-tight">
              {survivalDate}
            </span>
          </div>
        </div>
      )}

      {isInfinite && (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-white/70 font-medium text-center relative z-10 mt-4">
          Your burn rate is 0. You are infinitely sustainable.
        </div>
      )}

      {runwayMonths === 0 && !isInfinite && (
        <div className="p-6 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-200 font-bold text-center relative z-10 mt-4 tracking-wide">
          ZERO RUNWAY. IMMEDIATE ACTION REQUIRED.
        </div>
      )}

      <div className="relative z-10">
        <ProgressBar months={runwayMonths} state={state} />
      </div>
      
      {!isInfinite && runwayMonths > 0 && (
        <div className="relative z-10 mt-4">
          <BurnChart 
            totalCash={totalCash} 
            monthlyBurn={monthlyBurn} 
            runwayMonths={runwayMonths} 
            state={state} 
          />
        </div>
      )}
    </div>
  );
}
