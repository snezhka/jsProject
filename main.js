import { arr } from './js/ad-objects-generation.js';
import { filterOption } from './js/filters.js';
// import { generateMultipleAdsMarkup } from './js/markup-generation.js';
import { disablePage, enablePage } from './js/form.js';

const mapCanvas = document.querySelector('#map-canvas');
// generateMultipleAdsMarkup(arr);
window.addEventListener('load', disablePage);

mapCanvas.addEventListener('dblclick', function () {enablePage(arr)});

const mapFilters = document.querySelector('.map__filters');
mapFilters.addEventListener('change', filterOption);
