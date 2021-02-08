'use strict';

/**
 * Getting a random integer number between two values.
 * @param {number} min First value.
 * @param {number} max Second value.
 * @returns {number}
 */
const getRandomInt = (min, max) => {
  return Math.floor(getRandomFloat(min, max, 1));
};

/**
 * Getting a random decimal number between two values with a given precision.
 * @param {number} min First value.
 * @param {number} max Second value.
 * @param {number} digits The number of digits to appear after the decimal point.
 * @returns {number}
 */
const getRandomFloat = (min, max, digits) => {
  if (min < 0) {
    throw 'min value must be positive number.';
  }

  if (max < 0) {
    throw 'max value must be positive number.';
  }

  if (max <= min) {
    throw 'max value must be more than min.';
  }

  const result = Math.random() * (max - min) + min;
  return parseFloat(result.toFixed(digits));
};

// eslint-disable-next-line no-console
console.log(getRandomInt(0, 100));

// eslint-disable-next-line no-console
console.log(getRandomFloat(0, 100, 5));
