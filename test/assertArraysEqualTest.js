const assertArraysEqual = require("../assertArraysEqual");

console.log("--- Those should pass: ---")
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual([], []); // pass

console.log("--- Those should fail: ---")
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // fail