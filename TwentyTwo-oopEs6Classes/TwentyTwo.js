"use strict";

// Added task 1
class Car {
  constructor(speed) {
    this.speed = speed;
  }

  accelerate() {
    console.log(`New speed after accelerate : ${this.speed + 10} km/h`);
  }

  brake() {
    console.log(`New speed after brake : ${this.speed - 5} km/h
    `);
  }
}

const bmw = new Car(120);
const mercedes = new Car(120);

//BMW
bmw.accelerate();
bmw.brake();
//Mercedes
mercedes.accelerate();
mercedes.brake();
