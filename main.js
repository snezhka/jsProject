import Advertisment from "./js/advertisement.js";

function generateArrayOfObjects(numberOfObjects) {
  const array = Array(numberOfObjects)
    .fill(null)
    .map(() => new Advertisment());
  array.forEach(console.log);
  return array;
}

generateArrayOfObjects(5);
