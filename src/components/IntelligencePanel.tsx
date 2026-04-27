"use client";

import React from "react";
import { getFounderInsights, formatCurrencyCompact } from "@/lib/math";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react";

interface Props {
  totalCash: number;
  grossBurn: number;
  mrr: number;
  targetMonths: number;
}

export default function IntelligencePanel({ totalCash, grossBurn, mrr, targetMonths }: Props) {
  const insights = getFounderInsights(totalCash, grossBurn, mrr, targetMonths);
  if (!insights) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4 p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20">
        <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
          <CheckCircle2 size={16} />
          Safe Position
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          You have achieved your target of {targetMonths} months runway. Focus on growth or strategic reinvestment.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 text-indigo-400 font-bold uppercase tracking-widest text-[10px] pl-1">
        <Lightbulb size={16} />
        Founder Intelligence
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={targetMonths} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="grid grid-cols-1 gap-4">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">Burn Target</span>
                <p className="text-sm font-medium text-white/70">To survive {targetMonths} months, you need to reduce net burn by:</p>
              </div>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400"><TrendingUp size={18} /></div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-white tracking-tighter">{formatCurrencyCompact(insights.reductionNeeded)}</span>
              <span className="text-xs font-bold text-rose-500 flex items-center gap-1"><ChevronRight size={12} className="rotate-90" />{insights.percentageCut.toFixed(1)}% Cut</span>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">Revenue Target</span>
                <p className="text-sm font-medium text-white/70">Alternatively, close the gap by adding:</p>
              </div>
              <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400"><TrendingUp size={18} /></div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-white tracking-tighter">{formatCurrencyCompact(insights.revenueNeeded)}</span>
              <span className="text-xs font-bold text-emerald-400">New MRR</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {targetMonths > 18 && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-amber-500/70 text-[10px] font-bold uppercase tracking-wider">
          <AlertTriangle size={14} />
          Targeting 18+ months often requires a fundraise.
        </div>
      )}
    </div>
  );
}
