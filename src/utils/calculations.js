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
