# Project Repository Dump
Generated on: 28-04-2026 01:04

## Project Structure
```text
./
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    README.md
    tailwind.config.js
    vite.config.js
    docs/
        feature-runway-calculator.md
        precision-date-fix.md
    public/
    src/
        App.css
        App.jsx
        index.css
        main.jsx
        assets/
        components/
            AnimatedNumber.jsx
            BurnChart.jsx
            InputField.jsx
            ProgressBar.jsx
            ResultCard.jsx
            ScenarioCards.jsx
        utils/
            calculations.js
            cn.js
```

## File: eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
```

## File: index.html
```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <title>Runway Calculator</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "runway-calculator",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "lucide-react": "^1.11.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "recharts": "^3.8.1",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@tailwindcss/postcss": "^4.2.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "postcss": "^8.5.12",
    "tailwindcss": "^4.2.4",
    "vite": "^8.0.10"
  }
}
```

## File: postcss.config.js
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## File: README.md
```markdown
# Runway.ai 🚀

A premium, high-utility financial runway calculator designed for startup founders to visualize their survival line with precision.

**[🔗 Live Demo](https://runwayycalculator.netlify.app/)**

## 🎯 Why Runway.ai?

Managing startup capital isn't just about math; it's about **urgency and clarity**. Most calculators are static spreadsheets. **Runway.ai** is a real-time decision-making tool that helps you see the immediate impact of every financial move.

---

## ✨ New "Real Tool" Features

We've moved beyond a basic calculator into a full-fledged utility:

- **Net Burn Calculation**: Supports **Monthly Recurring Revenue (MRR)**. Automatically calculates `Net Burn = Gross Burn - MRR`, providing a realistic look at your sustainability.
- **Animated Value Dynamics**: Big runway numbers smoothly count up/down on every change, making the financial impact feel tangible.
- **Burn Reduction Scenarios**: Get instant "What-If" projections (10%, 20%, 30% cuts) and see exactly how many months each cut adds to your life.
- **Revenue Overlay Chart**: The depletion curve now includes a secondary revenue line, showing exactly where your growth intersects with your spend.
- **Cash-Out Reference Line**: A vertical marker on the chart highlights the exact "X-Date" where cash hits zero.
- **Compact Indian Currency**: All numbers are formatted using the Indian system (Lakhs/Crores) for instant readability (e.g., ₹12.5L).
- **Ramen Profitable Detection**: Special visual states for companies that have achieved self-sustainability.
- **Contextual Strategic Advice**: Dynamic headers provide one-line strategic guidance based on your current runway safety zone.

---

## 🎨 Design Aesthetic

- **High-End Glassmorphism**: Deep slate backgrounds with translucent, blurred card layers.
- **Visual Urgency States**: 
  - 🟢 **Safe** (> 6 months): Growth-focused UI.
  - 🟡 **Warning** (3-6 months): Cautionary amber accents.
  - 🔴 **Critical** (< 3 months): Pulsing red danger zones.
- **Modern Typography**: Powered by the geometric `Outfit` font for a sleek, tech-forward look.

---

## 🛠️ Tech Stack

- **React + Vite**: For ultra-fast UI rendering.
- **Tailwind CSS v4**: Leveraging the latest in utility-first design.
- **Recharts**: For the multi-line cash/revenue depletion area charts.
- **Lucide React**: Clean, minimalist iconography.
- **date-fns**: Precise date manipulation for cash-out predictions.

---

## 🚀 Getting Started

1. **Clone and Install:**
   ```bash
   git clone https://github.com/MUKUL-PRASAD-SIGH/Runway-Calculator.git
   cd Runway-Calculator
   npm install
   ```
2. **Run Locally:**
   ```bash
   npm run dev
   ```

## 📦 Deployment

### Vercel / Netlify
This project is optimized for zero-config deployment. Simply push to GitHub and connect your repo.
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

*Designed for high impact, zero friction, and smarter financial decisions.*
```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## File: vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

## File: docs\feature-runway-calculator.md
```markdown
# Feature: Runway Calculator Application

## Overview
A newly implemented standalone React application using Vite and Tailwind CSS. The core goal is to provide a highly interactive, visually striking "Runway Calculator" for founders to instantly calculate their financial runway based on Total Cash and Monthly Burn.

## Components Added
1. **App.jsx**: The main layout holding the input forms and the result visualizations. Integrates Dark Mode toggle and responsive split-pane layout.
2. **InputField.jsx**: A custom currency input component with focus states and auto-formatting for Indian Rupees (₹).
3. **ResultCard.jsx**: The primary visualization card. It dynamically changes colors (Emerald for Safe, Amber for Warning, Rose for Danger) and displays the big bold remaining months.
4. **ProgressBar.jsx**: An animated 0-12+ months visual scale mapping the remaining runway length.
5. **BurnChart.jsx**: An integrated Recharts AreaChart that plots the cash depletion over the upcoming months.

## Core Logic (utils/calculations.js)
- `calculateRunwayMonths`: Basic math -> `Total Cash / Monthly Burn`.
- `calculateRunwayDays`: Extrapolates days using average month length.
- `calculateSurvivalDate`: Predicts the exact cash-out date using `date-fns`.
- `getRunwayState`: Determines visual thresholds (safe >= 6, warning >= 3, danger < 3).

## Styling Choices
- **Tailwind CSS** handles the utility styling.
- Extracted reusable classes with `clsx` and `tailwind-merge` in `utils/cn.js`.
- Implemented customized `--background` and `--foreground` CSS variables inside `index.css` to allow fluid toggling between light and dark modes. Added custom glowing keyframes for danger states.
```

## File: docs\precision-date-fix.md
```markdown
# Feature Update: Precision Survival Date

## Overview
Improved the precision of the "Zero Cash Date" calculation. Previously, the date was calculated by adding integer months to the current date, which caused fractional runway values (e.g., 4.2 months vs 4.8 months) to display the same date due to truncation.

## Changes
- **Logic Shift**: Switched from `addMonths` to `addDays` for date calculation and added `startOfDay` for consistency.
- **Accuracy**: Now uses the calculated `runwayDays` (based on an average of 30.44 days per month) to determine the exact survival date.
- **Consistency**: The date now shifts dynamically as users adjust cash or burn rate sliders and remains stable regardless of the time of day.

## Technical Details
- File modified: `src/utils/calculations.js`
- Function updated: `calculateSurvivalDate`
- New dependency usage: `addDays`, `startOfDay` from `date-fns`

## Verification
- Today (April 27) + 4.0 months ≈ Aug 27, 2026.
- Today (April 27) + 4.5 months ≈ Sept 11, 2026.
- Truncation issue resolved.
```

## File: src\App.css
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

## File: src\App.jsx
```javascript
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
```

## File: src\index.css
```css
@import "tailwindcss";

@theme {
  --font-sans: "Outfit", sans-serif;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-safe: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
}

@layer base {
  body {
    @apply bg-black text-white font-sans antialiased min-h-screen selection:bg-brand-500/30;
    /* Subtle premium noise texture + gradient */
    background-color: #050505;
    background-image: 
      radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.05) 0px, transparent 50%);
    background-attachment: fixed;
  }
}

