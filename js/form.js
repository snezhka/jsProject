import { typePrice } from './constants.js';
import { initializeMap, mainMarker, addMarkers } from './map.js';

const type = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const adFieldSets = document.querySelectorAll('.ad-form > fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFieldSets = document.querySelectorAll('.map__filters > fieldset');
const mapFieldSelects = document.querySelectorAll('.map__filters > select');
const mapCanvas = document.querySelector('#map-canvas');
const address = document.querySelector('#address');
const button = document.querySelector('.ad-form__submit');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');



function changeTimeInAndOut(timeInput, timeOutput) {
  timeInput.addEventListener('change', () => {
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

changeTimeInAndOut(timeIn, timeOut);
changeTimeInAndOut(timeOut, timeIn);

type.addEventListener('change', changePricePlaceholderOfSelectedType);
mapCanvas.addEventListener('dblclick', enablePage);

export function getTypePrice() {
  const selectedType = document.querySelector('#type option:checked');
  return typePrice[selectedType.value];
}

export function disablePage() {
  [adForm, mapFilters].forEach(form => form.classList.add('ad-form--disabled'));
  [adFieldSets, mapFieldSets, mapFieldSelects].forEach(array => array.forEach(elem => elem.setAttribute('disabled', '')));
}

export function enablePage(arr) {
  initializeMap();
  addMarkers(arr);
  showAddressCoords();
  [adForm, mapFilters].forEach(form => form.classList.remove('ad-form--disabled'));
  [adFieldSets, mapFieldSets, mapFieldSelects].forEach(array => array.forEach(elem => elem.removeAttribute('disabled')));
}

function showAddressCoords() {
  address.setAttribute('readonly', '');
  address.value = new String(mainMarker.getLatLng()).slice(7, -1);
  mainMarker.addEventListener('drag', function () {
    address.value = new String(mainMarker.getLatLng()).slice(7, -1);
  });
}

function validateForm() {
  validateTitle();
  validatePrice();
  validateRoomsGuests();

}

function validateTitle() {
  const title = document.querySelector('#title');
  title.setCustomValidity('');
  if (title.value.length < 30 || title.value.length > 100) {
    title.setCustomValidity('Длина заголовка объявления должна быть от 30 до 100 символов');
  }
  if (+title.value) {
    title.setCustomValidity('Заголовок объявления должен содержать только текстовые символы');

  }
  title.reportValidity();
}

function validatePrice() {
  const price = document.querySelector('#price');
  if (+price.value > 1000000) {
    price.setCustomValidity('Максимальное значение цены должно быть 1000000');
  }
  else if (!+price.value) {
    price.setCustomValidity('Цена должна содержать только число');
  }
  else {
    price.setCustomValidity('');
  }
  price.reportValidity();
}

function validateRoomsGuests() {
  const rooms = +roomNumber.value;
  const guests = +capacity.value;
  switch (rooms) {
    case 1:
      if (guests === 1) {
        capacity.setCustomValidity('');
      } else {
        capacity.setCustomValidity('Выбрано неверное кол-во комнат для одного гостя');
        capacity.reportValidity();
      }
      break;
    case 2:
      if (guests === 1 || guests === 2) {
        capacity.setCustomValidity('');
      } else {
        capacity.setCustomValidity('Выбрано неверное кол-во комнат для одного гостя');
        capacity.reportValidity();
      }
      break;
    case 3:
      if (guests === 1 || guests === 2 || guests === 3) {
        capacity.setCustomValidity('');
      } else {
        capacity.setCustomValidity('Выбрано неверное кол-во комнат для одного гостя');
        capacity.reportValidity();
      }
      break;
    case 100: {
      if (guests === 0) {
        capacity.setCustomValidity('');
      } else {
        capacity.setCustomValidity('Не для гостей');
        capacity.reportValidity();
      }
    }
      break;
  }
}


button.addEventListener('click', async function (evt) {
  evt.preventDefault();
  validateForm();
  const formData = new FormData(adForm);
  const form = JSON.stringify(Object.fromEntries(formData));
  console.log(form);
  let response = await fetch('http://localhost:8080/offer', {
    method: 'POST',
    body: form,
  });

  let result = await response.json();

  console.log(result.message);
});