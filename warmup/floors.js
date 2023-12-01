export function floors(directions) {
  let level = 0;
  for (const d of directions) {
    if (d === "(") level++;
    else if (d === ")") level--;
  }
  return level;
}

export function basement(directions) {
  let level = 0;
  let pos = 0;
  for (const d of directions) {
    pos++;
    if (d === "(") level++;
    else if (d === ")") level--;
    if (level === -1) return pos;
  }
  return 0; //?
}
