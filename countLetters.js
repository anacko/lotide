const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  while (str.indexOf(" ") !== -1) {
    str = str.replace(" ","");
  }
  str = str.split("");
  let letterCount = {};
  for (const letter of str) {
    letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1;
  }

  return letterCount;
};

const result1 = countLetters("anacko");
console.log('For the string "anacko":', result1);
assertEqual(result1["a"], 2);
assertEqual(result1["n"], 1);
assertEqual(result1["c"], 1);
assertEqual(result1["k"], 1);
assertEqual(result1["o"], 1);