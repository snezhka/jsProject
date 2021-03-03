'use strict';

import {getRandomFloat, getRandomInt, getRandomArrayElement, getRandomArrayElements} from '../util.js';
import {HOUSING_TYPES} from './references.js'

/**
 * List times of checkin and checkout
 * @type {string[]}
 */
const CHECK_TIMES = ['12:00', '13:00', '14:00'];

/**
 * List of housing futures
 * @type {string[]}
 */
const HOUSING_FUTURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

/**
 * List of housing photos
 * @type {string[]}
 */
const HOUSING_PHOTOS = [
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
  this.type = getRandomArrayElement(Object.keys(HOUSING_TYPES));
  this.rooms = getRandomInt(1, 11);
  this.guests = getRandomInt(1, 11);
  this.checkin = getRandomArrayElement(CHECK_TIMES);
  this.checkout = getRandomArrayElement(CHECK_TIMES);
  this.features = getRandomArrayElements(HOUSING_FUTURES);
  this.description = 'Описание тестового объявления';
  this.photos = getRandomArrayElements(HOUSING_PHOTOS);
};

/**
 * ctor random housing data
 * @constructor
 */
const TestHousing = function () {
  this.author =  new TestAuthor();
  this.location = new TestLocation();
  this.offer = new TestOffer(this.location);
};

export {TestHousing};
