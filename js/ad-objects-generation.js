import Advertisment from './advertisement.js';

export function generateArrayOfObjects(numberOfObjects) {
  const array = Array(numberOfObjects)
    .fill(null)
    .map(() => new Advertisment());
  // eslint-disable-next-line no-console
  array.forEach((el) => console.log(el));
  return array;
}