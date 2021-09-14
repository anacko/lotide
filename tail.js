const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let finalArr = [];
  for (let i = 1; i < arr.length; i++) {
    finalArr.push(arr[i]);
  }
  return finalArr;
};

// ------
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // applying the function does not alter the object
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");