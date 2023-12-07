import { describe, expect, it } from "vitest";
import { adj, run, hasAdjacentSymbol, ratio } from "./code.js";

describe("gear ratios", () => {
  it("example", () => {
    const input = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

    const output = run(input);

    expect(output).toBe(4361);
  });

  it("gets adjacent positions of position start", () => {
    const position = [0, 0];
    const size = [10, 10];
    const adjacentIndexes = [
      [1, 0],
      [0, 1],
      [1, 1],
    ];
    expect(adj(position, size)).toEqual(adjacentIndexes);
  });

  it("gets adjacent positions of position end", () => {
    const position = [9, 9];
    const size = [10, 10];
    const adjacentIndexes = [
      [8, 8],
      [9, 8],
      [8, 9],
    ];
    expect(adj(position, size)).toEqual(adjacentIndexes);
  });

  it("returns if a symbol is in the list of adjacent positions", () => {
    const schematic = ["467..114..", "...*......"];

    expect(hasAdjacentSymbol(schematic, [0, 2])).toEqual(["*", 1, 3]);
    expect(hasAdjacentSymbol(schematic, [0, 0])).toBe(false);
  });

  it("has numbers at the end", () => {
    const input = `
467..114.
...*.....
..35..633
......#..
617*.....
.....+.58
..592....
......755
...$.*...
.664.598.
`;

    const output = run(input);

    expect(output).toBe(4361);
  });

  it("calculates gear ratios", () => {
    const input = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

    const output = ratio(input);

    expect(output).toBe(467835);
  });
});
