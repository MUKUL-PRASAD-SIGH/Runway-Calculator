"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, ReferenceLine, CartesianGrid } from "recharts";
import { generateChartData } from "@/lib/math";
import { formatCurrencyCompact } from "@/lib/utils";

interface Props {
  totalCash: number;
  grossBurn: number;
  mrr: number;
  runwayMonths: number;
  state: string;
}

export default function RunwayChart({ totalCash, grossBurn, mrr, runwayMonths, state }: Props) {
  const data = generateChartData(totalCash, grossBurn, mrr);
  if (!data.length) return null;

  const colorMap: Record<string, string> = { safe: "#10b981", warning: "#f59e0b", danger: "#ef4444" };
  const chartColor = colorMap[state] || colorMap.safe;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">{payload[0]?.payload?.fullDate}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: chartColor }} /><span className="text-white/60 text-xs font-medium">Cash</span><span className="text-white font-bold text-sm ml-auto pl-6">{formatCurrencyCompact(payload[0]?.value ?? 0)}</span></div>
            {mrr > 0 && <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-indigo-500" /><span className="text-white/60 text-xs font-medium">Revenue</span><span className="text-white font-bold text-sm ml-auto pl-6">{formatCurrencyCompact(payload[1]?.value ?? 0)}</span></div>}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[280px] w-full mt-10">
      <div className="flex items-center justify-between mb-6 px-1">
        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Cash Depletion Projection</h3>
        {mrr > 0 && <div className="flex items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-wider"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: chartColor }} />Cash</span><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500" />Revenue</span></div>}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={chartColor} stopOpacity={0.3} /><stop offset="95%" stopColor={chartColor} stopOpacity={0} /></linearGradient>
            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} /><stop offset="95%" stopColor="#6366f1" stopOpacity={0} /></linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "rgba(255,255,255,0.2)", fontWeight: 700 }} dy={15} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 1 }} />
          <Area type="monotone" dataKey="cash" stroke={chartColor} strokeWidth={4} fillOpacity={1} fill="url(#colorCash)" animationDuration={1500} />
          {mrr > 0 && <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorRev)" animationDuration={1500} />}
          {isFinite(runwayMonths) && runwayMonths > 0 && <ReferenceLine x={data[Math.floor(runwayMonths)]?.month} stroke="rgba(239,68,68,0.3)" strokeDasharray="4 4" label={{ value: "Zero Cash", position: "insideTopRight", fill: "rgba(239,68,68,0.5)", fontSize: 9, fontWeight: 800, textAnchor: "end", dy: 20 }} />}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
