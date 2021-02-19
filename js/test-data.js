'use strict';

import {getRandomFloat, getRandomInt, getRandomArrayElement, getRandomArrayElements} from './util.js';

/**
 * List of housing types
 * @type {string[]}
 */
const HousingTypes = ['palace', 'flat', 'house', 'bungalow'];

/**
 * List times of checkin and checkout
 * @type {string[]}
 */
const CheckTimes = ['12:00', '13:00', '14:00'];

/**
 * List of housing futures
 * @type {string[]}
 */
const HousingFutures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

/**
 * List of housing photos
 * @type {string[]}
 */
const HousingPhotos = [
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
  this.type = getRandomArrayElement(HousingTypes);
  this.rooms = getRandomInt(1, 11);
  this.guests = getRandomInt(1, 11);
  this.checkin = getRandomArrayElement(CheckTimes);
  this.checkout = getRandomArrayElement(CheckTimes);
  this.features = getRandomArrayElements(HousingFutures);
  this.description = 'Описание тестового объявления';
  this.photos = getRandomArrayElements(HousingPhotos);
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

export {TestHousing};
