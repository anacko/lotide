const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b) {
  
  let c = true;

  if (a.length !== b.length) {
    c = c && false;

  } else {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        c = c && eqArrays(a[i], b[i]);

      } else if (a[i] !== b[i]) {
        c = c && false;
      }
    }
  }
  return c;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

assertEqual(eqArrays([[2, 3], [4], 5, [[[[6], 7]]]], [[2, 3], [4], 5, [[[[6], 7]]]]), true);
assertEqual(eqArrays([[2, 3], [4], 5, [[[[6], 7]]]], [[2, 3], [4], 5, [[[[8], 7]]]]), false);