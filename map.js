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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
console.log("Just words: ",words)
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); // pass

const mix = ["123", "", "AAA"];
console.log("A mix: ", mix)
assertArraysEqual(map(mix, item => item[0]), ["1", , "A"]); // pass

const cheer = ["Yes!", "Marvelous!", "Champion!", "Astonishing!"]
console.log("Just Cheering: ", cheer);
assertArraysEqual(map(cheer, item => item[0]), ["Y", "M", "C", "A"])

const story = ["Once", "upon", "a", "time..."];
console.log("The story begins: ", story)
assertArraysEqual(map(story, item => item[item.length-1]), ["e", "n", "a", "\."]); // pass

