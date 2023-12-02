import { describe, it, expect } from "vitest";
import run from "./code.js";

describe("trebuchet", () => {
  it("calibrates with digits", () => {
    const input = `
            1abc2
            pqr3stu8vwx
            a1b2c3d4e5f
            treb7uchet
            `;

    const output = run(input);

    expect(output).toBe(142);
  });

  it("calibrates with words and digits", () => {
    const input = `
            two1nine
            eightwothree
            abcone2threexyz
            xtwone3four
            4nineeightseven2
            zoneight234
            7pqrstsixteen
            `;

    const output = run(input);

    expect(output).toBe(281);
  });

  it("calibrates special case", () => {
    expect(run("3xtwone")).toBe(31);
  });
});
