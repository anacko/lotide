const assertEqual = require("../assertEqual");

console.log(assertEqual(3, 3));
console.log(assertEqual("a", "a"));
console.log(assertEqual(1+2, 1+2));
console.log(assertEqual("a"+"b", "a"+"b"));