const fs = require("fs");

const caloriesList = fs.readFileSync(__dirname + "/day1.txt", "utf8");

function day1(caloriesList, topN = 1) {
  const splitElves = caloriesList
    .split("\n\n")
    .map((x) => x.split("\n").map((x) => Number(x)));

  const rankByCaloriesCarried = splitElves
    .map((a) => a.reduce((acc, curr) => acc + curr))
    .sort((a, b) => b - a);

  const topNElvesTotal = rankByCaloriesCarried
    .slice(0, topN)
    .reduce((a, b) => a + b);

  return topNElvesTotal;
}

day1(caloriesList);
