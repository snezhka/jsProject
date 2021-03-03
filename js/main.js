'use strict';

import {TestHousing} from './data/test-data.js';
import {Card} from './card.js';
import './form.js';

const mapCanvas = document.querySelector('#map-canvas');
const card = new Card(new TestHousing());
mapCanvas.append(card.render());
