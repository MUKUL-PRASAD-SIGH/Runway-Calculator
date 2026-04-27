# Runway Calculator 🚀

A modern, highly visual runway calculator built to help founders and operators understand their financial survival line at a glance.

## 🎯 The Problem

Most financial calculators are boring, static, and require manual recalculations. They output plain text numbers that don't convey urgency or provide visual context. When you're managing startup capital, you need to feel the impact of your burn rate instantly.

## 💡 Why This Design?

I focused on **real-time feedback and visual urgency** to help founders make faster financial decisions. 

- **Color Psychology:** The interface automatically shifts between Safe (Green), Warning (Yellow), and Danger (Red) based on the remaining runway.
- **Micro-interactions:** Smooth animations, glow effects, and dynamic charts make the numbers feel alive and reactive.
- **Clarity over Complexity:** The single-purpose layout removes distractions, focusing entirely on the relationship between Cash, Burn, and Time.

## ✨ Features

- **Real-Time Calculations:** See runway changes instantly as you type or drag the scenario slider.
- **Visual Urgency States:** Dynamic border glows and color transitions (Safe > 6m, Warning < 6m, Danger < 3m).
- **Burn Projection Chart:** A smooth area chart visualizing your cash depletion over the coming months.
- **Exact Survival Date:** Calculates the exact date when cash drops to zero.
- **Scenario Slider:** Instantly "what-if" your burn rate without typing.
- **Indian Rupee Formatting:** Automatic `₹` currency formatting with proper comma placement (e.g., 15,00,000).
- **Dark Mode Support:** Built-in toggle for a sleek, premium dark experience.

## 🛠️ Tech Stack

- **React (Vite)**: Fast, modern UI development.
- **Tailwind CSS**: Utility-first styling for quick, responsive, and beautiful designs.
- **Recharts**: For the smooth, responsive burn projection area chart.
- **Lucide React**: Clean, modern iconography.
- **date-fns**: Accurate date calculations for the survival out-date.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```


