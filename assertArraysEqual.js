const assertArraysEqual = function(a, b) {
  let assertion = true;
  if (a.length !== b.length) {
    assertion = false;
  } else { // compare only if same length
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        assertion = false;
      }
    }
  }
  if (assertion) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`❌ Assertion Failed: ${a} !== ${b}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual([], []); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // fail