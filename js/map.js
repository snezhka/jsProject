let map = L.map('map-canvas').setView([35.652832, 139.839478], 11);
export let mainMarker = L.marker([35.652832, 139.839478], {
  icon: L.icon({
    iconUrl: '../leaflet/images/marker-icon-2x.png',
  }),
  draggable:true,
})


export function initializeMap() {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  mainMarker.addTo(map);
  mainMarker.bindPopup('<p>This is my ad</p>').openPopup();
}

export function addMarkers(arr){
  for (let elem of arr) {
    addMarker(elem);
  }
}

function addMarker(elem){
  let marker = L.marker([elem.location.x, elem.location.y], {
    icon: L.icon({
      iconUrl: '../leaflet/images/marker-icon.png',
    }),
    draggable:true,
  }).addTo(map);
  marker.bindPopup(JSON.stringify(elem), {maxWidth:900});
}




