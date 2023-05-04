import { generateInteger, generateFloat, generateArray } from "./helpers.js";
import * as constants from "./constants.js";
export default class Advertisment {
  static titleNumber = 0;
  static descriptionNumber = 0;
  constructor() {
    this.location = {
      x: generateFloat(constants.location.min_x, constants.location.max_x, 5),
      y: generateFloat(constants.location.min_y, constants.location.max_y, 5),
    },
      this.author = {
        avatar: `img/avatars/user0${generateInteger(1, 6)}.png`,
      },
      this.offer = {
        title: `Объявление № ${++Advertisment.titleNumber}`,
        address: `${this.location.x}, ${this.location.y}`,
      },
      this.price = generateInteger(100, 10000),
      this.type =
        Object.keys(constants.types)[generateInteger(0, Object.keys(constants.types).length)],
      this.rooms = generateInteger(1, 10),
      this.guests = generateInteger(1, 10),
      this.checkIn =
        constants.checkIns[generateInteger(0, constants.checkIns.length - 1)],
      this.checkOut =
        constants.checkOuts[
          generateInteger(0, constants.checkOuts.length - 1)
        ],
      this.description = `Описание № ${++Advertisment.descriptionNumber}`,
      this.features = generateArray(constants.features),
      this.photos = generateArray(constants.photos);
  }
}
