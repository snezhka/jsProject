'use strict';

// TODO Добавить описание
const FilterForm = function () {
  const form = document.querySelector('.map__filters');

  // TODO Добавить описание
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
