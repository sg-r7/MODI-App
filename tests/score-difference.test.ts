import { describe, expect, it } from "vitest";
import { calculateScoreDifference } from "../lib/score-difference";

describe("calculateScoreDifference", () => {
  it("returns the highest total minus the lowest total", () => {
    expect(calculateScoreDifference([25, 5, 15, 100])).toBe(95);
  });

  it("returns zero when totals are equal or there are fewer than two teams", () => {
    expect(calculateScoreDifference([40, 40])).toBe(0);
    expect(calculateScoreDifference([40])).toBe(0);
    expect(calculateScoreDifference([])).toBe(0);
  });
});
