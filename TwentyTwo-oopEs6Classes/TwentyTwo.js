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
  get speedUS() {
    return `speed is ${this.speed / 1.6} mi/h`;
  }
  //Added task 3
  set speedUs(speed) {
    this.speed = speed / 1.6;
  }
}

const bmw = new Car(120);
const mercedes = new Car(100);

//BMW
bmw.accelerate();
bmw.brake();
console.log(bmw.speedUS);
bmw.speedUs = 120;
console.log(`Now the current speed is :${bmw.speed}`);
//Mercedes
mercedes.accelerate();
mercedes.brake();
console.log(mercedes.speedUS);
mercedes.speedUs = 90;
console.log(`Now the current speed is :${mercedes.speed}`);
