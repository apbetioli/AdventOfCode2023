import fs from "fs";
import run from "./code.js";

export function readFile(file) {
  return fs.readFileSync(file).toString();
}

const input = readFile("./input.txt");

console.log(run(input));
