"use strict";

// Added task 1
const Car = function (speed) {
  this.speed = speed;
};

const EV = function (speed, charge) {
  Car.call(this, speed);
  this.charge = charge;
};
// Added task 2
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`new charge is ${this.charge}`);
};
//Tesla
const tesla = new EV(120, 20);
tesla.chargeBattery(23);
