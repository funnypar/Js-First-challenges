"use strict";

// Added task 1
const Car = function (speed) {
  this.speed = speed;
};

const EV = function (speed, charge) {
  Car.call(this, speed);
  this.charge = charge;
};
//needed object
EV.prototype = Object.create(Car.prototype);
// Added task 2
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`new charge is ${this.charge}`);
};
//Added Task 3
EV.prototype.accelarate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `new speed is ${this.speed} km/h . And the charge is ${this.charge}%`
  );
};
//Tesla
const tesla = new EV(120, 20);
tesla.chargeBattery(23);
tesla.accelarate();
