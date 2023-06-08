
import { generateInteger, generateFloat, generateArray } from "./helpers.js";
import { location, avatarIndex, priceIndex, roomsIndex, guestsIndex, types, checkIns, checkOuts,
   features, photos, typesIndex, checkInsIndex, checkOutsIndex } from "./constants.js";
import  { getTypePrice } from "./form.js";

export class Advertisment {
  static titleNumber = 0;
  static descriptionNumber = 0;
  constructor() {
    this.location = {
      x: generateFloat(location.min_x, location.max_x, 5),
      y: generateFloat(location.min_y, location.max_y, 5),
    },
      this.author = {
        avatar: `img/avatars/user0${generateInteger(avatarIndex.min, avatarIndex.max)}.png`,
      },
      this.offer = {
        title: `Объявление № ${++Advertisment.titleNumber}`,
        address: `${this.location.x}, ${this.location.y}`,
      },
      this.price = generateInteger(getTypePrice(), priceIndex.max),
      this.type =
        Object.keys(types)[generateInteger(typesIndex.min, typesIndex.max)],
      this.rooms = generateInteger(roomsIndex.min, roomsIndex.max),
      this.guests = generateInteger(guestsIndex.min, guestsIndex.max),
      this.checkIn =
        checkIns[generateInteger(checkInsIndex.min, checkInsIndex.max)],
      this.checkOut =
        checkOuts[
          generateInteger(checkOutsIndex.min, checkOutsIndex.max)
        ],
      this.description = `Описание № ${++Advertisment.descriptionNumber}`,
      this.features = generateArray(features),
      this.photos = generateArray(photos);
  }
}
