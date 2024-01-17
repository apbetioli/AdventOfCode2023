export default function run(input) {
  const cards = input
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => parseCard(line))
    .map((card) => ({
      count: 1,
      matching: calculatePoints(card),
    }));

  let total = 0;
  for (let c = 0; c < cards.length; c++) {
    total += cards[c].count;
    for (let m = 0; m < cards[c].matching; m++) {
      cards[c + 1 + m].count += cards[c].count;
    }
  }
  return total;
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
  return count;
}
