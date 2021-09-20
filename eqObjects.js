const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    // First test about values that are arrays...
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    // Not being arrays (*else*), test about objects. Recursion!
    } else if (object1[key] instanceof Object) {
      return eqObjects(object1[key], object2[key]);
    // At last, test simple values.
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;