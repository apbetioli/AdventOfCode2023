import fs from "fs";
import { default as run, minimumSetPower } from "./code.js";

export function readFile(file) {
  return fs.readFileSync(file).toString();
}

const input = readFile("./input.txt");

console.log('possible games', run(input));
console.log('minimum set power', minimumSetPower(input))
