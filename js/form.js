import { typePrice } from './constants.js';

export function getTypePrice() {
  let selectedType = document.querySelector('#type option:checked');
  return typePrice[selectedType.value];
}

/**Reserved for future use. Do not review */
function getSelectedRoomsNumber() {
  let selectedRoomsNumber = document.querySelector('#room_number option:checked');
  return selectedRoomsNumber.value;
}

/**Reserved for future use. Do not review */
function removeGuestsOptions() {
  let selectedRoomsNumber = getSelectedRoomsNumber();
  let capacity = document.querySelector('#capacity');
  switch(selectedRoomsNumber) {
    case(1):
      capacity.options.filter( o => o.value!=1).forEach(o => o.remove());
      break;
    case(2):
      capacity.options.filter( o => o.value!=1 && o.value!=2).forEach(o => o.remove());
      break;
    case(3):
      capacity.options.filter( o => o.value=100).forEach(o => o.remove());
      break;
    case(100):
      capacity.options.filter( o => o.value!=100).forEach(o => o.remove());
      break;
  }
}

function changePricePlaceholderOfSelectedType() {
  let type = document.querySelector('#type');
  type.addEventListener( 'change', () => document.querySelector('#price').placeholder = `${getTypePrice()}`);
}

function changeTimeInAndOut(timeInput, timeOutput) {
  timeInput.addEventListener( 'change', () => {
    let timeSelectedIndex = timeInput.options.selectedIndex;
    timeOutput.options.selectedIndex = timeSelectedIndex;
  });
}

let timeIn = document.querySelector('#timein');
let timeOut = document.querySelector('#timeout');

changePricePlaceholderOfSelectedType();
changeTimeInAndOut(timeIn,timeOut);
changeTimeInAndOut(timeOut, timeIn);

