import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  ReferenceLine,
} from "recharts";
import { generateChartData, formatCurrencyCompact } from "../utils/calculations";

export default function BurnChart({ totalCash, netBurn, mrr, runwayMonths, state }) {
  const data = generateChartData(totalCash, netBurn, mrr);
  if (!data.length) return null;

  const colorMap = {
    safe: "#34d399",
    warning: "#fbbf24",
    danger: "#f43f5e",
  };
  const chartColor = colorMap[state];

  // Month index at zero
  const zeroIdx = data.findIndex((d) => d.cash === 0);
  const zeroMonth = zeroIdx >= 0 ? data[zeroIdx].month : null;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">
            {payload[0]?.payload?.fullDate}
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: chartColor }}
              />
              <span className="text-white/60 text-xs">Cash</span>
              <span className="text-white font-bold text-sm ml-auto pl-4">
                {formatCurrencyCompact(payload[0]?.value ?? 0)}
              </span>
            </div>
            {mrr > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-white/60 text-xs">Revenue</span>
                <span className="text-white font-bold text-sm ml-auto pl-4">
                  {formatCurrencyCompact(payload[1]?.value ?? 0)}
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-52 w-full mt-8">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
          Cash Depletion Curve
        </h3>
        {mrr > 0 && (
          <div className="flex items-center gap-3 text-[10px] font-bold text-white/40 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-px inline-block"
                style={{ backgroundColor: chartColor, display: "inline-block" }}
              />
              Cash
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-px inline-block bg-indigo-400" />
              Revenue
            </span>
          </div>
        )}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColor} stopOpacity={0.35} />
              <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)", fontWeight: 600 }}
            dy={10}
            minTickGap={20}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(255,255,255,0.07)",
              strokeWidth: 1,
              strokeDasharray: "4 4",
            }}
          />
          {zeroMonth && (
            <ReferenceLine
              x={zeroMonth}
              stroke="rgba(244,63,94,0.4)"
              strokeDasharray="4 4"
              label={{
                value: "Cash Out",
                position: "insideTopRight",
                fill: "rgba(244,63,94,0.7)",
                fontSize: 9,
                fontWeight: 700,
              }}
            />
          )}
          <Area
            type="monotone"
            dataKey="cash"
            stroke={chartColor}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorCash)"
            animationDuration={1200}
            animationEasing="ease-out"
            dot={false}
          />
          {mrr > 0 && (
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#818cf8"
              strokeWidth={2}
              strokeDasharray="5 3"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              animationDuration={1200}
              animationEasing="ease-out"
              dot={false}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
