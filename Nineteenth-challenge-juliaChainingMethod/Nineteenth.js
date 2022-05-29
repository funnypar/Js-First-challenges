"use strict";

// Tests data
const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((dog) => dog > 2)
    .reduce((acc, cur, i, arr) => (acc + cur) / arr.length, 0);

  return humanAges;
};
console.log(calcAverageHumanAge(test1));
console.log(calcAverageHumanAge(test2));
