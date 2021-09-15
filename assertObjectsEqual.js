const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let assertion = true;

  if (Object.keys(actual).length !== Object.keys(expected).length) {
    assertion = false;
  } else { // compare only if objects have same number of keys

    for (const key in actual) {

      if (Array.isArray(actual[key])) {
        // Make comparison for arrays elements
        if (actual[key].length !== expected[key].length) {
          assertion = false;
        } else { // same array size for value of key
          for (let i = 0; i < actual[key].length; i++) {
            if (actual[key][i] !== expected[key][i]) {
              assertion = false;
            }
          }
        }
        // Make comparisons directly
      } else if (actual[key] !== expected[key]) {
        assertion = false;
      }
    }
  }
  if (assertion) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:1, b:"2", c:[3,4]}, {c:[3,4], a:1, b:"2"}); // pass
assertObjectsEqual({a:[1, "2"], c:[3,4]}, {c:[3,4], a:[1, "2"]}); // pass
assertObjectsEqual({a:[], b:[1, "2"], c:[3,4]}, {c:[3,4], a:[], b:[1, "2"]}); // pass
assertObjectsEqual({a:[], b:[1, "2"], c:[3,4]}, {c:[3,4], b:[], a:[1, "2"]}); // fail
assertObjectsEqual({a:[], b:[1, "2"], c:[3,4]}, {c:[3,4], b:[], a:[1, 2]});   // fail
assertObjectsEqual({a:[], b:[1, "2"], c:[3,4]}, {c:[4,3], b:[], a:[1, "2"]}); // fail