# Runway.ai 🚀

A premium, high-utility financial runway calculator designed for startup founders to visualize their survival line with precision.

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
