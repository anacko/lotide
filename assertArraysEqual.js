const eqArrays = require("./eqArrays");

const assertArraysEqual = function(a, b) {
  let assertion = eqArrays(a, b);
  
  if (assertion) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`❌ Assertion Failed: ${a} !== ${b}`);
  }
};

module.exports = assertArraysEqual;