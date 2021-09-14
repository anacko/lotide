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

const without = function(source, itemsToRemove) {
  let destiny = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      destiny.push(item);
    }
  }
  return destiny;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3], [3, 1]), [2]);
assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [3]), ["1", "2", "3"]);
assertArraysEqual(without([], [2]), []);
assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3", "4"]), []);