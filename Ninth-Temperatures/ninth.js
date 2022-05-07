/* TODO :
   1.create an array with 'arr' name .
   2.create the loop for each time .
   3.create the function 'printForecast' that get input and do func
   4.creat let variable to + all strings in there
*/
"use strict";
//variables
// const arr = [17, 21, 23];
const arr = [12, 5, -5, 0, 4];
let tempLog = ``;
//functions

//loop
for (let i = 0; i < arr.length; i++) {
  function printForecast(temp) {
    tempLog += `... ${temp} C in ${i + 1} days ...`;
  }
  printForecast(arr[i]);
}

console.log(tempLog);
