import { Advertisment } from './advertisement.js';
import { maxMarkers } from './constants.js';

export function generateArrayOfObjects(numberOfObjects) {
  return Array(numberOfObjects)
    .fill(null)
    .map(() => new Advertisment());
}

export const arr = generateArrayOfObjects(maxMarkers);