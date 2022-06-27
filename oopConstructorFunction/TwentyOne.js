"use strict";

//Task 1
const Car = function (speed) {
  this.speed = speed;
};

const bmw = new Car(120);
// console.log(bmw);

//Task 2
Car.prototype.accelerate = function () {
  console.log(`New speed : ${this.speed + 10}km/h`);
};
bmw.accelerate();