@layer utilities {
  .glass-panel {
    @apply bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl;
  }
  
  .glass-input {
    @apply bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 focus:border-brand-500/50 focus:bg-white/5 transition-all duration-300;
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50;
  }
}

/* Custom animations for premium feel */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; box-shadow: 0 0 40px rgba(244, 63, 94, 0.2); }
  50% { opacity: 0.8; box-shadow: 0 0 60px rgba(244, 63, 94, 0.4); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

/* Hide number input spinners */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
```

## File: src\main.jsx
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## File: src\components\AnimatedNumber.jsx
```javascript
import React, { useState, useEffect, useRef } from "react";
import { cn } from "../utils/cn";

/**
 * Animates a number rolling up/down to a new value.
 */
function useCountUp(target, duration = 800) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef(null);
  const startRef = useRef({ from: target, start: 0 });

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = { from: display, start: performance.now() };

    function step(now) {
      const elapsed = now - startRef.current.start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startRef.current.from + (target - startRef.current.from) * eased;
      setDisplay(current);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    }
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return display;
}

export default function AnimatedNumber({ value, decimals = 1, className }) {
  const animated = useCountUp(isFinite(value) ? value : 0);
  const isInfinite = !isFinite(value) || value > 999;

  return (
    <span className={className}>
      {isInfinite ? "∞" : animated.toFixed(decimals)}
    </span>
  );
}
```

## File: src\components\BurnChart.jsx
```javascript
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
```

## File: src\components\InputField.jsx
```javascript
import React, { useState } from "react";
import { cn } from "../utils/cn";

