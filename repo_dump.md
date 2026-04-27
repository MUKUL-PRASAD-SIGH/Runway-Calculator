# Project Repository Dump
Generated on: 28-04-2026 01:22

## Project Structure
```text
./
    AGENTS.md
    CLAUDE.md
    next-env.d.ts
    next.config.ts
    package.json
    README.md
    tsconfig.json
    public/
    src/
        app/
            globals.css
            layout.tsx
            page.tsx
        components/
            AnimatedNumber.tsx
            DashboardCard.tsx
            GoalSimulator.tsx
            InputField.tsx
            IntelligencePanel.tsx
            ProgressBar.tsx
            RunwayChart.tsx
        lib/
            math.ts
            utils.ts
```

## File: AGENTS.md
```markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
```

## File: CLAUDE.md
```markdown
@AGENTS.md
```

## File: next-env.d.ts
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## File: next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

## File: package.json
```json
{
  "name": "runway-v2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.11.0",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "recharts": "^3.8.1",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## File: README.md
```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

## File: src\app\globals.css
```css
@import "tailwindcss";

@theme {
  --color-background: hsl(0 0% 3%);
  --color-foreground: hsl(0 0% 98%);
  --color-card: hsl(0 0% 5%);
  --color-card-foreground: hsl(0 0% 98%);
  --color-primary: hsl(263.4 70% 50.4%);
  --color-primary-foreground: hsl(210 40% 98%);
  --color-border: hsl(0 0% 15%);
  --color-input: hsl(0 0% 12%);
  --color-ring: hsl(263.4 70% 50.4%);
  
  --radius-2.5xl: 2.5rem;
}

@layer base {
  body {
    background-color: black;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "ss01", "ss02", "cv01", "cv02", "cv03";
    background: radial-gradient(circle at top left, rgba(124, 58, 237, 0.08), transparent 40%),
                radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.05), transparent 40%),
                #050505;
    min-height: 100vh;
    background-attachment: fixed;
  }
}

@layer components {
  .glass-card {
    background-color: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
  
  .glass-input {
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
}

/* 3D-ish Glows */
.glow-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(120px);
  pointer-events: none;
  opacity: 0.2;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

/* Hide number spinners */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

## File: src\app\layout.tsx
```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

## File: src\app\page.tsx
```typescript
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
```

## File: src\components\AnimatedNumber.tsx
```typescript
"use client";

import React, { useState, useEffect, useRef, memo } from "react";

interface Props {
  value: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber = memo(({ value, decimals = 1, className, prefix = "", suffix = "" }: Props) => {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef({ from: value, start: 0 });

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = { from: display, start: performance.now() };

    const duration = 1000;

    function step(now: number) {
      const elapsed = now - startRef.current.start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startRef.current.from + (value - startRef.current.from) * eased;
      setDisplay(current);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    }

    frameRef.current = requestAnimationFrame(step);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [value]);

  const isInfinite = !isFinite(value) || value > 999;
  return <span className={className}>{prefix}{isInfinite ? "∞" : display.toFixed(decimals)}{suffix}</span>;
});

AnimatedNumber.displayName = "AnimatedNumber";
export default AnimatedNumber;
```

## File: src\components\DashboardCard.tsx
```typescript
"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function DashboardCard({ children, className, glow = true }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "glass-card rounded-[2.5rem] p-8 relative group",
        isHovered ? "border-white/20" : "border-white/10",
        className
      )}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {children}
      </div>
      {glow && <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />}
    </motion.div>
  );
}
```

## File: src\components\GoalSimulator.tsx
```typescript
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
```

## File: src\components\InputField.tsx
```typescript
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  value: number;
  onChange: (val: number) => void;
  icon: LucideIcon;
  placeholder?: string;
  className?: string;
}

export default function InputField({ label, value, onChange, icon: Icon, placeholder, className }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const displayValue = value === 0 ? "" : new Intl.NumberFormat("en-IN").format(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    if (raw === "") { onChange(0); return; }
    const num = parseFloat(raw);
    if (!isNaN(num) && num >= 0) onChange(num);
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest pl-1">{label}</label>
      <div className={cn("relative flex items-center rounded-2xl glass-input px-5 py-4 group transition-all duration-300", isFocused ? "border-primary/40 ring-4 ring-primary/5" : "border-white/5")}>
        <Icon size={20} className={cn("mr-4 transition-colors", isFocused ? "text-primary" : "text-white/20 group-hover:text-white/40")} />
        <input type="text" value={displayValue} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={placeholder} className="w-full bg-transparent text-xl font-bold tracking-tight text-white outline-none placeholder-white/10" />
      </div>
    </div>
  );
}
```

## File: src\components\IntelligencePanel.tsx
```typescript
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
```

## File: src\components\ProgressBar.tsx
```typescript
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
```

## File: src\components\RunwayChart.tsx
```typescript
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
```

## File: src\lib\math.ts
```typescript
import { addMonths, format, startOfMonth } from "date-fns";

export const calculateNetBurn = (grossBurn: number, mrr: number) => {
  return Math.max(grossBurn - mrr, 0);
};

export const calculateRunwayMonths = (totalCash: number, netBurn: number) => {
  if (netBurn <= 0) return totalCash > 0 ? Infinity : 0;
  return totalCash / netBurn;
};

export const getRunwayState = (runwayMonths: number) => {
  if (!isFinite(runwayMonths) || runwayMonths >= 6) return "safe";
  if (runwayMonths >= 3) return "warning";
  return "danger";
};

export const calculateSurvivalDate = (runwayMonths: number) => {
  if (!runwayMonths || runwayMonths <= 0 || !isFinite(runwayMonths)) return null;
  const targetDate = addMonths(new Date(), runwayMonths);
  return format(targetDate, "dd MMM yyyy");
};

export const formatCurrencyCompact = (amount: number) => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
  return `₹${amount.toFixed(0)}`;
};

export interface Insight {
  targetMonths: number;
  reductionNeeded: number;
  revenueNeeded: number;
  percentageCut: number;
}

export function getFounderInsights(totalCash: number, grossBurn: number, mrr: number, targetMonths: number = 12): Insight | null {
  const netBurn = calculateNetBurn(grossBurn, mrr);
  const currentMonths = calculateRunwayMonths(totalCash, netBurn);
  
  if (currentMonths >= targetMonths) return null;
  
  const targetNetBurn = totalCash / targetMonths;
  const gap = netBurn - targetNetBurn;
  
  return {
    targetMonths,
    reductionNeeded: gap,
    revenueNeeded: gap,
    percentageCut: (gap / grossBurn) * 100
  };
}

export const generateChartData = (totalCash: number, grossBurn: number, mrr: number) => {
  const netBurn = calculateNetBurn(grossBurn, mrr);
  const runwayMonths = calculateRunwayMonths(totalCash, netBurn);
  
  const displayMonths = Math.min(Math.max(Math.ceil(isFinite(runwayMonths) ? runwayMonths : 0) + 2, 6), 24);
  const baseDate = startOfMonth(new Date());
  
  return Array.from({ length: displayMonths + 1 }).map((_, i) => {
    const date = addMonths(baseDate, i);
    const cashRemaining = Math.max(totalCash - netBurn * i, 0);
    const cumulativeRevenue = mrr * i;
    
    return {
      month: format(date, "MMM"),
      fullDate: format(date, "MMM yyyy"),
      cash: cashRemaining,
      revenue: Math.min(cumulativeRevenue, totalCash),
    };
  });
};
```

## File: src\lib\utils.ts
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatCurrencyCompact = (amount: number) => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
  return `₹${amount.toFixed(0)}`;
};
```

