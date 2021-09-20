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

module.exports = flatten;

/* 
NOTE: Simple flatten. Just 1 level flattening, not deeeeeeep flattening!
assertArraysEqual(flatten([1, [2], 3]), [1, 2, 3]);
assertArraysEqual(flatten([[1, 2], 3]), [1, 2, 3]);
assertArraysEqual(flatten([]), []);
console.log([["1", ["2"]], "3"], "goes to: ", flatten([["1", ["2"]], "3"]));
*/