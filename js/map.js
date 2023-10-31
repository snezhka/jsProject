import { mainMarkerLatitude, mainMarkerLongitude, mapZoom, iconSize } from './constants.js';
import { generateAdHtml } from './markup-generation.js';

export let map = L.map('map-canvas').setView([mainMarkerLatitude, mainMarkerLongitude], mapZoom);
export let mainMarker = L.marker([mainMarkerLatitude, mainMarkerLongitude], {
  icon: L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: iconSize,
  }),
  draggable: true,
})


export function initializeMap() {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    zoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  mainMarker.addTo(map);
}

export function addMarkers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == 11) break;
    addMarker(arr[i]);

  }
}

function addMarker(elem) {
  let marker = L.marker([elem.location.x, elem.location.y], {
    icon: L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: iconSize,
    }),
    draggable: false,
  }).addTo(map);
  marker.bindPopup(`${generateAdHtml(elem)}`);
}





