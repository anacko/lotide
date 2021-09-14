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

const flatten = function(arr) {
  let arrFlat = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      for (const innerElem of elem) {
        arrFlat.push(innerElem);
      }
    } else {
      arrFlat.push(elem);
    }
  }
  return arrFlat;
};


assertArraysEqual(flatten([1, [2], 3]), [1, 2, 3]);
assertArraysEqual(flatten([[1, 2], 3]), [1, 2, 3]);
assertArraysEqual(flatten([[1, [2]], 3]), [1, [2], 3]);
assertArraysEqual(flatten([]), []);
console.log([["1", ["2"]], "3"], "goes to: ", flatten([["1", ["2"]], "3"]));
// Note: assertArraysEqual does not compare correcly nested arrays.