'use strict'
//Variables
let billArray = [];
let tipArray = [];
let totalArray = [];
//Function
const calTip = function (bill) {
    if (bill >= 50 && bill <= 300){
        const tipBill = bill * 0.15 ;
        const lastBill = bill - tipBill ;
        billArray.push(lastBill);
        tipArray.push(0.15);
        totalArray.push(`${lastBill} + %15 tip`);
    }else{
        const tipBill = bill * 0.2 ;
        const lastBill = bill - tipBill ;
        billArray.push(lastBill);
        tipArray.push(0.2);
        totalArray.push(`${lastBill} + %20 tip`);
    }
}

calTip(100)
calTip(125)
calTip(555)
calTip(44)

// console.log(billArray);
// console.log(tipArray);
console.log(totalArray);