export default function InputField({
  label,
  value,
  onChange,
  icon: Icon,
  placeholder,
  className,
  isCurrency = true,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = isCurrency
    ? value
      ? new Intl.NumberFormat("en-IN").format(value)
      : ""
    : value;

  const handleChange = (e) => {
    let rawValue = e.target.value.replace(/,/g, "");
    if (rawValue === "") {
      onChange(0);
      return;
    }
    const num = Number(rawValue);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    }
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label className="text-sm font-medium text-white/60 tracking-wide uppercase text-xs">
        {label}
      </label>
      <div
        className={cn(
          "relative flex items-center rounded-2xl overflow-hidden glass-input group",
          isFocused ? "shadow-[0_0_20px_rgba(99,102,241,0.2)]" : ""
        )}
      >
        <div className={cn(
          "flex items-center justify-center pl-5 pr-3 transition-colors duration-300",
          isFocused ? "text-brand-500" : "text-white/40 group-hover:text-white/60"
        )}>
          {Icon ? <Icon size={22} strokeWidth={1.5} /> : <span className="font-medium text-xl">₹</span>}
        </div>
        <input
          type="text"
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full py-4 pr-5 bg-transparent outline-none text-white font-semibold text-2xl tracking-tight placeholder-white/20"
        />
        {/* Subtle inner highlight */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5 mix-blend-overlay"></div>
      </div>
    </div>
  );
}
```

## File: src\components\ProgressBar.jsx
```javascript
import React from "react";
import { cn } from "../utils/cn";

export default function ProgressBar({ months, state }) {
  const progressPercentage = Math.min((months / 12) * 100, 100);

  const colors = {
    safe: "bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]",
    warning: "bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]",
    danger: "bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.8)]",
  };

  return (
    <div className="w-full mt-10">
      <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1">
        <span>0m</span>
        <span>3m</span>
        <span>6m</span>
        <span>9m</span>
        <span>12m+</span>
      </div>
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)",
            colors[state]
          )}
          style={{ width: `${progressPercentage}%` }}
        >
          {/* Inner highlight for 3D effect */}
          <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent rounded-full" />
        </div>
        
        {/* Scale Markers */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-[1%] pointer-events-none">
          <div className="w-px h-full bg-white/10" style={{ left: "0%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "25%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "50%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "75%" }} />
          <div className="w-px h-full bg-white/10" style={{ left: "100%" }} />
        </div>
      </div>
    </div>
  );
}
```

## File: src\components\ResultCard.jsx
```javascript
import React from "react";
import { cn } from "../utils/cn";
import ProgressBar from "./ProgressBar";
import BurnChart from "./BurnChart";
import ScenarioCards from "./ScenarioCards";
import AnimatedNumber from "./AnimatedNumber";
import {
  calculateRunwayDays,
  calculateSurvivalDate,
  formatCurrencyCompact,
} from "../utils/calculations";
import { Activity, Zap, TrendingDown } from "lucide-react";

export default function ResultCard({
  runwayMonths,
  totalCash,
  grossBurn,
  mrr,
  netBurn,
  state,
}) {
  const isInfinite = !isFinite(runwayMonths) || runwayMonths > 999;
  const runwayDays = calculateRunwayDays(runwayMonths);
  const survivalDate = calculateSurvivalDate(runwayMonths);

  const stateConfig = {
    safe: {
      text: "Safe Zone",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_80px_-20px_rgba(52,211,153,0.35)]",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      orbColor: "bg-emerald-500/10",
      advice: "You're in a strong position. Focus on growth, not survival.",
    },
    warning: {
      text: "Warning",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "shadow-[0_0_80px_-20px_rgba(251,191,36,0.35)]",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      orbColor: "bg-amber-500/10",
      advice: "Start extending runway now. Raise or cut costs immediately.",
    },
    danger: {
      text: "Critical",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      glow: "shadow-[0_0_80px_-20px_rgba(244,63,94,0.45)]",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      orbColor: "bg-rose-500/10",
      advice: "Immediate action needed. Cut non-essential costs today.",
    },
  };

  const config = stateConfig[state] || stateConfig.safe;

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-[2.5rem] bg-black/50 backdrop-blur-2xl border transition-all duration-700 overflow-hidden",
        config.border,
        config.glow
      )}
    >
      {/* Ambient orb */}
      <div
        className={cn(
          "absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000",
          config.orbColor
        )}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h2 className="text-xs font-semibold text-white/40 tracking-widest uppercase flex items-center gap-2">
          <Activity size={14} />
          Estimated Runway
        </h2>
        <div
          className={cn(
            "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md flex items-center gap-2",
            config.bg,
            config.badgeText,
            config.badgeBorder
          )}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {config.text}
        </div>
      </div>

      {/* Big Number */}
      <div className="flex items-baseline gap-3 mb-2 relative z-10">
        <AnimatedNumber
          value={runwayMonths}
          decimals={1}
          className={cn(
            "text-[100px] md:text-[120px] font-black tracking-tighter leading-none drop-shadow-2xl transition-colors duration-700",
            config.color
          )}
        />
        <span className="text-2xl font-medium text-white/30 mb-3 tracking-tight">
          months
        </span>
      </div>

      {/* Contextual advice */}
      <p className="text-sm text-white/40 font-medium mb-8 relative z-10">
        {config.advice}
      </p>

      {/* Stat Pills */}
      {!isInfinite && runwayMonths > 0 && (
        <div className="grid grid-cols-2 gap-3 relative z-10 mb-2">
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Days Left
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {isInfinite ? "∞" : `~${new Intl.NumberFormat("en-IN").format(runwayDays)}`}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Zero Cash Date
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {survivalDate ?? "—"}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Net Burn / Mo
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {formatCurrencyCompact(netBurn)}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              MRR Offset
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              {mrr > 0 ? formatCurrencyCompact(mrr) : "—"}
            </span>
          </div>
        </div>
      )}

      {isInfinite && (
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium text-center relative z-10 mt-2 mb-4 flex items-center justify-center gap-2">
          <Zap size={16} />
          Revenue covers burn. You are ramen profitable!
        </div>
      )}

      {runwayMonths === 0 && !isInfinite && (
        <div className="p-5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-200 font-bold text-center relative z-10 mt-2 mb-4 tracking-wide">
          ZERO RUNWAY — IMMEDIATE ACTION REQUIRED
        </div>
      )}

      {/* Progress bar */}
      <div className="relative z-10">
        <ProgressBar months={isFinite(runwayMonths) ? runwayMonths : 12} state={state} />
      </div>

      {/* Chart */}
      {!isInfinite && netBurn > 0 && (
        <div className="relative z-10">
          <BurnChart
            totalCash={totalCash}
            netBurn={netBurn}
            mrr={mrr}
            runwayMonths={runwayMonths}
            state={state}
          />
        </div>
      )}

      {/* Scenario Cards */}
      {!isInfinite && grossBurn > 0 && (
        <div className="relative z-10">
          <ScenarioCards
            totalCash={totalCash}
            grossBurn={grossBurn}
            mrr={mrr}
            currentMonths={runwayMonths}
          />
        </div>
      )}
    </div>
  );
}
```

## File: src\components\ScenarioCards.jsx
```javascript
import React from "react";
import { cn } from "../utils/cn";
import { formatCurrencyCompact, generateScenarios } from "../utils/calculations";
import { TrendingDown, ArrowRight } from "lucide-react";

