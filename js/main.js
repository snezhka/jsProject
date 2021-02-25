'use strict';

import {TestHousing} from './test-data.js';
import {Card} from './card.js';

const mapCanvas = document.querySelector('#map-canvas');
const card = new Card(new TestHousing());
mapCanvas.append(card.render());
