export default function run(input) {
  const games = input
    .split("\n")
    .filter((line) => line.startsWith("Game"))
    .map((line) => parseGame(line));

  return games
    .map((game) => (isPossible(game) ? game.id : 0))
    .reduce((sum, curr) => sum + curr);
}

export function parseGame(line) {
  const [prefix, reveals] = line.split(":");
  const game = {
    id: parseInt(prefix.split(" ")[1]),
    blue: 0,
    green: 0,
    red: 0,
  };

  reveals.split(";").forEach((reveal) => {
    reveal.split(",").forEach((colorAndNumber) => {
      const [num, color] = colorAndNumber.trim().split(" ");
      game[color] = Math.max(game[color] || 0, parseInt(num));
    });
  });

  return game;
}

export function isPossible(game) {
  return game.red <= 12 && game.green <= 13 && game.blue <= 14;
}
