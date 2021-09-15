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

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split("");

  let letter = "";
  for (let i = 0; i < sentence.length; i++) {
    letter = sentence[i];
    if (letter !== " ") {
      results[letter] ? results[letter].push(i) : results[letter] = [i];
    }
  }
  return results;
};

console.log('For the string "hello":', letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);