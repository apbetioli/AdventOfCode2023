import fs from "fs";
import { calibrate } from "./trebuchet.js";

export function readFile(file) {
  return fs.readFileSync(file).toString();
}

const input = readFile("./input.txt");

console.log(calibrate(input));
