import * as isActive from "./activity-functions";

describe("activity functions", () => {
  it("verifies that the navbar is always active", () => {
    expect(isActive.navbar(location)).toBe(true);
  });
});
