import React, { useState } from "react";
import { Wallet, Flame, TrendingUp, ChevronRight } from "lucide-react";
import InputField from "./components/InputField";
import ResultCard from "./components/ResultCard";
import {
  calculateRunwayMonths,
  getRunwayState,
  calculateNetBurn,
  formatCurrencyCompact,
} from "./utils/calculations";

export default function App() {
  const [totalCash, setTotalCash] = useState(1500000);
  const [grossBurn, setGrossBurn] = useState(250000);
  const [mrr, setMrr] = useState(0);

  const netBurn = calculateNetBurn(grossBurn, mrr);
  const runwayMonths = calculateRunwayMonths(totalCash, netBurn);
  const state = getRunwayState(runwayMonths);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden text-white">

      {/* Background Orbs */}
      <div className="fixed top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none animate-float" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-600/8 blur-[150px] pointer-events-none animate-float" style={{ animationDelay: '4s' }} />

      {/* Header */}
      <header className="w-full px-8 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/8 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Runway<span className="text-white/30">.ai</span>
          </h1>
        </div>

        {/* Live Net Burn Pill */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Net Burn: <span className="text-white ml-1">{formatCurrencyCompact(netBurn)}/mo</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col xl:flex-row w-full max-w-[1440px] mx-auto px-6 pb-12 md:px-12 xl:px-16 gap-12 xl:gap-16 items-start justify-center z-10">

        {/* ── Left Column ── */}
        <div className="w-full xl:w-[420px] shrink-0 flex flex-col gap-10 pt-4">

          {/* Hero */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              Real-time Runway
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05]">
              Know your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                survival line.
              </span>
            </h2>
            <p className="text-white/40 text-base font-light leading-relaxed">
              Enter your financials. See exactly how long your startup can survive — and what to do about it.
            </p>
          </div>

          {/* ── Inputs ── */}
          <div className="flex flex-col gap-5">

            <InputField
              label="Total Available Cash"
              value={totalCash}
              onChange={setTotalCash}
              icon={Wallet}
              placeholder="15,00,000"
            />

            <InputField
              label="Gross Monthly Burn"
              value={grossBurn}
              onChange={setGrossBurn}
              icon={Flame}
              placeholder="2,50,000"
            />

            <InputField
              label="Monthly Revenue (MRR)"
              value={mrr}
              onChange={setMrr}
              icon={TrendingUp}
              placeholder="0"
            />

            {/* Net burn summary */}
            {mrr > 0 && (
              <div className="flex items-center justify-between px-5 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-sm">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <ChevronRight size={14} />
                  Net Monthly Burn
                </div>
                <span className="text-white font-black text-lg tracking-tight">
                  {formatCurrencyCompact(netBurn)}
                  {netBurn === 0 && <span className="ml-2 text-emerald-400 text-xs font-bold">Profitable 🎉</span>}
                </span>
              </div>
            )}

            {/* Scenario Slider */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <label className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest mb-5">
                <span>Burn Rate Scenario</span>
                <span className="text-indigo-400">₹{new Intl.NumberFormat("en-IN").format(grossBurn)}/mo</span>
              </label>

              <div className="relative w-full h-2.5 bg-black/50 rounded-full border border-white/10 overflow-hidden">
                <input
                  type="range"
                  min="0"
                  max={Math.max(totalCash, 1000000)}
                  step="5000"
                  value={grossBurn}
                  onChange={(e) => setGrossBurn(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full pointer-events-none transition-all duration-75"
                  style={{ width: `${Math.min((grossBurn / Math.max(totalCash, 1000000)) * 100, 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] font-bold text-white/25 uppercase mt-3 tracking-wider">
                <span>Cut Costs</span>
                <span>Spend More</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="w-full xl:flex-1 min-w-0">
          <ResultCard
            runwayMonths={runwayMonths}
            totalCash={totalCash}
            grossBurn={grossBurn}
            mrr={mrr}
            netBurn={netBurn}
            state={state}
          />
        </div>
      </main>
    </div>
  );
}
