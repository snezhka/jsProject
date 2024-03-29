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
  max: 100000,
};

export const typePrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

export const roomsIndex = {
  min: 1, 
  max: 3,
};

export const guestsIndex = {
  min: 0, 
  max: 2,
};

export const typesIndex = {
  min: 0, 
  max: Object.keys(types).length - 1,
};

export const checkInsIndex = {
  min: 0, 
  max: checkIns.length - 1,
};
//объединить с чекаут массивом
export const checkOutsIndex = {
  min: 0, 
  max: checkOuts.length - 1,
};

export const mainMarkerLatitude = 35.652832;
export const mainMarkerLongitude = 139.839478;
export const mapZoom = 11;
export const iconSize = [50,50];
export const maxMarkers = 10;



