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

/**
 * Getting a random element from array.
 * @param {Array.<Object>} array An array for getting an element
 * @returns {Object}
 */
const getRandomArrayElement = (array) =>  {
  if (array.length === 0) {
    return null;
  }
  return array[getRandomInt(0, array.length)];
};


/**
 * Getting a random count random unique elements from array.
 * @param {Array.<Object>} array An array for getting an elements
 * @returns {Array.<Object>}
 */
const getRandomArrayElements = (array) => {
  const result = [];

  for (let i = 0; i <= getRandomInt(0, array.length); i++) {
    result.push(getRandomArrayElement(array))
  }

  return result.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

export {getRandomFloat, getRandomInt, getRandomArrayElement, getRandomArrayElements};
