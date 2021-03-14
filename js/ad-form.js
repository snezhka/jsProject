'use strict';

import {HOUSING_TYPES} from './data/references.js'

const COORDS_DIGITS = 5

/**
 * class for managing the behavior of the ad form.
 * @constructor
 */
const AdForm = function () {
  const form = document.querySelector('.ad-form');
  const housingTypeInput = form.querySelector('#type');
  const priceInput = form.querySelector('#price');
  const timeInInput = form.querySelector('#timein');
  const timeOutInput = form.querySelector('#timeout');
  const addressInput = form.querySelector('#address');
  const clearButton = form.querySelector('.ad-form__reset');

  addressInput.readOnly = true;

  /**
   * Clears the form.
   */
  this.clear = () => {
    form.reset();
    setMinPrice(getMinPriceByHousingType(housingTypeInput.value));
  };

  /**
   * Activates or Deactivates the form, on depending the active param.
   * @param {boolean} active
   */
  this.toggleActive = (active = true) => {
    if (active) {
      form.classList.remove('ad-form--disabled');
    } else {
      form.classList.add('ad-form--disabled');
    }

    const fieldsets = form.querySelectorAll('fieldset');
    fieldsets.forEach((fieldset) => {
      fieldset.disabled = !active;
    });
  };

  /**
   * Sets the location into the advertising (sets the coordinations into the address field).
   * @param location
   */
  this.setLocation = (location) => {
    addressInput.value = `${location.lat.toFixed(COORDS_DIGITS)}, ${location.lng.toFixed(COORDS_DIGITS)}`;
  };

  const setMinPrice = (minPrice) => {
    priceInput.placeholder = minPrice;
    priceInput.min = minPrice;
  };

  const getMinPriceByHousingType = (housingType) => {
    return HOUSING_TYPES[housingType].minPrice;
  };

  housingTypeInput.addEventListener('change', () => {
    setMinPrice(getMinPriceByHousingType(housingTypeInput.value));
  });

  timeInInput.addEventListener('change', () => {
    timeOutInput.value = timeInInput.value;
  });

  timeOutInput.addEventListener('change', () => {
    timeInInput.value = timeOutInput.value;
  });

  clearButton.addEventListener('click', () => {
    this.clear();
  });
}

export {AdForm};
