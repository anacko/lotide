const findKey = function(obj, callback) {
  for (const item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
};

module.exports = findKey;