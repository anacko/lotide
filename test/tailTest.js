const assertEqual = require("../assertEqual");
const tail = require("../tail")

// ------
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // applying the function does not alter the object
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");