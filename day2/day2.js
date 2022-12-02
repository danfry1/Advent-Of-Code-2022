const fs = require("fs");

const results = fs.readFileSync(__dirname + "/day2.txt", "utf-8");

const shapeSelected = (a) => {
  if (!a) return;
  if (a === "A" || a === "X") return 1;
  if (a === "B" || a === "Y") return 2;
  if (a === "C" || a === "Z") return 3;
};

const winChecker = (a, b) => {
  if (!a || !b) return;
  if (b - a === 1 || b - a === -2) return 6;
  if (a === b) return 3;
  return 0;
};

const totalScore = (score) => {
  return score
    .split("\n")
    .map((a) => a.split(" "))
    .map(([a, b]) => {
      const opponent = shapeSelected(a);
      const you = shapeSelected(b);
      return winChecker(opponent, you) + you;
    })
    .reduce((a, b) => a + b);
};

totalScore(results);
