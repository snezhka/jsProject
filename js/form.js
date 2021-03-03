'use strict';

import {HOUSING_TYPES} from './data/references.js'

const adForm = document.querySelector('.ad-form');
const housingTypeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');

const setMinPrice = (minPrice) => {
  priceInput.placeholder = minPrice;
  priceInput.min = minPrice;
};

const getMinPriceByHousingType = (housingType) => {
  return HOUSING_TYPES[housingType].minPrice;
};

const onHousingTypeInputChange = (evt) => {
  const housingType = evt.target.value;
  setMinPrice(getMinPriceByHousingType(housingType));
};

const init = () => {
  housingTypeInput.addEventListener('change', onHousingTypeInputChange);
  setMinPrice(getMinPriceByHousingType(housingTypeInput.value));
};

init();
