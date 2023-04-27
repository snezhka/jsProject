import Advertisment from "./js/advertisement.js";

function generateArrayOfObjects(numberOfObjects) {
  let array = Array(numberOfObjects)
    .fill(null)
    .map(() => new Advertisment());
  array.forEach((el) => console.log(el));
  return array;
}

generateArrayOfObjects(5);
