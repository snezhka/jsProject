let map = L.map('map-canvas').setView([35.652832, 139.839478], 13);


export function initializeMap() {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  addMainMarker();
}

function addMainMarker() {
  let marker = L.marker([35.652832, 139.839478], {
    icon: L.icon({
      iconUrl: '../img/main-pin.svg',
    }),
    draggable:true,
  }).addTo(map);
  marker.addEventListener('drag', function(){
    document.querySelector('#address').placeholder = `${marker.getLatLng()}`;
  });
}




