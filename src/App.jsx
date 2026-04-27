import React, { useState } from "react";
import { Wallet, Flame, ArrowRight } from "lucide-react";
import InputField from "./components/InputField";
import ResultCard from "./components/ResultCard";
import { calculateRunwayMonths, getRunwayState } from "./utils/calculations";

export default function App() {
  const [totalCash, setTotalCash] = useState(1500000); 
  const [monthlyBurn, setMonthlyBurn] = useState(250000); 

  const runwayMonths = calculateRunwayMonths(totalCash, monthlyBurn);
  const state = getRunwayState(runwayMonths);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-white selection:bg-brand-500/30">
      
      {/* Decorative Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/20 blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600/10 blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      {/* Navigation / Header */}
      <header className="w-full px-8 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Runway<span className="text-white/40">.ai</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col xl:flex-row w-full max-w-[1400px] mx-auto p-6 md:p-12 xl:p-16 gap-16 items-center xl:items-start justify-center z-10 mt-8">
        
        {/* Left Column - Inputs */}
        <div className="w-full xl:w-5/12 flex flex-col gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-500 uppercase tracking-widest backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Real-time Analysis
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              Know your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-pink-500">
                survival line.
              </span>
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg">
              Stop guessing. Calculate your startup's exact runway based on live burn metrics and extend your life.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-md relative">
            {/* Connecting line effect */}
            <div className="absolute left-6 top-[70px] bottom-[70px] w-px bg-gradient-to-b from-brand-500/50 via-white/10 to-transparent z-[-1]" />

            <InputField
              label="Total Available Cash"
              value={totalCash}
              onChange={setTotalCash}
              icon={Wallet}
              placeholder="15,00,000"
            />

            <InputField
              label="Monthly Burn Rate"
              value={monthlyBurn}
              onChange={setMonthlyBurn}
              icon={Flame}
              placeholder="2,50,000"
            />

            <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <label className="flex justify-between text-xs font-bold text-white/50 uppercase tracking-widest mb-6">
                <span>Burn Rate Scenario</span>
                <span className="text-brand-400">₹{new Intl.NumberFormat('en-IN').format(monthlyBurn)} /mo</span>
              </label>
              
              <div className="relative w-full h-3 bg-black/50 rounded-full border border-white/10 overflow-hidden">
                <input
                  type="range"
                  min="0"
                  max={Math.max(totalCash, 1000000)}
                  step="10000"
                  value={monthlyBurn}
                  onChange={(e) => setMonthlyBurn(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full pointer-events-none transition-all duration-75 ease-out"
                  style={{ width: `${Math.min((monthlyBurn / Math.max(totalCash, 1000000)) * 100, 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] font-bold text-white/30 uppercase mt-4 tracking-wider">
                <span>Aggressive Cuts</span>
                <span>Heavy Spend</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="w-full xl:w-7/12 max-w-2xl xl:max-w-none">
          <div className="animate-float" style={{ animationDuration: '8s' }}>
            <ResultCard
              runwayMonths={runwayMonths}
              totalCash={totalCash}
              monthlyBurn={monthlyBurn}
              state={state}
            />
          </div>
        </div>

      </main>
    </div>
  );
}
