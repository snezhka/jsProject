export const types = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};
export const checkIns = ['12:00', '13:00', '14:00'];
export const checkOuts = ['12:00', '13:00', '14:00'];
export const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
export const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

export const location = {
  min_x: 35.65,
  max_x:35.7,
  min_y:139.7,
  max_y:139.8,
};

export const avatarIndex = {
  min: 1, 
  max: 6,
};

export const priceIndex = {
  min: 100, 
  max: 10000,
};

export const roomsIndex = {
  min: 1, 
  max: 10,
};

export const guestsIndex = {
  min: 1, 
  max: 10,
};

export const typesIndex = {
  min: 0, 
  max: Object.keys(types).length - 1,
};

export const checkInsIndex = {
  min: 0, 
  max: checkIns.length - 1,
};

export const checkOutsIndex = {
  min: 0, 
  max: checkOuts.length - 1,
};


