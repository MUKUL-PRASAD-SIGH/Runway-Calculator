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
