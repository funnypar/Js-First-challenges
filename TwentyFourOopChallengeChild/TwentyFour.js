"use strict";

//Challenge question
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

//Added Task 1
class EVCl extends CarCl {
  //Added Task 2
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  set chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelarate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
  }
}
