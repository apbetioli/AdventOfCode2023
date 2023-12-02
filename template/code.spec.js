import { describe, it, expect } from "vitest";
import run from "./code.js";

describe("template", () => {
  it("todo", () => {
    const input = `todo`;

    const output = run(input);

    expect(output).toBe('todo');
  });
});
