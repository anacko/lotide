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

const takeUntil = function(array, callback) {
  let result = [];
  let i = 0;
  while (!callback(array[i])) {
    result.push(array[i]);
    i++;
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5 ,7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);