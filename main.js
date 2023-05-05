import { generateAdvertismentMarkup } from './js/markup-generation.js';
import { generateArrayOfObjects } from './js/ad-objects-generation.js';

const arr = generateArrayOfObjects(1);
generateAdvertismentMarkup(arr);
