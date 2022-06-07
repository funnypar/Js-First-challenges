"use strict";

const dogs = [
  { dog: 1, weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
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

//task3

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach((e) => {
  e.curFood > 250
    ? ownersEatTooMuch.push(e.owners)
    : ownersEatTooLittle.push(e.owners);
});
console.log(ownersEatTooMuch.flat());
console.log(ownersEatTooLittle.flat());

//task4
const [sarah, John, micheal] = [...ownersEatTooMuch.flat()];
console.log(`${sarah} and ${John} and ${micheal}'s dog eats too much`);

const [alice, bob, matilda] = [...ownersEatTooLittle.flat()];
console.log(`${alice} and ${bob} and ${matilda}'s dog eats too little`);

//task5
// console.log(dogs.some((e) => console.log(e.curFood === 200)));

//task6
console.log(dogs.some((e) => console.log(e.curFood <= 250)));
