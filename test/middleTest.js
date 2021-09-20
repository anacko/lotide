const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");

const middle = require("../middle");

assertEqual(middle([1, 2, 3]), 2);
assertEqual(middle([8, 3, "1", 6, 2]), "1");
assertArraysEqual(middle([2, 5, 3, 1]), [5, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);