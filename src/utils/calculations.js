import { addDays, format, startOfDay } from "date-fns";

/**
 * Core Logic for calculating runway
 * Runway (months) = Total Cash / Monthly Burn
 * @param {number} totalCash - Total available cash
 * @param {number} monthlyBurn - Monthly burn rate
 * @returns {number} Runway in months
 */
export const calculateRunwayMonths = (totalCash, monthlyBurn) => {
  if (monthlyBurn <= 0 || totalCash < 0) return 0;
  return totalCash / monthlyBurn;
};

/**
 * Calculate runway in days (approximate, 30.44 days per month)
 */
export const calculateRunwayDays = (runwayMonths) => {
  return Math.round(runwayMonths * 30.436875);
};

/**
 * Determine the visual state based on runway months
 * @param {number} runwayMonths
 * @returns {'safe' | 'warning' | 'danger'}
 */
export const getRunwayState = (runwayMonths) => {
  if (runwayMonths >= 6) return "safe";
  if (runwayMonths >= 3) return "warning";
  return "danger";
};

/**
 * Calculate the exact survival date
 */
export const calculateSurvivalDate = (runwayMonths) => {
  if (runwayMonths <= 0 || runwayMonths === Infinity) return null;
  const runwayDays = calculateRunwayDays(runwayMonths);
  const targetDate = addDays(startOfDay(new Date()), runwayDays);
  return format(targetDate, "dd MMM yyyy");
};

/**
 * Format currency in Indian Rupees
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
