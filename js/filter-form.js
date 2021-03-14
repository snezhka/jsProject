'use strict';

/**
 * class for managing the behavior of the filter form.
 * @constructor
 */
const FilterForm = function () {
  const form = document.querySelector('.map__filters');

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

    const selects = form.querySelectorAll('select');
    selects.forEach((select) => {
      select.disabled = !active;
    });
  };
}

export {FilterForm};
