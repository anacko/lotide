const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(a, b) {
  let assertion = true;
  if (a.length !== b.length) {
    assertion = false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      assertion = false;
    }
  }
  if (assertion) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`❌ Assertion Failed: ${a} !== ${b}`);
  }
};

const middle = function(arr) {
  let pos;
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 1){
    pos = (arr.length-1)/2;
    return arr[pos];
  } else {
    pos = (arr.length)/2;
    return [arr[pos-1], arr[pos]]
  }
}

assertEqual(middle([1, 2, 3]), 2);
assertEqual(middle([8, 3, "1", 6, 2]), "1");
assertArraysEqual(middle([2, 5, 3, 1]), [5, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);