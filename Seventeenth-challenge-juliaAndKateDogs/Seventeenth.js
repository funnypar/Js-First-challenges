"use strict";

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

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
checkDogs(juliaDogs, kateDogs);
