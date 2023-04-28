import { generateInteger, generateFloat, generateArray } from "./helpers.js";
import * as constants from "./constants.js";
export default class Advertisment {
  static titleNumber = 0;
  static descriptionNumber = 0;
  constructor() {
    this.location = {
      x: generateFloat(constants.location.min_x, constants.location.max_x, decimal = 5),
      y: generateFloat(constants.location.min_y, constants.location.max_y, decimal = 5),
    },
      this.author = {
        avatar: `img/avatars/user0${generateInteger(min = 1, max = 6)}`,
      },
      this.offer = {
        title: `Объявление № ${++Advertisment.titleNumber}`,
        address: `${this.location.x}, ${this.location.y}`,
      },
      this.price = `${generateInteger(min = 100000, max = 500000)} $`,
      this.type =
        constants.types[generateInteger(min = 1, max = constants.types.length - 1)],
      this.rooms = generateInteger(min = 1, max = 10),
      this.guests = generateInteger(min = 1, max = 10),
      this.checkIn =
        constants.checkIns[generateInteger(min = 1, max = constants.checkIns.length - 1)],
      this.checkOut =
        constants.checkOuts[
          generateFloat(min = 1, max = constants.checkOuts.length)
        ],
      this.description = `Описание № ${++Advertisment.descriptionNumber}`,
      this.feature = generateArray(constants.features),
      this.photo = generateArray(constants.photos);
  }
}
