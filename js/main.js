'use strict';

import {TestHousing} from './test-data.js';

const housings = new Array(10).fill(null).map(() => new TestHousing());

// eslint-disable-next-line no-console
console.log(housings)
