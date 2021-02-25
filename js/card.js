'use strict';

const HOUSING_TYPES_TITLES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

const FEATURES_CLASSES = {
  'wifi': 'popup__feature--wifi',
  'dishwasher': 'popup__feature--dishwasher',
  'parking': 'popup__feature--parking',
  'washer': 'popup__feature--washer',
  'elevator': 'popup__feature--elevator',
  'conditioner': 'popup__feature--conditioner',
}

const Card = function (cardData) {
  this.data = cardData;
  this.template = document.querySelector('#card').content.querySelector('.popup');

  this.render = () => {
    const card = this.template.cloneNode(true);
    const data = this.data;

    const featuresRender = (features) => {
      const listElement = card.querySelector('.popup__features');
      const fragment = document.createDocumentFragment();

      features.forEach((feature) => {
        const el = document.createElement('li');
        el.classList.add('popup__feature');
        el.classList.add(FEATURES_CLASSES[feature]);
        fragment.append(el);
      });

      listElement.innerHTML = '';
      listElement.append(fragment);
    };
    const photosRender = (photos) => {
      const containerElement = card.querySelector('.popup__photos');
      const photoTemplate = containerElement.querySelector('.popup__photo');
      const fragment = document.createDocumentFragment();

      photos.forEach((photo) => {
        const el = photoTemplate.cloneNode();
        el.src = photo;
        fragment.append(el);
      });

      containerElement.innerHTML = '';
      containerElement.append(fragment);
    };

    if (data.offer.title) {
      card.querySelector('.popup__title').innerText = data.offer.title;
    } else {
      card.querySelector('.popup__title').hidden = true;
    }

    if (data.offer.address) {
      card.querySelector('.popup__text--address').innerText = data.offer.address;
    } else {
      card.querySelector('.popup__text--address').hidden = true;
    }

    if (data.offer.price) {
      card.querySelector('.popup__text--price').innerText = `${data.offer.price} ₽/ночь`;
    } else {
      card.querySelector('.popup__text--price').hidden = true;
    }

    if (data.offer.type) {
      card.querySelector('.popup__type').innerText = HOUSING_TYPES_TITLES[data.offer.type];
    } else {
      card.querySelector('.popup__type').hidden = true;
    }

    if (data.offer.rooms) {
      card.querySelector('.popup__text--capacity').innerText = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
    } else {
      card.querySelector('.popup__text--capacity').hidden = true;
    }

    if (data.offer.checkin && data.offer.checkout) {
      card.querySelector('.popup__text--time').innerText = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
    } else {
      card.querySelector('.popup__text--time').hidden = true;
    }

    if (data.offer.description) {
      card.querySelector('.popup__description').innerText = data.offer.description;
    } else {
      card.querySelector('.popup__description').hidden = true;
    }

    if (data.offer.features && data.offer.features.length)
    {
      featuresRender(data.offer.features);
    } else {
      card.querySelector('.popup__features').hidden = true;
    }

    if (data.offer.photos && data.offer.photos.length) {
      photosRender(data.offer.photos);
    } else {
      card.querySelector('.popup__photos').hidden = true;
    }

    if (data.author.avatar) {
      card.querySelector('.popup__avatar').src = data.author.avatar;
    } else {
      card.querySelector('.popup__avatar').hidden = true;
    }


    return card;
  };
}

export {Card};