export default function ScenarioCards({ totalCash, grossBurn, mrr, currentMonths }) {
  const scenarios = generateScenarios(totalCash, grossBurn, mrr);

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-5">
        <TrendingDown size={14} className="text-white/40" />
        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">
          Burn Reduction Scenarios
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {scenarios.map((s, i) => {
          const isInfinite = s.months >= 999;
          return (
            <div
              key={i}
              className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-200 cursor-default"
            >
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
                {s.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white tracking-tight">
                  {isInfinite ? "∞" : s.months.toFixed(1)}
                </span>
                <span className="text-xs text-white/40 font-medium">mo</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                <ArrowRight size={10} />
                +{s.gain.toFixed(1)} months
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-medium">
                Burn → {formatCurrencyCompact(s.newBurn)}/mo
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

## File: src\utils\calculations.js
```javascript
import { addDays, format, startOfDay } from "date-fns";

/**
 * Core Logic: Net Burn = Gross Burn - MRR
 * Runway (months) = Total Cash / Net Burn
 */
export const calculateNetBurn = (grossBurn, mrr) => {
  return Math.max(grossBurn - mrr, 0);
};

export const calculateRunwayMonths = (totalCash, netBurn) => {
  if (netBurn <= 0) return totalCash > 0 ? Infinity : 0;
  if (totalCash <= 0) return 0;
  return totalCash / netBurn;
};

export const calculateRunwayDays = (runwayMonths) => {
  if (!isFinite(runwayMonths)) return Infinity;
  return Math.round(runwayMonths * 30.436875);
};

export const getRunwayState = (runwayMonths) => {
  if (!isFinite(runwayMonths) || runwayMonths >= 6) return "safe";
  if (runwayMonths >= 3) return "warning";
  return "danger";
};

export const calculateSurvivalDate = (runwayMonths) => {
  if (!runwayMonths || runwayMonths <= 0 || !isFinite(runwayMonths)) return null;
  const runwayDays = calculateRunwayDays(runwayMonths);
  const targetDate = addDays(startOfDay(new Date()), runwayDays);
  return format(targetDate, "dd MMM yyyy");
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatCurrencyCompact = (amount) => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
  return `₹${amount}`;
};

/**
 * Generate burn reduction scenarios
 */
export const generateScenarios = (totalCash, grossBurn, mrr) => {
  const scenarios = [
    { label: "Cut Burn 10%", burn: grossBurn * 0.9 },
    { label: "Cut Burn 20%", burn: grossBurn * 0.8 },
    { label: "Cut Burn 30%", burn: grossBurn * 0.7 },
  ];

  return scenarios.map((s) => {
    const netBurn = calculateNetBurn(s.burn, mrr);
    const months = calculateRunwayMonths(totalCash, netBurn);
    const currentNetBurn = calculateNetBurn(grossBurn, mrr);
    const currentMonths = calculateRunwayMonths(totalCash, currentNetBurn);
    const gain = isFinite(months) ? months - currentMonths : 0;
    return {
      label: s.label,
      newBurn: s.burn,
      months: isFinite(months) ? months : 999,
      gain: isFinite(gain) ? gain : 0,
    };
  });
};

/**
 * Generate monthly burn chart data showing cash remaining
 */
export const generateChartData = (totalCash, netBurn, mrr) => {
  if (totalCash <= 0 || netBurn <= 0) return [];
  const runwayMonths = calculateRunwayMonths(totalCash, netBurn);
  const maxMonths = Math.min(Math.max(Math.ceil(runwayMonths) + 2, 7), 18);
  const baseDate = startOfDay(new Date());
  const data = [];
  for (let i = 0; i <= maxMonths; i++) {
    const date = addDays(baseDate, i * 30);
    const cashRemaining = Math.max(totalCash - netBurn * i, 0);
    const mrrAccumulated = mrr * i;
    data.push({
      month: format(date, "MMM"),
      fullDate: format(date, "MMM yyyy"),
      cash: cashRemaining,
      revenue: Math.min(mrrAccumulated, totalCash),
    });
  }
  return data;
};
```

## File: src\utils\cn.js
```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

