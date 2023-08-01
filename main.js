import { generateArrayOfObjects } from './js/ad-objects-generation.js';
import { generateMultipleAdsMarkup } from './js/markup-generation.js';
import { disablePage, enablePage } from './js/form.js';

const mapCanvas = document.querySelector('#map-canvas');
const arr = generateArrayOfObjects(3);
// generateMultipleAdsMarkup(arr);
window.addEventListener('load', disablePage);

mapCanvas.addEventListener('dblclick', function () {enablePage(arr)});