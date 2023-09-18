import { arr } from './ad-objects-generation.js';
import { removeAllMarkerNodes } from './markup-generation.js';
import { addMarkers } from './map.js';


export function filterOption(event){
  console.log(event);
  const evt = event.currentTarget;
  const filtered = arr.filter(elem => (
    isTypeValid(evt, elem) && isPriceValid(evt, elem) && isRoomsValid(evt, elem) && isGuestsValid(evt, elem) && isFeaturesValid(evt, elem)));
  removeAllMarkerNodes();
  addMarkers(filtered);
}

function isTypeValid(evt, elem){
  const index = evt[0].selectedIndex;
  const name = evt[0].value;
  if (index == 0) return true;
  else return elem.type == name;
}

function isPriceValid(evt, elem){
  const index = evt[1].selectedIndex;
  switch(index) {
    case 0:
      return true;
    case 1:
      return elem.price > 10000 && elem.price < 50000;
    case 2:
      return elem.price < 10000;
    case 3:
      return elem.price > 50000;
  }
}

function isRoomsValid(evt, elem){
  const index = evt[2].selectedIndex;
  switch(index) {
    case 0:
      return true;
    case 1:
      return elem.rooms == 1;
    case 2:
      return elem.rooms == 2;
    case 3:
      return elem.rooms == 3;
  }
}

function isGuestsValid(evt, elem){
  const index = evt[3].selectedIndex;
  switch(index) {
    case 0:
      return true;
    case 1:
      return elem.guests == 2;
    case 2:
      return elem.guests == 1;
    case 3:
      return elem.guests == 0;
  }
}

function isWifiValid(evt, elem){
  const isChecked = evt[4].elements[0].checked;
  const value = evt[4].elements[0].value;
  return isChecked ? elem.features.includes(value) : true;
}

function isDishWasherValid(evt, elem){
  const isChecked = evt[4].elements[1].checked;
  const value = evt[4].elements[1].value;
  return isChecked ? elem.features.includes(value) : true;
}

function isParkingValid(evt, elem){
  const isChecked = evt[4].elements[2].checked;
  const value = evt[4].elements[2].value;
  return isChecked ? elem.features.includes(value) : true;
}

function isWasherValid(evt, elem){
  const isChecked = evt[4].elements[3].checked;
  const value = evt[4].elements[3].value;
  return isChecked ? elem.features.includes(value) : true;
}

function isElevatorValid(evt, elem){
  const isChecked = evt[4].elements[4].checked;
  const value = evt[4].elements[4].value;
  return isChecked ? elem.features.includes(value) : true;
}

function isConditionerValid(evt, elem){
  const isChecked = evt[4].elements[5].checked;
  const value = evt[4].elements[5].value;
  return isChecked ? elem.features.includes(value) : true;
}

function isFeaturesValid(evt, elem){
  return isWifiValid(evt, elem) && isDishWasherValid(evt,elem) && isParkingValid(evt, elem) && isWasherValid(evt, elem) && isElevatorValid(evt, elem) && isConditionerValid(evt, elem);
}





