import { types } from './constants.js';
import { map } from './map.js';

function generateAdMarkup(ad){
  const map = document.querySelector('#map-canvas');
  const card = document.querySelector('#card').cloneNode(true).content;
  const features = card.querySelector('.popup__features');
  const photos = card.querySelector('.popup__photos ');
  card.querySelector('.popup__title').textContent = ad.offer.title;
  card.querySelector('.popup__text--address').textContent = ad.offer.address;
  card.querySelector('.popup__text--price').textContent = `${ad.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = ((type) => types[type])(ad.type);
  card.querySelector('.popup__text--capacity').textContent = `${ad.rooms} комнаты для ${ad.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${ad.checkIn}, выезд до ${ad.checkOut}`;
  features.innerHTML = ad.features.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
  card.querySelector('.popup__description').textContent = ad.description;
  photos.innerHTML = ad.photos.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join('');
  card.querySelector('.popup__avatar').src = ad.author.avatar;
  map.append(card);
}

export function generateAdHtml(elem){
  return `<article class="popup">
  <img src="${elem.author.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
  <h3 class="popup__title">${elem.offer.title}</h3>
  <p class="popup__text popup__text--address">${elem.location.x}, ${elem.location.y}</p>
  <p class="popup__text popup__text--price">${elem.price} ₽/ночь</p>
  <h4 class="popup__type">${types[elem.type]}</h4>
  <p class="popup__text popup__text--capacity">${elem.rooms} комнаты для ${elem.guests} гостей</p>
  <p class="popup__text popup__text--time">Заезд после ${elem.checkIn}, выезд до ${elem.checkOut}</p>
  <ul class="popup__features">
  ${addFeatures(elem.features)}
  </ul>
  <p class="popup__description">${elem.description}</p>
  <div class="popup__photos">
  ${addPhotos(elem.photos)}
  </div>
  </article>`;
}

function addPhotos(photos){
  let photosMarkup = '';
  for (let photo of photos){
    photosMarkup += `<img src=${photo} class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
  }
  return photosMarkup;
}

function addFeatures(features){
  let featuresMarkup = '';
  for (let feature of features){
    featuresMarkup += `<li class="popup__feature popup__feature--${feature}"></li>`;
  }
  return featuresMarkup;
}

export function generateMultipleAdsMarkup(array) {
  for (let elem of array){
    generateAdMarkup(elem);
  }
}

export function removeAllMarkerNodes(){
  const markers = document.querySelectorAll('.leaflet-marker-pane img');
  for (let i=1; i<markers.length;i++){
    markers[i].remove();
  }
  closePopup();
}
function closePopup(){
  map.closePopup();
}