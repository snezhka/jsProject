'use strict';

const TOKYO_LATITUDE = 35.685257;
const TOKYO_LONGITUDE = -220.247426;
const COORDS_DIGITS = 5

// TODO Добавить описание
const Map = function (properties) {
  properties = properties || { };

  const map = L.map('map-canvas')
    .on('load', () => {
      if (properties.onLoad) {
        properties.onLoad();
      }
    })
    .setView({
      lat: TOKYO_LATITUDE,
      lng: TOKYO_LONGITUDE,
    }, 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const createMainMarker = () => {
    const icon = L.icon({
      iconUrl: 'img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });

    const marker = L.marker(
      {
        lat: TOKYO_LATITUDE,
        lng: TOKYO_LONGITUDE,
      },
      {
        draggable: true,
        icon: icon,
      },
    ).on('moveend', (evt) => {
      if (properties.onCoordsChange) {
        const latLng = evt.target.getLatLng();

        properties.onCoordsChange(`${latLng.lat.toFixed(COORDS_DIGITS)}, ${latLng.lng.toFixed(COORDS_DIGITS)}`);
      }
    });

    marker.addTo(map);
  }

  createMainMarker();

// TODO добавить создание основной метки
// TODO добавить событие перемещение метки
// TODO добавить отрисовку меток похожих объявлений
}

export {Map};
