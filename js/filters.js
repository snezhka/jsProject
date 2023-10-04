
import { removeAllMarkerNodes } from './markup-generation.js';
import { addMarkers } from './map.js';

export function filterAllOffers(evt, arr){
  const type = document.querySelector('#housing-type');
  const price = document.querySelector('#housing-price');
  const rooms = document.querySelector('#housing-rooms');
  const guests = document.querySelector('#housing-guests');
  const features = Array.from(document.querySelectorAll('input[name=features]:checked'));
  function isGuestsValid(elem) {
    if (guests.value == 'any') return true;
    else return elem.guests == +guests.value; 
  }
  function isRoomsValid(elem) {
    if (rooms.value == 'any') return true;
    else return elem.rooms == +rooms.value; 
  }
  function isTypeValid(elem) {
    if (type.value == 'any') return true;
    else return elem.type == type.value;
  }
  function isPriceValid(elem) {
    switch(price.value) {
      case 'any':
        return true;
      case 'middle':
        return elem.price > 10000 && elem.price < 50000;
      case 'low':
        return elem.price < 10000;
      case 'high':
        return elem.price > 50000;
    }
  }
  function isFeatureValid(elem){
    if (features.length == 0) return true;
    else {
      return features.every(f => elem.features.includes(f.value));
    }
  }

  const filteredArray = arr.filter(elem => isGuestsValid(elem) && isRoomsValid(elem) && isTypeValid(elem) && isPriceValid(elem) && isFeatureValid(elem));
  removeAllMarkerNodes();
  addMarkers(filteredArray);
}





