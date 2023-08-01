import { typePrice } from './constants.js';
import { initializeMap } from './map.js';

const type = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const adFieldSets = document.querySelectorAll('.ad-form > fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFieldSets = document.querySelectorAll('.map__filters > fieldset');
const mapFieldSelects = document.querySelectorAll('.map__filters > select');
const mapCanvas = document.querySelector('#map-canvas');


function changeTimeInAndOut(timeInput, timeOutput) {
  timeInput.addEventListener( 'change', () => {
    const timeSelectedIndex = timeInput.options.selectedIndex;
    timeOutput.options.selectedIndex = timeSelectedIndex;
  });
}

function changePricePlaceholderOfSelectedType() {
  const priceElem = document.querySelector('#price');
  const priceValue = getTypePrice();
  priceElem.placeholder = `${priceValue}`;
  priceElem.min = `${priceValue}`;
}

changeTimeInAndOut(timeIn,timeOut);
changeTimeInAndOut(timeOut, timeIn);

type.addEventListener( 'change', changePricePlaceholderOfSelectedType);
mapCanvas.addEventListener('dblclick', enablePage);

export function getTypePrice() {
  const selectedType = document.querySelector('#type option:checked');
  return typePrice[selectedType.value];
}

export function disablePage() {
  [adForm, mapFilters].forEach(form => form.classList.add('ad-form--disabled'));
  [adFieldSets, mapFieldSets, mapFieldSelects].forEach(array => array.forEach(elem => elem.setAttribute('disabled', '')));
}

export function enablePage() {
  initializeMap();
  [adForm, mapFilters].forEach(form => form.classList.remove('ad-form--disabled'));
  [adFieldSets, mapFieldSets, mapFieldSelects].forEach(array => array.forEach(elem => elem.removeAttribute('disabled')));
}



