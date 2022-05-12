"use strict";

//DOM
const textarea = document.querySelector("#textarea");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let arr = [];
  arr.push(textarea.value.split("\n"));
  // console.log(arr);
  for (const datas of arr) {
    for (const data of datas) {
      const where = data.slice(data.indexOf("_") + 1);
      const up = where[0].toUpperCase() + where.slice(1);
      console.log(data.slice(0, data.indexOf("_")) + up);
    }
  }
});
