import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { addMonths, format, startOfDay } from "date-fns";

export default function BurnChart({ totalCash, monthlyBurn, runwayMonths, state }) {
  if (totalCash <= 0 || monthlyBurn <= 0) return null;

  // Generate data points for the next few months
  const maxMonths = Math.min(Math.max(Math.ceil(runwayMonths) + 1, 6), 18);
  const data = [];
  const baseDate = startOfDay(new Date());
  
  for (let i = 0; i <= maxMonths; i++) {
    const date = addMonths(baseDate, i);
    const cashRemaining = Math.max(totalCash - monthlyBurn * i, 0);
    data.push({
      month: format(date, "MMM"),
      fullDate: format(date, "MMM yyyy"),
      cash: cashRemaining,
    });
  }

  const colorMap = {
    safe: "#34d399", // emerald-400
    warning: "#fbbf24", // amber-400
    danger: "#f43f5e", // rose-500
  };

  const chartColor = colorMap[state];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl">
          <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">{payload[0].payload.fullDate}</p>
          <p className="text-white font-semibold text-lg">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-48 w-full mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">
          Cash Depletion Curve
        </h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColor} stopOpacity={0.4}/>
              <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: "rgba(255,255,255,0.3)", fontWeight: 600 }} 
            dy={10}
            minTickGap={20}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '5 5' }} />
          <Area 
            type="monotone" 
            dataKey="cash" 
            stroke={chartColor} 
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#colorCash)" 
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
