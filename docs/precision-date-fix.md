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
