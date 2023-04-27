import { generateInteger, generateFloat, generateArray } from "./helpers.js";
import * as constants from "./constants.js";
export default class Advertisment {
  static titleNumber = 0;
  static descriptionNumber = 0;
  constructor() {
    (this.location = {
      x: generateFloat(35.65, 35.7, 5),
      y: generateFloat(139.7, 139.8, 5),
    }),
      (this.author = {
        avatar: `img/avatars/user0${generateInteger(1, 6)}`,
      }),
      (this.offer = {
        title: `Объявление № ${++Advertisment.titleNumber}`,
        address: `${this.location.x}, ${this.location.y}`,
      }),
      (this.price = `${generateInteger(100000, 500000)} $`),
      (this.type =
        constants.types[generateInteger(1, constants.types.length - 1)]),
      (this.rooms = generateInteger(1, 10)),
      (this.guests = generateInteger(1, 10)),
      (this.checkIn =
        constants.checkIns[generateInteger(1, constants.checkIns.length - 1)]),
      (this.checkOut =
        constants.checkOuts[
          Math.floor(Math.random() * constants.checkOuts.length - 1) + 1
        ]),
      (this.description = `Описание № ${++Advertisment.descriptionNumber}`),
      (this.feature = generateArray(constants.features)),
      (this.photo = generateArray(constants.photos));
  }
}
