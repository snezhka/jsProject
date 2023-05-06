import { Advertisment } from './advertisement.js';

export function generateArrayOfObjects(numberOfObjects) {
  return Array(numberOfObjects)
    .fill(null)
    .map(() => new Advertisment());
}