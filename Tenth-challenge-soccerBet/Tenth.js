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
    team1: 6.5,
    x: 3.44,
    team2: 1.33,
  },
};

// Your answer :

//1.
const [player1, player2] = game.players;

//2.
const [gk, ...fieldsplayers] = player1;

//3.
const allPlayers = [...player1, ...player2];

//4.
const finalPlayers = ["sancho", "mactominay", "rashford", ...player1];

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals scored.`);
};

printGoals(...game.scored);

//7.
team1 > team2 && console.log("Manchester has more chance to win the game!");
team1 < team2 && console.log("Bayern has more chance to win the game!");
