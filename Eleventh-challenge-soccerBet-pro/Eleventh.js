"use strict";

//Part of question
const game = {
  team1: "Bayern Munich",
  team2: "Manchester United",
  players: [
    [
      "Nuer",
      "alfonso",
      "sule",
      "kimich",
      "boataing",
      "sane",
      "thiago",
      "cotiniho",
      "genabry",
      "lewandowski",
      "muller",
    ],
    [
      "Degea",
      "lindelof",
      "maguaier",
      "wanbisaka",
      "teles",
      "matic",
      "fred",
      "fernandes",
      "pogba",
      "cavani",
      "ronaldo",
    ],
  ],
  score: "0:4",
  scored: ["ronaldo", "fred", "ronaldo", "fernandes"],
  date: "Nov 7th ,2023",
  odds: {
    BayernMunich: 6.5,
    Draw: 3.44,
    ManchesterUnited: 1.33,
  },
};

// Your answer :

// 1;
for (const [index, playerGoal] of game.scored.entries()) {
  console.log(`Goal ${index} : \"${playerGoal}\"`);
}

// 2;
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
console.log(
  `The Average of odds is : ${sum / Object.values(game.odds).length}`
);

//3.
for (const key of Object.keys(game.odds)) {
  console.log(`Odd of victory ${key} : ${game.odds[key]}`);
}

//Bounes
const scores = {};
for (const players of game.scored) {
  if (Object.keys(scores).includes(players)) {
    scores[players] += 1;
  } else {
    scores[players] = 1;
  }
}
console.log(scores);
