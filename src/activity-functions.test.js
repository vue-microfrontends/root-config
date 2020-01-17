import * as isActive from "./activity-functions";

describe("activity functions", () => {
  let location;

  beforeEach(() => {
    location = {
      pathname: "/"
    };
  });

  it("verifies that the navbar is always active", () => {
    expect(isActive.navbar(location)).toBe(true);
  });

  it("activates dog dashboard on correct routes", () => {
    expect(isActive.dogsDashboard(location)).toBe(false);
    location.pathname = "/view-doggos";
    expect(isActive.dogsDashboard(location)).toBe(true);
    location.pathname = "/rate-doggos";
    expect(isActive.dogsDashboard(location)).toBe(false);
  });
});
