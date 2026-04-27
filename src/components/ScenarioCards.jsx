import React from "react";
import { cn } from "../utils/cn";
import { formatCurrencyCompact, generateScenarios } from "../utils/calculations";
import { TrendingDown, ArrowRight } from "lucide-react";

export default function ScenarioCards({ totalCash, grossBurn, mrr, currentMonths }) {
  const scenarios = generateScenarios(totalCash, grossBurn, mrr);

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-5">
        <TrendingDown size={14} className="text-white/40" />
        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">
          Burn Reduction Scenarios
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {scenarios.map((s, i) => {
          const isInfinite = s.months >= 999;
          return (
            <div
              key={i}
              className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-200 cursor-default"
            >
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
                {s.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white tracking-tight">
                  {isInfinite ? "∞" : s.months.toFixed(1)}
                </span>
                <span className="text-xs text-white/40 font-medium">mo</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                <ArrowRight size={10} />
                +{s.gain.toFixed(1)} months
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-medium">
                Burn → {formatCurrencyCompact(s.newBurn)}/mo
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
