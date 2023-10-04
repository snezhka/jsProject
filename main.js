import { arr } from './js/ad-objects-generation.js';
import { filterAllOffers } from './js/filters.js';
import { disablePage, enablePage } from './js/form.js';

const mapCanvas = document.querySelector('#map-canvas');
const mapFilters = document.querySelector('.map__filters');
window.addEventListener('load', disablePage);
mapCanvas.addEventListener('dblclick', function () {enablePage(arr)});

mapFilters.addEventListener('change', function(evt){
  filterAllOffers(evt, arr)
});

