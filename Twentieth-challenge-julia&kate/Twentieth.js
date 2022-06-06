"use strict";

const dogs = [
  { dog: 1, weight: 22, currentFood: 250, owners: ["Alice", "Bob"] },
  { dog: 2, weight: 8, curFood: 200, owners: ["Matilda"] },
  { dog: 3, weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { dog: 4, weight: 32, curFood: 340, owners: ["Micheal"] },
];

//task1
dogs.forEach((e) => {
  e.recommended = Math.abs(Object.values(e)[1] ** 0.78 * 28);
});

//task2
dogs.find((cur) => {
  if (cur.owners.flat().includes("Sarah") === true) {
    const sarah = cur.owners.flat()[0];
    console.log(`${sarah}'s dog eats too much`);
  }
});
