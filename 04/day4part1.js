export default function run(input) {
  return input
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => parseCard(line))
    .map((card) => calculatePoints(card))
    .reduce((prev, curr) => prev + curr);
}

export function parseCard(cardStr) {
  const [winning, yours] = cardStr
    .replace(/\s+/g, " ")
    .split(":")[1]
    .split("|")
    .map((numbers) =>
      numbers
        .trim()
        .split(" ")
        .map((str) => parseInt(str.trim()))
    );

  return {
    winning,
    yours,
  };
}

export function calculatePoints(card) {
  const remaining = new Set(card.yours);
  let count = 0;
  for (const num of card.winning) {
    if (remaining.has(num)) {
      count++;
    }
  }
  return count > 0 ? Math.pow(2, count - 1) : 0;
}
