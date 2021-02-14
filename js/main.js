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

/**
 * List of housing types
 * @type {string[]}
 */
const housingTypes = ['palace', 'flat', 'house', 'bungalow'];

/**
 * List times of checkin and checkout
 * @type {string[]}
 */
const checkTimes = ['12:00', '13:00', '14:00'];

/**
 * List of housing futures
 * @type {string[]}
 */
const housingFutures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

/**
 * List of housing photos
 * @type {string[]}
 */
const housingPhotos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

/**
 * ctor random author data
 * @constructor
 */
const TestAuthor = function () {
  const AVATARS_PATH = 'img/avatars/';
  const avatarFileName = `user0${getRandomInt(1, 9)}.png`;
  this.avatar = AVATARS_PATH + avatarFileName;
};

/**
 * ctor random location data
 * @constructor
 */
const TestLocation = function () {
  this.x = getRandomFloat(35.65, 35.7, 5);
  this.y = getRandomFloat(139.7, 139.8, 5);
};

/**
 * ctor random offer data
 * @param location
 * @constructor
 */
const TestOffer = function (location) {
  location = location || new TestLocation();

  this.title = 'Тестовое объявление';
  this.address = `${location.x}, ${location.y}`;
  this.price = getRandomFloat(1, 10000, 2);
  this.type = getRandomArrayElement(housingTypes);
  this.rooms = getRandomInt(1, 11);
  this.guests = getRandomInt(1, 11);
  this.checkin = getRandomArrayElement(checkTimes);
  this.checkout = getRandomArrayElement(checkTimes);
  this.features = getRandomArrayElements(housingFutures);
  this.description = 'Описание тестового объявления';
  this.photos = getRandomArrayElements(housingPhotos);
};

/**
 * ctor random housing data
 * @constructor
 */
const TestHousing = function () {
  const location = new TestLocation();

  this.author =  new TestAuthor();
  this.offer = new TestOffer(location);
  this.location = location;
};

const housings = new Array(10).fill(null).map(() => new TestHousing());

// eslint-disable-next-line no-console
console.log(housings)
