import fs from "fs";
import part1 from "./day4part1.js";
import part2 from "./day4part2.js";

export function readFile(file) {
  return fs.readFileSync(file).toString();
}

const input = readFile("./input.txt");

console.log("part1", part1(input));
console.log("part2", part2(input));
