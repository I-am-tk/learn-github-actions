// sum.test.js
import { expect, test } from "vitest";
import { add, substract } from "./math.js";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("substract 3 - 5 to equal -2", () => {
  expect(substract(3, 5)).toBe(-2);
});
