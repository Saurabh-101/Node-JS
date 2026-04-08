const lodash = require('lodash');

const item = [1,[2,[3,[4]]]];

console.log(lodash.flattenDeep(item));