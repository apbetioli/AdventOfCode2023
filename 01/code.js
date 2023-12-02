export default function run(input) {
  return input
    .split("\n")
    .map((line) => {
      const re = /\d|one|two|three|four|five|six|seven|eight|nine|zero/;
      let str = line;
      let res;
      const matches = [];
      while ((res = str.match(re))) {
        matches.push(parse(res));
        const idx = str.indexOf(res);
        str = str.substring(idx + 1);
      }
      return matches;
    })
    .map((numbers) =>
      numbers.length ? numbers[0] * 10 + numbers[numbers.length - 1] : 0
    )
    .reduce((prev, curr) => prev + curr);
}

const numberMap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function parse(number) {
  return numberMap[number] ?? parseInt(number);
}
