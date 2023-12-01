import fs from "fs";
import { floors, basement } from "./floors.js";

export function readFile(file) {
  return fs.readFileSync(file).toString();
}

const input = readFile("./input.txt");

console.log("floors", floors(input));
console.log("basement", basement(input));
