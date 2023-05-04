import * as constants from './constants.js';

export function generateAdvertismentMarkup(array){
  let map = document.querySelector('#map-canvas');
  for (let elem of array) {
    let card = document.querySelector('#card').cloneNode(true).content;
    let features = card.querySelector('.popup__features');
    let photos = card.querySelector('.popup__photos ');
    card.querySelector('.popup__title').textContent = elem.offer.title;
    card.querySelector('.popup__text--address').textContent = elem.offer.address;
    card.querySelector('.popup__text--price').textContent = `${elem.price} ₽/ночь`;
    card.querySelector('.popup__type').textContent = ((type) => constants.types[type])(elem.type);
    card.querySelector('.popup__text--capacity').textContent = `${elem.rooms} комнаты для ${elem.guests} гостей`;
    card.querySelector('.popup__text--time').textContent = `Заезд после ${elem.checkIn}, выезд до ${elem.checkOut}`;
    features.innerHTML = '';
    elem.features.forEach((feature) => features.innerHTML += `<li class="popup__feature popup__feature--${feature}"></li>`);
    card.querySelector('.popup__description').textContent = elem.description;
    photos.innerHTML = '';
    elem.photos.forEach((photo) => photos.innerHTML += `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    card.querySelector('.popup__avatar').src = elem.author.avatar;
    // console.log(card);
    map.append(card);
  }
}