export function calculateScoreDifference(totals: number[]): number {
  if (totals.length < 2) return 0;
  return Math.max(...totals) - Math.min(...totals);
}
