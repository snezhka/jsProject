import { filterAllOffers } from './js/filters.js';
import { disablePage, enablePage } from './js/form.js';

const mapCanvas = document.querySelector('#map-canvas');
const mapFilters = document.querySelector('.map__filters');
let offers;
try {
  const arr = await fetch('http://localhost:8080/offers');
  offers = await arr.json();
} catch(err) {
  console.log('Error during fetching data');
  offers = null;
}

window.addEventListener('load', disablePage);
mapCanvas.addEventListener('dblclick', function () {enablePage(offers)});

mapFilters.addEventListener('change', function(evt){
  filterAllOffers(evt, offers)
});



