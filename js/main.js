'use strict';

import {TestHousing} from './data/test-data.js';
import {Card} from './card.js';
import {AdForm} from './ad-form.js';

const mapCanvas = document.querySelector('#map-canvas');
const card = new Card(new TestHousing());
mapCanvas.append(card.render());

const adForm = new AdForm();
adForm.clear();
