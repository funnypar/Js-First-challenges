"use strict";

// Tests data
const test1 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  return humanAges;
};

console.log(calcAverageHumanAge(test1));
