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
  //Added task 2
  get speedUs() {
    return `speed is ${this.speed / 1.6} mi/h`;
  }
}

const bmw = new Car(120);
const mercedes = new Car(120);

//BMW
bmw.accelerate();
bmw.brake();
console.log(bmw.speedUs);
//Mercedes
mercedes.accelerate();
mercedes.brake();
console.log(mercedes.speedUs);
