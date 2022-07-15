"use strict";

const createImg = function (path) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
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

createImg("./46497ss.png")
  .then((image) => console.log(`I have one image`))
  .catch((err) => console.error(err));
