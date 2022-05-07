"use strict";
//Variables
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

//Functions

//Loop
for (let i = 0; i <= 9; i++) {
  const calTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
      const tipBill = bill * 0.15;
      const lastBill = bill - tipBill;
      tips.push(0.15);
      total.push(`${lastBill} + %15 tip`);
    } else {
      const tipBill = bill * 0.2;
      const lastBill = bill - tipBill;
      tips.push(0.2);
      total.push(`${lastBill} + %20 tip`);
    }
  };
  calTip(bills[i]);
}

console.log(total);
console.log(tips);
