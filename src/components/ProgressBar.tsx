"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  months: number;
  state: string;
}

export default function ProgressBar({ months, state }: Props) {
  const percentage = Math.min((months / 18) * 100, 100);
  const colors: Record<string, string> = {
    safe: "from-emerald-500 to-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    warning: "from-amber-500 to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    danger: "from-rose-600 to-pink-500 shadow-[0_0_20px_rgba(225,29,72,0.3)]",
  };
  const activeColor = colors[state] || colors.safe;

  return (
    <div className="w-full">
      <div className="flex justify-between text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-4 px-1"><span>0 Months</span><span>6 Months</span><span>12 Months</span><span>18+ Months</span></div>
      <div className="h-2.5 w-full bg-white/[0.03] border border-white/5 rounded-full overflow-hidden relative">
        <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1.5, ease: "easeOut" }} className={cn("h-full rounded-full bg-gradient-to-r relative z-10", activeColor)} />
        <div className="absolute inset-0 flex justify-between px-[33%] pointer-events-none opacity-20"><div className="w-px h-full bg-white/40" /><div className="w-px h-full bg-white/40" /></div>
      </div>
    </div>
  );
}
