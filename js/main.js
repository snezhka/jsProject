'use strict';

import {AdForm} from './ad-form.js';
import {FilterForm} from './filter-form.js';
import {Map} from './map.js';

const adForm = new AdForm();
const filterForm = new FilterForm();

adForm.clear();
adForm.toggleActive(false);
filterForm.toggleActive(false);

const map = new Map({
  onLoad: () => {
    adForm.toggleActive(true);
    filterForm.toggleActive(true);
  },
  onCoordsChange: (coords) => {
    // TODO Вызвать обновление адреса на форме
  },
});
