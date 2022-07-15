"use strict";
const image = document.createElement("img");

const createImg = function (path) {
  return new Promise(function (resolve, reject) {
    image.src = path;
    image.addEventListener("load", function () {
      setTimeout(() => {
        document.body.append(image);
        resolve(image);
      }, 2000);
    });

    image.addEventListener("error", function () {
      reject(new Error("Image not be found"));
    });
  });
};

createImg("./46497.png")
  .then((image) => console.log(`I have one image`))
  .then(() => {
    setTimeout(() => {
      image.style.display = "none";
    }, 2000);
  })
  .catch((err) => console.error(err));
