"use strict";

// Added task 1
const Car = function (speed) {
  this.speed = speed;
};

const EV = function (speed, charge) {
  Car.call(this, speed);
  this.charge = charge;
};
