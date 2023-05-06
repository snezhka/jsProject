import { types } from './constants.js';

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

export function generateMultipleAdsMarkup(array) {
  for (let elem of array){
    generateAdMarkup(elem);
  }
}