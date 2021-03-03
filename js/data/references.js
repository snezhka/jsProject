'use strict';

/**
 * Dictionary of housing types
 * @type {object}
 */
const HOUSING_TYPES = {
  'bungalow': {
    title: 'Бунгало',
    minPrice: 0
  },
  'flat': {
    title: 'Квартира',
    minPrice: 1000
  },
  'house': {
    title: 'Дом',
    minPrice: 5000
  },
  'palace': {
    title: 'Дворец',
    minPrice: 10000
  }
};

export {HOUSING_TYPES}
