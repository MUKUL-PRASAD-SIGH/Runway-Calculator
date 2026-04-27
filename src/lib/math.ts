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
