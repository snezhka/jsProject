import { filterAllOffers } from './js/filters.js';
import { disablePage, enablePage } from './js/form.js';

const mapFilters = document.querySelector('.map__filters');
let data;
window.addEventListener('load', disablePage);
fetch('http://localhost:8080/offers').then(data => data.json()).then(offers => {
  data = offers;  
  enablePage(offers);
}).catch(err => console.log(err.message));

mapFilters.addEventListener('change', function(evt){
  filterAllOffers(evt, data)
});



