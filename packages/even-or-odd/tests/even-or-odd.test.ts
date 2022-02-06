import { evenOrOdd } from "../index";

describe("evenOrOdd", () => {
  test("it detects even numbers", () => {
    expect(evenOrOdd(0)).toBe("even");
    expect(evenOrOdd(2)).toBe("even");
  });

  test("it detects odd numbers", () => {
    expect(evenOrOdd(1)).toBe("odd");
    expect(evenOrOdd(3)).toBe("odd");
  });
});
