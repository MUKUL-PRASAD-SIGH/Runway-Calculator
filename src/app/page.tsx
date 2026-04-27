"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { 
  Wallet, 
  Flame, 
  TrendingUp, 
  Share2, 
  Download, 
  Activity, 
  Settings, 
  Zap,
  ChevronRight,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { 
  calculateNetBurn, 
  calculateRunwayMonths, 
  getRunwayState,
  calculateSurvivalDate,
  formatCurrencyCompact 
} from "@/lib/math";
import { cn } from "@/lib/utils";

import InputField from "@/components/InputField";
import DashboardCard from "@/components/DashboardCard";
import AnimatedNumber from "@/components/AnimatedNumber";
import ProgressBar from "@/components/ProgressBar";
import RunwayChart from "@/components/RunwayChart";
import IntelligencePanel from "@/components/IntelligencePanel";
import GoalSimulator from "@/components/GoalSimulator";

export default function RunwayDashboard() {
  // ─── State ───
  const [totalCash, setTotalCash] = useState(1500000);
  const [grossBurn, setGrossBurn] = useState(250000);
  const [mrr, setMrr] = useState(0);
  const [targetMonths, setTargetMonths] = useState(12);
  const [isMounted, setIsMounted] = useState(false);

  // ─── Persistence & URL Sync ───
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("runway_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTotalCash(parsed.totalCash ?? 1500000);
        setGrossBurn(parsed.grossBurn ?? 250000);
        setMrr(parsed.mrr ?? 0);
        setTargetMonths(parsed.targetMonths ?? 12);
      } catch (e) { console.error(e); }
    }

    // Sync from URL
    const params = new URLSearchParams(window.location.search);
    if (params.has("c")) setTotalCash(Number(params.get("c")));
    if (params.has("b")) setGrossBurn(Number(params.get("b")));
    if (params.has("m")) setMrr(Number(params.get("m")));
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("runway_data", JSON.stringify({ totalCash, grossBurn, mrr, targetMonths }));
    
    // Sync to URL
    const params = new URLSearchParams();
    params.set("c", totalCash.toString());
    params.set("b", grossBurn.toString());
    params.set("m", mrr.toString());
    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  }, [totalCash, grossBurn, mrr, targetMonths, isMounted]);

  // ─── Calculations ───
  const netBurn = useMemo(() => calculateNetBurn(grossBurn, mrr), [grossBurn, mrr]);
  const runwayMonths = useMemo(() => calculateRunwayMonths(totalCash, netBurn), [totalCash, netBurn]);
  const state = useMemo(() => getRunwayState(runwayMonths), [runwayMonths]);
  const survivalDate = useMemo(() => calculateSurvivalDate(runwayMonths), [runwayMonths]);

  // ─── Actions ───
  const handleShare = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    alert("Shareable link copied to clipboard!");
  }, []);

  const handleExport = useCallback(() => {
    window.print();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-[1600px] mx-auto flex flex-col gap-10">
      
      {/* ─── Top Bar ─── */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(124,58,237,0.4)]">
            <Activity size={24} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              Runway<span className="text-primary">.ai</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/40 uppercase tracking-widest">v2.0</span>
            </h1>
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Decision Engine for Founders</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 text-xs font-bold uppercase tracking-widest transition-all"
          >
            <Share2 size={16} className="text-primary" />
            Share Link
          </button>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
          >
            <Download size={16} />
            Export Report
          </button>
        </div>
      </header>

      {/* ─── Main Grid ─── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Inputs & Intelligence (4 cols) */}
        <div className="xl:col-span-4 flex flex-col gap-8">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] pl-1">Financial Inputs</h2>
            <InputField 
              label="Total Available Cash" 
              value={totalCash} 
              onChange={setTotalCash} 
              icon={Wallet} 
              placeholder="e.g. 15,00,000"
            />
            <InputField 
              label="Monthly Gross Burn" 
              value={grossBurn} 
              onChange={setGrossBurn} 
              icon={Flame} 
              placeholder="e.g. 2,50,000"
            />
            <InputField 
              label="Monthly Revenue (MRR)" 
              value={mrr} 
              onChange={setMrr} 
              icon={TrendingUp} 
              placeholder="e.g. 50,000"
            />
          </div>

          <IntelligencePanel 
            totalCash={totalCash} 
            grossBurn={grossBurn} 
            mrr={mrr} 
            targetMonths={targetMonths} 
          />

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
              <Settings size={14} />
              Quick Scenario
            </div>
            <div className="flex flex-wrap gap-2">
              {[0.9, 0.8, 0.7].map((factor, i) => (
                <button
                  key={i}
                  onClick={() => setGrossBurn(Math.round(grossBurn * factor))}
                  className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  -{(100 - factor * 100).toFixed(0)}% Burn
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visualization (8 cols) */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          
          {/* Main Runway Card */}
          <DashboardCard className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <div className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] w-fit",
                  state === "safe" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                  state === "warning" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                  "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                )}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {state === "danger" ? "Critical Survival Mode" : state.toUpperCase() + " Runway"}
                </div>

                <div className="flex flex-col -space-y-4">
                  <AnimatedNumber 
                    value={runwayMonths} 
                    className={cn(
                      "text-[120px] md:text-[140px] font-black tracking-tighter leading-none transition-colors duration-700",
                      state === "safe" ? "text-emerald-400" : state === "warning" ? "text-amber-400" : "text-rose-500"
                    )}
                  />
                  <div className="flex items-center gap-4 text-white/30 font-bold uppercase tracking-[0.3em] pl-4">
                    <ChevronRight size={16} className="text-primary" />
                    Months of Runway
                  </div>
                </div>

                <div className="flex flex-col gap-1 pl-4 mt-4">
                  <p className="text-xl font-black text-white/80 tracking-tight">
                    Cash Out: <span className="text-white">{survivalDate || "Never"}</span>
                  </p>
                  <p className="text-sm font-medium text-white/40">
                    Based on current net burn of {formatCurrencyCompact(netBurn)}/mo
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/5 flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Total Net Burn</span>
                    <span className="text-2xl font-black text-white">{formatCurrencyCompact(netBurn)}</span>
                  </div>
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/5 flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Days Remaining</span>
                    <span className="text-2xl font-black text-white">
                      {!isFinite(runwayMonths) ? "∞" : Math.round(runwayMonths * 30.4).toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <ProgressBar months={isFinite(runwayMonths) ? runwayMonths : 24} state={state} />
                
                <div className="p-6 rounded-[2rem] bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-4">
                  <Zap size={20} className="text-indigo-400 shrink-0 mt-1" />
                  <p className="text-sm font-medium text-indigo-200/60 leading-relaxed">
                    {runwayMonths < 6 
                      ? "Strategic Tip: You are below the 6-month safety line. Start looking at discretionary spending or immediate revenue channels."
                      : "Strategic Tip: You are in a healthy growth phase. Ensure your burn is directed towards high-ROI activities."}
                  </p>
                </div>
              </div>
            </div>

            <RunwayChart 
              totalCash={totalCash} 
              grossBurn={grossBurn} 
              mrr={mrr} 
              runwayMonths={runwayMonths} 
              state={state} 
            />
          </DashboardCard>

          <GoalSimulator targetMonths={targetMonths} setTargetMonths={setTargetMonths} />

          <div className="flex items-center gap-3 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <Info size={20} className="text-white/20" />
            <p className="text-xs text-white/40 leading-relaxed italic">
              Note: This tool uses monthly average projections. Real-world runway may vary based on seasonal costs and accounts receivable cycles.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-12 mb-6 text-center">
        <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">
          Built for High Performance Founders
        </p>
      </footer>
    </div>
  );
}
