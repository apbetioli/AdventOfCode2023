export default function run(input) {
  const schematic = parseSchematic(input);
  const numbers = [];

  for (let row = 0; row < schematic.length; row++) {
    let current = "";
    let hasSymbol = false;

    for (let col = 0; col < schematic[row].length; col++) {
      if (schematic[row][col].match(/[0-9]/)) {
        current += schematic[row][col];
        if (!hasSymbol && hasAdjacentSymbol(schematic, [row, col])) {
          hasSymbol = true;
        }
        continue;
      }
      if (hasSymbol) {
        numbers.push(parseInt(current));
      }
      current = "";
      hasSymbol = false;
    }

    if (hasSymbol) {
      numbers.push(parseInt(current));
    }
    current = "";
    hasSymbol = false;
  }

  return numbers.reduce((prev, curr) => prev + curr, 0);
}

export function parseSchematic(input) {
  return input.split("\n").filter((line) => line.trim().length);
}

export function adj(position, size) {
  const [x, y] = position;
  const [maxX, maxY] = size;
  const positions = [];
  for (let _y = Math.max(0, y - 1); _y <= Math.min(y + 1, maxY - 1); _y++) {
    for (let _x = Math.max(0, x - 1); _x <= Math.min(x + 1, maxX - 1); _x++) {
      if (x === _x && y === _y) {
        continue;
      }
      positions.push([_x, _y]);
    }
  }
  return positions;
}

export function hasAdjacentSymbol(schematic, position) {
  const size = [schematic.length, schematic[0].length];
  for (const p of adj(position, size)) {
    if (!schematic[p[0]][p[1]].match(/[0-9\.]/)) {
      return true;
    }
  }
  return false;
}
