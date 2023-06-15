import { typePrice } from './constants.js';

const type = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

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

export function getTypePrice() {
  const selectedType = document.querySelector('#type option:checked');
  return typePrice[selectedType.value];
}



