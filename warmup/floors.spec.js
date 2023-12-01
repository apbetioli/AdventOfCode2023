import { it, expect } from "vitest";

import { floors, basement } from "./floors.js";

it("works with examples", () => {
  expect(floors("(())")).toBe(0);
  expect(floors("()()")).toBe(0);
  expect(floors("(((")).toBe(3);
  expect(floors("(()(()(")).toBe(3);
});

it("enters the basement", () => {
  expect(basement(")")).toBe(1);
  expect(basement("()())")).toBe(5);
});
