"use strict";

const juliaDogs1 = [3, 5, 2, 12, 7];
const kateDogs1 = [4, 1, 15, 8, 3];

const juliaDogs2 = [9, 16, 6, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];

const checkDogs = function (arrayJ, arrayK) {
  const newJuliaDogs = arrayJ.slice(1, 3);
  const bothDogs = newJuliaDogs.concat(arrayK);
  console.log(bothDogs);
  bothDogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
checkDogs(juliaDogs1, kateDogs1);
checkDogs(juliaDogs2, kateDogs2);
