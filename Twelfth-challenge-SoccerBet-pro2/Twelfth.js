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

const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);
// Your answer :

// 1

const eventsArray = [...gameEvents];

// console.log(eventsArray);

//2

eventsArray.splice(4, 1);

// console.log(eventsArray);

//3

console.log(
  `An event happend, an average, every ${Number(90 / gameEvents.size)} minutes`
);

//4

for (const event of eventsArray) {
  if (event[0] <= 45) {
    console.log(`[FIRST HALF] ${event[0]} : ${event[1]}`);
  } else {
    console.log(`[SECOND HALF] ${event[0]} : ${event[1]}`);
  }
}

// Jonas Answer :

//1

const events = [...new Set(gameEvents.values())];
console.log(events);

//2

gameEvents.delete(64);

//3      :     Same as main !

//4

for (const [min, happend] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF ${min} : ${happend}`);
}
