import React from "react";
import { cn } from "../utils/cn";
import ProgressBar from "./ProgressBar";
import BurnChart from "./BurnChart";
import ScenarioCards from "./ScenarioCards";
import AnimatedNumber from "./AnimatedNumber";
import {
  calculateRunwayDays,
  calculateSurvivalDate,
  formatCurrencyCompact,
} from "../utils/calculations";
import { Activity, Zap, TrendingDown } from "lucide-react";

export default function ResultCard({
  runwayMonths,
  totalCash,
  grossBurn,
  mrr,
  netBurn,
  state,
}) {
  const isInfinite = !isFinite(runwayMonths) || runwayMonths > 999;
  const runwayDays = calculateRunwayDays(runwayMonths);
  const survivalDate = calculateSurvivalDate(runwayMonths);

  const stateConfig = {
    safe: {
      text: "Safe Zone",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_80px_-20px_rgba(52,211,153,0.35)]",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      orbColor: "bg-emerald-500/10",
      advice: "You're in a strong position. Focus on growth, not survival.",
    },
    warning: {
      text: "Warning",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "shadow-[0_0_80px_-20px_rgba(251,191,36,0.35)]",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      orbColor: "bg-amber-500/10",
      advice: "Start extending runway now. Raise or cut costs immediately.",
    },
    danger: {
      text: "Critical",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      glow: "shadow-[0_0_80px_-20px_rgba(244,63,94,0.45)]",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      orbColor: "bg-rose-500/10",
      advice: "Immediate action needed. Cut non-essential costs today.",
    },
  };

  const config = stateConfig[state] || stateConfig.safe;

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-[2.5rem] bg-black/50 backdrop-blur-2xl border transition-all duration-700 overflow-hidden",
        config.border,
        config.glow
      )}
    >
      {/* Ambient orb */}
      <div
        className={cn(
          "absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000",
          config.orbColor
        )}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h2 className="text-xs font-semibold text-white/40 tracking-widest uppercase flex items-center gap-2">
          <Activity size={14} />
          Estimated Runway
        </h2>
        <div
          className={cn(
            "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md flex items-center gap-2",
            config.bg,
            config.badgeText,
            config.badgeBorder
          )}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {config.text}
        </div>
      </div>

      {/* Big Number */}
      <div className="flex items-baseline gap-3 mb-2 relative z-10">
        <AnimatedNumber
          value={runwayMonths}
          decimals={1}
          className={cn(
            "text-[100px] md:text-[120px] font-black tracking-tighter leading-none drop-shadow-2xl transition-colors duration-700",
            config.color
          )}
        />
        <span className="text-2xl font-medium text-white/30 mb-3 tracking-tight">
          months
        </span>
      </div>

      {/* Contextual advice */}
      <p className="text-sm text-white/40 font-medium mb-8 relative z-10">
        {config.advice}
      </p>

      {/* Stat Pills */}
      {!isInfinite && runwayMonths > 0 && (
        <div className="grid grid-cols-2 gap-3 relative z-10 mb-2">
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Days Left
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {isInfinite ? "∞" : `~${new Intl.NumberFormat("en-IN").format(runwayDays)}`}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Zero Cash Date
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {survivalDate ?? "—"}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Net Burn / Mo
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {formatCurrencyCompact(netBurn)}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              MRR Offset
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {mrr > 0 ? formatCurrencyCompact(mrr) : "—"}
            </span>
          </div>
        </div>
      )}

      {isInfinite && (
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium text-center relative z-10 mt-2 mb-4 flex items-center justify-center gap-2">
          <Zap size={16} />
          Revenue covers burn. You are ramen profitable!
        </div>
      )}

      {runwayMonths === 0 && !isInfinite && (
        <div className="p-5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-200 font-bold text-center relative z-10 mt-2 mb-4 tracking-wide">
          ZERO RUNWAY — IMMEDIATE ACTION REQUIRED
        </div>
      )}

      {/* Progress bar */}
      <div className="relative z-10">
        <ProgressBar months={isFinite(runwayMonths) ? runwayMonths : 12} state={state} />
      </div>

      {/* Chart */}
      {!isInfinite && netBurn > 0 && (
        <div className="relative z-10">
          <BurnChart
            totalCash={totalCash}
            netBurn={netBurn}
            mrr={mrr}
            runwayMonths={runwayMonths}
            state={state}
          />
        </div>
      )}

      {/* Scenario Cards */}
      {!isInfinite && grossBurn > 0 && (
        <div className="relative z-10">
          <ScenarioCards
            totalCash={totalCash}
            grossBurn={grossBurn}
            mrr={mrr}
            currentMonths={runwayMonths}
          />
        </div>
      )}
    </div>
  );
}
