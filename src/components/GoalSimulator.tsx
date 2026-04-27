"use client";

import React from "react";
import { Target, Info } from "lucide-react";

interface Props {
  targetMonths: number;
  setTargetMonths: (val: number) => void;
}

export default function GoalSimulator({ targetMonths, setTargetMonths }: Props) {
  return (
    <div className="p-8 rounded-[2.5rem] glass-card border-white/10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest"><Target size={14} />Runway Goal</div>
          <h3 className="text-xl font-bold tracking-tight text-white">Target Months</h3>
        </div>
        <div className="text-4xl font-black text-primary tracking-tighter">{targetMonths}<span className="text-xs text-white/40 ml-1">mo</span></div>
      </div>
      <div className="space-y-6">
        <div className="relative group">
          <input type="range" min="1" max="24" step="1" value={targetMonths} onChange={(e) => setTargetMonths(parseInt(e.target.value))} className="w-full h-3 bg-black/50 rounded-full appearance-none cursor-pointer border border-white/5 overflow-hidden focus:outline-none" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 bg-gradient-to-r from-primary to-pink-500 rounded-full pointer-events-none transition-all duration-300" style={{ width: `${(targetMonths / 24) * 100}%` }} />
        </div>
        <div className="flex justify-between text-[10px] font-bold text-white/30 uppercase tracking-wider"><span>Short Term</span><span>Sustainability (12m)</span><span>Scale Mode</span></div>
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"><Info size={16} className="text-white/30 shrink-0 mt-0.5" /><p className="text-xs text-white/50 leading-relaxed italic">Most VCs look for at least 18 months of runway. Aim for 12 months for internal sustainability.</p></div>
      </div>
    </div>
  );
}
