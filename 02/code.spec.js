import { describe, it, expect } from "vitest";
import {
  default as run,
  parseGame,
  isPossible,
  power,
  minimumSetPower,
} from "./code.js";

describe("cube conundrum", () => {
  it("parses one game", () => {
    const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const game = parseGame(input);
    expect(game).toEqual({
      id: 1,
      blue: 6,
      green: 2,
      red: 4,
    });
  });

  it("checks if game is possible", () => {
    const game = {
      id: 1,
      blue: 6,
      green: 2,
      red: 4,
    };
    expect(isPossible(game)).toBe(true);
  });

  it("checks if game isn't possible", () => {
    const game = {
      id: 1,
      blue: 6,
      green: 2,
      red: 20,
    };
    expect(isPossible(game)).toBe(false);
  });

  it("example", () => {
    const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;

    const output = run(input);

    expect(output).toBe(8);
  });

  it("calculates the power of game 1", () => {
    const game = {
      id: 1,
      blue: 6,
      green: 2,
      red: 4,
    };
    expect(power(game)).toBe(48);
  });

  it("calculates the power of game 3", () => {
    const game = {
      id: 3,
      blue: 6,
      green: 13,
      red: 20,
    };
    expect(power(game)).toBe(1560);
  });

  it("returns the minimum set power", () => {
    const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;

    const output = minimumSetPower(input);

    expect(output).toBe(2286);
  });
});
