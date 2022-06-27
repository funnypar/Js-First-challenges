"use strict";

//Task 1
const Car = function (speed) {
  this.speed = speed;
};

const bmw = new Car(120);
// console.log(bmw);

//Task 2
Car.prototype.accelerate = function () {
  console.log(`New speed after accelerate : ${this.speed + 10} km/h`);
};
bmw.accelerate();

//Task 3
Car.prototype.brake = function () {
  console.log(`New speed after brake : ${this.speed - 5} km/h
  `);
};
bmw.brake();
